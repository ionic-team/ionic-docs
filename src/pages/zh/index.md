---
title: Ionic 框架
meta:
  image: /docs/assets/img/meta/open-graph.png
  title: 用于创建你自己专属的移动设备或桌面应用的开源 UI 工具包
  description: Ionic框架是一个开源的 UI 工具包，使用 Web 技术和集成了受欢迎的流行框架来构建高性能高质量的移动和桌面应用。
tableOfContents: false
demoUrl: https://ionic-docs-demo.herokuapp.com/
demoSourceUrl: https://github.com/ionic-team/docs-demo
nextText: '环境配置'
nextUrl: '/docs/intro/environment'
---

Ionic 框架是一个开源的 UI 工具包，使用 Web 技术——HTML、CSS 和 JavaScript——构建高性能高质量的移动和桌面应用，并且集成了 [Angular](/docs/angular/overview) 、[React](/docs/react/overview) 和 [Vue](/docs/vue/overview) 等流行的框架。

开始构建 从[安装 Ionic](/docs/intro/cli) 开始或按照我们的 [首个应用程序教程](/docs/intro/next#build-your-first-app) 来学习主要概念。

<docs-cards> <docs-card header="Installation Guide" href="/docs/intro/cli" icon="/docs/assets/icons/guide-installation-icon.svg" hover-icon="/docs/assets/icons/guide-installation-icon-hover.svg"> 

设置系统和安装框架的分步指南。</docs-card>

<docs-card header="UI Components" href="/docs/components" icon="/docs/assets/icons/guide-components-icon.svg" hover-icon="/docs/assets/icons/guide-components-icon-hover.svg"> 

深入探索 Ionic 框架的精美 UI 组件库。</docs-card>

<docs-card header="Native Functionality" href="/docs/native" icon="/docs/assets/icons/guide-native-icon.svg" hover-icon="/docs/assets/icons/guide-native-icon-hover.svg"> 

整合本地设备插件，比如蓝牙、地图、HealthKit 等等。</docs-card>

<docs-card header="Theming" href="/docs/theming/basics" icon="/docs/assets/icons/guide-theming-icon.svg" hover-icon="/docs/assets/icons/guide-theming-icon-hover.svg"> 

学习轻松定制和修改您的 Ionic 应用程序的视觉设计以适应您的品牌。</docs-card> </docs-cards>

## 概述

Ionic 框架侧重于前端用户体验或应用程序的 UI 交互（控制、互动、手势、动画）。 它很容易学习，并与其他工具库或框架集成。 例如 [Angular](/docs/angular/overview)、[React](/docs/react/overview) 或 [Vue](/docs/vue/overview)。 或者，它可以在没有任何前端框架的情况下使用简单的[脚本包含](/docs/intro/cdn)独立使用。 如果你想在深入了解 Ionic 框架之前了解更多信息，我们 <a href="https://youtu.be/p3AN3igqiRc" target="_blank">创建了一个视频</a> 来引导你了解基础知识。

### 一段代码，随处运行

Ionic 是唯一的移动应用程序技术栈，它使 Web 开发人员能够从单个代码库为所有主要应用程序商店和移动 Web 构建应用程序。 借助[自适应样式](/docs/theming/platform-styles)，Ionic 应用程序在每台设备上都具有家一般的外观和感觉。

### 专注于性能

Ionic 通过最佳实践（例如高效的硬件加速转换和触摸优化手势）在最新的移动设备上旨表现出色。

### 干净、简单、实用的设计

Ionic 在所有当前的移动设备和平台上旨能完美的工作和显示。 使用现成的组件、排版和适应每个平台的华丽（但可扩展）基本主题，您可以构建自己的风格。

### 本机和网络优化

Ionic 模拟本机应用程序 UI 指南并使用本机 SDK，将本机应用程序的 UI 标准和设备功能与开放网络的全部功能和灵活性结合在一起。 Ionic 使用 Capacitor（或 Cordova）进行本地部署，或作为 Progressive Web App 在浏览器中运行。

## 目标

### 跨平台

构建和部署跨多个平台运行的应用程序，例如原生 iOS、Android、桌面和 Web 作为渐进式 Web 应用程序 - 全部使用一个代码库。 编写一次，随处运行。

### 基于网络标准

Ionic Framework 建立在可靠、[标准化的 Web 技术](/docs/reference/glossary#web-standards)之上：HTML、CSS 和 JavaScript，使用现代 Web API，例如自定义元素和 Shadow DOM。 正因为如此，Ionic 组件有一个稳定的 API，而不是单一平台供应商的心血来潮。

### 漂亮的设计风格

干净、简单、实用。 Ionic 框架旨在所有平台上以开箱即用的方式工作和显示。 从预先设计的组件、排版、交互式范例和华丽（但可扩展）的基本主题开始。

### 简单

Ionic 框架的构建考虑到了简单性，因此创建 Ionic 应用程序很有趣，易于学习，并且几乎任何具有 Web 开发技能的人都可以访问。

## 框架兼容性

虽然过去的 Ionic 版本与 Angular 紧密耦合，但该框架的 4.x 版被重新设计为作为独立的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a>库工作，并集成了最新的 JavaScript 框架，如 Angular。 Ionic 可以成功地用于大多数前端框架，包括 React 和 Vue，但有些框架则需要一个 shim 来获得完整的 Web 组件支持。

### JavaScript

将 Ionic 框架迁移到 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a>的主要目标之一是消除对单个框架的任何硬性要求来托管组件。 这使得核心组件可以在仅使用脚本标记的网页中独立工作。 虽然使用框架对于更大的团队和更大的应用程序来说非常有用，但现在即使在像 WordPress 这样的上下文中，也可以将 Ionic 用作单个页面中的独立库。

### Angular

Angular 一直是使 Ionic 变得伟大的核心。 虽然核心组件已被编写为独立的 Web 组件库，但 `@ionic/angular` 包使与 A​​ngular 生态系统的集成变得轻而易举。 `@ionic/angular` 包含 Angular 开发人员期望从 Ionic 2/3 中获得的所有功能，并与核心 Angular 库（如 Angular 路由器）集成。

### React

Ionic 现在官方支持流行的 React 库。 Ionic React 让 React 开发人员可以使用他们现有的 Web 技能来构建针对 iOS、Android、Web 和桌面的应用程序。 使用 `@ionic/react`，你可以使用所有核心 Ionic 组件，感觉就像使用原生 React 组件一样。

### Vue

Ionic 现在正式支持流行的 Vue 3 库。 Ionic Vue lets Vue developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@ionic/vue`, you can use all the core Ionic components, but in a way that feels like using native Vue components.

### 未来的支持

Support for other frameworks will be considered in future releases.

## Ionic CLI

The official [Ionic CLI](/docs/cli), or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Appflow](#ionic-appflow) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## 应用流程

To help build, deploy, and manage Ionic apps throughout their lifecycle, we offer a commercial service for production apps called <a href="https://ionic.io/appflow" target="_blank">Appflow</a>, which is **separate from the open source Framework.**

Appflow helps developers and teams compile native app builds and deploy live code updates to Ionic apps from a centralized dashboard. Optional paid upgrades are available for more advanced capabilities like publishing directly to app stores, workflow automation, single sign-on (SSO) and access to connected services and integrations.

Appflow requires an <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> and comes with a free “Hobby” plan for those interested in playing around with some of its features.

## 生态系统

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

### 加入社群

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> A lively place for devs to meet and chat in real time.
* <a href="https://twitter.com/ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.

## 授权协议

Ionic Framework is a free and open source project, released under the permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.