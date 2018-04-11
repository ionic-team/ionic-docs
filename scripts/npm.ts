import * as fs from 'fs';

// import * as path from 'path';

import * as config from './config';
import * as utils from './utils';

export async function installAPI() {
  utils.vlog('npm installing monorepo');
  await utils.shell(`cd ${config.IONIC_DIR} && npm ci`);
  utils.vlog('npm installing core');
  return await utils.shell(`cd ${config.IONIC_DIR}/core && npm ci`);
}

export async function buildAPIDocs() {
  utils.vlog('building');
  await utils.shell(`cd ${config.IONIC_DIR}/core && npm run build.docs.json`);
  return JSON.parse(fs.readFileSync(`${config.IONIC_DIR}/core/dist/docs.json`, `utf8`));
}
