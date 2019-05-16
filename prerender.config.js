
module.exports = {

  hydrateOptions() {
    return {
      prettyHtml: true
    }
  },

  filterUrl(url) {
    if (url.pathname.startsWith('/docs/v3')) {
      return false;
    }
    return true;
  },

  robotsTxt(opts) {
    return `
      User-agent: *
      Disallow: /,
      Sitemap: ${opts.sitemapUrl}
    `;
  }

};
