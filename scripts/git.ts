import * as fs from 'fs';
// import * as path from 'path';
import { Checkout, Clone, CloneOptions, Git, Repository, Tag} from 'nodegit';

import * as config from './config';
import * as utils from './utils';
import { versions } from '../src/versions';

export async function initRepoRefference(dir, url, branch = 'origin/master') {
  let repoRef;
  if (!fs.existsSync(dir)) {
    const cloneOptions = new CloneOptions();
    cloneOptions.checkoutBranch = 'master';
    console.log(`Cloning repo ${url}\r\nThis may take a few mins...`);
    repoRef = await Clone(url, dir, cloneOptions);
    console.log('Clone complete');
  } else {

    utils.vlog('API Repo exists - Updating');
    repoRef = await Repository.open(dir).then(ref => {
      repoRef = ref;
      return repoRef.fetchAll();
    }).then(function() {
      return repoRef.mergeBranches('master', 'origin/master');
    }).then(() => {
      return repoRef;
    });
  }
  return repoRef;
}

export async function getVersions(repoRef) {
  // get a list of version tags
  const tags = await Tag.list(repoRef);
  return tags.reduce((filtered, tag) => {
    if (versions.indexOf(tag.replace('v', '')) !== -1) {
      filtered.push(tag);
    }
    return filtered;
  }, []);
}

export async function checkout(repoRef, tag) {
  return Checkout.tree(repoRef, tag);
}
