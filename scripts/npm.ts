import * as fs from 'fs';
import * as path from 'path';

import * as config from './config';
import { execp, vlog } from './utils';

export async function installAPI() {
  vlog('npm installing monorepo');
  await execp('npm ci', { cwd: config.IONIC_DIR });
  vlog('npm installing core');
  return await execp(`npm ci`, { cwd: path.join(config.IONIC_DIR, 'core') });
}

export async function buildAPIDocs() {
  vlog('building');
  await execp(`cd ${config.IONIC_DIR}/core && npm run build.docs.json`);
  return JSON.parse(
    fs.readFileSync(`${config.IONIC_DIR}/core/dist/docs.json`, `utf8`)
  );
}


export async function getCLIDocs() {
  vlog('npm installing');
  await execp('npm i', {cwd: config.CLI_DIR});
  vlog('running bootstrap');
  await execp('npm run bootstrap', {cwd: config.CLI_DIR});
  vlog('building CLI docs');
  await execp(`npm run docs`, {
    cwd: config.CLI_DIR,
    env: {
      ...process.env,
      FORCE_COLOR: '1'
    }
  });

  return {
    // 'ionic1': JSON.parse(
    //   fs.readFileSync(`${config.CLI_DIR}/docs/ionic1.json`, `utf8`)
    // ),
    // 'ionic-angular': JSON.parse(
    //   fs.readFileSync(`${config.CLI_DIR}/docs/ionic-angular.json`, `utf8`)
    // ),
    'angular': JSON.parse(
      fs.readFileSync(`${config.CLI_DIR}/docs/angular.json`, `utf8`)
    )
  };
}
