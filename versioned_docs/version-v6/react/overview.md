---
title: 'Ionic React Overview'
sidebar_label: Overview
---

<head>
  <title>Ionic React Overview | React Version Support and Tooling</title>
  <meta
    name="description"
    content="@ionic/react combines the Ionic experience with the tooling and APIs tailored to React developers. Learn more about version support and resources in our React Overview."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/react` brings the full power of the Ionic Framework to React developers. It offers seamless integration with the React ecosystem, so you can build high-quality cross-platform apps using familiar React tools, components, and best practices. You also get access to Ionic's extensive UI library and native capabilities.

## React Version Support

Ionic React supports the latest versions of React. For detailed information on supported versions and our support policy, see the [Ionic React Support Policy](/docs/reference/support#ionic-react).

## React Tooling

Ionic React works seamlessly with the React CLI and popular React tooling. You can use your favorite libraries for state management, testing, and more. Ionic React is designed to fit naturally into the React ecosystem, so you can use tools like Create React App, Vite, or Next.js to scaffold and build your apps.

## Native Tooling

[Capacitor](https://capacitorjs.com) is the official cross-platform runtime for Ionic Angular, enabling your apps to run natively on iOS, Android, and the web with a single codebase.

## Installation

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type react

$ cd myApp
$ ionic serve █
```

## Resources

<DocsCards>

<DocsCard header="Getting Started" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>Quickly set up your first Ionic React app and learn the basics of the framework and CLI.</p>
</DocsCard>

<DocsCard header="React Documentation" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>Learn more about React's core concepts, tools, and best practices from the official React documentation.</p>
</DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Discover how to handle routing and navigation in Ionic React apps using the React Router.</p>
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
