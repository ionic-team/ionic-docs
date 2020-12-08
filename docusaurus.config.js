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
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/enterprise/auth-connect', to: '/auth-connect' },
          {
            from: '/enterprise/auth-connect/2.2.X/auth-connect',
            to: '/auth-connect/2.2.X/auth-connect',
          },
          {
            from: '/enterprise/auth-connect/3.0.X/auth-connect',
            to: '/auth-connect/3.0.X/auth-connect',
          },
          { from: '/enterprise/auth-connect/auth0', to: '/auth-connect/auth0' },
          {
            from: '/enterprise/auth-connect/aws-cognito',
            to: '/auth-connect/aws-cognito',
          },
          {
            from: '/enterprise/auth-connect/azure-ad-b2c',
            to: '/auth-connect/azure-ad-b2c',
          },
          {
            from: '/enterprise/auth-connect/identityserver4',
            to: '/auth-connect/identityserver4',
          },
          { from: '/enterprise/auth-connect/okta', to: '/auth-connect/okta' },
          { from: '/enterprise/identity-vault', to: '/identity-vault' },
          {
            from: '/enterprise/identity-vault/2.0.X/identity-vault',
            to: '/identity-vault/2.0.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/3.0.X/identity-vault',
            to: '/identity-vault/3.0.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/3.1.X/identity-vault',
            to: '/identity-vault/3.1.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/3.2.X/identity-vault',
            to: '/identity-vault/3.2.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/3.3.X/identity-vault',
            to: '/identity-vault/3.3.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/3.4.X/identity-vault',
            to: '/identity-vault/3.4.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/3.5.X/identity-vault',
            to: '/identity-vault/3.5.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/3.6.X/identity-vault',
            to: '/identity-vault/3.6.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/4.0.X/identity-vault',
            to: '/identity-vault/4.0.X/identity-vault',
          },
          {
            from: '/enterprise/identity-vault/4.1.X/identity-vault',
            to: '/identity-vault/4.1.X/identity-vault',
          },
          { from: '/enterprise/offline-storage', to: '/offline-storage' },
          {
            from: '/enterprise/offline-storage/1.0.X/offline-storage',
            to: '/offline-storage/1.0.X/offline-storage',
          },
        ],
      },
    ],
  ],
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
