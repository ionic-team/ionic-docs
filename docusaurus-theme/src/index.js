const path = require('path');

module.exports = function () {
  return {
    name: 'docusaurus-theme-ionic-internal',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getClientModules() {
      return path.resolve(__dirname, './css/custom.scss');
    },

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://fonts.gstatic.com',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap',
            },
          },
        ],
      };
    },
  };
};
