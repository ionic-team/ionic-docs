export const config = {
  globalStyle: 'src/styles/global.css',
  outputTargets: [
    {
      type: 'www',
      dir: 'www/docs',
      baseUrl: '/docs',
      serviceWorker: null,
      inlineLoaderScript: false
    }
  ],
  copy: [
    { src: 'pages/**/*.json' },
    { src: '_redirects' },
    { src: 'robots.txt' }
  ]
};
