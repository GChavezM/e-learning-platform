'use client';

import CodeMirror, { EditorView, ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

const EXTENSIONS = [python()];

interface CodeEditorProps {
  value: string;
  onChange: (code: string) => void;
  readOnly?: boolean;
  height?: string;
}

export default function CodeEditor({
  value,
  onChange,
  readOnly = false,
  height = '300px',
}: CodeEditorProps) {
  const extensions: ReactCodeMirrorProps['extensions'] = [
    ...EXTENSIONS,
    ...(readOnly ? [EditorView.editable.of(false)] : []),
  ];
  return (
    <div className="overflow-hidden rounded-lg border">
      <CodeMirror
        value={value}
        height={height}
        extensions={extensions}
        onChange={onChange}
        theme="dark"
        // basicSetup={{}}
        style={{ fontSize: '14px' }}
      />
    </div>
  );
}
