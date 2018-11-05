import { existsSync } from 'fs';
import * as semver from 'semver';
import { join } from 'path';

import { GIT_URL } from './config';
import { deleteFolderRecursive, execp, vlog } from './utils';

export async function ensureLatestMaster(
  dir: string,
  url: string,
  branch = 'master'
): Promise<void> {
  // make sure dir, if exists, is a valid git project
  if (existsSync(dir) && !existsSync(join(dir, '.git'))) {
    vlog('Removing non-git directory in sources');
    deleteFolderRecursive(dir);
  }

  if (!existsSync(dir)) {
    // console.log(`Cloning repo ${url}\r\nThis may take a few mins...`);
    await execp(`git clone ${url} ${dir}`);
    if (branch !== 'master') {
      await checkout(dir, branch);
    }
    // console.log('Clone complete');
  } else {
    // console.log(dir);
    vlog(`${dir} Repo exists - Updating`);
    await execp('git --git-dir=.git reset --hard', { cwd: dir });
    await execp(`git --git-dir=.git fetch --tags`, { cwd: dir });
    await execp(`git --git-dir=.git checkout -f ${branch}`, { cwd: dir });
    await execp(`git --git-dir=.git pull --ff-only origin ${branch}`, { cwd: dir });
  }
}

export async function getVersions(dir: string): Promise<semver.SemVer[]> {
  // get a list of version tags
  const { stdout: tags } = await execp(`git --git-dir=.git tag`, { cwd: dir });

  return tags
    .split('\n')
    .map(tag => semver.parse(tag))
    .filter(tag => semver.valid(tag));
}

export async function checkout(dir: string, ref: string): Promise<void> {
  await execp(`git --git-dir=.git checkout -f ${ref}`, { cwd: dir });
}

export async function updateSubmodules(): Promise<void> {
  await execp(`git submodule update --init --remote`);
}
