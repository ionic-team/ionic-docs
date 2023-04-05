---
title: 'Ionic Vueの概要'
sidebar_label: 概要
---

<head>
  <title>Ionic Vue Overview | Vue.js Framework Documentation</title>
  <meta
    name="description"
    content="Read this overview to learn how Ionic Vue combines the core Ionic Framework with the tooling and APIs that are tailored to Vue.js developers."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Ionic Frameworkのコアな経験と、Vue開発者向けにカスタマイズされたツールやAPIを組み合わせたものが `@ionic/vue` です。

## Vueバージョンサポート

Ionic VueはVue 3.0.0上に構築されています。Ionic Vueの初期バージョンでアプリを構築している場合は、最新のリリースにアップグレードして、Vueの依存関係をアップグレードしてください。

## Vueツール

Ionic Vueプロジェクトには通常のVue CLIプロジェクトと同じツールが付属しています。つまり、Vue CLIとそのすべての機能を使って構築することになります。VueのデフォルトテンプレートにはルーティングやTypeScriptのサポートなど、デフォルトで有効になっている機能がほとんどありませんが、Ionic Vueはそれらをデフォルトで有効にしています。

## Native Tooling

[Capacitor](https://capacitorjs.com) は、Ionic VueウェブアプリをiOS、Android、ウェブ上でネイティブに動作させるための公式クロスプラットフォームアプリライブラリです。

[Cordova](https://cordova.apache.org/) とCordovaプラグインでIonic Vueを使用する際の技術的な制限はありませんが、Capacitorが公式に推奨されています。現時点では、[Ionic CLIツール](/docs/cli) ツールでIonic VueのCordova統合をサポートする計画はない。詳細は [こちら](https://capacitorjs.com/docs/cordova) をご覧ください。

## コミュニティからの情報

- [Using Vue.js with Ionic & Capacitor](https://dev.to/aaronksaunders/using-vue-js-v3-beta-with-ionic-components-capacitor-plugins-2b6f) - Aaron Saunders

## インストール

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type vue

$ ionic serve █
```

## Resources

<DocsCards>
  <DocsCard header="Getting Started" href="your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>Learn the fundamentals you need to know to start building amazing apps with Ionic Framework.</p>
  </DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>Learn the basics of navigation inside your app with Ionic and Vue Router</p>
</DocsCard>

<DocsCard header="Lifecycle" href="lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>Learn about using Ionic lifecycle events in class components and with hooks</p>
</DocsCard>

</DocsCards>
