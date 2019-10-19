---
previousText: 'What is Ionic Framework'
previousUrl: '/docs/intro'
nextText: 'Packages & CDN'
nextUrl: '/docs/installation/cdn'
contributors:
  - rtpHarry
  - dwieeb
---

# Installing Ionic

Ionic apps are created and developed primarily through the Ionic [command-line](/docs/faq/glossary#cli) utility. The Ionic CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Ionic Appflow.

## Install the Ionic CLI

Before proceeding, make sure the latest version of [Node.js](/docs/faq/glossary#node) and [npm](/docs/faq/glossary#npm) are installed. See [Environment Setup](/docs/installation/environment) for details. Install the Ionic CLI globally with npm:

```shell
$ npm install -g ionic
```

> The `-g` option means *install globally*. When packages are installed globally, `EACCES` permission errors can occur.
> 
> Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](/docs/faq/tips#resolving-permission-errors) for more information.

## Start an App

Create an Ionic app using one of the pre-made app templates, or a blank one to start fresh. The three most common starters are the `blank` starter, `tabs` starter, and `sidemenu` starter. Get started with the `ionic start` command:

```shell
$ ionic start myApp tabs
```

![start app thumbnails](/docs/assets/img/installation/start-app-thumbnails.png)

To learn more about starting Ionic apps, see the [Starting Guide](/docs/building/starting).

## Run the App

The majority of Ionic app development can be spent right in the browser using the `ionic serve` command:

```shell
$ cd myApp
$ ionic serve
```

There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the [Running an App Guide](/docs/building/running).