import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'Premium': {
    "Active Directory": "https://ionicframework.com/integrations/active-directory",
    "Identity Vault": "https://ionicframework.com/enterprise/identity-vault",
    "Offline Support": "https://ionicframework.com/integrations/couchbase-lite",
    "Native Core": "/docs/native/native-core"
  },
  'Standard': Object.entries(plugins).sort()
};
 