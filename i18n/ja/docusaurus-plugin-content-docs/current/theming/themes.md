---
title: テーマのカスタマイズ
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>Ionicアプリのテーマ | Change Default App Background Themes & Colors</title>
  <meta
    name="description"
    content="Several global variables change the default theme of an entire application. Create a custom background and text color theme for your app with Ionic themes."
  />
</head>

Ionic は、アプリケーション全体のデフォルトテーマを変更するために、コンポーネント全体で使用できるいくつかのグローバル変数を提供します。次のセクションでは、さまざまなテーマ変数を用途別に分類しています: [Application Colors](#application-colors), [Stepped Colors](#stepped-colors)

### アプリケーションの配色

アプリケーションカラーは、Ionic の複数の場所で使用されています。これらは、ブランドにマッチしたダークパレットやテーマを簡単に作成するのに便利です。

背景とテキストの色変数は、RGB である必要があります: <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. なぜ `rgb` プロパティも必要であるかは [The Alpha Problem](advanced.md#the-alpha-problem) をご覧ください。

| Name                                       | Description                                          |
| ------------------------------------------ | ---------------------------------------------------- |
| `--ion-background-color`                   | Background color of the entire app                   |
| `--ion-background-color-rgb`               | Background color of the entire app, rgb format       |
| `--ion-text-color`                         | Text color of the entire app                         |
| `--ion-text-color-rgb`                     | Text color of the entire app, rgb format             |
| `--ion-backdrop-color`                     | Color of the Backdrop component                      |
| `--ion-backdrop-opacity`                   | Opacity of the Backdrop component                    |
| `--ion-overlay-background-color`           | Background color of the overlays                     |
| `--ion-border-color`                       | Border color                                         |
| `--ion-box-shadow-color`                   | Box shadow color                                     |
| `--ion-tab-bar-background`                 | Background of the Tab Bar                            |
| `--ion-tab-bar-background-focused`         | Background of the focused Tab Bar                    |
| `--ion-tab-bar-border-color`               | Border color of the Tab Bar                          |
| `--ion-tab-bar-color`                      | Color of the Tab Bar                                 |
| `--ion-tab-bar-color-selected`             | Color of the selected Tab Button                     |
| `--ion-toolbar-background`                 | Background of the Toolbar                            |
| `--ion-toolbar-border-color`               | Border color of the Toolbar                          |
| `--ion-toolbar-color`                      | Color of the components in the Toolbar               |
| `--ion-toolbar-segment-color`              | Color of the Segment Buttons in the Toolbar          |
| `--ion-toolbar-segment-color-checked`      | Color of the checked Segment Buttons in the Toolbar  |
| `--ion-toolbar-segment-background`         | Background of the Segment Buttons in the Toolbar     |
| `--ion-toolbar-segment-background-checked` | Background of the Segment Buttons in the Toolbar     |
| `--ion-toolbar-segment-indicator-color`    | Color of the Segment Button indicator in the Toolbar |
| `--ion-item-background`                    | Background of the Item                               |
| `--ion-item-border-color`                  | Border color of the Item                             |
| `--ion-item-color`                         | Color of the components in the Item                  |
| `--ion-placeholder-color`                  | Color of the placeholder in Inputs                   |

### ステップカラー

Ionic テーマをカスタマイズするためのさまざまな方法を検討した結果、1 つの背景色またはテキスト色しか使用できないことがわかりました。デザイン全体を通して重要性と深度を暗示するためには、背景色とテキスト色の色合いを変える必要があります。このパターンに対応するために、ステップカラーを作成しました。

background 変数（--ion-background-color`）とtext変数（--ion-text-color`）を更新すると、ほとんどのコンポーネントでアプリの見た目が変わりますが、特定の Ionic コンポーネントでは見た目が崩れたり、壊れたりすることがあります。これは、暗いパレットを適用するとより明らかになります。

一部のコンポーネントでは、背景よりも暗い、またはテキストよりも明るい色合いを使用しています。たとえば、item の見出しテキストは、私たちのデフォルトのテキストカラーよりも数段階明るい色である <CodeColor color="#404040">#404040</CodeColor> になります。一方、ローディングコンポーネントの背景は白よりも濃い色 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor> になります。私達はこれらのわずかな変化を定義するために、ステップカラーを利用します。アプリケーションの背景色やテキストの色を更新するときは、ステップカラーを更新することが重要です。

Ionic では、テキストカラーと背景カラーを別々に更新できるように、別々のステップカラーを提供しています。これは、テキストと背景の両方のステップカラーを使用するコンポーネントに便利で、[ハイコントラストパレット](./high-contrast-mode)を効果的に実装できます。

デフォルトでは、Ionic の段階的なテキストカラーは、デフォルトのテキストカラー値<CodeColor color="#000000">#000000</CodeColor> から始まり、背景カラー値<CodeColor color="#ffffff">#ffffff</CodeColor> と増加するパーセンテージで混合します。Ionic の背景の段階的な色は、デフォルトの背景色値 <CodeColor color="#ffffff">#ffffff</CodeColor> から始まり、増加する割合でテキスト色値 <CodeColor color="#000000">#000000</CodeColor> と混ざります。ステップカラーの完全なリストは、以下のジェネレータに示されています。

## Stepped Color Generator

アプリのカスタム背景色とテキスト色のテーマを作成します。以下の背景色またはテキスト色の 16 進数値を更新し、生成されたコードを Ionic プロジェクトに直接コピー＆ペーストしてください。

<SteppedColorGenerator useTextAndBackgroundStepColors={true} />
