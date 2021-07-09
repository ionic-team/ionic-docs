const path = require('path');

module.exports = {
  title: 'Ionic Documentation',
  tagline:
    'Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards',
  url: 'https://ionicframework.com',
  baseUrl: '/docs/',
  /*
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'pt', 'zh'],
    localeConfigs: {
      en: { label: 'English' },
      es: { label: 'Español' },
      fr: { label: 'Français' },
      pt: { label: 'Português' },
      zh: { label: '中文' },
    },
  },
  */
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ionic-team',
  projectName: 'ionic-docs',
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Ionic Logo',
        src: 'img/framework-logo.svg',
        srcDark: 'img/framework-logo-dark.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
        },
        {
          type: 'doc',
          docId: 'index',
          label: 'Guide',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'components',
          label: 'Components',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'cli',
          label: 'CLI',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'native',
          label: 'Native',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          label: 'Community',
          position: 'right',
          items: [
            {
              href: 'https://ionicframework.com/community',
              label: 'Community Hub',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://forum.ionicframework.com/',
              label: 'Forum',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://www.meetup.com/topics/ionic-framework/',
              label: 'Meetups',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://blog.ionicframework.com/',
              label: 'Blog',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://twitter.com/ionicframework',
              label: 'Twitter',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          label: 'Support',
          position: 'right',
          items: [
            {
              href: 'https://ionicframework.com/support',
              label: 'Help Center',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://ionic.zendesk.com/',
              label: 'Customer Support',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://ionicframework.com/advisory',
              label: 'Enterprise Advisory',
              target: '_blank',
              rel: null,
            },
          ],
        },
        // {
        //   href: 'https://ionicframework.com/docs/cli',
        //   label: 'CLI',
        //   className: 'navbar-cli',
        //   position: 'right',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              href: 'https://ionicframework.com/jp/docs/',
              label: '日本語',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://ionicframework.com/translate',
              label: 'Translate',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          'href': 'https://twitter.com/IonicFramework',
          'position': 'right',
          'className': 'navbar-twitter',
          'aria-label': 'Twitter',
        },
        {
          'href': 'https://github.com/ionic-team/ionic-framework',
          'position': 'right',
          'className': 'navbar-github',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      links: [],
    },
    algolia: {
      apiKey: '43228ce75714201a27efcf69666d6b40',
      indexName: 'ionicframework',
      contextualSearch: true,
    },
    gtag: {
      trackingID: 'UA-44023830-8',
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      additionalLanguages: ['shell-session'],
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(
            __dirname,
            './node_modules/styled-components',
          ),
          'react': path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
      },
    ],
  ],
  themes: ['@ionic-internal/docusaurus-theme'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ versionDocsDirPath, docPath, locale }) => {
            if (locale != 'en') {
              return 'https://crowdin.com/project/ionic-docs';
            }
            if ((match = docPath.match(/api\/(.*)\.md/)) != null) {
              return `https://github.com/ionic-team/ionic-framework/edit/master/core/src/components/${match[1]}/readme.md`;
            }
            if ((match = docPath.match(/cli\/commands\/(.*)\.md/)) != null) {
              return `https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/${match[1].replace(
                '-',
                '/',
              )}.ts`;
            }
            if ((match = docPath.match(/native\/(.*)\.md/)) != null) {
              return `https://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/${match[1]}/index.ts`;
            }
            return `https://github.com/ionic-team/ionic-docs/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          lastVersion: 'current',
          versions: {
            'current': {
              label: 'v6-beta',
            },
            'v5': {
              banner: 'none',
            },
          },
        },
        blog: false,
      },
    ],
  ],
};
