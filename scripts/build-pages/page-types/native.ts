import plugins from '../../data/native.json';
import {
  Page,
  buildPages
} from '../index';
import renderMarkdown from '../markdown-renderer';

export default {
  title: 'Build native pages',
  task: () => buildPages(getNativePages)
};

const getNativePages = async (): Promise<Page[]> => {
  return plugins.map(plugin => {
    const title = plugin.displayName.trim();
    const path = `/docs/native/${plugin.packageName.slice(14)}`;
    const { premierSlug, capacitorIncompatible, description, usage, repo, platforms } = plugin;
    return {
      title,
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
