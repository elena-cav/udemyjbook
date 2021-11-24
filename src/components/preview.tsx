import { useRef, useEffect } from 'react';
import './preview.css';
interface PreviewProps {
  code: string;
}

const html = `
<html><head></head>
<body>
<div id="root">
<script>window.addEventListener('message', (event) => {
    try {
        eval(event.data)
    }
    catch (err) {
        const root = document.querySelector("#root")
        root.innerHTML = '<div style="color:red"><h4>Runtime Error</h4>' + err + '</div>'
    console.error(err)
    }
eval(event.data)}, false)</script>
</div>
</body>
</html>
  `;
const Preview: React.FC<PreviewProps> = ({ code }) => {
  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, '*');
  }, [code]);

  const iframe = useRef<any>();

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
    </div>
  );
};

export default Preview;
