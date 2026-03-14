const PYODIDE_INDEX_URL = "'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/";

const REDIRECT_STDIO = `
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.STRINGIO()
`.trim();

const CAPTURE_STDOUT = `sys.stdout.getValue()`;

interface WorkerIncommingMessage {
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

interface PyodideInterface {
  runPythonAsync(code: string): Promise<unknown>;
  runPython(code: string): unknown;
}

declare function loadPyodide(options: { indexUrl: string }): Promise<PyodideInterface>;

let pyodide: PyodideInterface | null = null;
let pyodideLoadingPromise: Promise<PyodideInterface> | null = null;

async function getPyodide(): Promise<PyodideInterface> {
  if (pyodide !== null) return pyodide;

  if (pyodideLoadingPromise !== null) return pyodideLoadingPromise;

  pyodideLoadingPromise = loadPyodide({ indexUrl: PYODIDE_INDEX_URL }).then((instance) => {
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
    return lines[i];
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
  message: WorkerIncommingMessage
): Promise<WorkerResponse> {
  const { id, code, testCode } = message;

  py.runPython(REDIRECT_STDIO);

  try {
    await py.runPythonAsync(code);
  } catch (error) {
    const output = captureOutput(py);
    return {
      id,
      success: false,
      error: extractErrorMessage(error),
      output,
    };
  }

  if (testCode) {
    try {
      await py.runPythonAsync(testCode);
    } catch (error) {
      const output = captureOutput(py);
      return {
        id,
        success: false,
        error: extractErrorMessage(error),
        output,
      };
    }
  }

  const output = captureOutput(py);
  return { id, success: true, output };
}

self.onmessage = async (event: MessageEvent<WorkerIncommingMessage>): Promise<void> => {
  const { id, code, testCode } = event.data;

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
  self.postMessage(response);
};
