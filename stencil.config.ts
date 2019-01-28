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
    { src: '_redirects', dest: '../_redirects' },
    { src: 'robots.txt', dest: '../robots.txt' }
  ]
};
