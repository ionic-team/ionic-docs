export default () => <docs-nav items={items}/>;

const items = {
  'Introduction': {
    'What is Ionic Framework?': '/docs/intro',
    'Core Concepts': '/docs/intro/concepts',
    'Browser Support': '/docs/intro/browser-support',
    'Versioning': '/docs/intro/versioning',
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
    'CSS Utilities': '/docs/layout/css-utilities',
  },
  'Theming': {
    'Basics': '/docs/theming/basics',
    'Platform Styles': '/docs/theming/platform-styles',
    'CSS Variables': '/docs/theming/css-variables',
    'Color Generator': '/docs/theming/color-generator',
    'Advanced': '/docs/theming/advanced',
    'Dark Mode': '/docs/theming/dark-mode',
  },
  'Navigation': {
    'Angular': '/docs/navigation/angular'
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
