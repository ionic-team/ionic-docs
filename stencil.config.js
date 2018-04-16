const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass({
      injectGlobalPaths:[
        'src/styles/sass-global.scss'
      ]
    })
  ],
  globalStyle: ['src/styles/global.scss'],
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
