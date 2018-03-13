const sass = require('@stencil/sass');

exports.config = {
  plugins: [sass()],
  copy: [{ src: 'docs-content' }],
  wwwDir: 'www/docs',
  outputTargets: [
    {
      type: 'www',
      dir: 'www/docs'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
