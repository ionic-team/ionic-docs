module.exports = {
  title: 'Ionic Documentation',
  tagline: 'Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards',
  url: 'https://ionicframework.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ionic-team',
  projectName: 'ionic-docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Ionic Logo',
        src: 'img/framework-icon.svg',
      },
      items: [
         {
          to: '/',
          activeBaseRegex: '^/docs/(?!api|components)',
          label: 'Guide',
          position: 'left',
        },
        {
          to: '/components',
          activeBaseRegex: '^/docs/(api|components)',
          label: 'Components',
          position: 'left',
        },
        {
          label: 'Platform',
          position: 'right',
          items: [
            {
              href: 'https://capacitorjs.com/docs',
              label: 'Capacitor',
              className: 'link--outbound',
            },
            {
              href: 'https://ionicframework.com/docs',
              label: 'Framework',
              className: 'link--outbound',
            },
            {
              to: '/appflow',
              label: 'Appflow',
            },
            {
              to: '/identity-vault',
              label: 'Identity Vault',
            },
            {
              to: '/auth-connect',
              label: 'Auth Connect',
            },
            {
              to: '/offline-storage',
              label: 'Offline Storage',
            },
            {
              to: '/premier-plugins',
              label: 'Premier Plugins',
            },
          ],
        },
        // {
        //   href: 'https://ionicframework.com/docs/cli',
        //   label: 'CLI',
        //   className: 'navbar-cli',
        //   position: 'right',
        // },
      ],
    },
    gtag: {
      trackingID: 'UA-44023830-8',
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      additionalLanguages: [
        'shell-session',
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ionic-team/ionic-docs/edit/main/',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
