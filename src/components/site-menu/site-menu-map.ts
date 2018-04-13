import { apiMenu } from './api-menu';

export const main = {
  'Home': '/docs',
  'Introduction': {
    'What is Ionic Framework': '/docs/intro',
    'Basic Features': '/docs/intro/basics',
    'App Structure': '/docs/intro/structure',
    'Core Concepts': '/docs/intro/concepts',
    'Browser Support': '/docs/intro/support'
  },
  'Getting Started': {
    'Installation': '/docs/getting-started/installation',
    'Starting an App': '/docs/getting-started/starting-an-app',
    'Run Your App': '/docs/getting-started/run-your-app',
    'Dev Build': '/docs/getting-started/dev-build',
    'Testing': '/docs/getting-started/testing',
    'Deploying': '/docs/getting-started/deploying',
    'Releasing': '/docs/getting-started/releasing',
    // 'Tutorial': '/docs/getting-started/tutorial'
  },
  'Components': {},
  'Theming': {
        'Basics': '/docs/theming/basics',
        'Theming with CSS': '/docs/theming/theming-with-css',
        'Theming with Sass': '/docs/theming/theming-with-sass'
  },
  'Contributing': {},
  'FAQ': {}
};

export const secondary = {
  'API Reference': '/docs/api',
  'Native APIs': {}
};

export const api = {
  'API Reference': version => apiMenu[version]
};
