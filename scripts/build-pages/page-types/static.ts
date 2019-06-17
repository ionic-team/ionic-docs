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

export default {
  title: 'Build static pages',
  task: () => buildPages(getStaticPages)
};

async function getStaticPages(): Promise<Page[]> {
  const paths = await getMarkdownPaths(PAGES_DIR);

  return Promise.all(paths.map(toPage));
}

const getMarkdownPaths = (cwd: string): Promise<string[]> =>
  glob('**/*.md', {
    absolute: true,
    cwd
  });

export const toPage = async (path: string) => {
  return {
    path: path.replace(PAGES_DIR, '/docs').replace(/\.md$/, ''),
    github: await getGitHubData(path),
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
    const contributors = Array.from(new Set(commits.map(commit => commit.author.login)));
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
