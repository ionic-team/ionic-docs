const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');

const VERSIONS_JSON = require('./versions.json');

/**
 * Old versions of the Ionic Docs are archived so
 * that we do not need to re-build it every time we deploy.
 * Building a large number of docs sites at once can cause
 * out of memory issues, so archiving old docs sites
 * allow us to keep memory usage and build times low.
 *
 * Note that this file is only for versions of the Ionic Docs
 * that are built with Docusaurus. The
 * Ionic v3 and v4 docs are built with other tools, so those
 * versions are not included here.
 *
 * Note that the urls specified in this file should
 * NOT have a trailing slash otherwise users will
 * briefly get a 404 Page Not Found error before
 * the docuementation website loads.
 */
const ARCHIVED_VERSIONS_JSON = require('./versionsArchived.json');

/**
 * This returns an array where each entry is an array
 * containing the version name at index 0 and
 * the archive url at index 1.
 */
const ArchivedVersionsDropdownItems = Object.entries(ARCHIVED_VERSIONS_JSON).splice(0, 5);

const BASE_URL = '/docs';

module.exports = {
  title: 'Ionic Framework',
  tagline:
    'Ionic is the app platform for web developers. Build amazing mobile and web apps with one shared code base and open web standards',
  url: 'https://ionicframework.com',
  baseUrl: `${BASE_URL}/`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: { label: 'English' },
      ja: { label: '日本語' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon-96x96.png',
  organizationName: 'ionic-team',
  projectName: 'ionic-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        // Will be passed to @docusaurus/plugin-content-docs (false to disable).
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ versionDocsDirPath, docPath, locale }) => {
            if (locale != 'en') {
              return 'https://crowdin.com/project/ionic-docs';
            }
            let match;
            if ((match = docPath.match(/api\/(.*)\.md/)) != null) {
              return `https://github.com/ionic-team/ionic-docs/tree/main/docs/api/${match[1]}.md`;
            }
            if ((match = docPath.match(/cli\/commands\/(.*)\.md/)) != null) {
              return `https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/${match[1].replace(
                '-',
                '/'
              )}.ts`;
            }
            if ((match = docPath.match(/native\/(.*)\.md/)) != null) {
              return `https://github.com/ionic-team/capacitor-plugins/edit/main/${match[1]}/README.md`;
            }
            return `https://github.com/ionic-team/ionic-docs/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          exclude: ['README.md'],
          lastVersion: 'current',
          /** @type {import('@docusaurus/plugin-content-docs').VersionOptions} */
          versions: {
            current: {
              label: 'v8',
            },
          },
        },
        // Will be passed to @docusaurus/plugin-google-tag-manager.
        googleTagManager: {
          containerId: 'GTM-TKMGCBC',
        },
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: [
            require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
            require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      },
    ],
  ],
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    announcementBar: {
      id: 'announcement-bar',
      content:
        '<a href="https://www.outsystems.com/?utm_source=ionic&utm_medium=referral&utm_campaign=ionic-referral&utm_term=none&utm_content=other&utm_campaignteam=digital-mktg&utm_partner=none" target="_blank" rel="noopener"><span>An <strong>OutSystems</strong> Company →</span></a>',
      isCloseable: false,
    },
    metadata: [
      { name: 'og:image', content: 'https://ionicframework.com/docs/img/meta/open-graph.png' },
      { name: 'twitter:image', content: 'https://ionicframework.com/docs/img/meta/open-graph.png' },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:domain',
        content: 'ionicframework.com',
      },
      {
        name: 'twitter:site',
        content: '@ionicframework',
      },
      {
        name: 'twitter:creator',
        content: 'ionicframework',
      },
      {
        name: 'fb:page_id',
        content: '1321836767955949',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: 'Ionic Framework Docs',
      },
    ],
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Site Logo',
        src: `/logos/ionic-text-docs-dark.svg`,
        srcDark: `/logos/ionic-text-docs-light.svg`,
        href: '/',
        target: '_self',
        width: 139,
        height: 28,
      },
      items: [
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
          type: 'doc',
          docId: 'updating/8-0',
          label: 'Ionic v8.0.0 Upgrade Guide',
          position: 'left',
          className: 'cta',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
            ...ArchivedVersionsDropdownItems.map(([versionName, versionUrl]) => ({
              label: versionName,
              /**
               * Use "to" instead of "href" so the
               * external URL icon does not show up.
               */
              to: versionUrl,
              /**
               * Just like the version docs in this project,
               * we want to archived versions to open in the
               * same tab.
               */
              target: '_self',
            })),
            { to: 'https://ionicframework.com/docs/v4/components', label: 'v4', target: '_blank' },
            { to: 'https://ionicframework.com/docs/v3/', label: 'v3', target: '_blank' },
          ],
          // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
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
          className: 'navbar__link--community',
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
          className: 'navbar__link--support',
        },
        {
          type: 'html',
          position: 'right',
          value: '<div class="separator" aria-hidden></div>',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              href: 'https://ionicframework.com/translate',
              label: 'Translate',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'icon-link language navbar__item',
        },
        {
          href: 'https://twitter.com/Ionicframework',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-twitter',
          'aria-label': 'Twitter',
          target: '_blank',
        },
        {
          href: 'https://ionic.link/discord',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-discord',
          'aria-label': 'Discord',
          target: '_blank',
        },
        {
          href: 'https://github.com/ionic-team/ionic-framework',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-github',
          'aria-label': 'GitHub repository',
          target: '_blank',
        },
      ],
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/e6d323332b0363a633407fabab47b608088e3a4d/packages/generate-prism-languages/index.ts#L9-L25
      additionalLanguages: ['shell-session', 'http', 'diff'],
    },
    algolia: {
      appId: 'O9QSL985BS',
      apiKey: 'ceb5366064b8fbf70959827cf9f69227',
      indexName: 'ionicframework',
      contextualSearch: true,
    },
  },
  plugins: [
    // Allows usage of Sass/SCSS in the CSS preprocessor.
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    function (context, options) {
      return {
        name: 'ionic-docs-ads',
        async loadContent() {
          const repoName = 'ionicframeworkcom';
          const endpoint = prismic.getEndpoint(repoName);
          const client = prismic.createClient(endpoint, {
            fetch,
          });

          return await client.getByType('docs_ad');
        },
        async contentLoaded({ content, actions: { setGlobalData, addRoute } }) {
          return setGlobalData({ prismicAds: content.results });
        },
      };
    },
    [
      path.resolve(__dirname, 'plugins', 'docusaurus-plugin-ionic-component-api'),
      {
        versions: VERSIONS_JSON,
      },
    ],
  ],
  customFields: {},
  themes: [],
};
