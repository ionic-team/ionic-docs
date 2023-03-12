---
title: Ionic React
sidebar_label: 概要
hide_title: true
hide_table_of_contents: true
---

import PageStyles from '@components/page/react/PageStyles';

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Ionic Reactでアプリをつくろう: Framework and Documentation</title>
  <meta
    name="description"
    content="One codebase, any platform, just React. View our documentation for creating apps with Ionic React—the native React version of Ionic Framework's open-source SDK."
  />
</head>

<PageStyles>

<div class='flex main-flex'>
  <div class="pull-left">
  <h1>コードひとつで <br/> あらゆるプラットフォーム <br/> <strong>まさにReact</strong></h1>

- ✓ 100 以上のモバイルに最適化された React UI コンポーネント
- ✓ Reactの標準的なツールであるreact-dom
- ✓ iOS / Android / Electron / PWAに対応

[Get Started](#installation)

  </div>

  <div class="pull-right">
  <img src={require('@site/static/img/frameworks/react-logo.png').default} />
  </div>
</div>

### モバイル、デスクトップ、ウェブにまたがる素晴らしいアプリを、あなたが知っている、そして愛するReactで構築してください。

Ionic Reactは、Ionic FrameworkのネイティブReactバージョンで、世界中の何百万ものミッションクリティカルなアプリを動かしている、無料のオープンソースSDKです。

Reactを使用して、あらゆるプラットフォーム向けに受賞歴のあるアプリを出荷するために必要なすべてが揃っています。

<div class="flex" >

<div class="pull-left">

## すばらしいデザイン

100種類以上の美しいモバイル対応のUIコンポーネント、アニメーション、ジェスチャーから選択でき、軽量であなたのブランドに合うようにカスタマイズできます。

[Explore UI components](/docs/components)

</div>

<div class="pull-right">
  <img src="/docs/icons/feature-guide-components-icon.png" />
</div>

</div>

<div class="flex reverse" >

<div class="pull-left">

## 使い慣れたツール

IonicのReactプロジェクトはReactプロジェクトと同じように、[react-dom](https://reactjs.org/docs/react-dom.html) を活用し、[Create React App (CRA)](https://github.com/facebook/create-react-app) アプリで見られるようなセットアップが可能です。ルーティングとナビゲーション](/docs/react/navigation)では、React Routerが使用されています。
React バージョン 16.8 以降に対応しています。

</div>

<div class="pull-right">
  <img src={require('@site/static/img/frameworks/react-cli.png').default} class="cli" />
</div>

</div>

<div class="flex">

<div class="pull-left">

## More than mobile

最新のネイティブランタイムである [Capacitor](https://capacitorjs.com) を使用して、Ionic ReactプロジェクトをネイティブのiOS、Android、Electron、WebにProgressive Web Appとしてデプロイできます。すべて1つの共有コードベースで。

</div>

<div class="pull-right">
  <img src={require('@site/static/img/native-platforms/group-shot.png').default} />
</div>

</div>

<div class="flex reverse">

  <div class="pull-left">

## まさにReact

結局のところ、ただのReactなのです。Ionic ReactはオープンなWeb標準とビルトインのブラウザ機能を使用しているため、何百万とあるWebライブラリのどれとも互換性があります。

  </div>

<div class="pull-right">
  <img src={require('@site/static/img/frameworks/react.svg').default} />
</div>

</div>

## インストール

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type react

$ ionic serve █
```

## Resources

<DocsCards>
  <DocsCard header="はじめ方" href="react/your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>Ionic Frameworkで素晴らしいアプリを作り始めるために知っておくべき基礎知識を学びます。</p>
  </DocsCard>

<DocsCard
  header="Add Ionic to Existing React App"
  href="/docs/react/adding-ionic-react-to-an-existing-react-project"
  icon="/icons/logo-react-icon.png"
>
  <p>個々のコンポーネントを使用するか、完全なアプリ体験をつくるか。</p>
</DocsCard>

<DocsCard header="ナビゲーション" href="react/navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>IonicとReact Routerでアプリ内ナビゲーションの基本を学ぶ</p>
</DocsCard>

<DocsCard header="ライフサイクル" href="react/lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>Ionicのライフサイクルイベントをクラスコンポーネントやフックで使用する方法について学びます。</p>
</DocsCard>

</DocsCards>

</PageStyles>
