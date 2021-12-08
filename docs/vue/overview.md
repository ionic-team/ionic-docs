---
sidebar_label: Overview
---

# Ionic Vueの概要

`@ionic/vue` はcore Ionic experienceに、Vue開発者向けにカスタマイズされたツールとAPIを組み合わせたものです。

## Vueバージョンサポート

Ionic VueはVue 3.0.0上に構築されています。Ionic Vueの初期バージョンでアプリを構築している場合は、最新のリリースにアップグレードして、Vueの依存関係をアップグレードしてください。

## Vueツール

Ionic Vueプロジェクトには通常のVue CLIプロジェクトと同じツールが付属しています。つまり、Vue CLIとそのすべての機能を使って構築することになります。VueのデフォルトテンプレートにはルーティングやTypeScriptのサポートなど、デフォルトで有効になっている機能がほとんどありませんが、Ionic Vueはそれらをデフォルトで有効にしています。

## Native Tooling

[Capacitor](https://capacitor.ionicframework.com) は、Ionic VueウェブアプリをiOS、Android、ウェブ上でネイティブに動作させるための公式クロスプラットフォームアプリライブラリです。

[Cordova](https://cordova.apache.org/) とCordovaプラグインでIonic Vueを使用する際の技術的な制限はありませんが、Capacitorが公式に推奨されています。現時点では、[Ionic CLIツール](/docs/cli) ツールでIonic VueのCordova統合をサポートする計画はない。詳細は [こちら](https://capacitor.ionicframework.com/docs/cordova) をご覧ください。

## コミュニティからの情報

- [Using Vue.js with Ionic & Capacitor](https://dev.to/aaronksaunders/using-vue-js-v3-beta-with-ionic-components-capacitor-plugins-2b6f) - Aaron Saunders

## インストール

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type vue

$ ionic serve █
```


## Resources

import DocsCard from '@site/src/components/DocsCard';
import DocsCards from '@site/src/components/DocsCards';

<DocsCards>
  <DocsCard header="Getting Started" href="/docs/vue/your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>Learn the fundamentals you need to know to start building amazing apps with Ionic Framework.</p>
  </DocsCard>

  <DocsCard header="Navigation" href="/docs/vue/navigation" icon="/icons/feature-component-navigation-icon.png">
    <p>Learn the basics of navigation inside your app with Ionic and Vue Router</p>
  </DocsCard>

  <DocsCard header="Lifecycle" href="/docs/vue/lifecycle" icon="/icons/feature-guide-components-icon.png">
    <p>Learn about using Ionic lifecycle events in class components and with hooks</p>
  </DocsCard>


</DocsCards>
