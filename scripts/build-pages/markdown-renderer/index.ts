import marked from 'marked';
import { resolve } from 'url';

import code from './code';
import heading from './heading';

const hasTrailingSlash = /\/$/;
const isInternal = /^\/docs\/.*/;
const isV3 = /^\/docs\/v3\//;

const renderer = new marked.Renderer();
renderer.heading = heading;
renderer.code = code;
renderer.link = function(href: string, title: string, text: string) {
  const { baseUrl } = this.options;

  if (baseUrl) {
    href = resolve(hasTrailingSlash.test(baseUrl) ? baseUrl : `${baseUrl}/`, href);
  }

  if (isInternal.test(href) && !isV3.test(href)) {
    return `<stencil-route-link url=${href} ${title !== undefined ? `anchorTitle=${title}` : ''}>${text}</stencil-route-link>`;
  }

  return `<a href=${href} ${title !== undefined ? `title=${title}` : ''}>${text}</a>`;
};

export default (markdown: string, baseUrl?: string) => {
  return marked(markdown, { baseUrl, renderer });
};
