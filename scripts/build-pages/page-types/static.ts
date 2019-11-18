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
import moment from 'moment';

// ingored by git
// generated in build-data/file-contrbutors.ts by build-data npm task
import * as GITHUB_COMMITS from '../../data/github-commits.json';

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

  try {
    const { contributors, lastUpdated } = await getFileContributors(filePath);
    return {
      path,
      contributors,
      lastUpdated
    };
  } catch (error) {
    console.warn(error);
    return {
      path,
      contributors: [],
      lastUpdated: new Date('2019-01-23').toISOString()
    };
  }
};

async function getFileContributors(filename) {
  return simplegit().log({ file: filename }).then(status => ({
      contributors: Array.from(new Set(status.all.map(commit =>
        // only add the user ID if we can find it based on the commit hash
        GITHUB_COMMITS[commit.hash] ? GITHUB_COMMITS[commit.hash].id : null
      // filter out null users
      ).filter(user => !!user))),
      lastUpdated: status.latest ? moment(status.latest.date, 'YYYY-MM-DD HH-mm-ss ZZ').toISOString() : ''
    })
  );
}
