import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global.css',
  outputTargets: [
    {
      type: 'www',
      dir: '../www/demos',
      baseUrl: '/demos',
      serviceWorker: null
    }
  ]
};
