import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'Premium': {
    "Native Core": "/docs/native/native-core",
    "Active Directory": "https://ionicframework.com/integrations/ms-activedirectory-ms-adal",
    "Identity Vault": "https://ionicframework.com/enterprise/identity-vault",
    "Offline Support": "https://ionicframework.com/integrations/couchbase-lite"
  },
  'Standard': Object.entries(plugins).sort()
};
 