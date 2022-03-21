const path = require('path');
const { Joi } = require('@docusaurus/utils-validation');

const BASE_URL = '/docs';

module.exports = {
  title: 'Ionic Documentation',
  tagline:
    'Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards',
  url: 'https://ionicframework.com',
  baseUrl: `${BASE_URL}/`,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon-96x96.png',
  organizationName: 'ionic-team',
  projectName: 'ionic-docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Site Logo',
        src: `https://ionicframework.com/docs/logos/ionic-text-docs-dark.svg`,
        srcDark: `/logos/ionic-text-docs-light.svg`,
        href: '/',
        target: '_self',
        width: 139,
        height: 28,
      },
      items: [
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
          type: 'separator',
          position: 'right',
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
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'twitter logo',
            src: `/logos/twitter.svg`,
            href: 'https://twitter.com/Ionicframework',
            target: '_blank',
          },
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'github logo',
            src: `/logos/github.svg`,
            href: 'https://github.com/ionic-team/ionic-framework',
            target: '_blank',
          },
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'discord logo',
            src: `/logos/discord.svg`,
            href: 'https://ionic.link/discord',
            target: '_blank',
          },
        },
      ],
    },
    tagManager: {
      trackingID: 'GTM-TKMGCBC',
    },
    algolia: {
      appId: 'O9QSL985BS',
      apiKey: 'ceb5366064b8fbf70959827cf9f69227',
      indexName: 'ionicframework',
      contextualSearch: true,
    },
    customSchema: {
      navbar: {
        items: [
          Joi.object({
            type: Joi.string().equal('iconLink').required(),
            position: Joi.string().default('left'),
            icon: Joi.object({
              alt: Joi.string().default('icon link'),
              src: Joi.string(),
              href: Joi.string(),
              target: Joi.string().default('_self'),
              width: Joi.number(),
              height: Joi.number(),
            }),
          }),
          Joi.object({
            type: Joi.string().equal('separator').required(),
            position: Joi.string().default('left'),
          }),
        ],
      },
    },
  },
  presets: [
    [
      '@ionic-internal/docusaurus-preset',
      {
        alias: {
          alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          },
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: ['README.md'],
        },
      },
    ],
  ],
};
