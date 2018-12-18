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
  return Promise.all(paths.map(toDocument));
}

const getMarkdownPaths = (cwd: string): Promise<string[]> =>
  glob('**/*.md', {
    absolute: true,
    cwd
  });

const toDocument = async (path: string) => {
  return {
    path: path.replace(/md$/, 'json'),
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
