import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/styles/global.css',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://ionicframework.com/docs',
      prerenderConfig: 'prerender.config.js',
      serviceWorker: null,
      copy: [
        { src: 'pages/**/*.json', dest: 'docs' },
        { src: 'demos', dest: 'docs/demos' },
        { src: 'components/color-gen/demo/index.html', dest: 'docs/pages/theming/color-generator/index.html' },
        { src: '../node_modules/@ionic/core', dest: 'docs/assets/ionic' },
        { src: 'assets', dest: 'docs/assets' }
      ]
    }
  ]
};
