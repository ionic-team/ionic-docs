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

Ionic FrameworkはオープンソースのUIツールキットで、HTML、CSS、JavaScriptなどのウェブ技術を使って、 [Angular](angular/overview.md), [React](react.md), and [Vue](vue/overview.md) といった人気フレームワークと併用することで高性能で高品質なモバイルアプリやデスクトップアプリを作ることができます。

[Ionicのインストール](intro/cli.md) や [First App Tutorial](intro/next.md#build-your-first-app) を参考に、主な概念を学ぶことができます。

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

Ionicは、アプリのフロントエンドのUXとUIインタラクション（UIコントロール、インタラクション、ジェスチャー、アニメーション）に重点を置いています。学習が容易で、 [Angular](angular/overview.md) 、 [React](react.md) 、 [Vue](vue/overview.md) などのライブラリやフレームワークに統合することが可能です。また、シンプルな [script include](intro/cdn.md) を使って、フロントエンドフレームワークなしでスタンドアロンで使用することも可能です。Ionicについてもっと知りたい方向けに、<a href="https://youtu.be/p3AN3igqiRc" target="_blank">私たちはビデオを作成しました</a>。ここから、基本的な使い方を学ぶことができます。

### どこでもひとつのコードで

Ionicは、ウェブ開発者がすべての主要アプリストアとモバイルウェブ用のアプリを単一のコードベースから構築できるすばらしいモバイルアプリスタックです。また、 [Adaptive Styling](theming/platform-styles.md) によって、Ionicアプリはすべてのデバイス上で適切な外観と操作感を提供します。

### パフォーマンスにフォーカス

Ionicは、効率的なハードウェアアクセラレーション、タッチに最適化されたジェスチャなどのベストプラクティスにより、最新のモバイルデバイスで優れたパフォーマンスと動作を実現するように設計されています。

### クリーンでシンプル、機能的なデザイン

Ionicは、現在のすべてのモバイルデバイスおよびプラットフォームで美しく動作し、表示するように設計されています。事前に用意されたコンポーネント、タイポグラフィ、各プラットフォームに対応したすばらしい(まだ拡張可能な)ベーステーマにより、スタイルを構築できます。

### ネイティブおよびWebに最適化

IonicはネイティブアプリケーションのUIガイドラインをエミュレートし、ネイティブSDKを使用して、ネイティブアプリのUI標準とデバイス機能を、オープンWebの完全なパワーと柔軟性とともに実現します。IonicはCapacitor(またはCordova)を使ってネイティブにデプロイするか、Progressive Web Appとしてブラウザで実行します。

## ゴール

### クロスプラットフォーム

ネイティブのiOS、Android、デスクトップ、Webなど、複数のプラットフォームで動作するアプリをProgressive Web Appとして、すべて1つのコードベースで開発、デプロイすることができます。一度書けば、どこでも実行できます。

### Web標準

Ionic Frameworkは、Custom ElementsやShadow DOMなどの最新のWeb APIを使用して、信頼性の高い [Web標準テクノロジー](reference/glossary.md#web-standards) : HTML、CSS、およびJavaScriptの上に構築されています。このため、Ionicコンポーネントは安定したAPIを備えており、単一のプラットフォーム・ベンダーの思い付きではありません。

### 美しいデザイン

クリーンでシンプル、機能的。Ionic Frameworkは全てのプラットフォームで動作し、美しく表示されるように設計されています。
あらかじめデザインされたコンポーネント、タイポグラフィ、インタラクティブなパラダイム、すばらしい(まだ拡張可能な)基本テーマから始めます。

### シンプル

Ionic Frameworkはシンプルさを念頭に置いて構築されているので、Ionicアプリを作成することは楽しく、簡単に学ぶことができ、ウェブ開発スキルを持っている人なら誰でも簡単にアクセスすることができます。

## Frameworkの互換性

Ionicの過去のリリースはAngularと密結合されていましたが、フレームワークのバージョン4.xからはスタンドアロンの<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a>ライブラリとして動作するように再設計され、Angularのような最新のJavaScriptフレームワークと併用できるようになりました。IonicはReactやVueを含むほとんどのフロントエンドフレームワークで使用できますが、Webコンポーネントを完全にサポートするにはshimが必要なフレームワークもあります。

### JavaScript

Ionic Frameworkを <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> に移行する主な目標のひとつは、コンポーネントをホストする単一フレームワークのハード要件を取り除くことだった。これにより、コアコンポーネントは、scriptタグだけでWebページ内でスタンドアロンで動作できるようになりました。フレームワークを使って作業することは大規模なチームや大規模なアプリにとっては素晴らしいことですが、IonicをWordPressのようなコンテキストでも、単一ページのスタンドアロンライブラリとして使用することが可能になりました。

### Angular

Angularは常にIonicの素晴らしさの中心にありました。コアコンポーネントはスタンドアロンのWeb Componentライブラリとして動作するように書かれていますが、 `@ionic/angular` パッケージはAngularエコシステムとの統合を簡単にします。 `@ionic/angular` はIonic 2/3に期待されるすべての機能を含んでおり、AngularルータのようなコアAngularライブラリと統合されています。

### React

Ionicは現在、人気のReactライブラリを公式にサポートしています。Ionic Reactを使うと、React開発者は既存のWebスキルを使って、iOS、Android、Web、デスクトップをターゲットにしたアプリを作ることができます。 `@ionic/react` を使えば、すべてのコアIonicコンポーネントを、ネイティブなReactコンポーネントを使っているような感覚で使用することができます。

### Vue

Ionicは現在、人気のVue3ライブラリを公式にサポートしています。 Ionic Vueを使用すると、Vue開発者は既存のWebスキルを使用して、iOS、Android、Web、およびデスクトップを対象とするアプリを構築できます。 `@ionic/vue` を使用すると、すべてのコアIonicコンポーネントを使用できますが、ネイティブのVueコンポーネントを使用しているように感じられます。

### Future Support

他のフレームワークのサポートは、将来のリリースで検討される予定です。

## Ionic CLI

公式の [Ionic CLI](cli.md) は、Ionicアプリを迅速に構築し、Ionic開発者に多くの役に立つコマンドを提供するツールです。CLIには、Ionicのインストールとアップデートに加えて、組み込みの開発サーバ、ビルドとデバッグのためのツールなどが含まれています。 [Appflow](#appflow) のメンバーの場合は、CLIを使用してクラウドの構築と展開を実行し、アカウントを管理できます。

## Appflow

Ionicアプリの構築、デプロイ、ライフサイクルを通じた管理を支援するために、私たちは <strong> オープンソースフレームワーク</strong> とは分離した <a href="https://ionic.io/appflow" target="_blank">Appflow</a> と呼んでいる製品アプリ用の商用サービスを提供しています。

Appflowは、開発者とチームがネイティブアプリのビルドをコンパイルし、一元化されたダッシュボードからIonicアプリにライブコードアップデートをデプロイするのを支援する。アプリストアへの直接公開、ワークフローの自動化、シングルサインオン(SSO)、接続されたサービスや統合へのアクセスなど、より高度な機能を利用するには、オプションの有償アップグレードを利用できます。

Appflowには <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> が必要で、いくつかの機能を試してみたい人は無料の「Hobby」プランが付いています。

## エコシステム

Ionic Frameworkはコアチームによって積極的に開発され、メンテナンスされており、そのエコシステムはその成長と採用を促進する開発者と貢献者の国際的なコミュニティによって導かれている。大小さまざまな開発者や企業がIonicを使って、どこでも動くすばらしいアプリを作ってリリースしています。

### コミュニティに参加する

Ionicの開発者は世界200か国以上に何百万人もいます。コミュニティへの参加方法をいくつか紹介します:

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

## ライセンス

Ionic Frameworkは無料のオープンソースプロジェクトで、 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a> ライセンスの下で公開されています。つまり、個人的なプロジェクトや商用プロジェクトで無料で利用できます。MITライセンスは、jQueryやRuby on Railsなどの人気プロジェクトで使用されているのと同じライセンスです。

このドキュメントコンテンツ(<a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a>リポジトリにあります)は、Apache 2ライセンスでライセンスされています。
