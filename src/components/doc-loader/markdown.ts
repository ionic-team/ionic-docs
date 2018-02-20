import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();
const slugify = (text: string) => text.toLowerCase().replace(/[^\w]+/g, '-');

renderer.code = (code: string, lang: string) => `
  <code-block language="${lang}">${hljs.highlightAuto(code).value}</code-block>
`;

renderer.heading = (text: string, level: string) => `
  <h${level}>
    <a class="linked-heading" href="#${slugify(text)}" id="${slugify(text)}">${text}</a>
  </h${level}>
`;

export function renderMarkdown(markdown: string): string {
  return marked(markdown, { renderer });
}
