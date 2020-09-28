import { h } from '@stencil/core';

export default () => <docs-nav items={items} />;

const items = {
  'menu-af-tutorial': '/docs/appflow/tutorial',
  'menu-appflow-quickstart': {
    'menu-appflow-quickstart-overview': '/docs/appflow/quickstart',
    'menu-appflow-quickstart-connect': '/docs/appflow/quickstart/connect',
    '': {
      'menu-appflow-quickstart-github': '/docs/appflow/quickstart/github',
      'menu-appflow-quickstart-gitlab': '/docs/appflow/quickstart/gitlab',
      'menu-appflow-quickstart-gitlab-self-managed': '/docs/appflow/quickstart/gitlab-self-managed',
      'menu-appflow-quickstart-bitbucket': '/docs/appflow/quickstart/bitbucket',
      'menu-appflow-quickstart-bitbucket-server': '/docs/appflow/quickstart/bitbucket-server',
      'menu-appflow-quickstart-ionic-remote': '/docs/appflow/quickstart/ionic-remote',
    },
  },
  'menu-appflow-build-stacks': '/docs/appflow/build-stacks',
  'menu-appflow-web-previews': '/docs/appflow/web-previews'
};
