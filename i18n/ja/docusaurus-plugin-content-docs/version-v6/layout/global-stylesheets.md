---
title: グローバルスタイルシート
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>グローバルスタイルシート: Styled CSS Component Options for Ionic Apps</title>
  <meta
    name="description"
    content="While Ionic component styles are self-contained, there are several global stylesheets and CSS options to include to utilize all features. Read to learn more."
  />
</head>

Ionic Frameworkのコンポーネントスタイルは自己完結していますが、Ionicのすべての機能を使用するために含める必要があるグローバルなスタイルシートがいくつか存在します。スタイルシートの中には、Ionic Frameworkアプリの外観と動作を適切にするために必要なものと、アプリをすばやくスタイル設定するためのオプションのユーティリティが含まれているものがあります。

## 利用可能

### 必須

Ionic Framework が正常に動作するためには、以下の CSS ファイルが含まれている必要があります。

#### core.css

このファイルは、Ionic コンポーネントが正常に動作するために必要な唯一のスタイルシートです。アプリ固有のスタイルが含まれており、`color`プロパティがコンポーネント間で動作するようにします。このファイルが含まれていない場合、色は表示されず、いくつかの要素が正しく表示されない可能性があります。

### 推奨

Ionic Frameworkアプリでは、以下のCSSファイルをインクルードすることが推奨されています。これらが含まれていない場合、一部の要素で好ましくないスタイルになる可能性があります。Ionic Frameworkのコンポーネントをアプリの外で使用する場合は、これらのファイルは必要ない場合があります。

#### structure.css

`html>` にスタイルを適用し、`box-sizing` のデフォルトを `border-box` にします。これにより、モバイルデバイスでのスクロールがネイティブのように動作するようになります。

#### typography.css

typography はドキュメント全体の font-family を変更し、見出し要素のフォントスタイルを変更する。また、いくつかのネイティブのテキスト要素に位置決めスタイルを適用します。

#### normalize.css

ブラウザがすべての要素をより一貫して、現代の標準に沿った形で表示するようにします。これは [Normalize.css](https://necolas.github.io/normalize.css/) をベースにしています。

### オプション

以下のCSSファイルはオプションであり、アプリケーションで機能を使用しない場合は、コメントアウトまたは削除して問題ありません。

#### padding.css

任意の要素のパディングやマージンを変更するためのユーティリティクラスを追加します。使用法については [CSS Utilities](css-utilities.md#content-space) を参照してください。

#### float-elements.css

ブレイクポイントとサイドに基づいて要素をフロートさせるユーティリティクラスを追加します。使用法については [CSS Utilities](css-utilities.md#element-placement) を参照してください。

#### text-alignment.css

ブレークポイントに応じて、要素のテキストを整列させたり、空白を調整するためのユーティリティクラスを追加します。使い方は [CSS Utilities](css-utilities.md#text-alignment) を参照してください。

#### text-transformation.css

要素のテキストをブレイクポイントに応じて `大文字`, `小文字`, `大文字` に変換するユーティリティクラスを追加します。使用法については [CSS Utilities](css-utilities.md#text-transformation) を参照してください。

#### flex-utils.css

フレックスコンテナやアイテムを整列させるためのユーティリティクラスを追加。使い方は [CSS Utilities](css-utilities.md#flex-properties) を参照してください。

#### display.css

ブレイクポイントに基づき、任意の要素を隠すためのユーティリティクラスを追加します。使用法については [CSS Utilities](css-utilities.md#element-display) を参照してください。

## 使用方法

フレームワークに基づくグローバルなスタイルシートのインクルード方法は [Ionic Packages](../intro/cdn.md) を、オプションのユーティリティの使用方法は [CSS Utilities](css-utilities.md) を参照してください。
