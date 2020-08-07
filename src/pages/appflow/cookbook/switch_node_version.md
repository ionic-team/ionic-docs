---
previousText: 'Private Native Plugin Keys'
previousUrl: '/docs/appflow/cookbook/private-native-enterprise-keys'
---

# Use different Node in builds

It is possible to override the Node version used during an Appflow build.

To switch Node version simply add a variable named `OVERRIDE_NODE_VERSION` inside an Appflow environment. Select the  environment when triggering a build.

![Use different Node](/docs/assets/img/appflow/cookbook/switch-node-version.png)

#### Notes

The environment variable `OVERRIDE_NODE_VERSION` can only be set 
to an integer representing the major version: `10` and `12` are currently allowed. 

Even if `12.13.0` is a valid version, it is not a valid input; Future Node LTS releases will be made avaiable when they officially enter LTS status. Only LTS releases are included in the Appflow build system. 

If `OVERRIDE_NODE_VERSION` is set to an invalid or unavailable version the Node version will be defaulted to `12`
