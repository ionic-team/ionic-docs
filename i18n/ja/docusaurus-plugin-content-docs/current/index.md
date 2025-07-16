---
title: Ionicの紹介
sidebar_label: 概要
slug: /
hide_table_of_contents: true
demoUrl: https://docs-demo.ionic.io/
demoSourceUrl: https://github.com/ionic-team/docs-demo
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>モバイルとディスクトップアプリをつくるためのオープンソースのUIキット</title>
  <meta
    name="description"
    content="Ionic Framework is an open-source UI toolkit to create your own mobile apps using web technologies with integrations for popular frameworks."
  />
  <link rel="canonical" href="https://ionicframework.com/docs" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="x-default" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="en" />
  <meta property="og:url" content="https://ionicframework.com/docs" />
</head>

Ionic Framework はオープンソースの UI ツールキットで、HTML、CSS、JavaScript などのウェブ技術を使って、 [Angular](angular/overview.md), [React](react.md), and [Vue](vue/overview.md) といった人気フレームワークと併用することで高性能で高品質なモバイルアプリやデスクトップアプリを作ることができます。

[Ionic のインストール](intro/cli.md) や [First App Tutorial](intro/next.md#build-your-first-app) を参考に、主な概念を学ぶことができます。

<intro-end />

<DocsCards>
  <DocsCard header="Installation Guide" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>あなたのシステムの設定方法とフレームワークのインストールガイド。</p>
  </DocsCard>

<DocsCard
  header="UI Components"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hoverIcon="/icons/guide-components-icon-hover.svg"
>
  <p>Ionic Frameworkの美しくデザインされたUIコンポーネントにダイブしましょう。</p>
</DocsCard>

<DocsCard
  header="Native Functionality"
  href="/native"
  icon="/icons/guide-native-icon.svg"
  hoverIcon="/icons/guide-native-icon-hover.svg"
>
  <p>BluetoothやMap、HealthKitのようなNativeデバイスプラグインの統合方法。</p>
</DocsCard>

  <DocsCard header="Theming" href="/theming/basics" icon="/icons/guide-theming-icon.svg" hoverIcon="/icons/guide-theming-icon-hover.svg">
    <p>Ionicアプリのビジュアルデザインをブランドに合わせて簡単にカスタマイズおよび変更する方法を学びましょう。</p>
  </DocsCard>
</DocsCards>

## 概要

Ionic は、アプリのフロントエンドの UX と UI インタラクション（UI コントロール、インタラクション、ジェスチャー、アニメーション）に重点を置いています。学習が容易で、 [Angular](angular/overview.md) 、 [React](react.md) 、 [Vue](vue/overview.md) などのライブラリやフレームワークに統合することが可能です。また、シンプルな [script include](intro/cdn.md) を使って、フロントエンドフレームワークなしでスタンドアロンで使用することも可能です。Ionic についてもっと知りたい方向けに、<a href="https://youtu.be/p3AN3igqiRc" target="_blank">私たちはビデオを作成しました</a>。ここから、基本的な使い方を学ぶことができます。

### どこでもひとつのコードで

Ionic は、ウェブ開発者がすべての主要アプリストアとモバイルウェブ用のアプリを単一のコードベースから構築できるすばらしいモバイルアプリスタックです。また、 [Adaptive Styling](theming/platform-styles.md) によって、Ionic アプリはすべてのデバイス上で適切な外観と操作感を提供します。

### パフォーマンスにフォーカス

Ionic は、効率的なハードウェアアクセラレーション、タッチに最適化されたジェスチャなどのベストプラクティスにより、最新のモバイルデバイスで優れたパフォーマンスと動作を実現するように設計されています。

### クリーンでシンプル、機能的なデザイン

Ionic は、現在のすべてのモバイルデバイスおよびプラットフォームで美しく動作し、表示するように設計されています。事前に用意されたコンポーネント、タイポグラフィ、各プラットフォームに対応したすばらしい(まだ拡張可能な)ベーステーマにより、スタイルを構築できます。

### ネイティブおよび Web に最適化

Ionic はネイティブアプリケーションの UI ガイドラインをエミュレートし、ネイティブ SDK を使用して、ネイティブアプリの UI 標準とデバイス機能を、オープン Web の完全なパワーと柔軟性とともに実現します。Ionic は Capacitor(または Cordova)を使ってネイティブにデプロイするか、Progressive Web App としてブラウザで実行します。

## ゴール

### クロスプラットフォーム

ネイティブの iOS、Android、デスクトップ、Web など、複数のプラットフォームで動作するアプリを Progressive Web App として、すべて 1 つのコードベースで開発、デプロイすることができます。一度書けば、どこでも実行できます。

### Web 標準

Ionic Framework は、Custom Elements や Shadow DOM などの最新の Web API を使用して、信頼性の高い [Web 標準テクノロジー](reference/glossary.md#web-standards) : HTML、CSS、および JavaScript の上に構築されています。このため、Ionic コンポーネントは安定した API を備えており、単一のプラットフォーム・ベンダーの思い付きではありません。

### 美しいデザイン

クリーンでシンプル、機能的。Ionic Framework は全てのプラットフォームで動作し、美しく表示されるように設計されています。
あらかじめデザインされたコンポーネント、タイポグラフィ、インタラクティブなパラダイム、すばらしい(まだ拡張可能な)基本テーマから始めます。

### シンプル

Ionic Framework はシンプルさを念頭に置いて構築されているので、Ionic アプリを作成することは楽しく、簡単に学ぶことができ、ウェブ開発スキルを持っている人なら誰でも簡単にアクセスすることができます。

## Framework の互換性

Ionic の過去のリリースは Angular と密結合されていましたが、フレームワークのバージョン 4.x からはスタンドアロンの<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a>ライブラリとして動作するように再設計され、Angular のような最新の JavaScript フレームワークと併用できるようになりました。Ionic は React や Vue を含むほとんどのフロントエンドフレームワークで使用できますが、Web コンポーネントを完全にサポートするには shim が必要なフレームワークもあります。

### JavaScript

Ionic Framework を <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> に移行する主な目標のひとつは、コンポーネントをホストする単一フレームワークのハード要件を取り除くことだった。これにより、コアコンポーネントは、script タグだけで Web ページ内でスタンドアロンで動作できるようになりました。フレームワークを使って作業することは大規模なチームや大規模なアプリにとっては素晴らしいことですが、Ionic を WordPress のようなコンテキストでも、単一ページのスタンドアロンライブラリとして使用することが可能になりました。

### Angular

Angular は常に Ionic の素晴らしさの中心にありました。コアコンポーネントはスタンドアロンの Web Component ライブラリとして動作するように書かれていますが、 `@ionic/angular` パッケージは Angular エコシステムとの統合を簡単にします。 `@ionic/angular` は Ionic 2/3 に期待されるすべての機能を含んでおり、Angular ルータのようなコア Angular ライブラリと統合されています。

### React

Ionic は現在、人気の React ライブラリを公式にサポートしています。Ionic React を使うと、React 開発者は既存の Web スキルを使って、iOS、Android、Web、デスクトップをターゲットにしたアプリを作ることができます。 `@ionic/react` を使えば、すべてのコア Ionic コンポーネントを、ネイティブな React コンポーネントを使っているような感覚で使用することができます。

### Vue

Ionic は現在、人気の Vue3 ライブラリを公式にサポートしています。 Ionic Vue を使用すると、Vue 開発者は既存の Web スキルを使用して、iOS、Android、Web、およびデスクトップを対象とするアプリを構築できます。 `@ionic/vue` を使用すると、すべてのコア Ionic コンポーネントを使用できますが、ネイティブの Vue コンポーネントを使用しているように感じられます。

### Future Support

他のフレームワークのサポートは、将来のリリースで検討される予定です。

## Ionic CLI

公式の [Ionic CLI](cli.md) は、Ionic アプリを迅速に構築し、Ionic 開発者に多くの役に立つコマンドを提供するツールです。CLI には、Ionic のインストールとアップデートに加えて、組み込みの開発サーバ、ビルドとデバッグのためのツールなどが含まれています。 [Appflow](#appflow) のメンバーの場合は、CLI を使用してクラウドの構築と展開を実行し、アカウントを管理できます。

## Appflow

Ionic アプリの構築、デプロイ、ライフサイクルを通じた管理を支援するために、私たちは <strong> オープンソースフレームワーク</strong> とは分離した <a href="https://ionic.io/appflow" target="_blank">Appflow</a> と呼んでいる製品アプリ用の商用サービスを提供しています。

Appflow は、開発者とチームがネイティブアプリのビルドをコンパイルし、一元化されたダッシュボードから Ionic アプリにライブコードアップデートをデプロイするのを支援する。アプリストアへの直接公開、ワークフローの自動化、シングルサインオン(SSO)、接続されたサービスや統合へのアクセスなど、より高度な機能を利用するには、オプションの有償アップグレードを利用できます。

Appflow には <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> が必要で、いくつかの機能を試してみたい人は無料の「Hobby」プランが付いています。

## エコシステム

Ionic Framework はコアチームによって積極的に開発され、メンテナンスされており、そのエコシステムはその成長と採用を促進する開発者と貢献者の国際的なコミュニティによって導かれている。大小さまざまな開発者や企業が Ionic を使って、どこでも動くすばらしいアプリを作ってリリースしています。

### コミュニティに参加する

Ionic の開発者は世界 200 か国以上に何百万人もいます。コミュニティへの参加方法をいくつか紹介します:

<!-- prettier-ignore -->
- <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
- <a href="https://twitter.com/ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
- <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
- <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.

## ライセンス

Ionic Framework は無料のオープンソースプロジェクトで、 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a> ライセンスの下で公開されています。つまり、個人的なプロジェクトや商用プロジェクトで無料で利用できます。MIT ライセンスは、jQuery や Ruby on Rails などの人気プロジェクトで使用されているのと同じライセンスです。

このドキュメントコンテンツ(<a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a>リポジトリにあります)は、Apache 2 ライセンスでライセンスされています。
