const isInternal = /^\/docs\/.*/;

export default (href: string, title: string, text: string) => {
  if (isInternal.test(href)) {
    return `<stencil-route-link url=${href} ${title ? `anchorTitle=${title}` : ''}>${text}</stencil-route-link>`;
  }

  return `<a href=${href} ${title ? `title=${title}` : ''}>${text}</a>`;
};
