import { apiMenu } from './api-menu';

export default {
  'Home': '/',
  'Introduction': {
    'What is Ionic Framework': '/intro',
    'Basic Features': '/intro/basics',
    'App Structure': '/intro/structure',
    'Core Concepts': '/intro/concepts',
    'Browser Support': '/intro/support'
  },
  'Getting Started': {
    'Installation': '/getting-started/installation',
    'Starting an App': '/getting-started/starting-an-app',
    'Run Your App': '/getting-started/run-your-app',
    'Dev Build': '/getting-started/dev-build',
    'Testing': '/getting-started/testing',
    'Deploying': '/getting-started/deploying',
    'Releasing': '/getting-started/releasing',
    'Tutorial': '/getting-started/tutorial'
  },
  'Components': {},
  'API Reference': getAPIReferenceMap,
  'Native APIs': {},
  'Theming': {
        'Basics': '/theming/basics',
        'Theming with CSS': '/theming/theming-with-css',
        'Theming with Sass': '/theming/theming-with-sass'
  },
  'Contributing': {},
  'FAQ': {}
};

function getAPIReferenceMap(version) {
  return apiMenu[version];
}
