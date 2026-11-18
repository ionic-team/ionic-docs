/**
 * Remark plugins that `npm run lint` runs on docs pages through the
 * `mdx/remark` rule in `eslint.config.mjs`.
 */

// Schemes such as https: and mailto:, in-page anchors, and protocol-relative URLs.
const NOT_A_PAGE_LINK = /^([a-z][a-z\d+.-]*:|#|\/\/)/i;

const pathOf = (url) => url.split(/[?#]/)[0];

/**
 * A Markdown link to a doc must be its relative file path with the extension,
 * such as `./accordion.mdx`. Docusaurus resolves it to the page in the same
 * version and fails the build if the file is missing, and editors can follow
 * it. Without the extension it is a URL that Docusaurus cannot map to a file,
 * and a leading `/` is read from the repo root by editors and GitHub.
 *
 * A JSX `href` never goes through that resolver, so it must be an absolute URL
 * path without the extension, such as `/api/accordion`. A relative `href`
 * resolves against the page's URL instead.
 */
const checkMarkdownLink = (url) => {
  if (url === '' || NOT_A_PAGE_LINK.test(url)) return null;
  const path = pathOf(url);
  if (/\.mdx?$/.test(path)) {
    return path.startsWith('/')
      ? `Link to \`${url}\` by its relative file path, such as \`./accordion.mdx\`. Editors and GitHub read a leading \`/\` from the repo root.`
      : null;
  }
  // Another extension is a static file, such as an image or a download.
  if (/\.[a-z\d]+$/i.test(path)) return null;
  return `\`${url}\` is a URL, not a file. Link to the doc's relative file path with its extension, such as \`./accordion.mdx\`, so the build checks the page exists in this version.`;
};

const checkJsxHref = (url) => {
  if (url === '' || NOT_A_PAGE_LINK.test(url)) return null;
  const path = pathOf(url);
  if (/\.mdx?$/.test(path)) {
    return `A JSX \`href\` is a URL, not a file. Drop the extension from \`${url}\`, such as \`/api/accordion\`.`;
  }
  if (!path.startsWith('/')) {
    return `Make \`${url}\` an absolute URL path, such as \`/api/accordion\`, or \`/v8/api/accordion\` on a v8 page. A relative \`href\` resolves against the page's URL.`;
  }
  return null;
};

function docLinks() {
  return (tree, file) => {
    const report = (reason, node) => {
      const message = file.message(reason, node);
      message.source = 'ionic-docs';
      message.ruleId = 'doc-links';
    };
    const visit = (node) => {
      if (node.type === 'link' || node.type === 'definition') {
        const reason = checkMarkdownLink(node.url);
        if (reason) report(reason, node);
      } else if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
        for (const attribute of node.attributes) {
          if (attribute.name !== 'href' || typeof attribute.value !== 'string') continue;
          const reason = checkJsxHref(attribute.value);
          if (reason) report(reason, node);
        }
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

export default {
  plugins: [docLinks],
};
