import dotenv from 'dotenv';
import { outputJson } from 'fs-extra';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import url from 'url';

dotenv.config();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    
    const response = await fetch(
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
          'Authorization': process.env.GITHUB_TOKEN !== undefined ? `token ${process.env.GITHUB_TOKEN}` : '',
          'User-Agent': 'ionic-docs'
        }
      }
    );

    if (!response.ok) {
      console.error(`GitHub API responded with status: ${response.status}`);
      return {};
    }

    const list = await response.json();
    let commits = list.reduce((obj: any, commit: any) => {
      obj[commit.sha] = {
        id: commit.author.login,
        avatar: commit.author.avatar_url,
        time: commit.commit.committer.date
      };
      return obj;
    }, {});

    // recursively get more commits if there are more to get, limit 2k
    if (Object.keys(commits).length === 100 && page < 20) {
      commits = { ...commits, ...await getAllGHCommits(task, page + 1) };
    }

    return commits;
  } catch (error) {
    console.error('Error fetching commits:', error.message);
    return {};
  }
};
