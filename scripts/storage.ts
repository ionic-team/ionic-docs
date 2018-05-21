import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';
import { getMarkup } from './storageDocgen';
import * as git from './git';
import * as npm from './npm';
import { execp, vlog } from './utils';


const navList = {'Overview': '/docs/native'};

// the main task of the API documentation generation process
export async function generate(task) {
  const startTime = new Date().getTime();
  task.output = 'Updating...';
  const repoRef = await git.ensureLatestMaster(
    config.STORAGE_DIR,
    config.STORAGE_REPO_URL
  );

  vlog('installing and building');
  task.output = 'NPM Installing & Building...';
  await execp([
    `cd ${config.STORAGE_DIR}`,
    'npm i',
  ].join(' && '));

  vlog('Reading output typescript data file');
  task.output = 'Generating Typedoc...';
  const typeDoc = await getTypeDoc();

  const storageInfo = typeDoc.children[0].children[0];

  console.log(storageInfo.name);

  fs.writeFileSync(
    path.join(config.STORAGE_DOCS_DIR, 'storage.md'),
    getMarkup(storageInfo)
  );

  const endTime = new Date().getTime();
  task.output = `Storage Docs copied in ${endTime - startTime}ms`;
}

async function getTypeDoc() {
  vlog('generating storage docs json');
  await execp([
    `cd ${config.STORAGE_DIR} && ../../node_modules/.bin/typedoc`,
    '--json dist/docs.json --mode modules',
    'src/storage.ts'
  ].join(' '));

  return JSON.parse(
    fs.readFileSync(`${config.STORAGE_DIR}/dist/docs.json`, `utf8`)
  );
}



