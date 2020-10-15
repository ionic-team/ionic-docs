---
title: Ionic Vue
nextText: 'Build Your First App'
nextUrl: '/docs/vue/your-first-app'
---

# Ionic Vue 概览

`@ionic/vue` combines the core Ionic Framework experience with the tooling and APIs that are tailored to Vue Developers.

## Vue 版本支持

Ionic Vue is built on top of Vue 3.0.0. If you've built an app with early versions of Ionic Vue, you'll want to upgrade to the latest release and upgrade your Vue dependencies.

## Vue 工具

Ionic Vue projects ship with the same tooling as regular Vue CLI projects. Meaning you'll be building with the Vue CLI and all of it's features. In addition, starter projects also ship with few features enabled by default, like Routing and TypeScript support.

## 原生工具

[Capacitor](https://capacitor.ionicframework.com) is the official cross-platform app runtime used to make your `Ionic Vue` web app run natively on iOS, Android, and the web.

虽然在使用 `Ionic Vue` 配合 [Cordova](https://cordova.apache.org/) 插件方面没有已知的技术限制，但是 官方推荐使用Capacitor。 目前尚无计划在 [Ionic CLI tooling](/docs/cli) 中支持 `Ionic Vue` Cordova 集成。 欲了解更多详情，请 [在这里查看](https://capacitor.ionicframework.com/docs/cordova)。

## 来自社区

- [Using Vue.js with Ionic & Capacitor](https://dev.to/aaronksaunders/using-vue-js-v3-beta-with-ionic-components-capacitor-plugins-2b6f) - Aaron Saunders

## Installation

<command-line> <command-prompt>npm install -g @ionic/cli</command-prompt> <command-prompt>ionic start myApp tabs --type vue</command-prompt>   
<command-prompt>ionic serve <command-cursor blink></command-cursor></command-prompt> </command-line>

## Resources

<docs-cards> <docs-card header="Getting Started" href="/docs/vue/your-first-app" icon="/docs/assets/icons/feature-component-actionsheet-icon.png"> 

Learn the fundamentals you need to know to start building amazing apps with Ionic Framework.</docs-card>

<docs-card header="Navigation" href="/docs/vue/navigation" icon="/docs/assets/icons/feature-component-navigation-icon.png"> 

Learn the basics of navigation inside your app with Ionic and Vue Router</docs-card>

<docs-card header="Lifecycle" href="/docs/vue/lifecycle" icon="/docs/assets/icons/feature-guide-components-icon.png"> 

Learn about using Ionic lifecycle events in class components and with hooks</docs-card>

</docs-cards>