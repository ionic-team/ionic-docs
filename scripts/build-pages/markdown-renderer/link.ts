import { resolve } from 'url';

const isInternal = /^\/docs\/.*/;
const isRelative = /^\.{1,2}\//;

export default function(href: string, title: string, text: string) {
  if (this.options.baseUrl && isRelative.test(href)) {
    href = resolve(this.options.baseUrl, href);
  }

  if (isInternal.test(href)) {
    return `<stencil-route-link url=${href} ${title ? `anchorTitle=${title}` : ''}>${text}</stencil-route-link>`;
  }

  return `<a href=${href} ${title ? `title=${title}` : ''}>${text}</a>`;
}
