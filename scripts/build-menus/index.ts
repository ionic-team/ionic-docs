import fs from 'fs-extra';
import Listr from 'listr';
import { join, resolve } from 'path';

import { keyBy, slugify } from '../../src/utils';
import { commands } from '../data/cli.json';
import plugins from '../data/native.json';

const MENU_DATA_DIR = resolve(__dirname, '../../src/components/menu/data');

const cliCommandMenu = keyBy(
  commands, item => item.name.slice(6), item => `/docs/cli/commands/${slugify(item.name.slice(6))}`
);

const nativePluginMenu = keyBy(
  plugins, item => item.displayName.trim(), item => `/docs/native/${slugify(item.packageName.slice(14))}`
);

const externalNativePlugins = {
  'Google Maps': 'https://github.com/ionic-team/ionic-native-google-maps'
};

const tasks = new Listr([
  {
    title: 'Build CLI command menu',
    task: () => fs.outputJSON(
      join(MENU_DATA_DIR, 'cli-commands.json'),
      cliCommandMenu,
      { spaces: 2 }
    )
  },
  {
    title: 'Build native plugins menu',
    task: () => fs.outputJSON(
      join(MENU_DATA_DIR, 'native-plugins.json'),
      { ...nativePluginMenu, ...externalNativePlugins },
      { spaces: 2 }
    )
  }
]);

export default tasks;

if (!module.parent) {
  tasks.run().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
