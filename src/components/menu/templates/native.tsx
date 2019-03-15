import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'Enterprise': {
    'Native Core': '/docs/native/native-core',
    'Active Directory': 'https://ionicframework.com/integrations/ms-activedirectory-ms-adal',
    'Identity Vault': 'docs/native/identity-vault',
    'mParticle': 'docs/native/mparticle',
    'Offline Support': 'https://ionicframework.com/integrations/couchbase-lite'
  },
  'Plugins': Object.entries(plugins).sort()
};
