import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'Native APIs': Object.entries(plugins).sort()
};
