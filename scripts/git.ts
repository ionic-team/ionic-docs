import * as fs from 'fs';
// import * as path from 'path';
import * as Git from 'nodegit';

import * as config from './config';
import * as utils from './utils';
import { versions } from '../src/versions';

let repo = null;

export async function getUpdatedRefference() {
  if (!fs.existsSync(config.IONIC_DIR)) {
    console.log('Cloning Ionic. This may take a few mins...');
    repo = await Git.Clone(config.MONOREPO_URL, 'ionic');
    console.log('Clone complete');
  } else {

    utils.vlog('Repo exists - Updating');
    repo = await Git.Repository.open('ionic').then(ref => {
      repo = ref;
      return repo.fetchAll();
    }).then(function() {
      return repo.mergeBranches('master', 'origin/master');
    }).then(() => {
      return repo;
    });
  }
  return repo;
}

export async function getVersions() {
  const tags = await Git.Tag.list(repo);
  console.log(versions);
}
