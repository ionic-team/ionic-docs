import dotenv from 'dotenv';
import { outputJson } from 'fs-extra';
import fetch from 'node-fetch';
import { resolve } from 'path';
import url from 'url';

dotenv.config();

const OUTPUT_PATH = resolve(
  __dirname,
  '../data/github-commits.json'
);

export default {
  title: 'Getting a list of past commits',
  task: async (_: any, task: any) => {
    const History = await getAllGHCommits(task);
    if (Object.keys(History).length > 0) {
      outputJson(OUTPUT_PATH, History, { spaces: 2 });
    }
  }
};

const getAllGHCommits = async (task: any, page = 1) => {
  try {
    task.output = `Getting commits: ${page * 100 - 99} - ${page * 100}`;
    const request = await fetch(
      url.format({
        protocol: 'https',
        hostname: 'api.github.com',
        pathname: 'repos/ionic-team/ionic-docs/commits',
        query: {
          per_page: 100,
          page
        }
      }), {
        headers: {
          'Authorization': process.env.GITHUB_TOKEN !== undefined ? `token ${process.env.GITHUB_TOKEN}` : ''
        }
      }
    );

    let commits = await request.json().then(list => list.reduce((obj: any, commit: any) => {
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
};
