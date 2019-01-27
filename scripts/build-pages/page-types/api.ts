import {
  Page,
  buildPages
} from '../index';

import { components } from '@ionic/docs/core.json';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build API pages',
  task: () => buildPages(getAPIPages)
};

async function getAPIPages(): Promise<Page[]> {
  return components.map(component => {
    const title = component.tag;
    const path = `/docs/api/${title.slice(4)}`;
    const { readme, usage, props, methods, ...contents } = component;
    return {
      title,
      path,
      body: markdownRenderer(readme),
      usage: renderUsage(usage),
      props: renderDocsKey(props),
      methods: renderDocsKey(methods),
      ...contents
    };
  });
}

const renderUsage = (usage) => Object.keys(usage).reduce((out, key) => {
  out[key] = markdownRenderer(usage[key]);
  return out;
}, {});

const renderDocsKey = (items) => items.map(item => ({
  ...item,
  docs: markdownRenderer(item.docs)
}));
