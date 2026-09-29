// Where a page's rendered HTML and its markdown twin live, and how to link them.

const path = require('path');

const { stripBaseUrl, toMarkdownPath, withTrailingSlash } = require('./markdown-path');

/** The absolute URL of a page's markdown twin. */
function toMarkdownUrl(permalink, { siteUrl, baseUrl }) {
  return `${siteUrl.replace(/\/+$/, '')}${withTrailingSlash(baseUrl)}${toMarkdownPath(permalink, baseUrl)}`;
}

/**
 * Resolves a permalink to the files on disk.
 *
 * Both layouts Docusaurus can emit are offered, since which one a route gets
 * depends on `trailingSlash`, and this site leaves that unset.
 */
function toOutputPaths(permalink, { outDir, baseUrl }) {
  const relative = stripBaseUrl(permalink, baseUrl);

  return {
    htmlCandidates: relative
      ? [path.join(outDir, relative, 'index.html'), path.join(outDir, `${relative}.html`)]
      : [path.join(outDir, 'index.html')],
    markdownPath: path.join(outDir, toMarkdownPath(permalink, baseUrl)),
  };
}

module.exports = { stripBaseUrl, toMarkdownPath, toMarkdownUrl, toOutputPaths };
