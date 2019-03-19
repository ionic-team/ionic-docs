import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/styles/global.css',
  outputTargets: [
    {
      type: 'www',
      dir: 'www/docs',
      baseUrl: '/docs',
      serviceWorker: null,
      empty: false,
      inlineLoaderScript: false
    }
  ],
  copy: [
    { src: 'pages/**/*.json' },
    { src: 'demos' },
    { src: 'components/color-gen/demo/index.html', dest: 'pages/theming/color-generator/index.html' },
    { src: 'robots.txt', dest: '../robots.txt' },
    { src: '../node_modules/@ionic/core', dest: 'assets/ionic' }
  ]
};
