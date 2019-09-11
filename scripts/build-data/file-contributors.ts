import dotenv from 'dotenv';
import { resolve } from 'path';
import fetch from 'node-fetch';
import url from 'url';
import { outputJson } from 'fs-extra';

dotenv.config();

const OUTPUT_PATH = resolve(
  __dirname,
  '../data/github-commits.json'
);

export default {
  title: 'Getting a list of past commits',
  task: async (_, task) => {
    const History = await getAllGHCommits(task);
    if (Object.keys(History).length > 0) {
      outputJson(OUTPUT_PATH, History, { spaces: 2 });
    }
  }
};

async function getAllGHCommits(task, page = 1) {
  try {
    task.output = `Getting commits: ${page * 100 - 99} - ${page * 100}`;
    const request = await fetch(url.format({
      protocol: 'https',
      hostname: 'api.github.com',
      pathname: 'repos/ionic-team/ionic-docs/commits',
      query: {
        access_token: process.env.GITHUB_TOKEN,
        per_page: 100,
        page
      }
    }));

    let commits = await request.json().then(list => list.reduce((obj, commit) => {
      obj[commit.sha] = {
        id: commit.author.login,
        avatar: commit.author.avatar_url,
        time: commit.commit.committer.date
      };
      return obj;
    }, {}));

    // recursively get more commits if there are more to get, limit 2k
    if (Object.keys(commits).length === 100 && page < 20) {
      commits = { ...commits, ...await getAllGHCommits(task, page + 1) };
    }

    return commits;
  } catch {
    return {};
  }
}
