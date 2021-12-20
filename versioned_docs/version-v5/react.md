---
title: Ionic React
sidebar_label: Overview
hide_title: true
hide_table_of_contents: true
image: /img/meta/open-graph.png
description: Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards
---

import PageStyles from '@components/page/react/PageStyles';

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<PageStyles>

<div class='flex main-flex'>
  <div class="pull-left">
  <h3>One Codebase <br/> Any Platform <br/> <strong>Just React</strong></h3>

- ✓ 100+ mobile optimized React UI components
- ✓ Standard React tooling with react-dom
- ✓ iOS / Android / Electron / PWA

[Get Started](#installation)

  </div>

  <div class="pull-right">
  <img src={require('@site/static/img/frameworks/react-logo.png').default} />
  </div>
</div>

### Build awesome apps across mobile, desktop, and web, with the React you know and love.

Ionic React is native React version of Ionic Framework, the free, open source SDK powering millions of mission-critical apps all over the world.

It's everything you need to ship award-winning apps for any platform, with React.

<div class="flex" >

<div class="pull-left">

## Amazing Design

Choose from over 100 beautiful, mobile-ready UI components, animations, and gestures, lightweight and customized to fit your brand.

[Explore UI components](/docs/components)

</div>

<div class="pull-right">
  <img src="/docs/icons/feature-guide-components-icon.png" />
</div>

</div>

<div class="flex reverse" >

<div class="pull-left">

## Familiar tooling

Ionic React projects are just like React projects, leveraging [react-dom](https://reactjs.org/docs/react-dom.html) and with setup normally found in a [Create React App (CRA)](https://github.com/facebook/create-react-app) app. For [routing and navigation](/docs/react/navigation), React Router is used under the hood.
Compatible with React version 16.8 and above.

</div>

<div class="pull-right">
  <img src={require('@site/static/img/frameworks/react-cli.png').default} class="cli" />
</div>

</div>

<div class="flex">

<div class="pull-left">

## More than mobile

Deploy your Ionic React projects to native iOS, Android, Electron, and the web as a Progressive Web App, using [Capacitor](https://capacitor.ionicframework.com), a modern native runtime. All with one shared codebase.

</div>

<div class="pull-right">
  <img src={require('@site/static/img/native-platforms/group-shot.png').default} />
</div>

</div>

<div class="flex reverse">

  <div class="pull-left">

## Just React

At the end of the day, it's just React. Ionic React uses open web standards and built-in browser capabilities, so it's compatible with any of the millions of web libraries out there.

  </div>

<div class="pull-right">
  <img src={require('@site/static/img/frameworks/react.svg').default} />
</div>

</div>

## Installation

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type react

$ ionic serve █
```

## Resources

<DocsCards>
  <DocsCard header="Getting Started" href="react/your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>Learn the fundamentals you need to know to start building amazing apps with Ionic Framework.</p>
  </DocsCard>

<DocsCard
  header="Add Ionic to Existing React App"
  href="https://dev.to/ionic/adding-ionic-react-to-an-existing-react-project-4kib"
  icon="/icons/logo-react-icon.png"
>
  <p>Use individual components or the complete app experience.</p>
</DocsCard>

<DocsCard header="Navigation" href="react/navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>Learn the basics of navigation inside your app with Ionic and React Router</p>
</DocsCard>

<DocsCard header="Lifecycle" href="react/lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>Learn about using Ionic lifecycle events in class components and with hooks</p>
</DocsCard>

</DocsCards>

</PageStyles>
