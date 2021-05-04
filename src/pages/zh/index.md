---
title: Ionic 框架
meta:
  image: /docs/assets/img/meta/open-graph.png
  description: Ionic是一个针对网页开发者的应用平台。 使用一套共享的代码基础和开放的网络标准来构建非常棒的移动端、网页端和电脑端应用
tableOfContents: false
demoUrl: https://ionic-docs-demo.herokuapp.com/
demoSourceUrl: https://github.com/ionic-team/docs-demo
nextText: '环境配置'
nextUrl: '/docs/intro/environment'
---

Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like [ Angular](/docs/angular/overview), [React](/docs/react/overview), and [Vue](/docs/vue/overview).

开始构建 从[安装 Ionic](/docs/intro/cli) 开始或按照我们的 [首个应用程序教程](/docs/intro/next#build-your-first-app) 来学习主要概念。

<docs-cards> <docs-card header="Installation Guide" href="/docs/intro/cli" icon="/docs/assets/icons/guide-installation-icon.svg" hover-icon="/docs/assets/icons/guide-installation-icon-hover.svg"> 

设置系统和安装框架的分步指南。</docs-card>

<docs-card header="UI Components" href="/docs/components" icon="/docs/assets/icons/guide-components-icon.svg" hover-icon="/docs/assets/icons/guide-components-icon-hover.svg"> 

深入探索 Ionic 框架的精美 UI 组件库。</docs-card>

<docs-card header="Native Functionality" href="/docs/native" icon="/docs/assets/icons/guide-native-icon.svg" hover-icon="/docs/assets/icons/guide-native-icon-hover.svg"> 

整合本地设备插件，比如蓝牙、地图、HealthKit 等等。</docs-card>

<docs-card header="Theming" href="/docs/theming/basics" icon="/docs/assets/icons/guide-theming-icon.svg" hover-icon="/docs/assets/icons/guide-theming-icon-hover.svg"> 

学习轻松定制和修改您的 Ionic 应用程序的视觉设计以适应您的品牌。</docs-card> </docs-cards>

## Overview

Ionic Framework focuses on the frontend UX and UI interaction of an app — UI controls, interactions, gestures, animations. It's easy to learn, and integrates with other libraries or frameworks, such as [Angular](/docs/angular/overview), [React](/docs/react/overview), or [Vue](/docs/vue/overview). Alternatively, it can be used standalone without any frontend framework using a simple [script include](/docs/intro/cdn). If you’d like to learn more about Ionic Framework before diving in, we <a href="https://youtu.be/p3AN3igqiRc" target="_blank">created a video</a> to walk you through the basics.

### One codebase, running everywhere

Ionic is the only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with [Adaptive Styling](/docs/theming/platform-styles), Ionic apps look and feel at home on every device.

### A focus on performance

Ionic is built to perform and behave great on the latest mobile devices with best practices like efficient hardware accelerated transitions, and touch-optimized gestures.

### Clean, simple, and functional design

Ionic is designed to work and display beautifully on all current mobile devices and platforms. With ready-made components, typography, and a gorgeous (yet extensible) base theme that adapts to each platform, you'll be building in style.

### Native and Web optimized

Ionic emulates native app UI guidelines and uses native SDKs, bringing the UI standards and device features of native apps together with the full power and flexibility of the open web. Ionic uses Capacitor (or Cordova) to deploy natively, or runs in the browser as a Progressive Web App.

## Goals

### Cross-platform

Build and deploy apps that work across multiple platforms, such as native iOS, Android, desktop, and the web as a Progressive Web App - all with one code base. Write once, run anywhere.

### Web Standards-based

Ionic Framework is built on top of reliable, [standardized web technologies](/docs/reference/glossary#web-standards): HTML, CSS, and JavaScript, using modern Web APIs such as Custom Elements and Shadow DOM. Because of this, Ionic components have a stable API, and aren't at the whim of a single platform vendor.

### Beautiful Design

Clean, simple, and functional. Ionic Framework is designed to work and display beautifully out-of-the-box across all platforms. Start with pre-designed components, typography, interactive paradigms, and a gorgeous (yet extensible) base theme.

### Simplicity

Ionic Framework is built with simplicity in mind, so that creating Ionic apps is enjoyable, easy to learn, and accessible to just about anyone with web development skills.

## Framework Compatibility

While past releases of Ionic were tightly coupled to Angular, version 4.x of the framework was re-engineered to work as a standalone <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a> library, with integrations for the latest JavaScript frameworks, like Angular. Ionic can be used in most frontend frameworks with success, including React and Vue, though some frameworks need a shim for full Web Component support.

### JavaScript

One of the main goals with moving Ionic Framework to <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> was to remove any hard requirement on a single framework to host the components. This made it possible for the core components to work standalone in a web page with just a script tag. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Ionic as a standalone library in a single page even in a context like WordPress.

### Angular

Angular has always been at the center of what makes Ionic great. While the core components have been written to work as a standalone Web Component library, the `@ionic/angular` package makes integration with the Angular ecosystem a breeze. `@ionic/angular` includes all the functionality that Angular developers would expect coming from Ionic 2/3, and integrates with core Angular libraries, like the Angular router.

### React

Ionic now has official support for the popular React library. Ionic React lets React developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@ionic/react`, you can use all the core Ionic components, but in a way that feels like using native React components.

### Vue

Ionic now has official support for the popular Vue 3 library. Ionic Vue lets Vue developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@ionic/vue`, you can use all the core Ionic components, but in a way that feels like using native Vue components.

### Future Support

Support for other frameworks will be considered in future releases.

## Ionic CLI

The official [Ionic CLI](/docs/cli), or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Appflow](#ionic-appflow) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## Appflow

To help build, deploy, and manage Ionic apps throughout their lifecycle, we offer a commercial service for production apps called <a href="https://ionic.io/appflow" target="_blank">Appflow</a>, which is **separate from the open source Framework.**

Appflow helps developers and teams compile native app builds and deploy live code updates to Ionic apps from a centralized dashboard. Optional paid upgrades are available for more advanced capabilities like publishing directly to app stores, workflow automation, single sign-on (SSO) and access to connected services and integrations.

Appflow requires an <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> and comes with a free “Hobby” plan for those interested in playing around with some of its features.

## Ecosystem

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

### Join the Community

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> A lively place for devs to meet and chat in real time.
* <a href="https://twitter.com/ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.

## License

Ionic Framework is a free and open source project, released under the permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.