const sass = require('@stencil/sass');

exports.config = {
  plugins: [sass()],
  copy: [{ src: 'docs-content' }],
  wwwDir: 'www',
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
