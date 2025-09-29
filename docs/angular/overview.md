---
title: 'Ionic Angular Overview'
sidebar_label: Overview
---

<head>
  <title>Ionic Angular Overview | Angular Version Support and Tooling</title>
  <meta
    name="description"
    content="@ionic/angular combines the Ionic experience with the tooling and APIs tailored to Angular Developers. Learn more about version support in our Angular Overview."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/angular` brings the full power of the Ionic Framework to Angular developers. It offers seamless integration with the Angular ecosystem, so you can build high-quality cross-platform apps using familiar Angular tools, components, and best practices. You also get access to Ionic's extensive UI library and native capabilities.

## Angular Version Support

Ionic Angular v8 supports Angular versions 16 and above. For detailed information on supported versions and our support policy, see the [Ionic Angular Support Policy](/docs/reference/support#ionic-angular).

## Angular Tooling

Ionic uses the official Angular stack for building apps and routing, so your app can fall in line with the rest of the Angular ecosystem. In cases where more opinionated features are needed, Ionic provides `@ionic/angular-toolkit`, which builds and integrates with the [official Angular CLI](https://angular.io/cli) and provides features that are specific to `@ionic/angular` apps.

## Native Tooling

[Capacitor](https://capacitorjs.com) is the official cross-platform runtime for Ionic Angular, enabling your apps to run natively on iOS, Android, and the web with a single codebase.

## Installation

Before you begin, make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type angular

$ cd myApp
$ ionic serve █
```

## Resources

<DocsCards>

<DocsCard header="Getting Started" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>Quickly set up your first Ionic Angular app and learn the basics of the framework and CLI.</p>
</DocsCard>

<DocsCard header="Angular Documentation" href="https://angular.dev/overview" icon="/icons/logo-angular-icon.png">
  <p>Learn more about Angular's core concepts, tools, and best practices from the official Angular documentation.</p>
</DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Discover how to handle routing and navigation in Ionic Angular apps using the Angular Router.</p>
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
