import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.code = (code: string, lang = '') =>
  `<docs-code language="${lang}">${hljs.highlightAuto(code, [lang]).value}</docs-code>`;

export default (markdownString) => marked(markdownString, { renderer });
