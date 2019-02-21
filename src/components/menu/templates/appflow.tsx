export default () => <docs-nav items={items}/>;

const items = {
  'Welcome to Appflow': '/docs/appflow',
  'Quickstart': {
    'Overview': '/docs/appflow/quickstart',
    'Connect your Repo': '/docs/appflow/quickstart/connect',
    'Services': {
      'GitHub': '/docs/appflow/quickstart/github',
      'Bitbucket': '/docs/appflow/quickstart/bitbucket',
      'Bitbucket Server': '/docs/appflow/quickstart/bitbucket-server',
      'Ionic Remote': '/docs/appflow/quickstart/ionic-remote',
    },
    'Install the Appflow SDK': '/docs/appflow/quickstart/installation',
    'Push a Commit': '/docs/appflow/quickstart/push',
    'Deploy a Live Update': '/docs/appflow/quickstart/deploy',
    'Build a Native Binary': '/docs/appflow/quickstart/package',
    'Create an Automation': '/docs/appflow/quickstart/automation',
    'Create an Environment': '/docs/appflow/quickstart/environment',
    'Create a Native Configuration': '/docs/appflow/quickstart/native-config'
  },
  'Deploy': {
    'Overview': '/docs/appflow/deploy/intro',
    'Setup': '/docs/appflow/deploy/setup',
    'Deploy Builds': '/docs/appflow/deploy/builds',
    'Channels': '/docs/appflow/deploy/channels',
    'Deploy API': '/docs/appflow/deploy/api',
    'Tutorials and Videos': '/docs/appflow/deploy/tutorials',
    'Using Ionic CLI': '/docs/appflow/deploy/cli'
  },
  'Package': {
    'Overview': '/docs/appflow/package/intro',
    'Package Builds': '/docs/appflow/package/builds',
    'Package Build Types': '/docs/appflow/package/build-types',
    'Generating Credentials': '/docs/appflow/package/credentials',
    'Adding Credentials': '/docs/appflow/package/adding-credentials',
    'Native Configurations': '/docs/appflow/package/native-configs',
    'Using Ionic CLI': '/docs/appflow/package/cli'
  },
  'Automations': {
    'Overview': '/docs/appflow/automation/intro',
    'Create Automations': '/docs/appflow/automation/create',
    'Environments': '/docs/appflow/automation/environments',
    'Webhooks': '/docs/appflow/automation/webhooks',
  },
  'Cookbook': {
    'Overview': '/docs/appflow/cookbook/intro',
    'Using Private GIT repositories': '/docs/appflow/cookbook/private_git',
    'Using Private NPM modules': '/docs/appflow/cookbook/private_npm_modules'
  },
  'DevApp: Local Development': '/docs/appflow/devapp'
};
