export default () => <docs-nav items={items}/>;

const items = {
  'Introduction': {
    'Getting Started': '/docs/appflow',
    'Git Workflow': '/docs/appflow/basics/git'
  },
  'Builds': {
    'Build Type': '/docs/appflow/builds/intro',
    'Build Environments': '/docs/appflow/builds/environments'
  },
  'Deploy': {
    'Introduction': '/docs/appflow/deploy/intro',
    'Installation': '/docs/appflow/deploy/setup',
    'Channels': '/docs/appflow/deploy/channels',
    'API Reference': '/docs/appflow/deploy/api'
  },
  'Package': {
    'Introduction': '/docs/appflow/package/intro',
    'Credentials': '/docs/appflow/package/credentials',
    'Builds': '/docs/appflow/package/intro#performing-a-build',
  },
  'Automation': {
    'Intro': '/docs/appflow/automation/intro',
    'Manage': '/docs/appflow/automation/create',
    'Webhooks': '/docs/appflow/automation/webhooks',
  }
};
