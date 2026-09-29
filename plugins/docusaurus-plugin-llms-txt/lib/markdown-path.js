// Maps a permalink to the path of its markdown twin.
//
// No Node imports, so the theme can pull this into the browser bundle and the
// copy button stays in step with the files the plugin writes.

const withTrailingSlash = (baseUrl) => (baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);

function stripBaseUrl(permalink, baseUrl) {
  const base = withTrailingSlash(baseUrl);
  const withoutBase = permalink.startsWith(base) ? permalink.slice(base.length) : permalink;
  return withoutBase.replace(/^\/+/, '').replace(/\/+$/, '');
}

/** For example `api/button.md`. */
function toMarkdownPath(permalink, baseUrl) {
  const relative = stripBaseUrl(permalink, baseUrl);
  const lastSegment = relative.slice(relative.lastIndexOf('/') + 1);

  if (!relative) {
    return 'index.md';
  }
  return lastSegment.includes('.') ? relative.replace(/\.[^/.]+$/, '.md') : `${relative}.md`;
}

module.exports = { stripBaseUrl, toMarkdownPath, withTrailingSlash };
