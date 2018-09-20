const { sass } = require('@stencil/sass');

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
        return !/color\-generator/.test(url.pathname);
      }
    }
  ],
  excludeSrc: ['/test/', '**/.spec.', 'src/content/component-preview-app/']
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
