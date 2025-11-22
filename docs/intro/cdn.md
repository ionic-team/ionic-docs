---
title: Ionic パッケージ & CDN
sidebar_label: パッケージ & CDN
---

<head>
  <title>Ionic Frameworkパッケージ: CDN、Angular、Vue、React、JavaScript</title>
  <meta
    name="description"
    content="テスト環境、Angular、Vue、React、またはJavaScriptでIonic FrameworkやIonicons CDNをすぐに使い始めるために使用できるさまざまなパッケージを確認してください。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Ionic Frameworkは、Angular、React、Vue、JavaScript用のnpmパッケージと、迅速なプロトタイピング用のCDNリンクを提供しています。下記からフレームワークを選択して始めるか、CDNを使用してブラウザでIonic Frameworkコンポーネントをテストしてください。

## Ionic Angular

新しいIonic Angularアプリを開始するか、既存のAngularプロジェクトにIonicを追加します。

<DocsCards>

<DocsCard
  header="New Angular Project"
  href="../angular/quickstart"
  iconset="/icons/logo-angular-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>Ionic CLIを使用して新しいIonic Angularアプリを作成します。</p>
</DocsCard>

<DocsCard
  header="既存のAngularプロジェクト"
  href="../angular/add-to-existing"
  iconset="/icons/logo-angular-icon.png,/icons/guide-package-icon.png"
>
  <p>既存のAngularプロジェクトにIonic Angularを追加します。</p>
</DocsCard>

</DocsCards>

## Ionic React

新しいIonic Reactアプリを開始するか、既存のReactプロジェクトにIonicを追加します。

<DocsCards>

<DocsCard
  header="New React Project"
  href="../react/quickstart"
  iconset="/icons/logo-react-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>Ionic CLIを使用して新しいIonic Reactアプリを作成します。</p>
</DocsCard>

<DocsCard
  header="既存のReactプロジェクト"
  href="../react/add-to-existing"
  iconset="/icons/logo-react-icon.png,/icons/guide-package-icon.png"
>
  <p>既存のReactプロジェクトにIonic Reactを追加します。</p>
</DocsCard>

</DocsCards>

## Ionic Vue

新しいIonic Vueアプリを開始するか、既存のVueプロジェクトにIonicを追加します。

<DocsCards>

<DocsCard
  header="New Vue Project"
  href="../vue/quickstart"
  iconset="/icons/logo-vue-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>Ionic CLIを使用して新しいIonic Vueアプリを作成します。</p>
</DocsCard>

<DocsCard
  header="既存のVueプロジェクト"
  href="../vue/add-to-existing"
  iconset="/icons/logo-vue-icon.png,/icons/guide-package-icon.png"
>
  <p>既存のVueプロジェクトにIonic Vueを追加します。</p>
</DocsCard>

</DocsCards>

## Ionic JavaScript

新しいIonic JavaScriptアプリを開始します。

<DocsCards>

<DocsCard
  header="New JavaScript Project"
  href="../javascript/quickstart"
  iconset="/icons/logo-javascript-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>Viteを使用して新しいIonic JavaScriptアプリを作成します。</p>
</DocsCard>

</DocsCards>

## Ionic Framework CDN

Ionic Frameworkは、[StackBlitz](https://stackblitz.com/)、[Plunker](https://plnkr.co/)、[Codepen](https://codepen.io)、またはその他のオンラインコードエディタで迅速にテストするために、CDNから含めることができます！

CDN からフレームワークにアクセスするには、 [jsdelivr](https://www.jsdelivr.com/) を使用することをお勧めします。最新バージョンを入手するためには HTML ファイルの `<head>` 要素、もしくはオンラインコードエディタの呼び出しコードに、次のコードを追加します。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

これにより、フレームワークをインストールすることなく、Ionic Frameworkのすべてのコアコンポーネントを使用できます。CSSバンドルには、Ionicのすべての[グローバルスタイルシート](/docs/layout/global-stylesheets.md)が含まれます。

## Ionicons CDN

Ionicons はデフォルトで Ionic Framework に同梱されているので、Ionic を使用している場合はインストールは不要です。Ionic Framework を使用せずに Ionicons を使用するためには、ページの終わりの近くにある `</body>` の閉じタグの直前に以下の `<script>` タグを配置します。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

Ioniconsの使用に関する詳細については、[Ioniconsドキュメント](https://ionic.io/ionicons/usage)をご覧ください。
