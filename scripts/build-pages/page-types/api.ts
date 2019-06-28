import {
  Page,
  buildPages
} from '../index';

import fs from 'fs-extra';
import { join, resolve } from 'path';
import { components } from '@ionic/docs/core.json';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build API pages',
  task: () => buildPages(getAPIPages)
};

async function getAPIPages(): Promise<Page[]> {
  const pages = components.map(async component => {
    const title = component.tag;
    const path = `/docs/api/${title.slice(4)}`;
    const demoUrl = await getDemoUrl(component);
    const { readme, usage, props, methods, ...contents } = component;
    return {
      title,
      path,
      ...demoUrl,
      body: markdownRenderer(readme, path),
      usage: renderUsage(usage, path),
      props: renderDocsKey(props, path),
      methods: renderDocsKey(methods, path),
      template: 'api',
      ...contents
    };
  });
  return Promise.all(pages);
}

const renderUsage = (usage, baseUrl) => Object.keys(usage).reduce((out, key) => {
  out[key] = markdownRenderer(usage[key], baseUrl);
  return out;
}, {});

const renderDocsKey = (items, baseUrl) => items.map(item => ({
  ...item,
  docs: markdownRenderer(item.docs, baseUrl)
}));

const DEMOS_PATH = resolve(__dirname, '../../../src/demos');

const getDemoUrl = async (component) => {
  const demoPath = `api/${component.tag.slice(4)}/index.html`;
  const hasDemo = await fs.pathExists(join(DEMOS_PATH, demoPath));
  if (hasDemo) {
    return {
      demoUrl: `/docs/demos/${demoPath}`,
      demoSourceUrl: `https://github.com/ionic-team/ionic-docs/tree/master/src/demos/${demoPath}`
    };
  }
};
