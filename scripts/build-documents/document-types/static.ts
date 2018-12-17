import {
  DOCUMENTS_DIR,
  Document,
  buildDocuments
} from '../index';

import fs from 'fs-extra';
import glob from 'fast-glob';
import frontMatter from 'front-matter';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build static documents',
  task: () => buildDocuments(getStaticDocuments)
};

async function getStaticDocuments(): Promise<Document[]> {
  const paths = await getMarkdownPaths(DOCUMENTS_DIR);
  return Promise.all(paths.map(async path => {
    const markdown = await readMarkdown(path);
    const { body, attributes } = frontMatter(markdown);
    return {
      ...attributes,
      body: markdownRenderer(body),
      path: (path as string).replace(/md$/, 'json')
    };
  }));
}

const readMarkdown = (path: string): Promise<string> =>
  fs.readFile(path, {
    encoding: 'utf8'
  });

const getMarkdownPaths = (cwd: string): Promise<string[]> =>
  glob('**/*.md', {
    absolute: true,
    cwd
  });

