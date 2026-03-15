'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface RunResult {
  success: boolean;
  output: string;
  error?: string;
  isTestFailure?: boolean;
}

interface WorkerSuccessMessage {
  id: string;
  success: true;
  output: string;
}

interface WorkerErrorMessage {
  id: string;
  success: false;
  error: string;
  output: string;
}

type WorkerMessage = WorkerSuccessMessage | WorkerErrorMessage;

interface PendingCall {
  resolve: (result: RunResult) => void;
  hasTestCode: boolean;
}

export interface UsePyodideReturn {
  runCode: (code: string, testCode?: string) => Promise<RunResult>;
  isLoading: boolean;
  isReady: boolean;
}

export function usePyodide(): UsePyodideReturn {
  const workerRef = useRef<Worker | null>(null);
  const pendingRef = useRef<Map<string, PendingCall>>(new Map());

  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  function getOrCreateWorker(): Worker {
    console.log('[usePyodide] Creating/retrieving worker');
    if (workerRef.current !== null) {
      console.log('[usePyodide] Worker already exists');
      return workerRef.current;
    }

    const worker = new Worker(new URL('../workers/pyodide.worker.ts', import.meta.url), {
      type: 'module',
    });

    worker.onmessage = (event: MessageEvent<WorkerMessage>) => {
      console.log('[usePyodide] Message received:', event.data);
      const msg = event.data;
      const pending = pendingRef.current.get(msg.id);

      if (!pending) return;
      pendingRef.current.delete(msg.id);

      setIsReady(true);
      setIsLoading(pendingRef.current.size > 0);

      if (msg.success) {
        pending.resolve({ success: true, output: msg.output });
      } else {
        const isTestFailure = pending.hasTestCode && msg.error.startsWith('AssertionError');

        pending.resolve({
          success: false,
          output: msg.output,
          error: msg.error,
          isTestFailure,
        });
      }
      console.log('[usePyodide] Pending calls remaining:', pendingRef.current.size);
    };

    worker.onerror = (event: ErrorEvent) => {
      console.error('[usePyodide] Worker error:', event.message);
      const errorMessage = event.message ?? 'Unknown worker error';

      for (const [id, pending] of pendingRef.current) {
        pending.resolve({
          success: false,
          output: '',
          error: `Worker error: ${errorMessage}`,
        });
        pendingRef.current.delete(id);
      }

      setIsLoading(false);

      workerRef.current?.terminate();
      workerRef.current = null;
    };

    workerRef.current = worker;
    return worker;
  }

  useEffect(() => {
    const worker = getOrCreateWorker();
    const initId = '__init__';
    pendingRef.current.set(initId, { resolve: () => {}, hasTestCode: false });
    console.log('[usePyodide] Sending initialization request');
    worker.postMessage({ id: initId, code: '' });

    const pending = pendingRef.current;

    return () => {
      for (const [, call] of pending) {
        call.resolve({
          success: false,
          output: '',
          error: 'Component unmounted before execution completed.',
        });
      }
      pending.clear();
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  const runCode = useCallback((code: string, testCode?: string): Promise<RunResult> => {
    console.log('[usePyodide] runCode called with:', {
      codeLength: code.length,
      hasTestCode: !!testCode,
    });
    return new Promise<RunResult>((resolve) => {
      const worker = getOrCreateWorker();
      const id = crypto.randomUUID();

      pendingRef.current.set(id, {
        resolve,
        hasTestCode: testCode !== undefined && testCode.trim().length > 0,
      });

      setIsLoading(true);

      worker.postMessage({ id, code, testCode });
    });
  }, []);

  return { runCode, isLoading, isReady };
}
