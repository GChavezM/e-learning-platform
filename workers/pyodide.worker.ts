import { loadPyodide } from 'pyodide';
import type { PyodideInterface } from 'pyodide';

const PYODIDE_INDEX_URL = 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/';

const REDIRECT_STDIO = `
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`.trim();

const CAPTURE_STDOUT = `sys.stdout.getvalue()`;

interface WorkerIncomingMessage {
  id: string;
  code: string;
  testCode?: string;
}

interface WorkerSuccessResponse {
  id: string;
  success: true;
  output: string;
}

interface WorkerErrorResponse {
  id: string;
  success: false;
  error: string;
  output: string;
}

type WorkerResponse = WorkerSuccessResponse | WorkerErrorResponse;

let pyodide: PyodideInterface | null = null;
let pyodideLoadingPromise: Promise<PyodideInterface> | null = null;

async function getPyodide(): Promise<PyodideInterface> {
  console.log('[Worker] Getting Pyodide instance...');
  if (pyodide !== null) {
    console.log('[Worker] Pyodide already loaded');
    return pyodide;
  }

  if (pyodideLoadingPromise !== null) return pyodideLoadingPromise;

  pyodideLoadingPromise = loadPyodide({ indexURL: PYODIDE_INDEX_URL }).then((instance) => {
    console.log('[Worker] Pyodide loaded successfully');
    pyodide = instance;
    return instance;
  });

  return pyodideLoadingPromise;
}

function extractErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return String(error);
  }

  const raw = error.message;

  const lines = raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const exceptionLinePattern =
    /^(Traceback|SyntaxError|NameError|TypeError|ValueError|AssertionError|ZeroDivisionError|AttributeError|ImportError|IndentationError|RuntimeError|Exception|[A-Za-z]+Error|[A-Za-z]+Warning)[\s:(]/;

  for (let i = lines.length - 1; i >= 0; i--) {
    if (exceptionLinePattern.test(lines[i])) {
      if (lines[i].startsWith('AssertionError') && lines[i] === 'AssertionError') {
        return 'AssertionError: one or more test assertions failed - double check your output';
      }
      return lines[i];
    }
  }

  return lines[lines.length - 1] ?? raw;
}

function captureOutput(py: PyodideInterface): string {
  try {
    return String(py.runPython(CAPTURE_STDOUT) ?? '');
  } catch {
    return '';
  }
}

async function runCode(
  py: PyodideInterface,
  message: WorkerIncomingMessage
): Promise<WorkerResponse> {
  const { id, code, testCode } = message;
  console.log('[Worker] Running code for ID:', id);

  py.runPython(REDIRECT_STDIO);

  const ns: ReturnType<typeof py.runPython> = py.runPython(
    "{'__builtins__': __import__('builtins'), '__name__': '__main__'}"
  );

  try {
    await py.runPythonAsync(code, { globals: ns });
    console.log('[Worker] Code executed successfully');
  } catch (error) {
    console.error('[Worker] Code execution error:', error);
    const output = captureOutput(py);
    ns.destroy();
    return {
      id,
      success: false,
      error: extractErrorMessage(error),
      output,
    };
  }

  if (testCode) {
    console.log('[Worker] Running test code for ID:', id);
    try {
      const studentCodeVar = `student_code = ${JSON.stringify(code)}`;
      await py.runPythonAsync(studentCodeVar, { globals: ns });
      await py.runPythonAsync(testCode, { globals: ns });
      console.log('[Worker] Tests passed');
    } catch (error) {
      console.error('[Worker] Test failed:', error);
      console.error('[Worker] Error object (JSON):', JSON.stringify(error, null, 2));
      if (error instanceof Error) {
        console.error('[Worker] Error message:', error.message);
        console.error('[Worker] Error stack:', error.stack);
      }
      const output = captureOutput(py);
      ns.destroy();
      return {
        id,
        success: false,
        error: extractErrorMessage(error),
        output,
      };
    }
  }

  const output = captureOutput(py);
  ns.destroy();
  return { id, success: true, output };
}

self.onmessage = async (event: MessageEvent<WorkerIncomingMessage>): Promise<void> => {
  const { id, code, testCode } = event.data;
  console.log('[Worker] Message received, ID:', id);

  if (!code) {
    console.log('[Worker] Initialization request received');
    try {
      await getPyodide();
      self.postMessage({ id, success: true, output: '' });
    } catch (error) {
      self.postMessage({
        id,
        success: false,
        error: `Failed to load Python runtime: ${extractErrorMessage(error)}`,
        output: '',
      });
    }
    return;
  }

  let py: PyodideInterface;

  try {
    py = await getPyodide();
  } catch (error) {
    const response: WorkerErrorResponse = {
      id,
      success: false,
      error: `Failed to load Python runtime: ${extractErrorMessage(error)}`,
      output: '',
    };
    self.postMessage(response);
    return;
  }

  const response = await runCode(py, { id, code, testCode });
  console.log('[Worker] Sending response:', response);
  self.postMessage(response);
};
