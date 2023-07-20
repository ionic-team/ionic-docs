---
title: ダークモード
initialTab: 'preview'
inlineHtmlPreviews: true
---

import Codepen from '@components/global/Codepen';

<head>
  <title>ダークモード to Change Color Schemes and CSS Properties</title>
  <meta
    name="description"
    content="Developers are adding dark mode CSS on native applications to support their user preferences. Read to learn more about dark color schemes for Ionic apps."
  />
</head>

Ionicを使えば、ダークカラーのスキームのサポートなど、アプリのテーマを簡単に変更できます。ネイティブアプリでのダークモードのサポートが拡大していることから、開発者はユーザーの好みをサポートするためにアプリにダークモードを追加する流れがあります。

## Media Query の利用

ダークモードを有効にするためにはまず、 [ユーザの設定してるカラースキーマを利用するmedia query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) を使用します。このメディアクエリは、ユーザーのデバイスのシステム設定に接続され、ダークモードが有効になっている場合はテーマを適用します。

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* dark mode variables go here */
  }
}
```

現在、media query `prefers-color-scheme` は[限られたブラウザサポート](https://caniuse.com/#feat=prefers-color-scheme) であるため、一部のブラウザでは、このメディアクエリを使用してダークモードを適用することはできません。ただし、ダークモードは、 [CSS class fallback](#css-class-fallback) を使用して適用することもできます。

## CSS Class Fallback

メディアクエリをサポートしていないデバイスの代替メソッドとして、CSSセレクタをスタイル設定し、クラスをドキュメントのbodyに適用することで、ダークモードを適用できます。

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode variables go here */
  }
}

/* Fallback for older browsers or manual mode */
body.dark {
  /* Dark mode variables go here */
}
```

`body.dark` セレクタをターゲットとする変数を使用する場合は、アプリケーション内の `<body>` にクラスを追加するだけです。これはアプリケーションが構築されているフレームワークによってさまざまな方法で行うことができます。

