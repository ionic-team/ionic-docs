import * as fs from 'fs';
// import * as path from 'path';
import { Checkout, Clone, CloneOptions, Git, Repository, Tag} from 'nodegit';

import * as config from './config';
import * as utils from './utils';
import { versions } from '../src/versions';

let repo = null;

export async function initRepoRefference() {
  if (!fs.existsSync(config.IONIC_DIR)) {
    const cloneOptions = new CloneOptions();
    cloneOptions.checkoutBranch = 'master';
    console.log('Cloning Ionic. This may take a few mins...');
    repo = await Clone(config.MONOREPO_URL, 'ionic', cloneOptions);
    console.log('Clone complete');
  } else {

    utils.vlog('Repo exists - Updating');
    repo = await Repository.open('ionic').then(ref => {
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
  // make sure the versions exist
  const tags = await Tag.list(repo);
  return tags.reduce((filtered, tag) => {
    if (versions.indexOf(tag.replace('v', '')) !== -1) {
      filtered.push(tag);
    }
    return filtered;
  }, []);
}

export async function checkout(tag) {
  return Checkout.tree(repo, tag);
}
