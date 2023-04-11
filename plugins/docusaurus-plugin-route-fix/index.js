module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-route-fix',
    async loadContent() {
      //const routes = await import('./docusaurus/routes.js');

      console.log('load content')
    },
    async contentLoaded({ content, actions }) {
      console.log('content loaded')
    },
  };
};
