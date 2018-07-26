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
    { src: 'components/color-gen/demo', dest: 'theming/color-gen/demo' },
    { src: 'styles/overrides.css', dest: 'overrides.css' }
  ],
  outputTargets: [
    {
      type: 'www',
      dir: 'www/docs',
      baseUrl: '/docs',
      serviceWorker: false,
      prerenderFilter(url) {
        return url.pathname !== '/docs/theming/color-generator';
      }
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
