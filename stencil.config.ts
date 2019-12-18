import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/styles/global.css',
  // excludeUnusedDependencies: true,
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://ionicframework.com/docs',
      prerenderConfig: 'prerender.config.js',
      serviceWorker: null,
      copy: [
        { src: 'pages/**/*.json' },
        { src: 'demos', dest: 'demos' },
        { src: 'components/color-gen/demo/index.html', dest: 'pages/theming/color-generator/index.html' },
        { src: 'assets', dest: 'assets' },
        { src: 'manifest.json', dest: 'manifest.json' },
        { src: '../node_modules/@ionic/core/dist', dest: 'assets/ionic' },
      ]
    }
  ]
};
