---
title: Ionic Enterprise Edition
---

Accelerate development with powerful solutions to common enterprise use cases - all built and supported by the Ionic team. Ionic’s growing library of solutions are ready to deploy in any of the apps you build with Enterprise Edition

## Setup
In order to provide the best experience you should use the enterprise verison of the Cordova CLI.

```shell
npm uninstall -g cordova # uninstall the regular version if you have it.
npm install -g @ionic-enterprise/cordova # install the Ionic Enterprise Cordova CLI
```

## Register Your Product Key
If you already have an app you can simply register the product key for your application using the Ionic CLI and following
the provided prompts.

```shell
# in your app root
ionic enterprise register
```

Running the register command should generate a `.npmrc` file in you app directory and update your `ionic.config.json` it is safe
to commit both these changes to version control so that CI and other team members can restore the plugins from a fresh clone of the
repo. Now you should be able to install Ionic Enterprise plugins that you have access to by following the instructions on the plugin
docs page.

```shell
npm install @ionic-enterprise/plugin-wrapper # install the typescript wrapper if there is one.
ionic cordova add plugin @ionic-enterprise/plugin-name # add the plugin to your project
```