---
title: 配色
initialTab: 'preview'
inlineHtmlPreviews: true
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Ionic CSS Color Component: Style or Change Default App Colors</title>
  <meta
    name="description"
    content="Ionic has nine default colors that can be used to change the color of many components. Learn how to utilize Ionic CSS color properties to style your apps."
  />
</head>

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

それぞれの配色は、これらのプロパティで構成されています: `base`, `contrast`, `shade`, と `tint` です。`base` と `contrast` の配色は `rgb` プロパティと同一の配色が求められます。 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a> をご覧ください。この `rgb` の変数が必要な理由は [The Alpha Problem](advanced.md#the-alpha-problem) をご覧ください。下のドロップダウンから選択することで、Ionicが提供するデフォルトの配色とそのバリエーションを確認することができます。

<LayeredColorsSelect />

## Modifying Colors

配色を変更するときは、その色についてリストされているすべてのバリエーションを変更する必要があります。例えば、`secondary color` を <code-color mode="md" value="#006600"></code-color> に変更する時、以下のCSSプロパティが必要です。

```css
:root {
  --ion-color-secondary: #006600;
  --ion-color-secondary-rgb: 0, 102, 0;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #005a00;
  --ion-color-secondary-tint: #1a751a;
}
```

`secondary` をボタンに適用した時、利用されるのはベースカラー <CodeColor color="#006600">#006600</CodeColor> だけではありません。`contrast color` <CodeColor color="#ffffff">#ffffff</CodeColor> はテキストに適用され、それに加えて `shade` <CodeColor color="#005a00">#005a00</CodeColor> と `tint` <CodeColor color="#1a751a">#1a751a</CodeColor> はボタンのステータスが変更された時に利用されます。

:::note
ベースカラーからバリエーションカラーを取得する方法がわからない？その場合、 [Color Generator](color-generator.md) をお試しください。これはすべてのバリエーションを計算し、アプリにコピー&ペーストできるコードを提供します！
:::

CSS変数についてもっと詳しく知りたい時は [CSS Variables documentation](css-variables.md) をご覧ください。

### 配色の追加

カラーは、Ionicコンポーネントの 「color」 プロパティを設定するか、CSSを使用してスタイル設定することで、アプリケーション全体で使用できるように追加できます。新しいカラーを手動で追加する方法については、この後の 「New Color Creator」 を参照してください。コピーしてアプリケーションに貼り付ける新しいカラーのコードを簡単に生成する方法については、次の 「New Color Creator」 を参照してください。

新しいカラーを追加するには、最初にルートのカラーのすべてのバリエーションのCSS変数を定義します。たとえば、`favorite`という新しいカラーを追加するには、次の変数を定義します:

```css
:root {
  --ion-color-favorite: #69bb7b;
  --ion-color-favorite-rgb: 105, 187, 123;
  --ion-color-favorite-contrast: #ffffff;
  --ion-color-favorite-contrast-rgb: 255, 255, 255;
  --ion-color-favorite-shade: #5ca56c;
  --ion-color-favorite-tint: #78c288;
}
```

次に、これらのCSS変数を使用する新しいクラスを作成します。クラスは、`.ion-color-{COLOR}` の形式で記述する**必要があります**。 `{COLOR}` は追加するカラーの名前です:

```css
.ion-color-favorite {
  --ion-color-base: var(--ion-color-favorite);
  --ion-color-base-rgb: var(--ion-color-favorite-rgb);
  --ion-color-contrast: var(--ion-color-favorite-contrast);
  --ion-color-contrast-rgb: var(--ion-color-favorite-contrast-rgb);
  --ion-color-shade: var(--ion-color-favorite-shade);
  --ion-color-tint: var(--ion-color-favorite-tint);
}
```

クラスを追加すると、colorプロパティーをサポートする任意のIonicコンポーネントでカラーを使用できるようになります。Ionicボタンに`favorite`の色を使用する例を以下に示します。

```html
<ion-button color="favorite">Favorite</ion-button>
```

ルートで定義されたCSS変数は、CSSを使用して任意のエレメントのスタイル設定にも使用できます:

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

CSS変数の設定方法と使い方についての詳しい情報は [CSS Variables documentation](css-variables.md) をご覧ください。

## New Color Creator

名前と値を変更して以下で新しい色を作成し、以下のコードをコピーしてプロジェクトに貼り付けることで、その配色をIonicプロジェクトで利用できます。

<NewColorGenerator />
