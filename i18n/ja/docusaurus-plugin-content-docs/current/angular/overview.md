---
title: Ionic Angular の概要
sidebar_label: 概要
---

<head>
  <title>Ionic Angular Overview | Angular Version Support and Tooling</title>
  <meta
    name="description"
    content="@ionic/angular combines the Ionic experience with the tooling and APIs tailored to Angular Developers. Learn more about version support in our Angular Overview."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/angular` は core Ionic experience に、Angular 開発者向けにカスタマイズされたツールと API を組み合わせたものです。

## Angular バージョンサポート

Ionic v7 は Angular v14+をサポートしています。アップグレード戦略の一環として、Angular にはアップグレードを自動化するためのツールが組み込まれており、API に変更があった際には開発者にフィードバックを提供します。これにより、アップデートの手間を減らし、エコシステムを最新の状態に保つことができます。

## Angular Tooling

Ionic4 以降では、アプリケーション構築とルーティングのために公式の Angular スタックが使用されているため、あなたのアプリケーションは Angular エコシステムと同じように利用できます。更に独自の機能が必要な場合には、Ionic は`@ionic/angular-toolkit`を提供します。、これは [official Angular CLI](https://angular.jp/cli) を構築して統合し、`@ionic/angular` アプリ固有の機能を提供します。

## Resources

<DocsCards>
  <DocsCard header="Getting Started" href="your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>Learn the fundamentals you need to know to start building amazing apps with Ionic Framework.</p>
  </DocsCard>

<DocsCard header="Navigation" href="navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>Learn the basics of navigation inside your app with Ionic and Angular Router</p>
</DocsCard>

<DocsCard header="Lifecycle" href="lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>Learn about using Ionic lifecycle events in class components and with hooks</p>
</DocsCard>

<DocsCard header="Build Options" href="build-options" icon="/icons/logo-angular-icon.png">
  <p>Learn about using Modules or Standalone Components in Ionic.</p>
</DocsCard>

</DocsCards>
