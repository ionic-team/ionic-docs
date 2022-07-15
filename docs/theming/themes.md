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

Ionicは、アプリケーション全体のデフォルトテーマを変更するために、コンポーネント全体で使用できるいくつかのグローバル変数を提供します。次のセクションでは、さまざまなテーマ変数を用途別に分類しています: [Application Colors](#application-colors), [Stepped Colors](#stepped-colors)

### アプリケーションの配色

アプリケーションの配色は、Ionicの複数の場所で使用されています。ダークテーマや、ブランディングにあったテーマを簡単に作成することができます。

背景とテキストの色変数は、RGBである必要があります: <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. なぜ `rgb` プロパティも必要であるかは [The Alpha Problem](advanced.md#the-alpha-problem) をご覧ください。

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

Ionicテーマをカスタマイズするためのさまざまな方法を検討した結果、1つの背景色またはテキスト色しか使用できないことがわかりました。デザイン全体を通して重要性と深度を暗示するためには、背景色とテキスト色の色合いを変える必要があります。このパターンに対応するために、ステップカラーを作成しました。

背景色 (`--ion-background-color`) と テキストカラー (`--ion-text-color`) の変数を更新すると、ほとんどのアプリコンポーネントの外観が変わりますが、見逃したり壊れたりする可能性のある特定のIonicコンポーネントがあります。ダークテーマを適用するとき、これはより明白になります。

一部のコンポーネントでは、背景よりも暗い、またはテキストよりも明るい色合いを使用しています。たとえば、item の見出しテキストは、私たちのデフォルトのテキストカラーよりも数段階明るい色である <CodeColor color="#404040">#404040</CodeColor> になります。一方、ローディングコンポーネントの背景は白よりも濃い色 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor> になります。私達はこれらのわずかな変化を定義するために、ステップカラーを利用します。アプリケーションの背景色やテキストの色を更新するときは、ステップカラーを更新することが重要です。

デフォルトでは、Ionicのステップカラーはデフォルトの背景色の値 <CodeColor color="#ffffff">#ffffff</CodeColor> で始まります。 そしてテキストカラー値 <CodeColor color="#000000">#000000</CodeColor> を混ぜるために使います。ステップカラーの完全なリストは、以下のジェネレータに表示されています。

## Stepped Color Generator

Create a custom background and text color theme for your app. Update the background or text color’s hex values below, then copy and paste the generated code directly into your Ionic project.

<SteppedColorGenerator />
