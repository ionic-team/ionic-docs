---
title: 高度なカスタマイズ
sidebar_label: 高度なカスタマイズ
---

import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>高度なカスタマイズ: CSSを使用してアプリの色をすばやくカスタマイズ | Ionic</title>
  <meta
    name="description"
    content="CSSベースのテーマ設定により、CSSファイルをロードするか、CSSプロパティ値を変更することで、アプリの色をすばやくカスタマイズできます。Ionic高度なテーマ設定について学びましょう。"
  />
</head>

CSS ベースのテーマ設定では、CSS ファイルをロードするか、いくつかの CSS プロパティ値を変更することで、アプリの配色をすばやくカスタマイズできます。

## `theme-color` Meta

メタタグの `theme-color` は、ブラウザがページや周囲のインターフェイスの表示をカスタマイズするために使用する色を示します。この種類の meta タグはメディアクエリも受け付けることができ、開発者はライトモードとダークモードの両方でテーマカラーを設定することができます。

メタタグ `theme-color` の `content` 値には、有効な <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank" rel="noopener noreferrer">CSS Color</a> を含める必要があり、CSS Variables を含めることはできません。

:::note
`Theme-color`メタは、Web ブラウザまたは PWA として実行するときにインターフェースのテーマを制御し、アプリが Capacitor または Cordova を使用してデプロイされるときには影響しません。ステータスバーの下の領域をカスタマイズしたい場合は、[Capacitor Status Bar Plugin](https://capacitorjs.com/docs/apis/status-bar)を使用することをお勧めします。
:::

以下の例では、iOS 15 でブラウザのインターフェイスをスタイルするために `theme-color` を使用する方法を示しています。

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#0054e9" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#eb445a" />
```

| Light Mode                                                                                                         | Dark Mode                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ![The light mode theme color in a browser interface.](/img/theming/theme-color-light.png 'Light Mode Theme Color') | ![The dark mode theme color in a browser interface.](/img/theming/theme-color-dark.png 'Dark Mode Theme Color') |

macOS Monterey 以降の Safari では、`theme-color`メタを使用してツールバーをカスタマイズすることもできます。

iOS 15 と macOS の Safari は自動的に適切なテーマカラーを決定しますが、テーマをより細かく制御したい場合はこの meta タグを追加すると便利です。

ブラウザのインターフェイスに干渉するため、ブラウザが使用しない色の小さなサブセットがあります。例えば、`content="red"`と設定すると、macOS の Safari では、ツールバーの赤い閉じるボタンと干渉してしまうため、動作しません。このような状況に遭遇した場合は、色の選択を少し変えてみてください。

:::note
ブラウザは `manifest.json` に `theme` よりも `theme-color` メタが存在する場合、それを優先します。
:::

詳しくは、<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color" target="_blank" rel="noopener noreferrer">MDN theme-color documentation</a> をご覧ください。

## グローバル変数

テーマセクションのアプリケーション変数とステップ変数は、アプリケーションの色を変更するのに便利ですが、しばしば、複数のコンポーネントで使用される変数が必要になることがあります。以下の変数は、コンポーネント間で共有され、グローバルなパディング設定などを変更することができます。

### アプリケーション変数

| Name                        | 説明                                                                                          |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| `--ion-font-family`         | アプリのフォントファミリー                                                                    |
| `--ion-statusbar-padding`   | アプリのステータスバーの上部パディング                                                        |
| `--ion-safe-area-top`       | アプリのセーフエリアインセット上部を調整                                                      |
| `--ion-safe-area-right`     | アプリのセーフエリアインセット右側を調整                                                      |
| `--ion-safe-area-bottom`    | アプリのセーフエリアインセット下部を調整                                                      |
| `--ion-safe-area-left`      | アプリのセーフエリアインセット左側を調整                                                      |
| `--ion-margin`              | [Margin 属性](../layout/css-utilities.md#element-margin)のマージンを調整                      |
| `--ion-padding`             | [Padding 属性](../layout/css-utilities.md#element-padding)のパディングを調整                  |
| `--ion-placeholder-opacity` | input、textarea、searchbar、select コンポーネントで使用されるプレースホルダーの不透明度を調整 |

### グリッド変数

| Name                           | 説明                                        |
| ------------------------------ | ------------------------------------------- |
| `--ion-grid-columns`           | グリッドの列数                              |
| `--ion-grid-padding-xs`        | xs ブレークポイントのグリッドのパディング   |
| `--ion-grid-padding-sm`        | sm ブレークポイントのグリッドのパディング   |
| `--ion-grid-padding-md`        | md ブレークポイントのグリッドのパディング   |
| `--ion-grid-padding-lg`        | lg ブレークポイントのグリッドのパディング   |
| `--ion-grid-padding-xl`        | xl ブレークポイントのグリッドのパディング   |
| `--ion-grid-column-padding-xs` | xs ブレークポイントのグリッド列のパディング |
| `--ion-grid-column-padding-sm` | sm ブレークポイントのグリッド列のパディング |
| `--ion-grid-column-padding-md` | md ブレークポイントのグリッド列のパディング |
| `--ion-grid-column-padding-lg` | lg ブレークポイントのグリッド列のパディング |
| `--ion-grid-column-padding-xl` | xl ブレークポイントのグリッド列のパディング |

## 既知の変数の制限

### The Alpha Problem

16 進数カラーのアルファ使用については、まだ完全な<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility" target="_blank">ブラウザサポート</a>はありません。<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()" target="_blank">`rgba()`</a> 関数は、`R, G, B, A` (Red, Green, Blue, Alpha) のフォーマットのみ利用可能です。次のコードは、`rgba()`　に受け渡される正しい値と間違った値の例を示しています。

```css
/* These examples use the same color: blueviolet. */
.broken {
  --violet: #8a2be2;

  /* rgba(#8a2be2, .5) */
  color: rgba(var(--violet), 0.5); /* ERROR! Doesn't support hex. */
}

.working {
  --violet-rgb: 138, 43, 226;

  /* rgba(138, 43, 226, .5) */
  color: rgba(var(--violet-rgb), 0.5); /* WORKS! */
}
```

:::note
See the [CSS Variables](css-variables.md) section for more information on how to get and set CSS variables.
:::

Ionic はいくつかのコンポーネントで不透明度（アルファ）を ​​ 持つ色を使用します。これが機能するためには、それらのプロパティは RGB フォーマットで提供されなければなりません。末尾にバリエーションがあるプロパティのいずれかを変更する場合、 `-rgb` で終わる括弧なしのカンマ区切り形式でも提供されることが重要です。以下は、テキストと背景色を変更するための例です。

```css
:root {
  /* These examples use the same color: sienna. */
  --ion-text-color: #a0522d;
  --ion-text-color-rgb: 160, 82, 45;

  /* These examples use the same color: lightsteelblue. */
  --ion-background-color: #b0c4de;
  --ion-background-color-rgb: 176, 196, 222;
}
```

RGB 形式の色は hex プロパティとまったく同じ色ですが、現在は `rgba()` で使用できることに注意してください。例えば、`--ion-text-color-rgb` は以下のように利用できます。

```css
body {
  color: rgba(var(--ion-text-color-rgb), 0.25);
}
```

### Variables in Media Queries

[メディアクエリ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) の CSS 変数は現在サポートされていませんが、この問題を解決する[custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-mq) と [custom environment variables](https://drafts.csswg.org/css-env-1/)を追加するためのオープンドラフトがあります。ただし、現在のサポート状態では、次の機能は動作しません。

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* Doesn't work :( */
}
```

### CSS カラー変数の変更

Sass の組み込み関数を使用して簡単に色を変更することは可能ですが、現在のところ CSS 変数で設定された色を変更するのはそれほど簡単ではありません。これは、CSS で [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) or [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) チャネルまたは HSL チャネルを分割してそれぞれの値を変更することで実現できますが、複雑で機能が不足しています。

正確に説明します。基本的に、Sass などの CSS プリプロセッサを使用すると、関数を使用して単一の色を操作できます。たとえば、Sass には次のカラーを作成できます:

```scss
// Background color, shade, and tint
$background: #0054e9;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// Text color, darker and lighter
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

Sass コンパイラを実行した後、色は次の値になります：

| Variable            | 値                                             |
| ------------------- | ---------------------------------------------- |
| `$background`       | <CodeColor color="#0054e9">#0054e9</CodeColor> |
| `$background-shade` | <CodeColor color="#004acd">#004acd</CodeColor> |
| `$background-tint`  | <CodeColor color="#1a65eb">#1a65eb</CodeColor> |
| `$text`             | <CodeColor color="#444444">#444444</CodeColor> |
| `$text-darker`      | <CodeColor color="#1e1e1e">#1e1e1e</CodeColor> |
| `$text-lighter`     | <CodeColor color="#6a6a6a">#6a6a6a</CodeColor> |

ただし、CSS 変数は実行時に設定でき、より動的であるため、現時点では単純な関数を使用して操作することはできません。

これは通常は問題にはなりませんが、アプリケーションに動的なテーマカラーの設定が必要な場合は問題になります。Ionic では、これが[各色にバリエーションがある](colors.md#layered-colors)理由であり、テーマ設定に[stepped colors](themes.md#stepped-colors)が必要な理由でもあります。

これを可能にする[色の変更提案](https://github.com/w3c/csswg-drafts/issues/3187)について議論しているドラフトとイシューがあります。

## セーフエリアパディング

ディスプレイのセーフエリアは、デバイスのノッチ、ステータスバー、またはデバイスの UI の一部でありアプリの一部ではないその他の要素によって覆われていないセクションです。セーフエリアの寸法は、デバイスや向き（縦向きまたは横向き）によって異なります。

たとえば、以下は iPhone 14 Pro Max のスクリーンショットです。赤いセクションがセーフエリアで、白いセクションはアプリのコンテンツが覆われる場所です。

| Portrait                                                                       | Landscape                                                                        |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| <img src={require('@site/static/img/theming/ios-portrait-top.png').default} /> | <img src={require('@site/static/img/theming/ios-landscape-left.png').default} /> |

これに対応するため、Ionic は特定のコンポーネントに自動的にパディングを追加します。たとえば、`ion-modal`内に配置された最初の`ion-toolbar`コンポーネントは、デバイスのセーフエリアの上端に応じてパディングを受け取ります。これにより、デバイスのノッチがヘッダーテキストを覆うことを防ぎます。

<img src={require('@site/static/img/theming/modal-header-padding.png').default} />

このパディングは、[アプリケーション変数](#application-variables)で説明されている`--ion-safe-area-(dir)`変数を使用して CSS で手動で調整できます。値はアプリケーション全体、またはコンポーネントごとに設定できます。例：

```css
html {
  --ion-safe-area-left: 25px;
}

ion-modal {
  --ion-safe-area-top: 0;
}
```
