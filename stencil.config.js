exports.config = {
  bundles: [
    {
      components: [
        'ionic-docs',
        'app-marked',
        'dropdown-framework',
        'site-header',
        'site-menu',
      ]
    },
    { components: ['lazy-iframe', 'wistia-embed'] }
  ],
  collections: [{ name: '@stencil/router' }],
  copy: [
    {src: 'docs-content'}
  ]
  // globalStyle: 'src/styles/variables.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
