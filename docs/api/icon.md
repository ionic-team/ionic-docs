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

Icon は、アイコンを表示するための汎用コンテナです。<a href="https://ionic.io/ionicons">Ionicons</a> はすべての Ionic Framework アプリケーションにデフォルトで含まれていますが、このコンポーネントでは Ionicons、カスタム SVG、フォントベースのアイコンライブラリ、そのほかのアイコンシステムも表示できます。アイコンの提供元にかかわらず、一貫したスタイルとサイズを提供します。

Ionicons のドキュメントについては、<a href="https://ionic.io/ionicons">ionic.io/ionicons</a>を参照してください。

## 基本的な使い方

import Basic from '@site/static/usage/v9/icon/basic/index.md';

<Basic />

## フォントアイコン

Font Awesome、Bootstrap Icons、Remix Icons、Phosphor Icons などのフォントベースのアイコンは、Icon の slot に配置して表示できます。

import FontIcons from '@site/static/usage/v9/icon/font-icons/index.md';

<FontIcons />

## カスタム SVG

Icon でカスタム SVG を表示する方法は 2 つあります。`src` プロパティを使用して外部 SVG ファイルを読み込むか、SVG コンテンツをコンポーネントの slot に直接配置します。

import CustomSVGs from '@site/static/usage/v9/icon/custom-svgs/index.md';

<CustomSVGs />

## アクセシビリティ

純粋に装飾的なコンテンツであるアイコンは、<code>aria-hidden="true"</code>を持つべきです。これは、アイコンを視覚的に隠すことはできませんが、支援技術からその要素を隠すことができます。

```html
<!-- Ionicon -->
<ion-icon name="heart" aria-hidden="true"></ion-icon>

<!-- Font-based icon -->
<ion-icon aria-hidden="true">
  <i class="fas fa-heart"></i>
</ion-icon>
```

アイコンがインタラクティブな場合は、<code>aria-label</code>を追加することで代替テキストを定義する必要があります。

```html
<!-- Ionicon -->
<ion-icon name="heart" aria-label="Favorite"></ion-icon>

<!-- Font-based icon -->
<ion-icon aria-label="Favorite">
  <i class="fas fa-heart"></i>
</ion-icon>
```

また、アイコンが説明する他の要素の中にある場合は、その要素に <code>aria-label</code> を付加し、 <code>aria-hidden</code> でアイコンを非表示とします。

```html
<!-- Ionicon -->
<ion-button aria-label="Favorite">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>

<!-- Font-based icon -->
<ion-button aria-label="Favorite">
  <ion-icon aria-hidden="true">
    <i class="fas fa-heart"></i>
  </ion-icon>
</ion-button>
```
