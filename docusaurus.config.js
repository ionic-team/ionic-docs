module.exports = {
  title: 'Ionic Documentation',
  tagline: 'Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards',
  url: 'https://ionicframework.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
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
              to: '/',
              label: 'Framework',
            },
            {
              href: 'https://ionic.io/docs/appflow',
              label: 'Appflow',
              className: 'link--outbound',
            },
            {
              href: 'https://ionic.io/docs/identity-vault',
              label: 'Identity Vault',
              className: 'link--outbound',
            },
            {
              href: 'https://ionic.io/docs/auth-connect',
              label: 'Auth Connect',
              className: 'link--outbound',
            },
            {
              href: 'https://ionic.io/docs/offline-storage',
              label: 'Offline Storage',
              className: 'link--outbound',
            },
            {
              href: 'https://ionic.io/docs/premier-plugins',
              label: 'Premier Plugins',
              className: 'link--outbound',
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
    footer: {
      links: [],
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
  themes: ['@ionic-internal/docusaurus-theme'],
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
