---
title: 'ion-icon'
---

<head>
  <title>ion-icon: Icon Component for Ionic Framework Apps</title>
  <meta
    name="description"
    content="Ion-icon is a component for displaying premium designed icons with support for SVG and web font."
  />
</head>

Iconは、<a href="https://ionic.io/ionicons">Ionicons</a>ライブラリを通じて利用できるシンプルなコンポーネントで、すべてのIonic Frameworkアプリケーションにデフォルトでプリパッケージされています。Ioniconsのセットから任意のアイコン、またはカスタムSVGを表示するために使用することができます。また、サイズや色などのスタイリングもサポートされています。

利用可能なアイコンのリストは <a href="https://ionic.io/ionicons">ionic.io/ionicons</a>. For more information including styling and custom SVG usage, see <a href="https://ionic.io/ionicons/usage">the Usage page</a> をご覧ください。

## 基本的な使い方

import Basic from '@site/static/usage/v7/icon/basic/index.md';

<Basic />


## アクセシビリティ

純粋に装飾的なコンテンツであるアイコンは、<code>aria-hidden="true"</code>を持つべきです。これは、アイコンを視覚的に隠すことはできませんが、支援技術からその要素を隠すことができます。

```html
<ion-icon name="heart" aria-hidden="true"></ion-icon>
```


アイコンがインタラクティブな場合は、<code>aria-label</code>を追加することで代替テキストを定義する必要があります。

```html
<ion-icon name="heart" aria-label="Favorite"></ion-icon>
```

また、アイコンが説明する他の要素の中にある場合は、その要素に <code>aria-label</code> を付加し、 <code>aria-hidden</code> でアイコンを非表示とします。

```html
<ion-button aria-label="Favorite">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>
```
