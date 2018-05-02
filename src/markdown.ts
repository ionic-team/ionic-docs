import marked from 'marked';
import hljs from 'highlight.js';

export interface HeadingStruc {
  text: string;
  level: number;
  anchorId: string;
}

export interface MarkedStruc {
  headings: HeadingStruc[];
  body: string;
}

const toCodeBlock = (code: string, lang = '') =>
  `<code-block language="${lang}">${hljs.highlightAuto(code).value}</code-block>`;

const toPreviewBlock = (code: string, lang = '') => `
  <tab-group tabs="markup preview">
    <code-block slot="markup" language="${lang}">${hljs.highlightAuto(code).value}</code-block>
    <code-preview slot="preview" markup="${escape(code)}"></code-preview>
  </tab-group>
`;

const generateHeadingID = (inText: string) => {
  let text = inText;
  text = text.toLowerCase()
             .replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2')
             .replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '')
             .replace(/ +/g, '-');
  return text;
};

export function renderMarkdown(markdown: string): MarkedStruc {
  const renderer = new marked.Renderer();
  const headings: HeadingStruc[] = [];

  renderer.heading = (text: string, level: number) => {
    const anchorId = generateHeadingID(text);
    headings.push({ text, level, anchorId });

    return `
      <h${level} id="${anchorId}">
        <a href="${anchorId}" class="linked">${text}</a>
      </h${level}>
    `;
  };

  renderer.code = (code: string, lang: string) =>
    lang === 'html' ? toPreviewBlock(code, lang) : toCodeBlock(code, lang);

  return {
    headings,
    body: marked(markdown, { renderer })
  };
}
