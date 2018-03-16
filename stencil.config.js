const autoprefixer = require('autoprefixer');
const postcss = require('@stencil/postcss');
const precss = require('precss');

exports.config = {
  plugins: [
    postcss({
      plugins: [
        precss(),
        autoprefixer(),
      ]
    })
  ],
  globalStyle: ['src/styles/variables.css'],
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
