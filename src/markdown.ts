import marked from 'marked';
import hljs from 'highlight.js';

const toCodeBlock = (code: string, lang = '') =>
  `<code-block language="${lang}">${hljs.highlightAuto(code).value}</code-block>`;

const toPreviewBlock = (code: string, lang = '') => `
  <tab-group tabs="markup preview">
    <code-block slot="markup" language="${lang}">${hljs.highlightAuto(code).value}</code-block>
    <code-preview slot="preview" markup="${escape(code)}"></code-preview>
  </tab-group>
`;

const renderer = new marked.Renderer();

renderer.code = (code: string, lang: string) =>
  lang === 'html' ? toPreviewBlock(code, lang) : toCodeBlock(code, lang);

export function renderMarkdown(markdown: string): string {
  return marked(markdown, { renderer });
}
