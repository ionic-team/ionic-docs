exports.config = {
  collections: [{ name: '@stencil/router' }],
  copy: [
    {src: 'docs-content'}
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
