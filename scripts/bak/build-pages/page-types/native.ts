import plugins from '../../data/native.json';
import {
  Page,
  buildPages
} from '../index';
import renderMarkdown from '../markdown-renderer';

import metaOverride from '../../data/meta-override.json';
import { MetaInfo } from './api';

export default {
  title: 'Build native pages',
  task: () => buildPages(getNativePages)
};

const nativeMetaInfo: MetaInfo = metaOverride.native;

const getNativePages = async (): Promise<Page[]> => {
  return plugins.map(plugin => {
    const title = plugin.displayName.trim();
    const name = plugin.packageName.slice(14);
    const path = `/docs/native/${name}`;
    const { premierSlug, capacitorIncompatible, description, usage, repo, platforms } = plugin;

    const meta: { title?: string, description?: string} = {};
    const { title: metaTitle, description: metaDescription } = nativeMetaInfo[name] || {};
    if (metaTitle) { meta.title = metaTitle}
    if (metaDescription) { meta.description = metaDescription }

    return {
      title,
      meta: {
        description: description.trim().split('\n')[0],
        ...meta
      },
      path,
      body: renderMarkdown(description),
      repo,
      platforms,
      codeUsage: usage !== undefined ? renderMarkdown(usage) : null,
      package: plugin.packageName,
      cordova: plugin.cordovaPlugin.name,
      capacitorIncompatible: capacitorIncompatible ? capacitorIncompatible : false,
      premierSlug: premierSlug !== undefined ? premierSlug : null,
      template: 'native'
    };
  });
};
