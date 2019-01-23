export default () => <docs-nav items={items}/>;

const items = {
  'Introduction': {
    'Welcome': '/docs/appflow',
    'Installation': '/docs/appflow/basics/getting-started',
    'Git Workflow': '/docs/appflow/basics/git',
    'Help and Support': '/docs/appflow/basics/help'
  },
  'Deploy': {
    'Introduction': '/docs/appflow/deploy/intro',
    'Setup': '/docs/appflow/deploy/setup',
    'Deploy Builds': '/docs/appflow/deploy/builds',
    'Channels': '/docs/appflow/deploy/channels',
    'Deploy API': '/docs/appflow/deploy/api',
    'Tutorials and Videos': '/docs/appflow/deploy/tutorials',
    'Using Ionic CLI': '/docs/appflow/deploy/cli'
  },
  'Package': {
    'Introduction': '/docs/appflow/package/intro',
    'Package Builds': '/docs/appflow/package/builds',
    'Generating Credentials': '/docs/appflow/package/credentials',
    'Adding Credentials': '/docs/appflow/package/adding-credentials',
    'Native Configurations': '/docs/appflow/package/native-configs',
    'Using Ionic CLI': '/docs/appflow/package/cli'
  },
  'Automations': {
    'Introduction': '/docs/appflow/automation/intro',
    'Create Automations': '/docs/appflow/automation/create',
    'Environments': '/docs/appflow/automation/environments',
    'Webhooks': '/docs/appflow/automation/webhooks',
  },
  'Cookbook': {
    'Using Private GIT repositories': '/docs/appflow/cookbook/private_git',
    'Using Private NPM modules': '/docs/appflow/cookbook/private_npm_modules'
  },
  'DevApp: Local Development': {
    'Download the DevApp': '/docs/appflow/devapp/#download-the-devapp',
    'Using DevApp': '/docs/appflow/devapp/#using-devapp',
    'Capturing Logs': '/docs/appflow/devapp/#capturing-console-logs',
    'CORS': '/docs/appflow/devapp/#cors',
    'Troubleshooting': '/docs/appflow/devapp/#troubleshooting',
    'Reporting Issues': '/docs/appflow/devapp/#reporting-issues-and-feedback',
    'Supported Plugins': '/docs/appflow/devapp/#native-cordova-plugin-support'
  }
};
