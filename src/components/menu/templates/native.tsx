import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'コミュニティエディション': '/docs/native/overview',
  'エンタープライズエディション': '/docs/enterprise',
  'コミュニティプラグイン': Object.entries(plugins).sort()
};
