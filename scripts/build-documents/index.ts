import { resolve } from 'path';
import { slugify } from '../../src/utils';
import fs from 'fs-extra';
import { JSDOM } from 'jsdom';
import Listr from 'listr';
import Static from './document-types/static';
import API from './document-types/api';
import CLI from './document-types/cli';

const tasks = new Listr();
tasks.add(Static);
tasks.add(API);
tasks.add(CLI);
export default tasks;

if (!module.parent) {
  tasks.run().catch(console.error);
}

export const DOCUMENTS_DIR = resolve(__dirname, '../../src/documents');

export interface Document {
  title: string;
  path: string;
  body: string;
  [key: string]: any;
}

export type DocumentGetter = () => Promise<Document[]>;

export async function buildDocuments(getter: DocumentGetter) {
  const documents = await getter();
  return Promise.all(
    documents
      .map(patchDocument)
      .map(writeDocument)
  );
}

function patchDocument(document: Document): Document {
  const { window } = new JSDOM(document.body);
  const { body } = window.document;

  const h1 = body.querySelector('h1');
  if (h1) {
    document.title = document.title || h1.textContent.trim();
    h1.remove();
  }

  for (let i = 0, children = [...body.children]; i < children.length; i++) {
    if (children[i].tagName === 'P') {
      children[i].classList.add('intro');
    } else {
      break;
    }
  }

  const headings = [...body.querySelectorAll('h2')].map(heading => ({
    text: heading.textContent.trim(),
    href: `#${heading.getAttribute('id')}`
  }));

  const pageClass = `page-${slugify(document.path.slice(DOCUMENTS_DIR.length + 1).replace('.json', ''))}`;

  return {
    ...document,
    body: body.innerHTML,
    headings,
    pageClass
  };
}

function writeDocument(document: Document): Promise<any> {
  const { path, ...contents } = document;
  return fs.outputJson(path, contents, {
    spaces: 2
  });
}
