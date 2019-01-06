import components from '../data/api-components.json';

export default () => <docs-nav items={items}/>;

const items = {
  'API Reference': Object.entries(components).sort()
};
