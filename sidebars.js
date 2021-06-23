module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'index',
        'intro/environment',
        'intro/cli',
        'intro/cdn',
        'intro/next',
      ],
    },
    {
      type: 'category',
      label: 'Developing',
      items: [
        'developing/starting',
        'developing/previewing',
        'developing/scaffolding',
        'developing/ios',
        'developing/android',
        'developing/tips',
        'developing/hardware-back-button',
        'developing/keyboard',
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      items: [
        'layout/structure',
        'layout/grid',
        'layout/global-stylesheets',
        'layout/css-utilities',
      ],
    },
    {
      type: 'category',
      label: 'Theming',
      items: [
        'theming/basics',
        'theming/platform-styles',
        'theming/css-variables',
        'theming/css-shadow-parts',
        'theming/colors',
        'theming/themes',
        'theming/dark-mode',
        'theming/advanced',
        'theming/color-generator',
      ],
    },
    {
      type: 'category',
      label: 'Angular',
      items: [
        'angular/overview',
        {
          type: 'category',
          label: 'Build Your First App',
          items: [
            'angular/your-first-app',
            'angular/your-first-app/taking-photos',
            'angular/your-first-app/saving-photos',
            'angular/your-first-app/loading-photos',
            'angular/your-first-app/adding-mobile',
            'angular/your-first-app/deploying-mobile',
            'angular/your-first-app/live-reload',
          ],
        },
        'angular/lifecycle',
        'angular/navigation',
        'angular/virtual-scroll',
        'angular/slides',
        'angular/config',
        'angular/platform',
        'angular/testing',
        'angular/storage',
        'angular/performance',
        'angular/pwa',
      ],
    },
    {
      type: 'category',
      label: 'React',
      items: [
        'react',
        'react/quickstart',
        {
          type: 'category',
          label: 'Build Your First App',
          items: [
            'react/your-first-app',
            'react/your-first-app/taking-photos',
            'react/your-first-app/saving-photos',
            'react/your-first-app/loading-photos',
            'react/your-first-app/adding-mobile',
            'react/your-first-app/deploying-mobile',
            'react/your-first-app/live-reload',
          ],
        },
        'react/lifecycle',
        'react/navigation',
        'react/virtual-scroll',
        'react/slides',
        'react/config',
        'react/platform',
        'react/pwa',
        'react/overlays',
        'react/storage',
        'react/testing',
        'react/performance',
      ],
    },
    {
      type: 'category',
      label: 'Vue',
      items: [
        'vue/overview',
        'vue/quickstart',
        {
          type: 'category',
          label: 'Build Your First App',
          items: [
            'vue/your-first-app',
            'vue/your-first-app/taking-photos',
            'vue/your-first-app/saving-photos',
            'vue/your-first-app/loading-photos',
            'vue/your-first-app/adding-mobile',
            'vue/your-first-app/deploying-mobile',
            'vue/your-first-app/live-reload',
          ],
        },
        'vue/lifecycle',
        'vue/navigation',
        'vue/virtual-scroll',
        'vue/slides',
        'vue/config',
        'vue/platform',
        'vue/pwa',
        'vue/storage',
        'vue/testing',
        'vue/troubleshooting',
        'vue/performance',
      ],
    },
    {
      type: 'category',
      label: 'Utilities',
      items: ['utilities/animations', 'utilities/gestures'],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/app-store',
        'deployment/play-store',
        'deployment/progressive-web-app',
        'deployment/desktop-app',
      ],
    },
    {
      type: 'category',
      label: 'Techniques',
      items: ['techniques/security'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/debugging',
        'troubleshooting/build',
        'troubleshooting/runtime',
        'troubleshooting/native',
        'troubleshooting/cors',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/fundamentals',
        'core-concepts/cross-platform',
        'core-concepts/webview',
        'core-concepts/what-are-progressive-web-apps',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: ['contributing/how-to-contribute', 'contributing/coc'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/versioning',
        'reference/release-notes',
        {
          type: 'link',
          label: 'GitHub Changelog',
          href: 'https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md',
        },
        'reference/support',
        'reference/browser-support',
        'reference/migration',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'developer-resources/books',
        'developer-resources/courses',
        'developer-resources/guides',
        'developer-resources/posts',
        'developer-resources/tools',
        'developer-resources/videos',
      ],
    },
  ],

  api: [
    'components',
    {
      type: 'category',
      label: 'Action Sheet',
      items: ['api/action-sheet'],
    },
    {
      type: 'category',
      label: 'Accordion',
      items: ['api/accordion', 'api/accordion-group'],
    },
    {
      type: 'category',
      label: 'Alert',
      items: ['api/alert'],
    },
    {
      type: 'category',
      label: 'Badge',
      items: ['api/badge'],
    },
    {
      type: 'category',
      label: 'Breadcrumb',
      items: ['api/breadcrumb', 'api/breadcrumbs'],
    },
    {
      type: 'category',
      label: 'Button',
      items: ['api/button', 'api/ripple-effect'],
    },
    {
      type: 'category',
      label: 'Card',
      items: [
        'api/card',
        'api/card-content',
        'api/card-header',
        'api/card-subtitle',
        'api/card-title',
      ],
    },
    {
      type: 'category',
      label: 'Checkbox',
      items: ['api/checkbox'],
    },
    {
      type: 'category',
      label: 'Chip',
      items: ['api/chip'],
    },
    {
      type: 'category',
      label: 'Content',
      items: ['api/app', 'api/content'],
    },
    {
      type: 'category',
      label: 'Date & Time Pickers',
      items: ['api/datetime', 'api/picker'],
    },
    {
      type: 'category',
      label: 'Floating Action Button',
      items: ['api/fab', 'api/fab-button', 'api/fab-list'],
    },
    {
      type: 'category',
      label: 'Grid',
      items: ['api/grid', 'api/col', 'api/row'],
    },
    {
      type: 'category',
      label: 'Infinite Scroll',
      items: ['api/infinite-scroll', 'api/infinite-scroll-content'],
    },
    {
      type: 'category',
      label: 'Icons',
      items: [
        {
          type: 'link',
          label: 'ion-icon',
          href: 'https://ionicons.com',
        },
      ],
    },
    {
      type: 'category',
      label: 'Input',
      items: ['api/input', 'api/textarea'],
    },
    {
      type: 'category',
      label: 'Item',
      items: [
        'api/item',
        'api/item-divider',
        'api/item-group',
        'api/item-sliding',
        'api/item-options',
        'api/item-option',
        'api/label',
        'api/note',
      ],
    },
    {
      type: 'category',
      label: 'List',
      items: ['api/list', 'api/list-header', 'api/virtual-scroll'],
    },
    {
      type: 'category',
      label: 'Media',
      items: [
        'api/avatar',
        {
          type: 'link',
          label: 'ion-icon',
          href: 'https://ionicons.com',
        },
        'api/img',
        'api/thumbnail',
      ],
    },
    {
      type: 'category',
      label: 'Menu',
      items: [
        'api/menu',
        'api/menu-button',
        'api/menu-toggle',
        'api/split-pane',
      ],
    },
    {
      type: 'category',
      label: 'Modal',
      items: ['api/modal', 'api/backdrop'],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: ['api/nav', 'api/nav-link'],
    },
    {
      type: 'category',
      label: 'Popover',
      items: ['api/popover'],
    },
    {
      type: 'category',
      label: 'Progress Indicators',
      items: [
        'api/loading',
        'api/progress-bar',
        'api/skeleton-text',
        'api/spinner',
      ],
    },
    {
      type: 'category',
      label: 'Radio',
      items: ['api/radio', 'api/radio-group'],
    },
    {
      type: 'category',
      label: 'Range',
      items: ['api/range'],
    },
    {
      type: 'category',
      label: 'Refresher',
      items: ['api/refresher', 'api/refresher-content'],
    },
    {
      type: 'category',
      label: 'Reorder',
      items: ['api/reorder', 'api/reorder-group'],
    },
    {
      type: 'category',
      label: 'Routing',
      items: [
        'api/router',
        'api/router-link',
        'api/router-outlet',
        'api/route',
        'api/route-redirect',
      ],
    },
    {
      type: 'category',
      label: 'Searchbar',
      items: ['api/searchbar'],
    },
    {
      type: 'category',
      label: 'Segment',
      items: ['api/segment', 'api/segment-button'],
    },
    {
      type: 'category',
      label: 'Select',
      items: ['api/select', 'api/select-option'],
    },
    {
      type: 'category',
      label: 'Slides',
      items: ['api/slides', 'api/slide'],
    },
    {
      type: 'category',
      label: 'Tabs',
      items: ['api/tabs', 'api/tab', 'api/tab-bar', 'api/tab-button'],
    },
    {
      type: 'category',
      label: 'Toast',
      items: ['api/toast'],
    },
    {
      type: 'category',
      label: 'Toggle',
      items: ['api/toggle'],
    },
    {
      type: 'category',
      label: 'Toolbar',
      items: [
        'api/toolbar',
        'api/header',
        'api/footer',
        'api/title',
        'api/buttons',
        'api/back-button',
      ],
    },
    {
      type: 'category',
      label: 'Typography',
      items: ['api/text'],
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['api'],
    },
  ],

  cli: [
    {
      type: 'category',
      label: 'CLI Documentation',
      items: [
        'cli',
        'cli/configuration',
        'cli/livereload',
        'cli/using-a-proxy',
        {
          type: 'link',
          label: 'Changelog',
          href: 'https://github.com/ionic-team/ionic-cli/blob/develop/packages/@ionic/cli/CHANGELOG.md',
        },
      ],
    },
    {
      type: 'category',
      label: 'Command Reference',
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli/commands', // Generate section automatically based on files
        }
      ],
    },
  ],

  native: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'native',
        'native/community',
        'native/faq',
        {
          type: 'link',
          label: 'Community vs. Enterprise',
          href: 'https://ionic.io/docs/premier-plugins',
        },
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      items: [
        {
          type: 'autogenerated',
          dirName: 'native/plugins', // Generate section automatically based on files
        }
      ],
    },
  ],
};
