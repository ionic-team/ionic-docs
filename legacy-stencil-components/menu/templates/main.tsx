import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-intro': {
    'menu-intro-overview': '/docs',
    'menu-intro-environment': '/docs/intro/environment',
    'menu-intro-cli': '/docs/intro/cli',
    'menu-intro-cdn': '/docs/intro/cdn',
    'menu-intro-next': '/docs/intro/next',
  },
  'menu-developing': {
    'menu-developing-starting': '/docs/developing/starting',
    'menu-developing-previewing': '/docs/developing/previewing',
    'menu-developing-scaffolding': '/docs/developing/scaffolding',
    'menu-developing-ios': '/docs/developing/ios',
    'menu-developing-android': '/docs/developing/android',
    'menu-developing-tips': '/docs/developing/tips',
    'menu-developing-hardware-back-button': '/docs/developing/hardware-back-button',
    'menu-developing-keyboard': '/docs/developing/keyboard',
  },
  'menu-layout': {
    'menu-layout-structure': '/docs/layout/structure',
    'menu-layout-grid': '/docs/layout/grid',
    'menu-layout-global-stylesheets': '/docs/layout/global-stylesheets',
    'menu-layout-css-utilities': '/docs/layout/css-utilities',
  },
  'menu-theming': {
    'menu-theming-basics': '/docs/theming/basics',
    'menu-theming-platform-styles': '/docs/theming/platform-styles',
    'menu-theming-css-variables': '/docs/theming/css-variables',
    'menu-theming-css-shadow-parts': '/docs/theming/css-shadow-parts',
    'menu-theming-colors': '/docs/theming/colors',
    'menu-theming-themes': '/docs/theming/themes',
    'menu-theming-dark-mode': '/docs/theming/dark-mode',
    'menu-theming-advanced': '/docs/theming/advanced',
    'menu-theming-color-generator': '/docs/theming/color-generator',
  },
  'menu-angular': {
    'menu-angular-overview': '/docs/angular/overview',
    'menu-angular-your-first-app': '/docs/angular/your-first-app',
    '': {
      'menu-angular-yfa-taking-photos': '/docs/angular/your-first-app/2-taking-photos',
      'menu-angular-yfa-saving-photos': '/docs/angular/your-first-app/3-saving-photos',
      'menu-angular-yfa-loading-photos': '/docs/angular/your-first-app/4-loading-photos',
      'menu-angular-yfa-adding-mobile': '/docs/angular/your-first-app/5-adding-mobile',
      'menu-angular-yfa-deploying-mobile': '/docs/angular/your-first-app/6-deploying-mobile',
      'menu-angular-yfa-live-reload': '/docs/angular/your-first-app/7-live-reload'
    },
    'menu-angular-lifecycle': '/docs/angular/lifecycle',
    'menu-angular-navigation': '/docs/angular/navigation',
    'menu-angular-config': '/docs/angular/config',
    'menu-angular-platform': '/docs/angular/platform',
    'menu-angular-testing': '/docs/angular/testing',
    'menu-angular-storage': '/docs/angular/storage',
    'menu-angular-performance': '/docs/angular/performance',
    'menu-angular-pwa': '/docs/angular/pwa'
  },
  'menu-react': {
    'menu-react-overview': '/docs/react',
    'menu-react-quickstart': '/docs/react/quickstart',
    'menu-react-your-first-app': '/docs/react/your-first-app',
    '': {
      'menu-react-yfa-taking-photos': '/docs/react/your-first-app/2-taking-photos',
      'menu-react-yfa-saving-photos': '/docs/react/your-first-app/3-saving-photos',
      'menu-react-yfa-loading-photos': '/docs/react/your-first-app/4-loading-photos',
      'menu-react-yfa-adding-mobile': '/docs/react/your-first-app/5-adding-mobile',
      'menu-react-yfa-deploying-mobile': '/docs/react/your-first-app/6-deploying-mobile',
      'menu-react-yfa-live-reload': '/docs/react/your-first-app/7-live-reload'
    },
    'menu-react-lifecycle': '/docs/react/lifecycle',
    'menu-react-navigation': '/docs/react/navigation',
    'menu-react-config': '/docs/react/config',
    'menu-react-platform': '/docs/react/platform',
    'menu-react-pwa': '/docs/react/pwa',
    'menu-react-overlays': '/docs/react/overlays',
    'menu-react-storage': '/docs/react/storage',
    'menu-react-testing': '/docs/react/testing',
    'menu-react-performance': '/docs/react/performance',
  },
  'menu-vue': {
    'menu-vue-overview': '/docs/vue/overview',
    'menu-vue-quickstart': '/docs/vue/quickstart',
    'menu-vue-your-first-app': '/docs/vue/your-first-app',
    '': {
      'menu-vue-yfa-taking-photos': '/docs/vue/your-first-app/2-taking-photos',
      'menu-vue-yfa-saving-photos': '/docs/vue/your-first-app/3-saving-photos',
      'menu-vue-yfa-loading-photos': '/docs/vue/your-first-app/4-loading-photos',
      'menu-vue-yfa-adding-mobile': '/docs/vue/your-first-app/5-adding-mobile',
      'menu-vue-yfa-deploying-mobile': '/docs/vue/your-first-app/6-deploying-mobile',
      'menu-vue-yfa-live-reload': '/docs/vue/your-first-app/7-live-reload'
    },
    'menu-vue-lifecycle': '/docs/vue/lifecycle',
    'menu-vue-navigation': '/docs/vue/navigation',
    'menu-vue-config': '/docs/vue/config',
    'menu-vue-platform': '/docs/vue/platform',
    'menu-vue-pwa': '/docs/vue/pwa',
    'menu-vue-storage': '/docs/vue/storage',
    'menu-vue-testing': '/docs/vue/testing',
    'menu-vue-troubleshooting': '/docs/vue/troubleshooting',
    'menu-vue-performance': '/docs/vue/performance',
  },
  'menu-utilities': {
    'menu-utilities-animations': '/docs/utilities/animations',
    'menu-utilities-gestures': '/docs/utilities/gestures'
  },
  'menu-deployment': {
    'menu-deployment-app-store': '/docs/deployment/app-store',
    'menu-deployment-play-store': '/docs/deployment/play-store',
    'menu-deployment-progressive-web-app': '/docs/deployment/progressive-web-app',
    'menu-deployment-desktop-app': '/docs/deployment/desktop-app'
  },
  'menu-techniques': {
    'menu-techniques-security': '/docs/techniques/security',
  },
  'menu-troubleshooting': {
    'menu-troubleshooting-debugging': '/docs/troubleshooting/debugging',
    'menu-troubleshooting-build': '/docs/troubleshooting/build',
    'menu-troubleshooting-runtime': '/docs/troubleshooting/runtime',
    'menu-troubleshooting-native': '/docs/troubleshooting/native',
    'menu-troubleshooting-cors': '/docs/troubleshooting/cors',
  },
  'menu-core-concepts': {
    'menu-core-concepts-fundamentals': '/docs/core-concepts/fundamentals',
    'menu-core-concepts-cross-platform': '/docs/core-concepts/cross-platform',
    'menu-core-concepts-webview': '/docs/core-concepts/webview',
    'menu-core-concepts-what-are-progressive-web-apps': '/docs/core-concepts/what-are-progressive-web-apps',
  },
  'menu-contributing': {
    'menu-contributing-how-to-contribute': '/docs/contributing/how-to-contribute',
    'menu-contributing-coc': '/docs/contributing/coc',
  },
  'menu-reference': {
    'menu-reference-glossary': '/docs/reference/glossary',
    'menu-reference-versioning': '/docs/reference/versioning',
    'menu-reference-release-notes': '/docs/reference/release-notes',
    'menu-reference-changelog': 'https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md',
    'menu-reference-support': '/docs/reference/support',
    'menu-reference-browser-support': '/docs/reference/browser-support',
    'menu-reference-migration': '/docs/reference/migration'
  },
  'menu-resources': {
    // 'menu-resources-books': '/docs/developer-resources/books',
    // 'menu-resources-courses': '/docs/developer-resources/courses',
    // 'menu-resources-guides': '/docs/developer-resources/guides',
    // 'menu-resources-posts': '/docs/developer-resources/posts',
    // 'menu-resources-tools': '/docs/developer-resources/tools',
    'menu-resources-featured': 'https://ionicframework.com/resources',
    'menu-resources-webinars': 'https://ionicframework.com/resources/webinars',
    'menu-resources-articles': 'https://ionicframework.com/resources/articles',
    'menu-resources-case-studies': 'https://ionicframework.com/resources/case-studies',
    'menu-resources-learning': 'https://ionicframework.com/resources/learning',
    'menu-resources-videos': 'https://ionicframework.com/resources/videos'
  },
};
