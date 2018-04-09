const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass()
  ],
  globalStyle: ['src/styles/variables.scss'],
  copy: [{ src: 'docs-content' }],
  outputTargets: [
    {
      type: 'www',
      dir: 'www/docs',
      baseUrl: '/docs',
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
