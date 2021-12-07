---
title: Installing Ionic
sidebar_label: CLI Installation
---

import AppWizard from '@components/page/intro/AppWizard';

<head>
  <title>How to Install The Ionic Framework CLI to Build Mobile Apps</title>
  <meta
    name="description"
    content="The Ionic CLI is the preferred method of installation—offering a wide range of dev tools and help options. Learn how to install Ionic and begin building apps."
  />
</head>

Ionic apps are created and developed primarily through the Ionic [command-line](../reference/glossary.md#cli) utility. The Ionic CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Appflow.

<AppWizard />

## Install the Ionic CLI

Before proceeding, make sure your computer has [Node.js](../reference/glossary.md#node) installed. See [these instructions](environment.md) to set up an environment for Ionic.

Install the Ionic CLI with npm:

```shell
$ npm install -g @ionic/cli
```

If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a change in package name.

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

:::note
The `-g` option means _install globally_. When packages are installed globally, `EACCES` permission errors can occur.
Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](../developing/tips.md#resolving-permission-errors) for more information.
:::

## Start an App

Create an Ionic app using one of the pre-made app templates, or a blank one to start fresh. The three most common starters are the `blank` starter, `tabs` starter, and `sidemenu` starter. Get started with the `ionic start` command:

```shell
$ ionic start
```

![start app thumbnails](/img/installation/start-app-thumbnails.png)

To learn more about starting Ionic apps, see the [Starting Guide](../developing/starting.md).

## Run the App

The majority of Ionic app development can be spent right in the browser using the `ionic serve` command:

```shell
$ cd myApp
$ ionic serve
```

There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the [Running an App Guide](../developing/previewing.md).
