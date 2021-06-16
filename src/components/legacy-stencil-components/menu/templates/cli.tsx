import { h } from '@stencil/core';

import commands from '../data/cli-commands.json';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-cli': {
    'menu-cli-overview': '/docs/cli',
    'menu-cli-configuration': '/docs/cli/configuration',
    'menu-cli-livereload': '/docs/cli/livereload',
    'menu-cli-using-a-proxy': '/docs/cli/using-a-proxy',
    'menu-cli-changelog': 'https://github.com/ionic-team/ionic-cli/blob/develop/packages/@ionic/cli/CHANGELOG.md'
  },
  'menu-cli-commands': Object.entries(commands).sort()
};
