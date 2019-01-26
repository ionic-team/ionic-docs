import {
  PAGES_DIR,
  Page,
  buildPages
} from '../index';

import { components } from '@ionic/docs/core.json';
import { join } from 'path';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build API pages',
  task: () => buildPages(getAPIPages)
};

async function getAPIPages(): Promise<Page[]> {
  return components.map(component => {
    const title = component.tag;
    const path = `${join(PAGES_DIR, 'api', title.slice(4))}.json`;
    const baseUrl = `/docs/api/${title.slice(4)}/`;
    const { readme, usage, props, methods, ...contents } = component;
    return {
      title,
      path,
      body: markdownRenderer(readme, baseUrl),
      usage: renderUsage(usage, baseUrl),
      props: renderDocsKey(props, baseUrl),
      methods: renderDocsKey(methods, baseUrl),
      ...contents
    };
  });
}

const renderUsage = (usage, baseUrl) => Object.keys(usage).reduce((out, key) => {
  out[key] = markdownRenderer(usage[key], baseUrl);
  return out;
}, {});

const renderDocsKey = (items, baseUrl) => items.map(item => ({
  ...item,
  docs: markdownRenderer(item.docs, baseUrl)
}));
