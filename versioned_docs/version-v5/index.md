---
sidebar_label: Overview
slug: /
image: /img/meta/open-graph.png
title: Open-Source UI Toolkit to Create Your Own Mobile or Desktop Apps
description: Ionic Framework is an open-source UI toolkit to create your own mobile and desktop apps using web technologies with integrations for popular frameworks.
hide_table_of_contents: true
demoUrl: https://ionic-docs-demo.herokuapp.com/
demoSourceUrl: https://github.com/ionic-team/docs-demo
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

# Ionic Framework

Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like [Angular](angular/overview.md), [React](react.md), and [Vue](vue/overview.md).

Get started building by [installing Ionic](intro/cli.md) or following our [First App Tutorial](intro/next.md#build-your-first-app) to learn the main concepts.

<intro-end />

<DocsCards>
  <DocsCard header="Installation Guide" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hover-icon="/icons/guide-installation-icon-hover.svg">
    <p>Step-by-step guides to setting up your system and installing the framework.</p>
  </DocsCard>

<DocsCard
  header="UI Components"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hover-icon="/icons/guide-components-icon-hover.svg"
>
  <p>Dive into Ionic Framework's beautifully designed UI component library.</p>
</DocsCard>

<DocsCard
  header="Native Functionality"
  href="/native"
  icon="/icons/guide-native-icon.svg"
  hover-icon="/icons/guide-native-icon-hover.svg"
>
  <p>Integrate native device plugins, like Bluetooth, Maps, HealthKit, and more.</p>
</DocsCard>

  <DocsCard header="Theming" href="/theming/basics" icon="/icons/guide-theming-icon.svg" hover-icon="/icons/guide-theming-icon-hover.svg">
    <p>Learn to easily customize and modify your Ionic app's visual design to fit your brand.</p>
  </DocsCard>
</DocsCards>

## Overview

Ionic Framework focuses on the frontend UX and UI interaction of an app — UI controls, interactions, gestures, animations. It's easy to learn, and integrates with other libraries or frameworks, such as [Angular](angular/overview.md), [React](react/overview.md), or [Vue](vue/overview.md). Alternatively, it can be used standalone without any frontend framework using a simple [script include](intro/cdn.md). If you’d like to learn more about Ionic Framework before diving in, we <a href="https://youtu.be/p3AN3igqiRc" target="_blank">created a video</a> to walk you through the basics.

### One codebase, running everywhere

Ionic is the only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with [Adaptive Styling](theming/platform-styles.md), Ionic apps look and feel at home on every device.

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

Ionic Framework is built on top of reliable, [standardized web technologies](reference/glossary#web-standards): HTML, CSS, and JavaScript, using modern Web APIs such as Custom Elements and Shadow DOM. Because of this, Ionic components have a stable API, and aren't at the whim of a single platform vendor.

### Beautiful Design

Clean, simple, and functional. Ionic Framework is designed to work and display beautifully out-of-the-box across all platforms.
Start with pre-designed components, typography, interactive paradigms, and a gorgeous (yet extensible) base theme.

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

The official [Ionic CLI](cli), or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Appflow](#ionic-appflow) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## Appflow

To help build, deploy, and manage Ionic apps throughout their lifecycle, we offer a commercial service for production apps called <a href="https://ionic.io/appflow" target="_blank">Appflow</a>, which is <strong>separate from the open source Framework.</strong>

Appflow helps developers and teams compile native app builds and deploy live code updates to Ionic apps from a centralized dashboard. Optional paid upgrades are available for more advanced capabilities like publishing directly to app stores, workflow automation, single sign-on (SSO) and access to connected services and integrations.

Appflow requires an <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> and comes with a free “Hobby” plan for those interested in playing around with some of its features.

## Ecosystem

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

### Join the Community

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

- <a href="https://forum.ionicframework.com/" target="_blank">
    Forum:
  </a> A great place for asking questions and sharing ideas.
- <a href="https://twitter.com/ionicframework" target="_blank">
    Twitter:
  </a> Where we post updates and share content from the Ionic community.
- <a href="https://github.com/ionic-team/ionic" target="_blank">
    GitHub:
  </a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
- <a href="https://ionicframework.com/contributors" target="_blank">
    Content authoring:
  </a> Write a technical blog or share your story with the Ionic community.

## License

Ionic Framework is a free and open source project, released under the permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.
