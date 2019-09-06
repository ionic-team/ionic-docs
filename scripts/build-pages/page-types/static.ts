import {
  PAGES_DIR,
  Page,
  buildPages,
  updatePageHtmlToHypertext
} from '../index';

import fs from 'fs-extra';
import url from 'url';
import glob from 'fast-glob';
import fetch from 'node-fetch';
import frontMatter from 'front-matter';
import markdownRenderer from '../markdown-renderer';
import simplegit from 'simple-git/promise';

export default {
  title: 'Build static pages',
  task: (_, status) => buildPages(getStaticPages, status)
};

async function getStaticPages(): Promise<Page[]> {
  const paths = await getMarkdownPaths(PAGES_DIR);
  return Promise.all(paths.map(path => toPage(path)));
}

export const getMarkdownPaths = (cwd: string): Promise<string[]> =>
  glob('**/*.md', {
    absolute: true,
    cwd
  });

export interface ToStaticPageOptions {
  prod?: boolean;
}

export const toPage = async (path: string, { prod = true }: ToStaticPageOptions = {}) => {
  return {
    path: path.replace(PAGES_DIR, '/docs').replace(/\.md$/i, ''),
    github: prod ? await getGitHubData(path) : null,
    ...renderMarkdown(await readMarkdown(path))
  };
};

const renderMarkdown = (markdown: string) => {
  const { body, attributes } = frontMatter(markdown);
  return {
    ...attributes,
    body: markdownRenderer(body)
  };
};

const readMarkdown = (path: string): Promise<string> =>
  fs.readFile(path, {
    encoding: 'utf8'
  });

const getGitHubData = async (filePath: string) => {
  const [, path] = /^.+\/(src\/pages\/.+\.md)$/.exec(filePath);
  const since = new Date('2019-01-23').toISOString();

  try {
    const request = await fetch(url.format({
      protocol: 'https',
      hostname: 'api.github.com',
      pathname: 'repos/ionic-team/ionic-docs/commits',
      query: {
        access_token: process.env.GITHUB_TOKEN,
        since,
        path
      }
    }));

    const commits = await request.json();
    const contributors = await getFileContributors(filePath);
    const lastUpdated = commits.length ? commits[0].commit.author.date : since;
    return {
      path,
      contributors,
      lastUpdated
    };
  } catch (error) {
    return {
      path,
      contributors: [],
      lastUpdated: since
    };
  }
};

async function getFileContributors(filename) {
  console.log(filename);
  const git = simplegit();
  return git.log({ file: filename }).then(status =>
    // strip out unecessary data
    Array.from(new Set(status.all.map(commit => commit.author_email)))
  );
}
