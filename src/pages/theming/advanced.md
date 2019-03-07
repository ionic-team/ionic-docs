---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'Color Generator'
previousUrl: '/docs/theming/color-generator'
nextText: 'Publishing an app'
nextUrl: '/docs/publishing/app-store'
contributors:
  - brandyscarney
  - marcjulian
---

# 高度なカスタマイズ

CSSベースのテーマ設定では、CSSファイルをロードするか、いくつかのCSSプロパティ値を変更することで、アプリの配色をすばやくカスタマイズできます。

## 配色

Ionicには、多くのコンポーネントの配色を変更するために使用できる9つのデフォルトカラーがあります。 それぞれの配色は、 `shade` と `tint` を含む複数のプロパティを持つコレクションであり、Ionic全体で利用されます。

デフォルトの配色を変更するために、 `color` 属性を使って任意の色をIonicのコンポーネントに適用できます。以下の buttons はテキストと背景が `color` 属性に基づいて変更されていることに注目してください。button に `color` 属性がない時は、デフォルト値として `primary` の配色が適用されます。

```html
<ion-button>Default</ion-button>
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>
```

### 配色のレイヤードスタイル

それぞれの配色は、これらのプロパティで構成されています: `base`, `contrast`, `shade`, と `tint` です。`base` と `contrast` の配色は `rgb` プロパティと同一の配色が求められます。 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a> をご覧ください。この `rgb` の変数が必要な理由は [The Alpha Problem](#the-alpha-problem) をご覧ください。下のドロップダウンから選択することで、Ionicが提供するデフォルトの配色とそのバリエーションを確認することができます。

<layered-colors-select mode="md" no-prerender></layered-colors-select>

### 配色を変更する

配色を変更するときは、その色についてリストされているすべてのバリエーションを変更する必要があります。例えば、`secondary color` を <code-color mode="md" value="#006600"></code-color> に変更する時、以下のCSSプロパティが必要です。

```css
:root {
  --ion-color-secondary: #006600;
  --ion-color-secondary-rgb: 0,102,0;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #005a00;
  --ion-color-secondary-tint: #1a751a;
}
```

`secondary` をボタンに適用した時、利用されるのはベースカラー <code-color mode="md" value="#006600"></code-color> だけではありません。`contrast color` <code-color mode="md" value="#ffffff"></code-color> はテキストに適用され、それに加えて `shade` <code-color mode="md" value="#005a00"></code-color> と `tint` <code-color mode="md" value="#1a751a"></code-color> はボタンのステータスが変更された時に利用されます。

> ベースカラーからバリエーションカラーを取得する方法がわからない？その場合、 [Color Generator](/docs/theming/color-generator) をお試しください。これはすべてのバリエーションを計算し、アプリにコピー&ペーストできるコードを提供します！

CSS変数についてもっと詳しく知りたい時は [CSS Variables documentation](/docs/theming/css-variables) をご覧ください。

### 配色の追加

新しい配色を追加する時は、CSS変数を利用してすべてのバリエーションを追加する必要があります。クラス名は `.ion-color-{COLOR}` というフォーマットに従い、 `{COLOR}` には新しい色の名前をつけてください。例えば、配色が `favorite` という名前なら、次のようなclassを追加します:

```css
.ion-color-favorite {
  --ion-color-base: #69bb7b;
  --ion-color-base-rgb: 105,187,123;
  --ion-color-contrast: #ffffff;
  --ion-color-contrast-rgb: 255,255,255;
  --ion-color-shade: #5ca56c;
  --ion-color-tint: #78c288;
}
```

classが追加されると、Ionicのコンポーネントの `color` プロパティでその配色を利用することができます。 `favorite` をIonicのボタンで使う時は以下の通りになります。

```html
<ion-button color="favorite">Favorite</ion-button>
```

上記のクラスを追記しても、アプリケーションのスタイルシートで使用するためのIonic CSS変数が自動的に作成されないことに注意が必要です。`--ion-color-favorite` ではじまる変数は、`.ion-color-favorite` というclassを追加しただけでは、 **存在しません** 。 アプリケーションで利用するためには、別々に宣言する必要があります:

```css
:root {
  --ion-color-favorite: #69bb7b;
  --ion-color-favorite-rgb: 105,187,123;
  --ion-color-favorite-contrast: #ffffff;
  --ion-color-favorite-contrast-rgb: 255,255,255;
  --ion-color-favorite-shade: #5ca56c;
  --ion-color-favorite-tint: #78c288;
}
```

これで、CSSで`div` の`background` と `color` で `favorite` を利用することができます。

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

CSS変数についてもっと知りたい場合は [CSS Variables documentation](/docs/theming/css-variables) をご覧ください。

## テーマ

Ionicは、アプリケーション全体のデフォルトテーマを変更するために、コンポーネント全体で使用できるいくつかのグローバル変数を提供します。次のセクションでは、さまざまなテーマ変数を用途別に分類しています: [Application Colors](#application-colors), [Stepped Colors](#stepped-colors)

### アプリケーションの配色

アプリケーションの配色は、Ionicの複数の場所で使用されています。ダークテーマや、ブランディングにあったテーマを簡単に作成することができます。

背景とテキストの色変数は、RGBである必要があります: <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. なぜ `rgb` プロパティも必要であるかは [The Alpha Problem](#the-alpha-problem) をご覧ください。


| Name                                     | Description                                         |
| ---------------------------------------- | --------------------------------------------------- |
| `--ion-background-color`                 | Background color of entire app                      |
| `--ion-background-color-rgb`             | Background color of entire app, rgb format          |
| `--ion-text-color`                       | Text color of entire app                            |
| `--ion-text-color-rgb`                   | Text color of entire app, rgb format                |
| `--ion-backdrop-color`                   | Color of the Backdrop component                     |
| `--ion-overlay-background-color`         | Background color of the overlays                    |
| `--ion-border-color`                     | Border color                                        |
| `--ion-box-shadow-color`                 | Box shadow color                                    |
| `--ion-tab-bar-background`               | Background of the Tab bar                           |
| `--ion-tab-bar-background-focused`       | Background of the focused Tab bar                   |
| `--ion-tab-bar-border-color`             | Border color of the Tab bar                         |
| `--ion-tab-bar-color`                    | Color of the Tab bar                                |
| `--ion-tab-bar-color-activated`          | Color of the activated Tab                          |
| `--ion-toolbar-background`               | Background of the Toolbar                           |
| `--ion-toolbar-border-color`             | Border color of the Toolbar                         |
| `--ion-toolbar-color`                    | Color of the components in the Toolbar              |
| `--ion-toolbar-color-activated`          | Color of the activated components in the Toolbar    |
| `--ion-toolbar-color-unchecked`          | Color of the unchecked components in the Toolbar    |
| `--ion-toolbar-color-checked`            | Color of the checked components in the Toolbar      |
| `--ion-item-background`                  | Background of the Item                              |
| `--ion-item-background-activated`        | Background of the activated Item                    |
| `--ion-item-border-color`                | Border color of the Item                            |
| `--ion-item-color`                       | Color of the components in the Item                 |
| `--ion-placeholder-color`                | Color of the placeholder in inputs                  |


### ステップカラー

Ionicテーマをカスタマイズするためのさまざまな方法を検討した結果、1つの背景色またはテキスト色しか使用できないことがわかりました。デザイン全体を通して重要性と深度を暗示するためには、背景色とテキスト色の色合いを変える必要があります。このパターンに対応するために、ステップカラーを作成しました。

背景色 (`--ion-background-color`) と テキストカラー (`--ion-text-color`) の変数を更新すると、ほとんどのアプリコンポーネントの外観が変わりますが、見逃したり壊れたりする可能性のある特定のIonicコンポーネントがあります。ダークテーマを適用するとき、これはより明白になります。

一部のコンポーネントでは、背景よりも暗い、またはテキストよりも明るい色合いを使用しています。たとえば、item の見出しテキストは、私たちのデフォルトのテキストカラーよりも数段階明るい色である <code-color mode="md" value="#404040"></code-color> になります。一方、ローディングコンポーネントの背景は白よりも濃い色 <code-color mode="md" value="#f2f2f2"></code-color> になります。私達はこれらのわずかな変化を定義するために、ステップカラーを利用します。アプリケーションの背景色やテキストの色を更新するときは、ステップカラーを更新することが重要です。

デフォルトでは、Ionicのステップカラーはデフォルトの背景色の値 <code-color mode="md" value="#ffffff"></code-color> で始まります。 そしてテキストカラー値 <code-color mode="md" value="#000000"></code-color> を混ぜるために使います。ステップカラーの完全なリストは、以下のジェネレータに表示されています。

### ステップカラーの変数生成

アプリのカスタム背景色とテキストの色のテーマを作成します。下記の背景色またはテキストカラーの16進値を更新してから、生成されたコードをコピーしてIonicプロジェクトに直接貼り付けます。

<stepped-color-generator mode="md" no-prerender></stepped-color-generator>


## グローバル

前述の変数はアプリケーションの色を変更するのに役立ちますが、多くの場合、複数のコンポーネントで使用される変数が必要になります。以下の変数は、グローバルパディング設定などを変更するためにコンポーネント間で共有されます。

### Application Variables

| Name                                     | Description                                                                                     |
| -----------------------------------------| ------------------------------------------------------------------------------------------------|
| `--ion-font-family`                      | Font family of the app                                                                          |
| `--ion-statusbar-padding`                | Statusbar padding top of the app                                                                |
| `--ion-safe-area-top`                    | Adjust the safe area inset top of the app                                                       |
| `--ion-safe-area-right`                  | Adjust the safe area inset right of the app                                                     |
| `--ion-safe-area-bottom`                 | Adjust the safe area inset bottom of the app                                                    |
| `--ion-safe-area-left`                   | Adjust the safe area inset left of the app                                                      |
| `--ion-margin`                           | Adjust the margin of the [Margin attributes](/docs/layout/css-utilities#element-margin)         |
| `--ion-padding`                          | Adjust the padding of the [Padding attributes](/docs/layout/css-utilities#element-padding)      |

### Grid Variables

| Name                                     | Description                                        |
| -----------------------------------------| ---------------------------------------------------|
| `--ion-grid-columns`                     | Number of columns in the grid                      |
| `--ion-grid-padding-xs`                  | Padding of the grid for xs breakpoints             |
| `--ion-grid-padding-sm`                  | Padding of the grid for sm breakpoints             |
| `--ion-grid-padding-md`                  | Padding of the grid for md breakpoints             |
| `--ion-grid-padding-lg`                  | Padding of the grid for lg breakpoints             |
| `--ion-grid-padding-xl`                  | Padding of the grid for xl breakpoints             |
| `--ion-grid-column-padding-xs`           | Padding of the grid columns for xs breakpoints     |
| `--ion-grid-column-padding-sm`           | Padding of the grid columns for sm breakpoints     |
| `--ion-grid-column-padding-md`           | Padding of the grid columns for md breakpoints     |
| `--ion-grid-column-padding-lg`           | Padding of the grid columns for lg breakpoints     |
| `--ion-grid-column-padding-xl`           | Padding of the grid columns for xl breakpoints     |


## 既知の制限

### Alpha問題

16進数カラーのアルファ使用については、まだ完全な<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility" target="_blank">ブラウザサポート</a>はありません。<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()" target="_blank">rgba()</a> 関数は、`R, G, B, A` (Red, Green, Blue, Alpha) のフォーマットのみ利用可能です。次のコードは、`rgba()`　に受け渡される正しい値と間違った値の例を示しています。

```css
/* These examples use the same color: blueviolet. */
.broken {
  --violet: #8a2be2;

  /* rgba(#8a2be2, .5) */
  color: rgba(var(--violet), .5) /* ERROR! Doesn't support hex. */
}

.working {
  --violet-rgb: 138, 43, 226;

  /* rgba(138, 43, 226, .5) */
  color: rgba(var(--violet-rgb), .5) /* WORKS! */
}
```

> CSS変数を取得および設定する方法については、 [CSS Variables](/docs/theming/css-variables) セクションをご参照ください。

Ionicはいくつかのコンポーネントで不透明度（アルファ）を​​持つ色を使用します。これが機能するためには、それらのプロパティはRGBフォーマットで提供されなければなりません。末尾にバリエーションがあるプロパティのいずれかを変更する場合、 `-rgb` で終わる括弧なしのカンマ区切り形式でも提供されることが重要です。以下は、テキストと背景色を変更するための例です。

```css
:root {
  /* These examples use the same color: sienna. */
  --ion-text-color:             #a0522d;
  --ion-text-color-rgb:         160, 82, 45;

  /* These examples use the same color: lightsteelblue. */
  --ion-background-color:       #b0c4de;
  --ion-background-color-rgb:   176, 196, 222;
}
```

RGB形式の色はhexプロパティとまったく同じ色ですが、現在は `rgba()` で使用できることに注意してください。例えば、`--ion-text-color-rgb` は以下のように利用できます。

```css
body {
  color: rgba(var(--ion-text-color-rgb), 0.25);
}
```


### Variables in Media Queries

CSS variables in [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) are not currently supported, but there are open drafts to add [custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-mq) and [custom environment variables](https://drafts.csswg.org/css-env-1/) that would solve this problem! However, with the current state of support, the following will **not** work:

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* Doesn't work :( */
}
```


### Modifying CSS Color Variables

While it is possible to easily alter a color in Sass using its built-in functions, it is currently not as easy to modify colors set in CSS Variables. This can be accomplished in CSS by splitting the [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) or [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) channels and modifying each value, but it is complex and has missing functionality.

What exactly does this mean? Basically, using a CSS preprocessor, such as Sass, allows us to use functions to manipulate a single color. For example, we can create the following colors in Sass:

```scss
// Background color, shade, and tint
$background: #3880ff;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// Text color, darker and lighter
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

After running through the Sass compiler, the colors will have the following values:

| Variable            | Value                                                     |
| --------------------| ----------------------------------------------------------|
| `$background`       | <code-color mode="md" value="#3880ff"></code-color>       |
| `$background-shade` | <code-color mode="md" value="#3171e0"></code-color>       |
| `$background-tint`  | <code-color mode="md" value="#4c8dff"></code-color>       |
| `$text`             | <code-color mode="md" value="#444444"></code-color>       |
| `$text-darker`      | <code-color mode="md" value="#1e1e1e"></code-color>       |
| `$text-lighter`     | <code-color mode="md" value="#6a6a6a"></code-color>       |

However, because CSS variables can be set at runtime and are more dynamic, it is not currently possible to manipulate them using a simple function.

This is normally not a problem, but when an application needs to have dynamic theming it presents issues. In Ionic, this is the reason that there are [variations to each color](#layered-colors), and it is also why [stepped colors](#stepped-colors) are necessary for theming.

There are drafts and issues discussing [color modification proposals](https://github.com/w3c/csswg-drafts/issues/3187) that would make this possible.
