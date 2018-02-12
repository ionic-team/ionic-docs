exports.config = {
  collections: [{ name: '@stencil/router' }],
  copy: [
    {src: 'docs-content'}
  ],
  wwwDir: 'www/docs',
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
