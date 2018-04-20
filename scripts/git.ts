import * as fs from 'fs';
import * as semver from 'semver';

import * as config from './config';
import { execp, vlog } from './utils';

export async function ensureLatestMaster(dir: string, url: string): Promise<void> {
  if (!fs.existsSync(dir)) {
    console.log(`Cloning repo ${url}\r\nThis may take a few mins...`);
    await execp(`git clone ${url} ${dir}`);
    console.log('Clone complete');
  } else {
    vlog('API Repo exists - Updating');
    await execp('git reset --hard', { cwd: dir });
    await execp('git checkout master', { cwd: dir });
    await execp(`git pull --ff-only origin master`, { cwd: dir });
  }
}

export async function getVersions(dir: string): Promise<semver.SemVer[]> {
  // get a list of version tags
  const { stdout: tags } = await execp(`git tag`, { cwd: dir });

  return tags
    .split('\n')
    .map(tag => semver.parse(tag))
    .filter(tag => semver.valid(tag));
}

export async function checkout(dir: string, ref: string): Promise<void> {
  await execp(`git checkout ${ref}`, { cwd: dir });
}
