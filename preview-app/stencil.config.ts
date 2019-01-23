import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global.css',
  outputTargets: [
    {
      type: 'www',
      dir: '../www/docs/demos',
      baseUrl: '/docs/demos',
      empty: false,
      serviceWorker: null
    }
  ]
};
