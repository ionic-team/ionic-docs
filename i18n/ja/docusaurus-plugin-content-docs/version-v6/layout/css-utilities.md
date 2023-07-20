---
title: CSSユーティリティ
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>CSSユーティリティ: Classes for Text/Element Alignment or Modification</title>
  <meta
    name="description"
    content="Ionic CSS utility classes can be used on any element for text modification/alignment, element placement, or to adjust padding and margin. Read to learn more."
  />
</head>

Ionic Frameworは、テキストの順番を入れ替えたり、要素の配置やpaddingやmarginを修正する一連のユーティリティ属性を提供します。これは要素で使うことができます。

:::note
使用可能なIonic Frameworkスターターを使用してアプリケーションを起動していない場合、これらのスタイルを機能させるには、 [グローバルスタイルシートのオプションセクション](global-stylesheets.md#optional) にリストされているスタイルシートを含める必要があります。
:::

## テキストの修正

### テキストの配置

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-start">
        <h3>text-start</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-end">
        <h3>text-end</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-center">
        <h3>text-center</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div class="ion-text-justify">
        <h3>text-justify</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-wrap">
        <h3>text-wrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-nowrap">
        <h3>text-nowrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class               | Style Rule            | Description                                                                                                                                                         |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.ion-text-left`    | `text-align: left`    | The inline contents are aligned to the left edge of the line box.                                                                                                   |
| `.ion-text-right`   | `text-align: right`   | The inline contents are aligned to the right edge of the line box.                                                                                                  |
| `.ion-text-start`   | `text-align: start`   | The same as `text-left` if direction is left-to-right and `text-right` if direction is right-to-left.                                                               |
| `.ion-text-end`     | `text-align: end`     | The same as `text-right` if direction is left-to-right and `text-left` if direction is right-to-left.                                                               |
| `.ion-text-center`  | `text-align: center`  | The inline contents are centered within the line box.                                                                                                               |
| `.ion-text-justify` | `text-align: justify` | The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. |
| `.ion-text-wrap`    | `white-space: normal` | Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.              |
| `.ion-text-nowrap`  | `white-space: nowrap` | Collapses whitespace as for `normal`, but suppresses line breaks (text wrapping) within text.                                                                       |

### テキストの変換

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-uppercase">
        <h3>text-uppercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-lowercase">
        <h3>text-lowercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-capitalize">
        <h3>text-capitalize</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                  | Style Rule                   | Description                                                        |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `.ion-text-uppercase`  | `text-transform: uppercase`  | Forces all characters to be converted to uppercase.                |
| `.ion-text-lowercase`  | `text-transform: lowercase`  | Forces all characters to be converted to lowercase.                |
| `.ion-text-capitalize` | `text-transform: capitalize` | Forces the first letter of each word to be converted to uppercase. |

### Responsive Text Classes

上に挙げたすべてのテキストクラスには、スクリーンサイズに応じてテキストを変更するための追加のクラスがあります。各クラスで `text-` の代わりに `text-{breakpoint}-` を使用すると、特定のスクリーンサイズでのみそのクラスを使用できます。ここで `{breakpoint}` は [Ionic Breakpoints](#ionic-breakpoints) にリストされているブレークポイント名のうちの1つです。

以下の表は、 `{modifier}` のデフォルトの挙動です。 `left`, `right`, `start`, `end`, `center`, `justify`, `wrap`, `nowrap`, `uppercase`, `lowercase`, `capitalize` は上記の通りです。

| Class                     | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| `.ion-text-{modifier}`    | Applies the modifier to the element on all screen sizes.      |
| `.ion-text-sm-{modifier}` | Applies the modifier to the element when `min-width: 576px`.  |
| `.ion-text-md-{modifier}` | Applies the modifier to the element when `min-width: 768px`.  |
| `.ion-text-lg-{modifier}` | Applies the modifier to the element when `min-width: 992px`.  |
| `.ion-text-xl-{modifier}` | Applies the modifier to the element when `min-width: 1200px`. |

## 要素の配置

### Float要素

CSSプロパティのfloatは、テキストとインライン要素を囲んだ要素がそのコンテナの左側または右側に沿って配置することを指定します。 以下のように要素はウェブページのコードと異なった順に表示されます。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <h3>no float</h3>
      <img
        alt="Silhouette of a person's head"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
      vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>float-left</h3>
      <img
        alt="Silhouette of a person's head"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-left"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
      vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>float-right</h3>
      <img
        alt="Silhouette of a person's head"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-right"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
      vehicula lorem.
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class              | Style Rule                     | Description                                                                                             |
| ------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `.ion-float-left`  | `float: left`                  | The element will float on the left side of its containing block.                                        |
| `.ion-float-right` | `float: right`                 | The element will float on the right side of its containing block.                                       |
| `.ion-float-start` | `float: left` / `float: right` | The same as `float-left` if direction is left-to-right and `float-right` if direction is right-to-left. |
| `.ion-float-end`   | `float: left` / `float: right` | The same as `float-right` if direction is left-to-right and `float-left` if direction is right-to-left. |

### レスポンシブなFloatクラス

上記のすべてのfloatクラスには、画面サイズに基づいて `float` を変更するための追加クラスがあります。特定の画面サイズでのみクラスを使用する場合は、各クラスで `float-` の代わりに`float-{breakpoint}-` を使用します。 `{breakpoint}` は、[Ionic Breakpoints](#ionic-breakpoints)にリストされているブレークポイント名の1つです。

次の表に、デフォルトの動作を示します。 `{modifier}` は、前述のように `left`, `right`, `start`, `end` のいずれかです。

| Class                      | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| `.ion-float-{modifier}`    | Applies the modifier to the element on all screen sizes.      |
| `.ion-float-sm-{modifier}` | Applies the modifier to the element when `min-width: 576px`.  |
| `.ion-float-md-{modifier}` | Applies the modifier to the element when `min-width: 768px`.  |
| `.ion-float-lg-{modifier}` | Applies the modifier to the element when `min-width: 992px`.  |
| `.ion-float-xl-{modifier}` | Applies the modifier to the element when `min-width: 1200px`. |

## 要素の表示

display CSSプロパティは、要素を表示するかどうかを決定します。要素はDOM内に残りますが、非表示の場合はレンダリングされません。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-hide">
      <div>
        <h3>hidden</h3>
        You can't see me.
      </div>
    </ion-col>
    <ion-col>
      <div>
        <h3>not-hidden</h3>
        You can see me!
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class       | Style Rule      | Description                 |
| ----------- | --------------- | --------------------------- |
| `.ion-hide` | `display: none` | The element will be hidden. |

### ResponsiveなDisplay属性

画面サイズに基づいて表示を変更するクラスもあります。ただ `.ion-hide` ではなく `.ion-hide-{breakpoint}-{dir}` という特定の画面サイズでのみクラスを使用します。{breakpoint}は、[Ionic Breakpoints](#ionic-breakpoints)にリストされているブレークポイント名の1つです。 `{dir}` は、指定されたブレークポイントの上 (`up`) または下 (`down`) のすべての画面サイズで要素を非表示にするかどうかです。

| Class                | Description                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| `.ion-hide-sm-{dir}` | Applies the modifier to the element when `min-width: 576px` (`up`) or `max-width: 576px` (`down`).   |
| `.ion-hide-md-{dir}` | Applies the modifier to the element when `min-width: 768px` (`up`) or `max-width: 768px` (`down`).   |
| `.ion-hide-lg-{dir}` | Applies the modifier to the element when `min-width: 992px` (`up`) or `max-width: 992px` (`down`).   |
| `.ion-hide-xl-{dir}` | Applies the modifier to the element when `min-width: 1200px` (`up`) or `max-width: 1200px` (`down`). |

## コンテンツのスペース

### 要素のPadding

padding属性は、要素のpaddingエリアを設定します。paddingエリアは、要素のコンテンツとその境界線のスペースです。

`padding` で適用されるデフォルトの数値は `16px` で、これは `--ion-padding`　変数で設定することができます。これらの値を変更する方法については [CSS Variables](../theming/css-variables.md) をご覧ください。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-padding">
      <div>padding</div>
    </ion-col>
    <ion-col class="ion-padding-top">
      <div>padding-top</div>
    </ion-col>
    <ion-col class="ion-padding-start">
      <div>padding-start</div>
    </ion-col>
    <ion-col class="ion-padding-end">
      <div>padding-end</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-padding-bottom">
      <div>padding-bottom</div>
    </ion-col>
    <ion-col class="ion-padding-vertical">
      <div>padding-vertical</div>
    </ion-col>
    <ion-col class="ion-padding-horizontal">
      <div>padding-horizontal</div>
    </ion-col>
    <ion-col class="ion-no-padding">
      <div>no-padding</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                     | Style Rule             | Description                            |
| ------------------------- | ---------------------- | -------------------------------------- |
| `.ion-padding`            | `padding: 16px`        | Applies padding to all sides.          |
| `.ion-padding-top`        | `padding-top: 16px`    | Applies padding to the top.            |
| `.ion-padding-start`      | `padding-start: 16px`  | Applies padding to the start.          |
| `.ion-padding-end`        | `padding-end: 16px`    | Applies padding to the end.            |
| `.ion-padding-bottom`     | `padding-bottom: 16px` | Applies padding to the bottom.         |
| `.ion-padding-vertical`   | `padding: 16px 0`      | Applies padding to the top and bottom. |
| `.ion-padding-horizontal` | `padding: 0 16px`      | Applies padding to the left and right. |
| `.ion-no-padding`         | `padding: 0`           | Applies no padding to all sides.       |

### 要素のMargin

Marginエリアは、隣り合う要素とのスペースを広げるために境界線の外に空のエリアをつくるためのものです。

`margin`　はデフォルトで `16px` が設定されており、 `--ion-margin` 変数で設定されています。 これらの値を変更する方法については [CSS Variables](../theming/css-variables.md) をご覧ください。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-margin">
      <div>margin</div>
    </ion-col>
    <ion-col class="ion-margin-top">
      <div>margin-top</div>
    </ion-col>
    <ion-col class="ion-margin-start">
      <div>margin-start</div>
    </ion-col>
    <ion-col class="ion-margin-end">
      <div>margin-end</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-margin-bottom">
      <div>margin-bottom</div>
    </ion-col>
    <ion-col class="ion-margin-vertical">
      <div>margin-vertical</div>
    </ion-col>
    <ion-col class="ion-margin-horizontal">
      <div>margin-horizontal</div>
    </ion-col>
    <ion-col class="ion-no-margin">
      <div>no-margin</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                    | Style Rule            | Description                           |
| ------------------------ | --------------------- | ------------------------------------- |
| `.ion-margin`            | `margin: 16px`        | Applies margin to all sides.          |
| `.ion-margin-top`        | `margin-top: 16px`    | Applies margin to the top.            |
| `.ion-margin-start`      | `margin-start: 16px`  | Applies margin to the left.           |
| `.ion-margin-end`        | `margin-end: 16px`    | Applies margin to the right.          |
| `.ion-margin-bottom`     | `margin-bottom: 16px` | Applies margin to the bottom.         |
| `.ion-margin-vertical`   | `margin: 16px 0`      | Applies margin to the top and bottom. |
| `.ion-margin-horizontal` | `margin: 0 16px`      | Applies margin to the left and right. |
| `.ion-no-margin`         | `margin: 0`           | Applies no margin to all sides.       |

## Flex プロパティ

<img src={require('@site/static/img/layout/diagram-flex-attributes.png').default} />

### Flex コンテナのプロパティ

```html
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-end">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-around">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-between">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-evenly">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-baseline">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-stretch">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                          | Style Rule                       | Description                                                                 |
| ------------------------------ | -------------------------------- | --------------------------------------------------------------------------- |
| `.ion-justify-content-start`   | `justify-content: flex-start`    | Items are packed toward the start on the main axis.                         |
| `.ion-justify-content-end`     | `justify-content: flex-end`      | Items are packed toward the end on the main axis.                           |
| `.ion-justify-content-center`  | `justify-content: center`        | Items are centered along the main axis.                                     |
| `.ion-justify-content-around`  | `justify-content: space-around`  | Items are evenly distributed on the main axis with equal space around them. |
| `.ion-justify-content-between` | `justify-content: space-between` | Items are evenly distributed on the main axis.                              |
| `.ion-justify-content-evenly`  | `justify-content: space-evenly`  | Items are distributed so that the spacing between any two items is equal.   |
| `.ion-align-items-start`       | `align-items: flex-start`        | Items are packed toward the start on the cross axis.                        |
| `.ion-align-items-end`         | `align-items: flex-end`          | Items are packed toward the end on the cross axis.                          |
| `.ion-align-items-center`      | `align-items: center`            | Items are centered along the cross axis.                                    |
| `.ion-align-items-baseline`    | `align-items: baseline`          | Items are aligned so that their baselines align.                            |
| `.ion-align-items-stretch`     | `align-items: stretch`           | Items are stretched to fill the container.                                  |
| `.ion-nowrap`                  | `flex-wrap: nowrap`              | Items will all be on one line.                                              |
| `.ion-wrap`                    | `flex-wrap: wrap`                | Items will wrap onto multiple lines, from top to bottom.                    |
| `.ion-wrap-reverse`            | `flex-wrap: wrap-reverse`        | Items will wrap onto multiple lines, from bottom to top.                    |

### Flex Item Properties

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-align-self-start">
      <div>1 of 4</div>
    </ion-col>
    <ion-col class="ion-align-self-center">
      <div>2 of 4</div>
    </ion-col>
    <ion-col class="ion-align-self-end">
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                      | Style Rule               | Description                                                            |
| -------------------------- | ------------------------ | ---------------------------------------------------------------------- |
| `.ion-align-self-start`    | `align-self: flex-start` | Item is packed toward the start on the cross axis.                     |
| `.ion-align-self-end`      | `align-self: flex-end`   | Item is packed toward the end on the cross axis.                       |
| `.ion-align-self-center`   | `align-self: center`     | Item is centered along the cross axis.                                 |
| `.ion-align-self-baseline` | `align-self: baseline`   | Item is aligned so that its baseline aligns with other item baselines. |
| `.ion-align-self-stretch`  | `align-self: stretch`    | Item is stretched to fill the container.                               |
| `.ion-align-self-auto`     | `align-self: auto`       | Item is positioned according to the parent's `align-items` value.      |

## Borderの表示

border display CSSプロパティは、borderを表示するかどうかを指定します。このプロパティは、 `ion-header` と` ion-footer` に適用できます。

```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>Header - No Border</ion-title>
  </ion-toolbar>
</ion-header>

<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>Footer - No Border</ion-title>
  </ion-toolbar>
</ion-footer>
```

| Class            | Description                      |
| ---------------- | -------------------------------- |
| `.ion-no-border` | The element will have no border. |

## Ionicのブレイクポイント

Ionicは、画面サイズに基づいてアプリケーションのスタイルを変えるために、メディアクエリでブレークポイントを使用します。次のブレークポイント名は、上記のユーティリティークラスで使用され、幅が一致したときにクラスが適用されます。

| Breakpoint Name | Width    |
| --------------- | -------- |
| `xs`            | `0`      |
| `sm`            | `576px`  |
| `md`            | `768px`  |
| `lg`            | `992px`  |
| `xl`            | `1200px` |
