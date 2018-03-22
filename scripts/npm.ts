import * as fs from 'fs';

// import * as path from 'path';

import * as config from './config';
import * as utils from './utils';

export async function install() {
  utils.vlog('npm installing monorepo');
  await utils.shell('cd ionic && npm ci');
  utils.vlog('npm installing core');
  return await utils.shell('cd ionic/core && npm ci');
}

export async function buildAPIDocs() {
  utils.vlog('building');
  return await utils.shell('cd ionic/core && npm run build');
}


