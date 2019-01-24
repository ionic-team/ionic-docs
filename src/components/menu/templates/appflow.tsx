import { NavItem } from '../../nav/nav-item';

export default () => <docs-nav items={items}/>;

const items = {
  'Welcome to Appflow': '/docs/appflow',
  'Quickstart': new NavItem({
    'Connect your Repo': new NavItem({
      'GitHub': '/docs/appflow/quickstart/github',
      'Bitbucket': '/docs/appflow/quickstart/bitbucket',
      'Bitbucket Server': '/docs/appflow/quickstart/bitbucket-server',
      'Ionic Remote': '/docs/appflow/quickstart/ionic-remote',
    }, '/docs/appflow/quickstart/connect'),
    'Install the Appflow SDK': '/docs/appflow/quickstart/installation',
    'Push a Commit': '/docs/appflow/quickstart/push',
    'Deploy a Live Update': '/docs/appflow/quickstart/deploy',
    'Build a Native Binary': '/docs/appflow/quickstart/package',
    'Create an Automation': '/docs/appflow/quickstart/automation'
  }, '/docs/appflow/quickstart'),
  'Deploy': new NavItem({
    'Setup': '/docs/appflow/deploy/setup',
    'Deploy Builds': '/docs/appflow/deploy/builds',
    'Channels': '/docs/appflow/deploy/channels',
    'Deploy API': '/docs/appflow/deploy/api',
    'Tutorials and Videos': '/docs/appflow/deploy/tutorials',
    'Using Ionic CLI': '/docs/appflow/deploy/cli'
  }, '/docs/appflow/deploy/intro'),
  'Package': new NavItem({
    'Package Builds': '/docs/appflow/package/builds',
    'Package Build Types': '/docs/appflow/package/build-types',
    'Generating Credentials': '/docs/appflow/package/credentials',
    'Adding Credentials': '/docs/appflow/package/adding-credentials',
    'Native Configurations': '/docs/appflow/package/native-configs',
    'Using Ionic CLI': '/docs/appflow/package/cli'
  }, '/docs/appflow/package/intro'),
  'Automations': new NavItem({
    'Create Automations': '/docs/appflow/automation/create',
    'Environments': '/docs/appflow/automation/environments',
    'Webhooks': '/docs/appflow/automation/webhooks',
  }, '/docs/appflow/automation/intro'),
  'Cookbook': new NavItem({
    'Using Private GIT repositories': '/docs/appflow/cookbook/private_git',
    'Using Private NPM modules': '/docs/appflow/cookbook/private_npm_modules'
  }, '/docs/appflow/cookbook/intro'),
  'DevApp: Local Development': '/docs/appflow/devapp',
};
