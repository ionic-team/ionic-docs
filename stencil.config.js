const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass({
      injectGlobalPaths:[
        'src/styles/sass-global.scss'
      ]
    })
  ],
  globalStyle: 'src/styles/global.scss',
  copy: [
    { src: 'content' },
    { src: 'components/color-gen/demo', dest: 'theming/color-gen/demo' }
  ],
  outputTargets: [
    {
      type: 'www',
      dir: 'www/docs',
      baseUrl: '/docs',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
