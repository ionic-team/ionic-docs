import marked from 'marked';
import hljs from 'highlight.js';

import { current } from './versions';
import { apiMap } from './components/docs-menu/docs-api-map';

const components = apiMap[current] || [];

export interface HeadingStruc {
  text: string;
  level: number;
  anchorId: string;
}

export interface MarkedStruc {
  headings: HeadingStruc[];
  body: string;
}

export const toCodeBlock = (code: string, lang = '') =>
  `<code-block language="${lang}">${hljs.highlightAuto(code, [lang]).value}</code-block>`;

const toPreviewBlock = (code: string, lang = '', options: RenderOptions = {}) => `
  <tab-group tabs="markup preview" initial="${options.initialTab || ''}">
    <code-block slot="markup" language="${lang}">${hljs.highlightAuto(code, [lang]).value}</code-block>
    <code-preview slot="preview" markup="${escape(code)}" inline="${!!options.inlineHtmlPreviews}"></code-preview>
  </tab-group>
`;

const generateHeadingID = (inText: string) => {
  let text = inText;
  text = text.toLowerCase()
             .replace(/&#?[a-z0-9]+;/i, '')
             .replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2')
             .replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '')
             .replace(/ +/g, '-');
  return text;
};

interface RenderOptions {
  disableHtmlPreviews?: boolean;
  initialTab?: string;
  inlineHtmlPreviews?: boolean;
}

export function renderMarkdown(markdown: string, options: RenderOptions): MarkedStruc {
  const renderer = new marked.Renderer();
  const headings: HeadingStruc[] = [];

  renderer.image = (href = '', title) => `
    <img-zoom>
      <img src="${href}" ${title && `title="${title}"`} />
    </img-zoom>
  `;

  renderer.heading = (text: string, level: number) => {
    const hasNestedTags = /<.+>(.+)<\/.+>/.test(text);

    if (level > 3 || hasNestedTags) {
      return `<h${level}>${text}</h${level}>`;
    }

    const anchorId = generateHeadingID(text);
    headings.push({ text, level, anchorId });

    return `
      <h${level} id="${anchorId}">
        <a href="#${anchorId}" class="linked">${text}</a>
      </h${level}>
    `;
  };

  renderer.code = (code: string, lang: string) => {
    if (lang === 'html' && options.disableHtmlPreviews !== true) {
      return toPreviewBlock(code, lang, options);
    }

    return toCodeBlock(code, lang);
  };

  renderer.codespan = code => {
    // quick out if not an ionic component or menu is empty
    if (code.indexOf('ion-') !== -1) {
      // link to ionic component if possible
      const converted = code.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-')
        .toLowerCase()
        .replace('ion-', '');
      if (components[converted]) {
        code = `<a href="${components[converted]}" class="auto-link">${code}</a>`;
      }
    }

    return `<code>${code}</code>`;
  };

  renderer.table = (thead: string, tbody: string) =>
    `<div class="table-wrap">
      <table>
        <thead>
          ${thead}
        </thead>
        <tbody>
          ${tbody}
        </tbody>
      </table>
    </div>`;

  return {
    headings,
    body: marked(markdown, { renderer })
  };
}
