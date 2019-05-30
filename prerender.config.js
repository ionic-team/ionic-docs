
module.exports = {

  filterUrl(url) {
    if (url.pathname.startsWith('/docs/v3')) {
      return false;
    }
    return true;
  },

  canonicalUrl() {
    return null;
  },

  robotsTxt(opts) {
    return `
      User-agent: *
      Disallow: /,
      Sitemap: ${opts.sitemapUrl}
    `;
  }

};
