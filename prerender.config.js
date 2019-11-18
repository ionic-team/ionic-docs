
module.exports = {
  filterUrl(url) {
    if (url.pathname.startsWith('/docs/v3')) {
      return false;
    }
    return true;
  },

  hydrateOptions() {
    const hydrate = {
      timeout: 15000
    }
    return hydrate;
  }

};
