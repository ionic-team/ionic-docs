import { components } from '@ionic/docs/core.json';
import fs from 'fs-extra';
import { join, resolve } from 'path';

import metaOverride from '../../data/meta-override.json';
import {
  Page,
  buildPages
} from '../index';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build API pages',
  task: () => buildPages(getAPIPages)
};

export interface MetaInfo {
  [index: string]: any;
  title?: string;
  description?: string;
}

const apiMetaInfo: MetaInfo = metaOverride.api;

const getAPIPages = async (): Promise<Page[]> => {
  const pages = components.map(async component => {
    const title = component.tag;
    const path = `/docs/api/${title.slice(4)}`;
    const demoUrl = await getDemoUrl(component);
    const { readme, usage, props, methods, ...contents } = component;

    const meta = {
      title: `${component.tag}: Ionic Framework API Docs`,
      description: `The ${component.tag} component is one of many Ionic Framework components used to build apps for Android, iOS, and Progressive Web Apps`
    };

    if (apiMetaInfo[component.tag]) {
      if (apiMetaInfo[component.tag].title) {
        meta.title = apiMetaInfo[component.tag].title;
      }
      if (apiMetaInfo[component.tag].description) {
        meta.description = apiMetaInfo[component.tag].description;
      }
    }

    return {
      title,
      path,
      ...demoUrl,
      body: markdownRenderer(readme, path),
      usage: renderUsage(usage, path),
      props: renderDocsKey(props, path),
      methods: renderDocsKey(methods, path),
      template: 'api',
      meta,
      ...contents
    };
  });
  return Promise.all(pages);
};

const renderUsage = (usage: any, baseUrl: any) => Object.keys(usage).reduce((out: any, key: any) => {
  out[key] = markdownRenderer(usage[key], baseUrl);
  return out;
}, {});

const renderDocsKey = (items: any, baseUrl: any) => items.map((item: any) => ({
  ...item,
  docs: markdownRenderer(item.docs, baseUrl)
}));

const DEMOS_PATH = resolve(__dirname, '../../../src/demos');

const getDemoUrl = async (component: any) => {
  const demoPath = `api/${component.tag.slice(4)}/index.html`;
  const hasDemo = await fs.pathExists(join(DEMOS_PATH, demoPath));
  if (hasDemo) {
    return {
      demoUrl: `/docs/demos/${demoPath}`,
      demoSourceUrl: `https://github.com/ionic-team/ionic-docs/tree/master/src/demos/${demoPath}`
    };
  }
};
