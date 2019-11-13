import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-intro': {
    'menu-intro-what-is': '/docs/intro',
    'menu-intro-concepts': '/docs/intro/concepts',
    'menu-intro-your-first-app': '/docs/intro/first-app',
    'menu-intro-browser-support': '/docs/intro/browser-support',
    'menu-intro-versioning': '/docs/intro/versioning',
    'menu-intro-release-notes': '/docs/release-notes',
    'menu-intro-support': '/docs/intro/support'
  },
  'menu-installation': {
    'menu-installation-cli': '/docs/installation/cli',
    'menu-installation-cdn': '/docs/installation/cdn',
    'menu-installation-environment': '/docs/installation/environment',
    'menu-installation-ios': '/docs/installation/ios',
    'menu-installation-android': '/docs/installation/android',
  },
  'menu-building': {
    'menu-building-starting': '/docs/building/starting',
    'menu-building-scaffolding': '/docs/building/scaffolding',
    'menu-building-migration': '/docs/building/migration',
    'menu-building-cross-platform': '/docs/building/cross-platform',
    'menu-building-running': '/docs/building/running',
    'menu-building-ios': '/docs/building/ios',
    'menu-building-android': '/docs/building/android',
    'menu-building-testing': '/docs/building/testing',
    'menu-building-contributing': '/docs/building/contributing',
    'menu-building-webview': '/docs/building/webview',
    'menu-building-storage': '/docs/building/storage'
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
    'menu-theming-colors': '/docs/theming/colors',
    'menu-theming-themes': '/docs/theming/themes',
    'menu-theming-dark-mode': '/docs/theming/dark-mode',
    'menu-theming-advanced': '/docs/theming/advanced',
    'menu-theming-color-generator': '/docs/theming/color-generator',
  },
  'menu-angular': {
    'menu-angular-overview': '/docs/angular/overview',
    'menu-angular-your-first-app': '/docs/angular/your-first-app',
    'menu-angular-lifecycle': '/docs/angular/lifecycle',
    'menu-angular-navigation': '/docs/angular/navigation',
    'menu-angular-config': '/docs/angular/config',
    'menu-angular-platform': '/docs/angular/platform',
    'menu-angular-performance': '/docs/angular/performance'
  },
  'menu-react': {
    'menu-react-overview': '/docs/react',
    'menu-react-your-first-app': '/docs/react/your-first-app',
    'menu-react-lifecycle': '/docs/react/lifecycle',
    'menu-react-navigation': '/docs/react/navigation',
    'menu-react-config': '/docs/react/config',
    'menu-react-platform': '/docs/react/platform'
  },
  'menu-vue': {
    'menu-vue-overview': '/docs/vue/overview',
    'menu-vue-your-first-app': '/docs/vue/your-first-app',
    'menu-vue-lifecycle': '/docs/vue/lifecycle',
    'menu-vue-navigation': '/docs/vue/navigation'
  },
  'menu-publishing': {
    'menu-publishing-progressive-web-app': '/docs/publishing/progressive-web-app',
    'menu-publishing-app-store': '/docs/publishing/app-store',
    'menu-publishing-play-store': '/docs/publishing/play-store',
    'menu-publishing-desktop-app': '/docs/publishing/desktop-app'
  },
  'menu-faq': {
    'menu-faq-glossary': '/docs/faq/glossary',
    'menu-faq-build': '/docs/faq/build',
    'menu-faq-runtime': '/docs/faq/runtime',
    'menu-faq-native': '/docs/faq/native',
    'menu-faq-cors': '/docs/faq/cors',
    'menu-faq-security': '/docs/faq/security',
    'menu-faq-tips': '/docs/faq/tips',
    'menu-faq-changelog': 'https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md'
  },
  'menu-resources': {
    'menu-resources-books': '/docs/developer-resources/books',
    'menu-resources-courses': '/docs/developer-resources/courses',
    'menu-resources-guides': '/docs/developer-resources/guides',
    'menu-resources-posts': '/docs/developer-resources/posts',
    'menu-resources-tools': '/docs/developer-resources/tools',
    'menu-resources-videos': '/docs/developer-resources/videos'
  }
};
