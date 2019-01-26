import { resolve } from 'url';

const isInternal = /^\/docs\/.*/;

export default function(href: string, title: string, text: string) {
  if (this.options.baseUrl && href.startsWith('../')) {
    href = resolve(this.options.baseUrl, href);
  }

  if (isInternal.test(href)) {
    return `<stencil-route-link url=${href} ${title ? `anchorTitle=${title}` : ''}>${text}</stencil-route-link>`;
  }

  return `<a href=${href} ${title ? `title=${title}` : ''}>${text}</a>`;
}
