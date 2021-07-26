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
  };
};
