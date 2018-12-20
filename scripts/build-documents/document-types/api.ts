import {
  DOCUMENTS_DIR,
  Document,
  buildDocuments
} from '../index';

import { components } from '@ionic/docs/core.json';
import { join } from 'path';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build API documents',
  task: () => buildDocuments(getAPIDocuments)
};

async function getAPIDocuments(): Promise<Document[]> {
  return components.map(component => {
    const title = component.tag.slice(4);
    const path = `${join(DOCUMENTS_DIR, 'api', title)}.json`;
    const { readme, usage, ...contents } = component;
    return {
      title,
      path,
      body: markdownRenderer(readme),
      usage: renderUsage(usage),
      ...contents
    };
  });
}

const renderUsage = (usage) => Object.keys(usage).reduce((out, key) => {
  out[key] = markdownRenderer(usage[key]);
  return out;
}, {});
