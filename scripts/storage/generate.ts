import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { STORAGE_DIR, STORAGE_DOCS_PATH, STORAGE_REPO_URL } from '../config';
import render from './template';
import { ensureLatestMaster } from '../git';
import { install as npmInstall } from '../npm';
import { execp, vlog } from '../utils';

// the main task of the API documentation generation process
export default async function generate(task) {
  const startTime = new Date().getTime();
  task.output = 'Updating...';
  const repoRef = await ensureLatestMaster(
    STORAGE_DIR,
    STORAGE_REPO_URL
  );

  vlog('installing and building');
  task.output = 'NPM Installing & Building...';
  npmInstall(STORAGE_DIR);

  vlog('Reading output typescript data file');
  task.output = 'Generating Typedoc...';
  const typeDoc = await getTypeDoc();

  const storageInfo = typeDoc.children[0].children[0];

  writeFileSync(STORAGE_DOCS_PATH, render(storageInfo));

  const endTime = new Date().getTime();
  task.output = `Storage Docs copied in ${endTime - startTime}ms`;
}

async function getTypeDoc() {
  vlog('generating storage docs json');
  await execp([
    `cd ${STORAGE_DIR} && ${join(process.cwd(), 'node_modules/.bin/typedoc')}`,
    `--json ${join('dist/docs.json')} --mode modules`,
    join('src/storage.ts')
  ].join(' '));

  return JSON.parse(
    readFileSync(join(STORAGE_DIR, '/dist/docs.json'), `utf8`)
  );
}



