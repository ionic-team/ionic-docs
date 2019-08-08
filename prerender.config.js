
module.exports = {
  filterUrl(url) {
    if (url.pathname.startsWith('/docs/v3')) {
      return false;
    }
    return true;
  }

};
