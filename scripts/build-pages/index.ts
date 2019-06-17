import { resolve } from 'path';
import { slugify } from '../../src/utils';
import fs from 'fs-extra';
import { createDocument } from '@stencil/core/mock-doc';
import Listr from 'listr';
import Static, { toPage as toStaticPage } from './page-types/static';
import API from './page-types/api';
import CLI from './page-types/cli';
import Native from './page-types/native';
import { convertHtmlToHypertextData } from './html-to-hypertext-data';

const tasks = new Listr();
tasks.add(Static);
tasks.add(API);
tasks.add(CLI);
tasks.add(Native);
export default tasks;

if (!module.parent) {
  tasks.run().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

export const PAGES_DIR = resolve(__dirname, '../../src/pages');

export interface Page {
  title: string;
  path: string;
  body: string;
  skipIntros?: boolean;
  [key: string]: any;
}

export type PageGetter = () => Promise<Page[]>;

export async function buildPages(getter: PageGetter) {
  const pages = await getter();
  return Promise.all(
    pages
      .map(patchBody)
      .map(updatePageHtmlToHypertext)
      .map(writePage)
  );
}

export async function buildStaticPage(path: string) {
  const page = await toStaticPage(path);
  return writePage(patchBody(page));
}

function patchBody(page: Page): Page {
  const body = createDocument(page.body).body;

  const h1 = body.querySelector('h1');
  if (h1) {
    page.title = page.title || h1.textContent.trim();
    h1.remove();
  }

  if (!page.skipIntros) {
    for (let i = 0, children = [...body.children]; i < children.length; i++) {
      if (children[i].tagName === 'P') {
        children[i].classList.add('intro');
      } else {
        break;
      }
    }
  }

  const headings = [...body.querySelectorAll('h2')].map(heading => ({
    text: heading.textContent.trim(),
    href: `#${heading.getAttribute('id')}`
  }));

  // remove /docs/ and language tag
  const prefix = /^\/docs\/[a-z]{2}\//;
  const pageClass = `page-${slugify(page.path.replace(prefix, ''))}`;

  const [, language] = prefix.exec(page.path);
  if (language && language != 'en') {
    if (page.previousUrl) {
      page.previousUrl = `/docs/${language}/${page.previousUrl.replace(prefix, '')}`;
    }
    if (page.nextUrl) {
      page.nextUrl = `/docs/${language}/${page.nextUrl.replace(prefix, '')}`;
    }
  }

  return {
    ...page,
    body: body.innerHTML,
    headings,
    pageClass
  };
}

export function updatePageHtmlToHypertext(page: Page) {
  page.body = convertHtmlToHypertextData(page.body);
  if (page.docs) {
    page.docs = convertHtmlToHypertextData(page.docs);
  }
  if (page.summary) {
    page.summary = convertHtmlToHypertextData(page.summary);
  }
  if (page.codeUsage) {
    page.codeUsage = convertHtmlToHypertextData(page.codeUsage);
  }
  if (page.usage) {
    const hypertextUsage = {};
    Object.keys(page.usage).forEach(key => {
      const usageContent = page.usage[key];
      hypertextUsage[key] = convertHtmlToHypertextData(usageContent);
    });
    page.usage = hypertextUsage;
  }
  return page;
}

function writePage(page: Page): Promise<any> {
  return fs.outputJson(toFilePath(page.path), page, {
    spaces: 2
  });
}

const toFilePath = (urlPath: string) =>
  `${resolve(PAGES_DIR, urlPath.slice(6))}.json`;