この例では、変数は両方の場所にある必要があります。2つの場所に変数を設定しないようにするために、[JavaScriptを使用](#combining-with-javascript) することができます。

## JavaScriptとの統合

CSS変数を一度だけ記述して、複数の場所で更新する必要がないようにするために、フォールバックとクラスをJavaScriptを使用して `prefers-color-scheme`  メディアクエリーの値をチェックし、プリファレンスが `dark` の場合は `dark` クラスを追加することで統合できます。CSSは次のようなものになるでしょう:

```css
body.dark {
  /* Dark mode variables go here */
}
```

上記の変数は `body.dark` セレクタにのみあり、 `prefers-color-scheme` メディアクエリは削除されています。

### 自動的にダークモードを有効にする

JavaScriptでは、ドキュメントが [matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) を使用してメディアクエリと一致するかどうかをチェックすることによって、 `dark` クラスを `<body>` に追加できます。これにより、ユーザの設定に基づいてダークモードが動作するようになります。

```javascript
// Use matchMedia to check the user preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}
```

:::note
Tip: make sure to view the Codepen below in a [supported browser](https://caniuse.com/#feat=prefers-color-scheme) and then try changing the system preferences on your device between light & dark mode. Here's [how to enable dark mode on Windows 10](https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/) and [how to enable it on a Mac](https://support.apple.com/en-us/HT208976).
:::

<!-- Codepen https://codepen.io/ionic/pen/jONzJpG -->

<Codepen preview="false" user="ionic" slug="jONzJpG" height="550px" default-tab="js,result" />

### 手動でダークモードをトグルする

アプリケーションがロードされたとき、およびメディアのクエリが変更されたときに、 `toggleDarkTheme()` を呼び出すことに加えて、 `toggleDarkTheme()` 関数は、ユーザーがトグルを変更し、ライトテーマとダークテーマを切り替えるときなどに、アプリケーションによって呼び出すことができます:

```javascript
// Query for the toggle that is used to change between themes
const toggle = document.querySelector('#themeToggle');

// Listen for the toggle check/uncheck to toggle the dark class on the <body>
toggle.addEventListener('ionChange', (ev) => {
  document.body.classList.toggle('dark', ev.detail.checked);
});

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((e) => checkToggle(e.matches));

// Called when the app loads
function loadApp() {
  checkToggle(prefersDark.matches);
}

// Called by the media query to check/uncheck the toggle
function checkToggle(shouldCheck) {
  toggle.checked = shouldCheck;
}
```

<!-- Codepen https://codepen.io/ionic/pen/zYOpQLj -->

<Codepen preview="false" user="ionic" slug="zYOpQLj" height="600px" default-tab="js,result" />

## システムUIコンポーネントを調整する

ダークテーマを開発するときに、特定のシステムUIコンポーネントがダークモードに正しく調整されていないことがあります。これを修正するには、 `color-scheme` を指定する必要があります。クロスブラウザのサポートの詳細については、 <a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">ブラウザのカラースキーマの設定</a> を参照してください。

ネイティブコンポーネントだけではなく、主にIonicコンポーネントを使用している場合に、 `color-scheme` はスクロールバーなどのアプリケーションの側面にも影響します。 `color-scheme` を使用するには、次のHTMLをアプリケーションの`head`に追加する必要があります:

```html
<meta name="color-scheme" content="light dark" />
```

これにより、ページは、どのカラースキームでレンダリングするのが快適かを示すことができます。また、次のCSSを追加して、要素ごとに設定することもできます。

```css
color-scheme: light dark;
```

| Default scrollbar                                                        | Scrollbar with `color-scheme`                                        |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Application without color-scheme](/img/theming/color-scheme-light.png) | ![Application with color-scheme](/img/theming/color-scheme-dark.png) |

より詳しい `color-scheme` の情報については https://web.dev/color-scheme/ をご覧ください。

:::note
`color-scheme` はキーボードに反映されません。キーボードのダークモードについての詳しい情報は [Keyboard Documentation](../developing/keyboard.md#dark-mode) をご覧ください。
:::

:::note
For developers looking to customize the theme color under the status bar in Safari on iOS 15 or the toolbar in Safari on macOS, see [`theme-color` Meta](./advanced.md#theme-color-meta).
:::

## Ionicダークモード

Ionicには、アプリを実行しているデバイスに基づいてダークモードを取得するために使用する変数の推奨テーマがあります。次の部分に分けることができます:

1. すべてのデフォルトの [modes](platform-styles.md#ionic-modes) のデフォルトの [Ionic colors](colors.md) を変更して `body.dark` セレクタのダークモードの背景色に対応します。
1. `ios` デバイスでダークテーマの変数を設定します。
1. `md` デバイスでダークテーマの変数を設定します。

次のコードをコピーしてアプリに貼り付けると、Ionicのダークテーマを取得できます。 [JavaScriptとの統合](#combining-with-javascript) セクションで説明したように、JavaScriptを使用して `dark` クラスをドキュメント bodyに追加します。 `dark` クラスがドキュメント本文に追加されるまで、ダークモードは有効になりません。

:::note
さらにカスタマイズするために追加できるその他の変数など、変更する変数の詳細については [Themes](themes.md) をご覧ください。
:::

```css
/*
 * Dark Colors
 * -------------------------------------------
 */

body.dark {
  --ion-color-primary: #428cff;
  --ion-color-primary-rgb: 66, 140, 255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #3a7be0;
  --ion-color-primary-tint: #5598ff;

  --ion-color-secondary: #50c8ff;
  --ion-color-secondary-rgb: 80, 200, 255;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #46b0e0;
  --ion-color-secondary-tint: #62ceff;

  --ion-color-tertiary: #6a64ff;
  --ion-color-tertiary-rgb: 106, 100, 255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255, 255, 255;
  --ion-color-tertiary-shade: #5d58e0;
  --ion-color-tertiary-tint: #7974ff;

  --ion-color-success: #2fdf75;
  --ion-color-success-rgb: 47, 223, 117;
  --ion-color-success-contrast: #000000;
  --ion-color-success-contrast-rgb: 0, 0, 0;
  --ion-color-success-shade: #29c467;
  --ion-color-success-tint: #44e283;

  --ion-color-warning: #ffd534;
  --ion-color-warning-rgb: 255, 213, 52;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0, 0, 0;
  --ion-color-warning-shade: #e0bb2e;
  --ion-color-warning-tint: #ffd948;

  --ion-color-danger: #ff4961;
  --ion-color-danger-rgb: 255, 73, 97;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255, 255, 255;
  --ion-color-danger-shade: #e04055;
  --ion-color-danger-tint: #ff5b71;

  --ion-color-dark: #f4f5f8;
  --ion-color-dark-rgb: 244, 245, 248;
  --ion-color-dark-contrast: #000000;
  --ion-color-dark-contrast-rgb: 0, 0, 0;
  --ion-color-dark-shade: #d7d8da;
  --ion-color-dark-tint: #f5f6f9;

  --ion-color-medium: #989aa2;
  --ion-color-medium-rgb: 152, 154, 162;
  --ion-color-medium-contrast: #000000;
  --ion-color-medium-contrast-rgb: 0, 0, 0;
  --ion-color-medium-shade: #86888f;
  --ion-color-medium-tint: #a2a4ab;

  --ion-color-light: #222428;
  --ion-color-light-rgb: 34, 36, 40;
  --ion-color-light-contrast: #ffffff;
  --ion-color-light-contrast-rgb: 255, 255, 255;
  --ion-color-light-shade: #1e2023;
  --ion-color-light-tint: #383a3e;
}

/*
 * iOS Dark Theme
 * -------------------------------------------
 */

.ios body.dark {
  --ion-background-color: #000000;
  --ion-background-color-rgb: 0, 0, 0;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255, 255, 255;

  --ion-color-step-50: #0d0d0d;
  --ion-color-step-100: #1a1a1a;
  --ion-color-step-150: #262626;
  --ion-color-step-200: #333333;
  --ion-color-step-250: #404040;
  --ion-color-step-300: #4d4d4d;
  --ion-color-step-350: #595959;
  --ion-color-step-400: #666666;
  --ion-color-step-450: #737373;
  --ion-color-step-500: #808080;
  --ion-color-step-550: #8c8c8c;
  --ion-color-step-600: #999999;
  --ion-color-step-650: #a6a6a6;
  --ion-color-step-700: #b3b3b3;
  --ion-color-step-750: #bfbfbf;
  --ion-color-step-800: #cccccc;
  --ion-color-step-850: #d9d9d9;
  --ion-color-step-900: #e6e6e6;
  --ion-color-step-950: #f2f2f2;

  --ion-item-background: #000000;

  --ion-card-background: #1c1c1d;
}

.ios body.dark ion-modal {
  --ion-background-color: var(--ion-color-step-100);
  --ion-toolbar-background: var(--ion-color-step-150);
  --ion-toolbar-border-color: var(--ion-color-step-250);
  --ion-item-background: var(--ion-color-step-150);
}

/*
 * Material Design Dark Theme
 * -------------------------------------------
 */

.md body.dark {
  --ion-background-color: #121212;
  --ion-background-color-rgb: 18, 18, 18;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255, 255, 255;

  --ion-border-color: #222222;

  --ion-color-step-50: #1e1e1e;
  --ion-color-step-100: #2a2a2a;
  --ion-color-step-150: #363636;
  --ion-color-step-200: #414141;
  --ion-color-step-250: #4d4d4d;
  --ion-color-step-300: #595959;
  --ion-color-step-350: #656565;
  --ion-color-step-400: #717171;
  --ion-color-step-450: #7d7d7d;
  --ion-color-step-500: #898989;
  --ion-color-step-550: #949494;
  --ion-color-step-600: #a0a0a0;
  --ion-color-step-650: #acacac;
  --ion-color-step-700: #b8b8b8;
  --ion-color-step-750: #c4c4c4;
  --ion-color-step-800: #d0d0d0;
  --ion-color-step-850: #dbdbdb;
  --ion-color-step-900: #e7e7e7;
  --ion-color-step-950: #f3f3f3;

  --ion-item-background: #1e1e1e;

  --ion-toolbar-background: #1f1f1f;

  --ion-tab-bar-background: #1f1f1f;

  --ion-card-background: #1e1e1e;
}
```
