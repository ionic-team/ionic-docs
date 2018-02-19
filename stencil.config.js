const sass = require('@stencil/sass');

exports.config = {
  bundles: [{ name: 'code-block' }],
  plugins: [sass()],
  copy: [{ src: 'docs-content' }],
  wwwDir: 'www/docs',
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
