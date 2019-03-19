import {
  Page,
  buildPages
} from '../index';

import plugins from '../../data/native.json';
import renderMarkdown from '../markdown-renderer';

export default {
  title: 'Build native pages',
  task: () => buildPages(getNativePages)
};

async function getNativePages(): Promise<Page[]> {
  return plugins.map(plugin => {
    const title = plugin.displayName.trim();
    const path = `/docs/native/${plugin.packageName.slice(14)}`;
    const { description, usage, repo, platforms } = plugin;
    return {
      title,
      path,
      body: description,
      repo,
      platforms,
      usage: usage ? renderMarkdown(usage) : null,
      package: plugin.packageName,
      cordova: plugin.cordovaPlugin.name,
      template: 'native'
    };
  });
}
