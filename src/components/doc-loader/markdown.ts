import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.code = (code: string, lang: string) => `
  <code-block language="${lang}">${hljs.highlightAuto(code).value}</code-block>
`;

export function renderMarkdown(markdown: string): string {
  return marked(markdown, { renderer });
}
