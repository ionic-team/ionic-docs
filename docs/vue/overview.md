---
title: 'Ionic Vueの概要'
sidebar_label: 概要
---

<head>
  <title>Ionic Vueの概要 | Vue.jsフレームワークドキュメント</title>
  <meta
    name="description"
    content="この概要を読んで、Ionic VueがコアIonic FrameworkをVue.js開発者向けに調整されたツールとAPIと組み合わせる方法を学びましょう。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/vue`は、Ionic Frameworkの全機能をVue開発者にもたらします。Vueエコシステムとのシームレスな統合を提供するため、使い慣れたVueツール、コンポーネント、ベストプラクティスを使用して高品質なクロスプラットフォームアプリを構築できます。また、Ionicの豊富なUIライブラリとネイティブ機能にもアクセスできます。

## Vue バージョンサポート

Ionic Vue v8はVue 3.xをサポートしています。サポートされているバージョンとサポートポリシーの詳細については、[Ionic Vueサポートポリシー](/docs/reference/support#ionic-vue)を参照してください。

## Vue ツール

Ionic Vueプロジェクトは、標準のVue CLIプロジェクトと同じツールを使用するため、アプリのビルド、テスト、デプロイにVue CLIの全機能セットを活用できます。スタータープロジェクトには、ナビゲーション用のVue Routerや、型安全性と開発者体験の向上のためのTypeScriptサポートなど、デフォルトで有効になっている便利な機能が含まれています。

## ネイティブツール

[Capacitor](https://capacitorjs.com)は、Ionic Vueの公式クロスプラットフォームランタイムで、単一のコードベースでiOS、Android、Web上でネイティブにアプリを実行できます。

Ionic Vueで多くの[Cordova](https://cordova.apache.org/)プラグインを使用できますが、Capacitorが推奨され、完全にサポートされているソリューションです。[Ionic CLI](../cli.md)は、Ionic Vueプロジェクトの公式Cordova統合を提供していません。CapacitorでCordovaプラグインを使用する方法の詳細については、[Capacitorドキュメント](https://capacitorjs.com/docs/cordova)を参照してください。

## インストール

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type vue

$ cd myApp
$ ionic serve █
```

## リソース

<DocsCards>

<DocsCard header="はじめに" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>最初のIonic Vueアプリを迅速にセットアップし、フレームワークとCLIの基本を学びます。</p>
</DocsCard>

<DocsCard header="Vueドキュメント" href="https://vuejs.org/guide/introduction.html" icon="/icons/logo-vue-icon.png">
  <p>公式Vueドキュメントから、Vueのコアコンセプト、ツール、ベストプラクティスについて詳しく学びます。</p>
</DocsCard>

<DocsCard header="ナビゲーション" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>Vue Routerを使用してIonic Vueアプリでルーティングとナビゲーションを処理する方法を発見します。</p>
</DocsCard>

<DocsCard header="コンポーネント" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>美しいアプリを構築するためのIonicの豊富なUIコンポーネントライブラリを探索します。</p>
</DocsCard>

<DocsCard header="テーマ設定" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>Ionicの強力なテーマ設定システムを使用してアプリの外観と操作性をカスタマイズする方法を学びます。</p>
</DocsCard>

<DocsCard header="Capacitorドキュメント" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>Capacitorを使用してネイティブデバイス機能にアクセスし、アプリをiOS、Android、Webにデプロイする方法を探索します。</p>
</DocsCard>

</DocsCards>
