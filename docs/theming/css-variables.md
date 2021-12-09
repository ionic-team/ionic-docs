---
title: CSS変数
---

<head>
  <title>CSS Variables | CSS Custom Properties for Variables & Components</title>
  <meta
    name="description"
    content="Ionic components are built with CSS Variables for easy custom app properties. They allow a value to be stored in one place, then referenced in multiple places."
  />
</head>

Ionicのコンポーネントは、アプリケーションを簡単にカスタマイズできるように<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS変数</a>を使用して構築されています。CSS変数を使用すると、1か所に保存している値を、他の複数の場所から参照できます。また、実行時に動的にCSSを変更することを可能にします（以前はCSSプリプロセッサが必要でした）。CSS変数を使用すると、ブランディングやテーマに合わせてIonicコンポーネントをオーバーライドすることが、これまでになく簡単になります。

## 変数の設定

### グローバル変数

CSS変数は、アプリケーションの `:root` セレクタでグローバルに設定できます。They can also be applied only for a specific mode. Ionicが提供するグローバル変数の詳細については、[Ionic 変数](#ionic-variables)を参照してください。

Ionic CLIを使用してAngularプロジェクトを開始すると Ionicのデフォルト変数を上書きすることができる `src/theme/variables.scss` が作成されます。

```css
/* Set variables for all modes */
:root {
  /* Set the background of the entire app */
  --ion-background-color: #ff3700;

  /* Set the font family of the entire app */
  --ion-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', sans-serif;
}

/* Set text color of the entire app for iOS only */
.ios {
  --ion-text-color: #000;
}

/* Set text color of the entire app for Material Design only */
.md {
  --ion-text-color: #222;
}
```

### コンポーネント変数

特定のコンポーネントにCSS変数を設定するには、そのセレクタの内側に変数を追加します。Ionicが提供するコンポーネントレベルの変数の詳細については、[Ionic Variables](#ionic-variables) を参照ください。

```css
/* Set the color on all ion-button elements */
ion-button {
  --color: #222;
}

/* Set the background on an ion-button with the .fancy-button class */
.fancy-button {
  --background: #00ff00;
}
```

### JavaScriptで変数を設定

CSS 変数は[setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) を使ってJavaScriptで変更することもできます:

```js
const el = document.querySelector('.fancy-button');
el.style.setProperty('--background', '#36454f');
```

## 変数を利用する

### CSSでの使い方

[CSSの var() 関数](https://developer.mozilla.org/en-US/docs/Web/CSS/var) を使うと、失敗した時の設定とともにCSS変数を取得することができます。 例えば、以下の例では `--background` プロパティに `--charcoal` 変数を利用しますが、もし値を取得できなければ代わりに `#36454f` が適用されます。

```css
.fancy-button {
  --background: var(--charcoal, #36454f);
}
```

### JavaScriptでの使い方

CSS変数の値は、[getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue) を使用してJavaScriptで読み取ることができます:

```js
const el = document.querySelector('.fancy-button');
const color = el.style.getPropertyValue('--charcoal');
```

## Ionic変数

### Component変数

Ionicは、`--background` や `--color` のようなコンポーネントレベルの変数を提供します。コンポーネントが受け入れるカスタムプロパティについては、 [API reference](../api.md) の `CSS Custom Properties` セクションをご覧ください。たとえば、[Button Custom Properties](../api/button.md#css-custom-properties) をご覧ください。

### グローバル変数

アプリケーション全体のテーマを簡単に変更できるようにIonicが提供するグローバル変数がいくつかあります。すべてのグローバル変数のリストは [Colors](colors.md), [Themes](/docs/theming/themes) and [Advanced Theming](advanced.md) をご覧ください。
