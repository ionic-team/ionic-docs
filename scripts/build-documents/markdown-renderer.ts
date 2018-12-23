import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.code = (code: string, lang = '') =>
  `<docs-code language="${lang}">${hljs.highlightAuto(code, [lang]).value}</docs-code>`;

renderer.heading = (text: string, level: number) => {
  const hash = text.toLowerCase().replace(/[^\w]+/g, '-');
  return `
    <h${level} id="${hash}">
      <a href="#${hash}">${text}</a>
    </h${level}>
  `;
};

export default (markdownString) => marked(markdownString, { renderer });
