import * as fs from 'fs';

// import * as path from 'path';

import * as config from './config';
import * as utils from './utils';

export async function installAPI() {
  utils.vlog('npm installing monorepo');
  await utils.shell(`cd ${config.IONIC_DIR} && npm i`);
  utils.vlog('npm installing core');
  return await utils.shell(`cd ${config.IONIC_DIR}/core && npm i`);
}

export async function buildAPIDocs() {
  utils.vlog('building');
  await utils.shell(`cd ${config.IONIC_DIR}/core && npm run build.docs.json`);
  return JSON.parse(
    fs.readFileSync(`${config.IONIC_DIR}/core/dist/docs.json`, `utf8`)
  );
}


export async function getCLIDocs() {
  utils.vlog('npm installing ');
  await utils.shell(
    `cd ${config.CLI_DIR} && npm i && npm run bootstrap && npm run docs`
  );
  return {
    'ionic1': JSON.parse(
      fs.readFileSync(`${config.CLI_DIR}/docs/ionic1.json`, `utf8`)
    ),
    'ionic-angular': JSON.parse(
      fs.readFileSync(`${config.CLI_DIR}/docs/ionic-angular.json`, `utf8`)
    ),
    // 'angular': JSON.parse(
    //   fs.readFileSync(`${config.CLI_DIR}/docs/angular.json`, `utf8`)
    // )
  };
}
