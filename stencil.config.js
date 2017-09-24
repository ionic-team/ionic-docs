exports.config = {
  bundles: [
    { components: ['ionic-docs', 'lazy-iframe', 'site-menu', 'site-content', 'content-header'] },
    { components: ['app-marked'] }
  ],
  collections: [{ name: '@stencil/router' }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
