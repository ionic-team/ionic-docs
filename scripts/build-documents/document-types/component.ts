import {
  DOCUMENTS_DIR,
  Document,
  buildDocuments
} from '../index';

import { components } from '@ionic/docs/core.json';
import { join } from 'path';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build component documents',
  task: () => buildDocuments(getComponentDocuments)
};

async function getComponentDocuments(): Promise<Document[]> {
  return components.map(component => {
    const title = component.tag.slice(4);
    const path = `${join(DOCUMENTS_DIR, 'components', title)}.json`;
    const { readme, ...contents } = component;
    return {
      title,
      path,
      body: markdownRenderer(readme),
      ...contents
    };
  });
}
