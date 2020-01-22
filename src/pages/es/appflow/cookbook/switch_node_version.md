---
previousText: 'Using private NPM moduless'
previousUrl: '/docs/appflow/cookbook/private_npm_modules'
---

# Use different Node in builds

It is possible to use a different Node version other than the default one (currently Node 10) in a build.


To switch Node version simply add a variable called `OVERRIDE_NODE_VERSION` inside an environment and use such environment in a build.

![Use different Node](/docs/assets/img/appflow/cookbook/switch-node-version.png)

#### Notes

The environment variable `OVERRIDE_NODE_VERSION` can only be set to an integer representing the major version: `8`, `10` and `12` are currently allowed.

Even if `12.13.0` is a valid version, it is not a valid input; `13` is not currently available.

If `OVERRIDE_NODE_VERSION` is set to a version that is not a good input or that is not available, the Node version will be defaulted to `10`