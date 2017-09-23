exports.config = {
  bundles: [
    { components: ['ionic-docs', 'site-header', 'lazy-iframe', 'site-menu', 'site-content'] },
    { components: ['app-marked'] }
  ],
  collections: [{ name: '@stencil/router' }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
