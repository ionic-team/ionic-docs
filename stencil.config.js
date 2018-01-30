exports.config = {
  bundles: [
    { components: ['ionic-docs', 'app-marked', 'site-menu', 'site-logo'] },
    { components: ['lazy-iframe', 'wistia-embed'] }
  ],
  collections: [{ name: '@stencil/router' }],
  // globalStyle: 'src/styles/variables.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
