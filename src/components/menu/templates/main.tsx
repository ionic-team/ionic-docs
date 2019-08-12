import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'Introduction': {
    'What is Ionic Framework?': '/docs/intro',
    'Core Concepts': '/docs/intro/concepts',
    'Build your First App': '/docs/angular/your-first-app',
    'Browser Support': '/docs/intro/browser-support',
    'Versioning': '/docs/intro/versioning',
    'Release Notes': '/docs/release-notes',
    'Support': '/docs/intro/support'
  },
  'Installation': {
    'CLI Installation': '/docs/installation/cli',
    'Packages & CDN': '/docs/installation/cdn',
    'Environment Setup': '/docs/installation/environment',
    'iOS Setup': '/docs/installation/ios',
    'Android Setup': '/docs/installation/android',
  },
  'Building': {
    'Starting': '/docs/building/starting',
    'Scaffolding': '/docs/building/scaffolding',
    'Migration': '/docs/building/migration',
    'Cross Platform': '/docs/building/cross-platform',
    'Running Overview': '/docs/building/running',
    'Running on iOS': '/docs/building/ios',
    'Running on Android': '/docs/building/android',
    'Testing': '/docs/building/testing',
    'Contributing': '/docs/building/contributing',
    'Web View': '/docs/building/webview',
    'Ionic Storage': '/docs/building/storage'
  },
  'Layout': {
    'Structure': '/docs/layout/structure',
    'Responsive Grid': '/docs/layout/grid',
    'Global Stylesheets': '/docs/layout/global-stylesheets',
    'CSS Utilities': '/docs/layout/css-utilities',
  },
  'Theming': {
    'Basics': '/docs/theming/basics',
    'Platform Styles': '/docs/theming/platform-styles',
    'CSS Variables': '/docs/theming/css-variables',
    'Colors': '/docs/theming/colors',
    'Themes': '/docs/theming/themes',
    'Advanced': '/docs/theming/advanced',
    'Color Generator 🎨': '/docs/theming/color-generator'
  },
  'Angular': {
    'Overview': '/docs/angular/overview',
    'Build Your First App': '/docs/angular/your-first-app',
    'Lifecycle': '/docs/angular/lifecycle',
    'Navigation/Routing': '/docs/angular/navigation',
    'Performance': '/docs/angular/performance'
  },
  'React': {
    'Overview': '/docs/react/overview',
    'Build Your First App': '/docs/react/your-first-app',
    'Lifecycle': '/docs/react/lifecycle',
    'Navigation/Routing': '/docs/react/navigation'
  },
  'Vue': {
    'Overview': '/docs/vue/overview',
    'Build Your First App': '/docs/vue/your-first-app',
    'Lifecycle': '/docs/vue/lifecycle',
    'Navigation/Routing': '/docs/vue/navigation'
  },
  'Utilities': {
    'Config': '/docs/utilities/config',
    'Platform': '/docs/utilities/platform'
  },
  'Publishing': {
    'Progressive Web App': '/docs/publishing/progressive-web-app',
    'iOS App Store': '/docs/publishing/app-store',
    'Android Play Store': '/docs/publishing/play-store',
    'Electron Desktop App': '/docs/publishing/desktop-app'
  },
  'FAQ': {
    'Glossary': '/docs/faq/glossary',
    'Build Errors': '/docs/faq/build',
    'Runtime Errors': '/docs/faq/runtime',
    'Native Errors': '/docs/faq/native',
    'CORS Errors': '/docs/faq/cors',
    'Security': '/docs/faq/security',
    'Developer Tips': '/docs/faq/tips',
    'Changelog': 'https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md'
  },
  'Resources': {
    'Books': '/docs/developer-resources/books',
    'Courses': '/docs/developer-resources/courses',
    'Guides': '/docs/developer-resources/guides',
    'Posts': '/docs/developer-resources/posts',
    'Tools': '/docs/developer-resources/tools',
    'Videos': '/docs/developer-resources/videos'
  }
};
