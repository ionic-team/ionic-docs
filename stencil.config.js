const postcss = require('@stencil/postcss');
const autoprefixer = require('autoprefixer');
const imports = require('postcss-import');
const nesting = require('postcss-nested');
const media = require('postcss-custom-media');

exports.config = {
  plugins: [
    postcss({
      plugins: [
        imports(),
        media(),
        nesting(),
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
