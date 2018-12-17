import { resolve } from 'path';
import fs from 'fs-extra';
import { JSDOM } from 'jsdom';
import Listr from 'listr';
import Static from './document-types/static';
import Component from './document-types/component';
import CLI from './document-types/cli';

const tasks = new Listr();
tasks.add(Static);
tasks.add(Component);
tasks.add(CLI);
tasks.run().catch(console.error);

export const DOCUMENTS_DIR = resolve(__dirname, '../../src/documents');

export interface Document {
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
    document.title = document.title || h1.textContent;
    h1.remove();
  }

  const headings = [...body.querySelectorAll('h2')].map(heading => ({
    text: heading.textContent,
    hash: heading.getAttribute('id')
  }));

  return {
    ...document,
    body: body.innerHTML,
    headings
  };
}

function writeDocument(document: Document): Promise<any> {
  const { path, ...contents } = document;
  return fs.outputJson(path, contents, {
    spaces: 2
  });
}
