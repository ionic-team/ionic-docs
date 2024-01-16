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

<div className='flex main-flex'>
  <div className="pull-left">
  <h1>コードひとつで <br/> あらゆるプラットフォーム <br/> <strong>まさにReact</strong></h1>

- ✓ 100 以上のモバイルに最適化された React UI コンポーネント
- ✓ React の標準的なツールである react-dom
- ✓ iOS / Android / Electron / PWA に対応

[Get Started](#installation)

  </div>

  <div className="pull-right">
  <img src={require('@site/static/img/frameworks/react-logo.png').default} />
  </div>
</div>

### モバイル、デスクトップ、ウェブにまたがる素晴らしいアプリを、あなたが知っている、そして愛する React で構築してください。

Ionic React は、Ionic Framework のネイティブ React バージョンで、世界中の何百万ものミッションクリティカルなアプリを動かしている、無料のオープンソース SDK です。

React を使用して、あらゆるプラットフォーム向けに受賞歴のあるアプリを出荷するために必要なすべてが揃っています。

<div className="flex" >

<div className="pull-left">

## すばらしいデザイン

100 種類以上の美しいモバイル対応の UI コンポーネント、アニメーション、ジェスチャーから選択でき、軽量であなたのブランドに合うようにカスタマイズできます。

[Explore UI components](/docs/components)

</div>

<div className="pull-right">
  <img src="/docs/icons/feature-guide-components-icon.png" />
</div>

</div>

<div className="flex reverse" >

<div className="pull-left">

## 使い慣れたツール

Ionic の React プロジェクトは React プロジェクトと同じように、[react-dom](https://reactjs.org/docs/react-dom.html) を活用し、[Create React App (CRA)](https://github.com/facebook/create-react-app) アプリで見られるようなセットアップが可能です。ルーティングとナビゲーション](/docs/react/navigation)では、React Router が使用されています。
React バージョン 16.8 以降に対応しています。

</div>

<div className="pull-right">
  <img src={require('@site/static/img/frameworks/react-cli.png').default} className="cli" />
</div>

</div>

<div className="flex">

<div className="pull-left">

## More than mobile

最新のネイティブランタイムである [Capacitor](https://capacitorjs.com) を使用して、Ionic React プロジェクトをネイティブの iOS、Android、Electron、Web に Progressive Web App としてデプロイできます。すべて 1 つの共有コードベースで。

</div>

<div className="pull-right">
  <img src={require('@site/static/img/native-platforms/group-shot.png').default} />
</div>

</div>

<div className="flex reverse">

  <div className="pull-left">

## まさに React

結局のところ、ただの React なのです。Ionic React はオープンな Web 標準とビルトインのブラウザ機能を使用しているため、何百万とある Web ライブラリのどれとも互換性があります。

  </div>

<div className="pull-right">
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
