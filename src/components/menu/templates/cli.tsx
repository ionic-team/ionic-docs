import { h } from '@stencil/core';

import commands from '../data/cli-commands.json';

export default () => <docs-nav items={items}/>;

const items = {
  'CLI Documentation': {
    'Overview': '/docs/cli',
    'Configuration': '/docs/cli/configuration',
    'Using a Proxy': '/docs/cli/using-a-proxy',
    'Change Log': 'https://github.com/ionic-team/ionic-cli/blob/master/packages/ionic/CHANGELOG.md'
  },
  'Command Reference': Object.entries(commands).sort()
};
