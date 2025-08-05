---
title: 'Ionic Vue Overview'
sidebar_label: Overview
---

<head>
  <title>Ionic Vue Overview | Vue.js Framework Documentation</title>
  <meta
    name="description"
    content="Read this overview to learn how Ionic Vue combines the core Ionic Framework with the tooling and APIs that are tailored to Vue.js developers."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/vue` brings the full power of the Ionic Framework to Vue developers. It offers seamless integration with the Vue ecosystem, so you can build high-quality cross-platform apps using familiar Vue tools, components, and best practices. You also get access to Ionic's extensive UI library and native capabilities.

## Vue Version Support

Ionic Vue v7 supports Vue 3.x. For detailed information on supported versions and our support policy, see the [Ionic Vue Support Policy](/docs/reference/support#ionic-vue).

## Vue Tooling

Ionic Vue projects use the same tooling as standard Vue CLI projects, so you can take advantage of the full Vue CLI feature set for building, testing, and deploying your apps. Starter projects come with useful features enabled by default, such as Vue Router for navigation and TypeScript support for type safety and improved developer experience.

## Native Tooling

[Capacitor](https://capacitorjs.com) is the official cross-platform runtime for Ionic Vue, enabling your apps to run natively on iOS, Android, and the web with a single codebase.

While you can use many [Cordova](https://cordova.apache.org/) plugins with Ionic Vue, Capacitor is the recommended and fully supported solution. The [Ionic CLI](../cli.md) does not provide official Cordova integration for Ionic Vue projects. For more information on using Cordova plugins with Capacitor, see the [Capacitor documentation](https://capacitorjs.com/docs/cordova).

## Installation

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type vue

$ cd myApp
$ ionic serve █
```

## Resources

<DocsCards>

<DocsCard header="Getting Started" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>Quickly set up your first Ionic Vue app and learn the basics of the framework and CLI.</p>
</DocsCard>

<DocsCard header="Vue Documentation" href="https://vuejs.org/guide/introduction.html" icon="/icons/logo-vue-icon.png">
  <p>Learn more about Vue's core concepts, tools, and best practices from the official Vue documentation.</p>
</DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Discover how to handle routing and navigation in Ionic Vue apps using the Vue Router.</p>
</DocsCard>

<DocsCard header="Components" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>Explore Ionic's rich library of UI components for building beautiful apps.</p>
</DocsCard>

<DocsCard header="Theming" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>Learn how to customize the look and feel of your app with Ionic's powerful theming system.</p>
</DocsCard>

<DocsCard header="Capacitor Documentation" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>Explore how to access native device features and deploy your app to iOS, Android, and the web with Capacitor.</p>
</DocsCard>

</DocsCards>
