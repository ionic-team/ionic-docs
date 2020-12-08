---
title: Private Ionic Native Enterprise Edition Keys in Open Source Apps
previousText: 'Using private NPM modules'
previousUrl: '/docs/appflow/cookbook/private_npm_modules'
nextText: 'Use different Node in builds'
nextUrl: '/docs/appflow/cookbook/switch_node_version'
---

If you're building a public, open source app that uses Ionic Native Enterprise Edition, you'll likely want to keep the native key secret.

There's just a few steps involved to get this working locally and in CI/CD platforms.

> Note: Any developer building the app locally will still need access to the native key.

## About Native Plugin Keys

In order to install and use Ionic Native Enterprise Edition solutions and premier plugins in your app, a native plugin key is required to authenticate access. After [assigning a key](/docs/enterprise/setup) to an app in Appflow, you run `ionic enterprise register` to register the native key, enabling the ability to install Enterprise solutions/plugins locally.

By default, the `register` command places the native key into `ionic.config.json` and `.npmrc` files. Normally, both of these changes should be committed to version control so that CI/CD systems as well as other team members can restore the plugins from a fresh clone of the app's repository.

However, if the app is open source, this effectively makes the native key public. To keep it private, follow these steps.

## Register Native Key

Create an `.npmrc` file in the root of the app project, then add the following:

```
@ionic-enterprise:registry=https://registry.ionicframework.com/
//registry.ionicframework.com/:_authToken=${ENT_NATIVE_KEY}
```

The `ENT_NATIVE_KEY` part represents the Enterprise Native Key in variable format that will be swapped in dynamically, and can be named however you'd like.

Alternatively, run `ionic enterprise register` then be sure to remove the native key from `ionic.config.json` and change the `_authToken` value to `ENT_NATIVE_KEY` or similar.

## Configure Local Development Environment

When you run `npm install` now, it will fail:

`Failed to replace env in config: ${ENT_NATIVE_KEY}`

npm can no longer authenticate with the Ionic Enterprise registry - it needs a native key.

### Mac

Add the native key to a `.bashrc` or `.bash_profile` file:

```
export ENT_NATIVE_KEY=key_4e243d
```

### Windows

Add the native key as an Environment Variable. Navigate to `System Properties -> Advanced -> Environment Variables`. Under "User variables for [login name]", add a new Variable (`ENT_NATIVE_KEY`) and Value ([the native key]).

Re-run `npm install` to install the native plugins. You may need to close and relaunch any open terminals so the new environment variable can take effect.

## Configure Appflow with a Custom Environment

To build a native version of your app in the cloud with Appflow, configure a [Custom Environment](/docs/appflow/automation/environments#custom-environments).

Within Appflow, open the app you wish to work on and navigate in the sidebar to `Automate -> Environments`, then click `New Environment` (or select an existing environment).

Under `Secrets`, add a new entry: `ENT_NATIVE_KEY` for the Key and the native key for the Value. After saving, select the Environment that contains the Enterprise Native Key when building new native binaries or web builds.

## Configuring other CI/CD Systems

Configuring other CI/CD systems is similar to Appflow: add a new `ENT_NATIVE_KEY` entry per environment so that the Enterprise Native key is used in each build.

For example, in **Vercel**, this is configured within a project's settings screen, then the Environment Variables page.
