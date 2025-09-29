---
title: 'Ionic JavaScript Overview'
sidebar_label: Overview
---

<head>
  <title>Ionic JavaScript Overview | JavaScript Version Support and Tooling</title>
  <meta
    name="description"
    content="@ionic/core combines the Ionic experience with the tooling and APIs tailored to JavaScript Developers. Learn more about version support in our JavaScript Overview."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/core` brings the full power of the Ionic Framework to JavaScript developers. It offers seamless integration with the JavaScript ecosystem, so you can build high-quality cross-platform apps using familiar JavaScript tools, components, and best practices. You also get access to Ionic's extensive UI library and native capabilities.

## JavaScript Version Support

Ionic Core supports the latest versions of JavaScript. For detailed information on supported JavaScript runtime versions, see the [Stencil Support Policy](https://stenciljs.com/docs/support-policy#javascript-runtime).

## JavaScript Tooling

Ionic Core works seamlessly with modern JavaScript tooling and build systems. You can use popular tools like Vite, Webpack, or Parcel to scaffold and build your apps. Ionic Core is designed to fit naturally into the JavaScript ecosystem, so you can use your favorite libraries for state management, testing, and more.

## Native Tooling

[Capacitor](https://capacitorjs.com) is the official cross-platform runtime for Ionic Core, enabling your apps to run natively on iOS, Android, and the web with a single codebase.

## Installation

Before you begin, make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

```shell-session
$ npm create vite@latest my-app -- --template vanilla

$ cd my-app
$ npm install && npm install @ionic/core
$ npm run dev █
```

## Resources

<DocsCards>

<DocsCard header="Getting Started" href="ionic-core" icon="/icons/guide-quickstart-icon.png">
  <p>Quickly set up your first Ionic JavaScript app and learn the basics of the framework and CLI.</p>
</DocsCard>

<DocsCard
  header="JavaScript Documentation"
  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  icon="/icons/logo-javascript-icon.png"
>
  <p>
    Learn more about JavaScript's core concepts, tools, and best practices from the official JavaScript documentation.
  </p>
</DocsCard>

<DocsCard header="Navigation" href="/docs/api/router" icon="/icons/component-navigation-icon.png">
  <p>Discover how to handle routing and navigation in Ionic JavaScript apps using the Ionic Router.</p>
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
