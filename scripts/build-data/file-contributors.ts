import dotenv from 'dotenv';
import { resolve } from 'path';
import glob from 'fast-glob';
import fetch from 'node-fetch';
import url from 'url';
import { outputJson } from 'fs-extra';
import simplegit from 'simple-git/promise';
// import { getMarkdownPaths } from '../build-pages/page-types/static';
import { PAGES_DIR } from '../build-pages';

dotenv.config();

const GH_COMMITS = {};

const OUTPUT_PATH = resolve(
  __dirname,
  '../../dist/gitHubCommits.json'
);

export default {
  title: 'Build Release Notes data',
  task: async () => outputJson(OUTPUT_PATH, await getReleases(), { spaces: 2 })
};

async function getReleases() {
  // const paths = await getMarkdownPaths(PAGES_DIR);
  // console.log(paths);
  // const data = await Object.assign(await paths.map(async path => ({
  //   [path.replace(PAGES_DIR, '')]: await getFileContributors(path) })
  // ));
  // console.log(paths);
  // const data = {};
  // for (let i = 0; i < paths.length; i++) {
  //   console.log(paths[i])
  //   const contributors = await getFileContributors(paths[i]);
  //   // console.log(data[paths[i].replace(PAGES_DIR, '')], contributors);
  //   data[paths[i].replace(PAGES_DIR, '')] = contributors;
  // }
  // await paths.forEach(async path => {
  //   // console.log(path);
  //   const contributors = await getFileContributors(path);
  //   console.log(data[path.replace(PAGES_DIR, '')], contributors);
  //   data[path.replace(PAGES_DIR, '')] = contributors;
  // });

  // console.log('hit', data);
  // return data;

  // console.log(await getFileContributors('package.json'));

  await getAllGHCommits();
  // console.log(GH_COMMITS);
  console.log('gets here', Object.keys(GH_COMMITS).length);
  return GH_COMMITS;

  // return getFileContributors('package.json');
}

const getMarkdownPaths = (cwd: string): Promise<string[]> =>
  glob('**/*.md', {
    absolute: true,
    cwd
  });

// get a deduped array of contributors for a given file from git history
async function getFileContributors(filename) {
  const git = simplegit();
  return git.log({ file: filename }).then(status =>
    // strip out unecessary data
    status.all
  );
}


async function getAllGHCommits(page = 1) {
  const request = await fetch(url.format({
    protocol: 'https',
    hostname: 'api.github.com',
    pathname: 'repos/ionic-team/ionic-docs/commits',
    query: {
      access_token: process.env.GITHUB_TOKEN,
      // since: new Date('2019-01-23').toISOString(),
      per_page: 100,
      page
    }
  }));
  const commits = await request.json();
  commits.forEach(commit => {
    // console.log(commit)
    GH_COMMITS[commit.sha] = {
      id: commit.author.login,
      avatar: commit.author.avatar_url,
      gravatar: commit.author.gravatar_id,
      profile: commit.author.html_url,
      admin: commit.author.site_admin,
      time: commit.commit.committer.date
    };
  });
  // json.items = null;
  // GH_COMMITS = [...GH_COMMITS, ...commits];
  console.log(commits.length);
  if (commits.length === 100 && page < 20) {
    await getAllGHCommits(page + 1);
  }
}
