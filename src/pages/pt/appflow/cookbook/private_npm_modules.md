---
previousText: 'Using private GIT repositories'
previousUrl: '/docs/appflow/cookbook/private_git'
nextText: 'Use different Node in builds'
nextUrl: '/docs/appflow/cookbook/switch_node_version'
---

# Using private NPM modules

Get an authentication token using the npm CLI:

    $ npm token create --read-only
    npm password:
    ┌────────────────┬──────────────────────────────────────┐
    │ token          │ 1a583a54-5515-4058-a3c4-047e5f699d27 │
    ├────────────────┼──────────────────────────────────────┤
    │ cidr_whitelist │                                      │
    ├────────────────┼──────────────────────────────────────┤
    │ readonly       │ true                                 │
    ├────────────────┼──────────────────────────────────────┤
    │ created        │ 2019-01-08T20:53:17.461Z             │
    └────────────────┴──────────────────────────────────────┘
    

Configure an `NPM_TOKEN` secret in your Appflow environment using the generated token as value:

![NPM token secret](/docs/assets/img/appflow/cookbook/npm-token-secret.png)

Check in a `.npmrc` file in the root of your project directory with the following line:

    //registry.npmjs.org/:_authToken=${NPM_TOKEN}