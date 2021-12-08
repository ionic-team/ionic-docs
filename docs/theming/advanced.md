---
sidebar_label: Advanced
initialTab: 'preview'
inlineHtmlPreviews: true
contributors:
  - brandyscarney
  - marcjulian
---

# 高度なカスタマイズ

CSSベースのテーマ設定では、CSSファイルをロードするか、いくつかのCSSプロパティ値を変更することで、アプリの配色をすばやくカスタマイズできます。


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



## Known Limitations

### The Alpha Problem

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

[メディアクエリ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) のCSS変数は現在サポートされていませんが、この問題を解決する[custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-mq) と [custom environment variables](https://drafts.csswg.org/css-env-1/)を追加するためのオープンドラフトがあります。ただし、現在のサポート状態では、次の機能は動作しません。

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* Doesn't work :( */
}
```


### CSSカラー変数の変更

Sassの組み込み関数を使用して簡単に色を変更することは可能ですが、現在のところCSS変数で設定された色を変更するのはそれほど簡単ではありません。これは、CSSで [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) or [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) チャネルまたはHSLチャネルを分割してそれぞれの値を変更することで実現できますが、複雑で機能が不足しています。

正確に説明します。基本的に、SassなどのCSSプリプロセッサを使用すると、関数を使用して単一の色を操作できます。たとえば、Sassには次のカラーを作成できます:

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

import CodeColor from '@site/src/components/CodeColor';

Sassコンパイラで実行すると、色の値は次のようになります:

| Variable            | Value                                                     |
| --------------------| ----------------------------------------------------------|
| `$background`       | <code-color mode="md" value="#3880ff"></code-color>       |
| `$background-shade` | <code-color mode="md" value="#3171e0"></code-color>       |
| `$background-tint`  | <code-color mode="md" value="#4c8dff"></code-color>       |
| `$text`             | <code-color mode="md" value="#444444"></code-color>       |
| `$text-darker`      | <code-color mode="md" value="#1e1e1e"></code-color>       |
| `$text-lighter`     | <code-color mode="md" value="#6a6a6a"></code-color>       |

ただし、CSS変数は実行時に設定でき、より動的であるため、現時点では単純な関数を使用して操作することはできません。

これは通常は問題にはなりませんが、アプリケーションに動的なテーマカラーの設定が必要な場合は問題になります。Ionicでは、これが[各色にバリエーションがある](./colors#layered-colors)理由であり、テーマ設定に[stepped colors](./themes/#stepped-colors)が必要な理由でもあります。

これを可能にする[color modification proposals](https://github.com/w3c/csswg-drafts/issues/3187)を議論している草案とIssuesはこちらからご覧いただけます。
