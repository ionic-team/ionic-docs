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

Ionic Angular v7 supports Angular versions 14 through 17. For detailed information on supported versions and our support policy, see the [Ionic Angular Support Policy](/docs/reference/support#ionic-angular).

## Angular Tooling

Ionic uses the official Angular stack for building apps and routing, so your app can fall in line with the rest of the Angular ecosystem. In cases where more opinionated features are needed, Ionic provides `@ionic/angular-toolkit`, which builds and integrates with the [official Angular CLI](https://angular.io/cli) and provides features that are specific to `@ionic/angular` apps.

## Native Tooling

[Capacitor](https://capacitorjs.com) is the official cross-platform runtime for Ionic Angular, enabling your apps to run natively on iOS, Android, and the web with a single codebase.

## Installation

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type angular

$ ionic serve █
```

## Resources

<DocsCards>

<DocsCard header="Getting Started" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>Quickly set up your first Ionic Angular app and learn the basics of the framework and CLI.</p>
</DocsCard>

<DocsCard header="Build Your First App" href="your-first-app" icon="/icons/logo-angular-icon.png">
  <p>Build a real Photo Gallery app with Ionic Angular and native device features.</p>
</DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Master navigation in Ionic Angular using Angular Router.</p>
</DocsCard>

<DocsCard header="Components" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>Explore Ionic's rich library of UI components for building beautiful apps.</p>
</DocsCard>

</DocsCards>
