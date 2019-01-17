import { resolve } from 'path';
import { outputJson, readJson } from 'fs-extra';
import glob from 'fast-glob';

const PAGES_PATH = resolve(__dirname, '../../src/pages');
const INDEX_PATH = resolve(__dirname, '../../src/components/search/data/index.json');

export default {
  title: 'Build search index',
  task: () => buildIndex(PAGES_PATH)
};

async function buildIndex(dir) {
  const paths = await getPaths(dir);
  const records = await Promise.all(paths.map(toRecord));
  return outputJson(
    INDEX_PATH,
    records,
    { spaces: 2 }
  );
}

async function toRecord(path) {
  const { title } = await readJson(path);
  const href = toHref(path);
  return {
    title,
    href,
    type: 'page'
  };
}

function getPaths(cwd) {
  return glob('**/*.json', {
    absolute: true,
    cwd
  });
}

const toHref = (path: string) => {
  const [, page] = /\/pages\/(.+)\.json$/.exec(path);
  return `/docs/${page}`;
};
