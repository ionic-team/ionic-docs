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

$ ionic serve █
```

## Resources

<DocsCards>

<DocsCard header="Getting Started" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>Quickly set up your first Ionic React app and learn the basics of the framework and CLI.</p>
</DocsCard>

<DocsCard header="Build Your First App" href="your-first-app" icon="/icons/logo-react-icon.png">
  <p>Build a real Photo Gallery app with Ionic React and native device features.</p>
</DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Master navigation in Ionic React using React Router.</p>
</DocsCard>

<DocsCard header="Components" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>Explore Ionic’s rich library of UI components for building beautiful apps.</p>
</DocsCard>

</DocsCards>
