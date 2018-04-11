import * as fs from 'fs';
// import * as path from 'path';
import { Checkout, Clone, CloneOptions, Git, Repository, Tag} from 'nodegit';

import * as config from './config';
import * as utils from './utils';
import { versions } from '../src/versions';

let APIrepo = null;

export async function initAPIRepoRefference() {
  if (!fs.existsSync(config.IONIC_DIR)) {
    const cloneOptions = new CloneOptions();
    cloneOptions.checkoutBranch = 'master';
    console.log('Cloning Ionic. This may take a few mins...');
    APIrepo = await Clone(config.MONOREPO_URL, config.IONIC_DIR, cloneOptions);
    console.log('Clone complete');
  } else {

    utils.vlog('Repo exists - Updating');
    APIrepo = await Repository.open(config.IONIC_DIR).then(ref => {
      APIrepo = ref;
      return APIrepo.fetchAll();
    }).then(function() {
      return APIrepo.mergeBranches('master', 'origin/master');
    }).then(() => {
      return APIrepo;
    });
  }
  return APIrepo;
}

export async function getAPIVersions() {
  // make sure the versions exist
  const tags = await Tag.list(APIrepo);
  return tags.reduce((filtered, tag) => {
    if (versions.indexOf(tag.replace('v', '')) !== -1) {
      filtered.push(tag);
    }
    return filtered;
  }, []);
}

export async function checkout(tag) {
  return Checkout.tree(APIrepo, tag);
}
