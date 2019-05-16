export default () => <docs-nav items={items}/>;

const items = {
  'Welcome to Studio': '/docs/studio',
  'Quickstart': {
    'Overview': '/docs/studio/quickstart',
    'Code & Compose': '/docs/studio/quickstart/code-and-compose',
    'Running Your App': '/docs/studio/quickstart/running',
  },
  'Compose': '/docs/studio/compose',
  'Code': '/docs/studio/code',
};
