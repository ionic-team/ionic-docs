// Where a page's rendered HTML and its markdown twin live, and how to link them.

const path = require('path');

const withTrailingSlash = (baseUrl) => (baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);

function stripBaseUrl(permalink, baseUrl) {
  const base = withTrailingSlash(baseUrl);
  const withoutBase = permalink.startsWith(base) ? permalink.slice(base.length) : permalink;
  return withoutBase.replace(/^\/+/, '').replace(/\/+$/, '');
}

/** The twin's path below the site's baseUrl, for example `api/button.md`. */
function toMarkdownPath(permalink, baseUrl) {
  const relative = stripBaseUrl(permalink, baseUrl);
  const lastSegment = relative.slice(relative.lastIndexOf('/') + 1);

  if (!relative) {
    return 'index.md';
  }
  return lastSegment.includes('.') ? relative.replace(/\.[^/.]+$/, '.md') : `${relative}.md`;
}

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
