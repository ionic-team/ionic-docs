import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.code = (code: string, lang: string) => `
  <pre class="code-block">
    <span class="code-block__label">${lang}</span>
    <code>${hljs.highlightAuto(code).value}</code>
  </pre>
`;

export function renderMarkdown(markdown: string): string {
  return marked(markdown, { renderer });
}
