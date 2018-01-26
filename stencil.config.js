exports.config = {
  bundles: [
    { components: ['ionic-docs', 'lazy-iframe', 'site-menu', 'site-content', 'site-logo'] },
    { components: ['app-marked', 'wistia-embed'] }
  ],
  collections: [{ name: '@stencil/router' }],
  // globalStyle: 'src/styles/variables.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
