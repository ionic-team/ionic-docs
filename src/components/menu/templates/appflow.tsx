import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-appflow': '/docs/appflow',
  'menu-appflow-quickstart': {
    'menu-appflow-quickstart-overview': '/docs/appflow/quickstart',
    'menu-appflow-quickstart-connect': '/docs/appflow/quickstart/connect',
    '': {
      'menu-appflow-quickstart-github': '/docs/appflow/quickstart/github',
      'menu-appflow-quickstart-bitbucket': '/docs/appflow/quickstart/bitbucket',
      'menu-appflow-quickstart-bitbucket-server': '/docs/appflow/quickstart/bitbucket-server',
      'menu-appflow-quickstart-ionic-remote': '/docs/appflow/quickstart/ionic-remote',
    },
    'menu-appflow-quickstart-installation': '/docs/appflow/quickstart/installation',
    'menu-appflow-quickstart-push': '/docs/appflow/quickstart/push',
    'menu-appflow-quickstart-deploy': '/docs/appflow/quickstart/deploy',
    'menu-appflow-quickstart-package': '/docs/appflow/quickstart/package',
    'menu-appflow-quickstart-automation': '/docs/appflow/quickstart/automation',
    'menu-appflow-quickstart-environment': '/docs/appflow/quickstart/environment',
    'menu-appflow-quickstart-native-config': '/docs/appflow/quickstart/native-config'
  },
  'menu-appflow-deploy': {
    'menu-appflow-deploy-intro': '/docs/appflow/deploy/intro',
    'menu-appflow-deploy-setup': '/docs/appflow/deploy/setup',
    'menu-appflow-deploy-builds': '/docs/appflow/deploy/builds',
    'menu-appflow-deploy-channels': '/docs/appflow/deploy/channels',
    'menu-appflow-deploy-api': '/docs/appflow/deploy/api',
    'menu-appflow-deploy-tutorials': '/docs/appflow/deploy/tutorials',
    'menu-appflow-deploy-cli': '/docs/appflow/deploy/cli'
  },
  'menu-appflow-package': {
    'menu-appflow-package-intro': '/docs/appflow/package/intro',
    'menu-appflow-package-builds': '/docs/appflow/package/builds',
    'menu-appflow-package-build-types': '/docs/appflow/package/build-types',
    'menu-appflow-package-credentials': '/docs/appflow/package/credentials',
    'menu-appflow-package-adding-credentials': '/docs/appflow/package/adding-credentials',
    'menu-appflow-package-native-configs': '/docs/appflow/package/native-configs',
    'menu-appflow-package-cli': '/docs/appflow/package/cli'
  },
  'menu-appflow-automation': {
    'menu-appflow-automation-intro': '/docs/appflow/automation/intro',
    'menu-appflow-automation-create': '/docs/appflow/automation/create',
    'menu-appflow-automation-environments': '/docs/appflow/automation/environments',
    'menu-appflow-automation-webhooks': '/docs/appflow/automation/webhooks',
  },
  'menu-appflow-cookbook': {
    'menu-appflow-cookbook-intro': '/docs/appflow/cookbook/intro',
    'menu-appflow-cookbook-private_git': '/docs/appflow/cookbook/private_git',
    'menu-appflow-cookbook-private_npm_modules': '/docs/appflow/cookbook/private_npm_modules',
    'menu-appflow-cookbook-switch_node_version': '/docs/appflow/cookbook/switch_node_version'
  },
  'menu-appflow-devapp': '/docs/appflow/devapp'
};
