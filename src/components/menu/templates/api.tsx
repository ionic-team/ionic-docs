import components from '../data/api-components.json';

export default () => <docs-nav items={items}/>;

const items = {
  'API Reference': {
    __class: 'reference-nav',
    ...components
  }
};
