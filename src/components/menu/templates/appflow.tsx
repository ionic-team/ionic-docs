export default () => <docs-nav items={items}/>;

const items = {
  'Introduction': {
    'Welcome': '/docs/appflow',
    'Installation': '/docs/appflow/basics/getting-started',
    'Git Workflow': '/docs/appflow/basics/git',
    'Help and Support': '/docs/appflow/basics/help'
  },
  'Builds': {
    'Introduction': '/docs/appflow/builds',
    'Deploy Builds': '/docs/appflow/builds/#deploy-builds',
    'Package Builds': '/docs/appflow/builds/#package-builds',
    'Concurrency Limits': '/docs/appflow/builds/#concurrency-limits'
  },
  'Build Environments': {
    'Introduction': '/docs/appflow/environments',
    'Predefined Environments': '/docs/appflow/environments/#predefined-environments',
    'Custom Environments': '/docs/appflow/environments/#custom-environments',
    'Usage': '/docs/appflow/environments/#usage'
  },
  'Deploy': {
    'Introduction': '/docs/appflow/deploy/intro',
    'Setup': '/docs/appflow/deploy/setup',
    'Channels': '/docs/appflow/deploy/channels',
    'Deploy API': '/docs/appflow/deploy/api',
    'Tutorials and Videos': '/docs/appflow/deploy/tutorials',
    'Using Ionic CLI': '/docs/appflow/deploy/cli'
  },
  'Package': {
    'Introduction': '/docs/appflow/package/intro',
    'Generating Credentials': '/docs/appflow/package/credentials',
    'Adding Credentials': '/docs/appflow/package/credentials/#creating-security-profiles',
    'Performing Builds': '/docs/appflow/package/intro#performing-a-build',
    'Native Configurations': '/docs/appflow/package/intro#native-configs',
    'Using Ionic CLI': '/docs/appflow/package/cli'
  },
  'Automation': {
    'Introduction': '/docs/appflow/automation/intro',
    'Create Automations': '/docs/appflow/automation/create',
    'Webhooks': '/docs/appflow/automation/webhooks',
  },
  'Cookbook': {
    'Recipes': '/docs/appflow/cookbook/index'
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
