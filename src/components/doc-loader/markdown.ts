import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.code = (code: string, lang: string) => `
  <div class="code-block">
    <div class="code-block__label">${lang}</div>
    <pre><code>${hljs.highlightAuto(code).value}</code></pre>
  </div>
`;

export function renderMarkdown(markdown: string): string {
  return marked(markdown, { renderer });
}
