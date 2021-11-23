---
sidebar_label: Overview
---

import DocsCard from '@theme/DocsCard';
import DocsCards from '@theme/DocsCards';

# Ionic Vue Overview

`@ionic/vue` combines the core Ionic Framework experience with the tooling and APIs that are tailored to Vue Developers.

## Vue Version Support

Ionic Vue is built on top of Vue 3.0.0. If you've built an app with early versions of Ionic Vue, you'll want to upgrade to the latest release and upgrade your Vue dependencies.

## Vue Tooling

Ionic Vue projects ship with the same tooling as regular Vue CLI projects. Meaning you'll be building with the Vue CLI and all of it's features. In addition, starter projects also ship with few features enabled by default, like Routing and TypeScript support.

## Native Tooling

[Capacitor](https://capacitor.ionicframework.com) is the official cross-platform app runtime used to make your `Ionic Vue` web app run natively on iOS, Android, and the web.

While there are no known technical limitations to using `Ionic Vue` with [Cordova](https://cordova.apache.org/) plugins, Capacitor is officially recommended. There are no plans to support a Cordova integration for `Ionic Vue` in the [Ionic CLI tooling](../cli.md) at this time. For more details, please [see here](https://capacitor.ionicframework.com/docs/cordova).

## From the Community

- [Using Vue.js with Ionic & Capacitor](https://dev.to/aaronksaunders/using-vue-js-v3-beta-with-ionic-components-capacitor-plugins-2b6f) - Aaron Saunders

## Installation

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type vue

$ ionic serve █
```

## Resources

<DocsCards>
  <DocsCard header="Getting Started" href="your-first-app" icon={require('./_assets/img/feature-component-actionsheet-icon.png').default}>
    <p>Learn the fundamentals you need to know to start building amazing apps with Ionic Framework.</p>
  </DocsCard>

  <DocsCard header="Navigation" href="navigation" icon={require('./_assets/img/feature-component-navigation-icon.png').default}>
    <p>Learn the basics of navigation inside your app with Ionic and Vue Router</p>
  </DocsCard>

  <DocsCard header="Lifecycle" href="lifecycle" icon={require('./_assets/img/feature-guide-components-icon.png').default}>
    <p>Learn about using Ionic lifecycle events in class components and with hooks</p>
  </DocsCard>

</DocsCards>
