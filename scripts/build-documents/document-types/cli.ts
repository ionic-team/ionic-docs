import {
  DOCUMENTS_DIR,
  Document,
  buildDocuments
} from '../index';

import { join } from 'path';
import renderMarkdown from '../markdown-renderer';
import { commands } from '../data/cli.json';

export default {
  title: 'Build CLI documents',
  task: () => buildDocuments(getCLIDocuments)
};

async function getCLIDocuments(): Promise<Document[]> {
  return commands.map(command => ({
    title: command.name,
    body: renderMarkdown(command.description),
    path: join(DOCUMENTS_DIR, `cli/commands/${command.name.slice(6).replace(/\s/g, '-')}.json`),
    ...command
  }));
}
