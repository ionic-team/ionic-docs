import marked from 'marked';
import hljs from 'highlight.js';

const slugify = (text: string) => text.toLowerCase().replace(/[^\w]+/g, '-');

const toCodeBlock = (code: string, lang = '') =>
  `<code-block language="${lang}">${hljs.highlightAuto(code).value}</code-block>`;

const toPreviewBlock = (code: string, lang = '') => `
  <tab-group tabs="markup preview">
    <code-block slot="markup" language="${lang}">${hljs.highlightAuto(code).value}</code-block>
    <code-preview slot="preview" markup="${code}"></code-preview>
  </tab-group>
`;

const renderer = new marked.Renderer();

renderer.code = (code: string, lang: string) =>
  lang === 'html' ? toPreviewBlock(code, lang) : toCodeBlock(code, lang);

renderer.heading = (text: string, level: string) => `
  <h${level}>
    <a class="linked-heading" href="#${slugify(text)}" id="${slugify(text)}">${text}</a>
  </h${level}>
`;

export function renderMarkdown(markdown: string): string {
  return marked(markdown, { renderer });
}
