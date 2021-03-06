import { useState } from 'react';
import { bundle } from '../bundler';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <CodeEditor
          initialValue="const"
          onChange={(value) => setInput(value)}
        />
        {/* <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea> */}

        <Preview code={code} />
      </div>
    </Resizable>
  );
};
export default CodeCell;
