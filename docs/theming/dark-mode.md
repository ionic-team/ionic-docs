---
title: ダークモード
initialTab: 'preview'
inlineHtmlPreviews: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ダークモード to Change Color Schemes and CSS Properties</title>
  <meta
    name="description"
    content="Developers are adding dark mode CSS on native applications to support their user preferences. Read to learn more about dark color schemes for Ionic apps."
  />
</head>

Ionicでは、ダークな配色をサポートするなど、アプリのパレットを簡単に変更できます。ダークモードは、アプリのすべてのビューをダークパレットに変更する表示設定です。iOSとAndroidでシステム全体でサポートされているため、開発者にとってアプリに追加することが非常に望ましいです。

## Enabling Dark Palette

アプリでダークパレットを有効にする方法は3つあります: **always** ダークパレットを有効にする方法、**system** OSの設定に基づく方法、**class** CSSのクラスを使用する方法です。

### Always

Ionic Frameworkで提供されるデフォルトのパレットは、明るい背景と暗いテキストで構成されるライトパレットです。しかし、以下のスタイルシートを適切なファイルにインポートすることで、デフォルトのパレットをダークパレットに変更できます：

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.always.css';
```

</TabItem>

</Tabs>

これは[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)セレクタに[application colors](/docs/theming/themes#application-colors)と[stepped colors](/docs/theming/themes#stepped-colors)を設定します。

次の例は、ダークモードのシステム設定に関係なく、常にダークパレットを表示します。

import AlwaysDarkMode from '@site/static/usage/v8/theming/always-dark-mode/index.md';

<AlwaysDarkMode />

:::caution Important
Avoid targeting the `.ios` or `.md` selectors to override the Ionic dark palette, as these classes are added to each component and will take priority over globally defined variables. Instead, we can target the mode-specific classes on the `:root` element.
:::

### System

ダークモードを有効にするシステムアプローチでは、ユーザーの好みの配色をシステム設定で確認します。これは、新しいIonic Frameworkアプリを起動するときのデフォルトです。適切なファイルに以下のスタイルシートをインポートすると、システム設定からユーザーの好みを自動的に取得し、ダークモードが優先される場合にダークパレットを適用します：

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.system.css';
```

</TabItem>

</Tabs>

これは、[CSS media query for `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) が `dark` である場合に、[application colors](/docs/theming/themes#application-colors) と [stepped colors](/docs/theming/themes#stepped-colors) を設定します。prefers-color-scheme`メディアクエリは[すべてのモダンブラウザ](https://caniuse.com/#feat=prefers-color-scheme)でサポートされています。古いブラウザのサポートが必要な場合は、[CSS class](#css-class)を使用することをお勧めします。

以下の例では、ダークモードを表示するタイミングを決定するためにシステム設定を使用しています。

:::info
Not sure how to change the system settings? Here's how to enable dark mode on [Windows 11](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe) and on [macOS](https://support.apple.com/en-us/HT208976).
:::

import SystemDarkMode from '@site/static/usage/v8/theming/system-dark-mode/index.md';

<SystemDarkMode />

:::caution Important
Avoid targeting the `.ios` or `.md` selectors to override the Ionic dark palette, as these classes are added to each component and will take priority over globally defined variables. Instead, we can target the mode-specific classes on the `:root` element.
:::

### CSS Class

これまでの方法は、ファイルのインポートだけでダークパレットを有効にするのに適していますが、ダークパレットの適用をより制御する必要がある場合もあります。トグルなど条件付きでダークパレットを適用する必要がある場合、またはシステム設定に基づいて機能を拡張したい場合、ダークパレットクラスファイルを提供します。このファイルは、特定のクラスがアプリに追加されたときにダークパレットを適用します。以下のスタイルシートを適切なファイルにインポートすると、クラスでダークパレットを使用するために必要なスタイルが提供されます：

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.class.css';
```

</TabItem>

</Tabs>

これは `.ion-palette-dark` セレクタの [application colors](/docs/theming/themes#application-colors) と [stepped colors](/docs/theming/themes#stepped-colors) を設定するもので、開発者がアプリに適用する必要があります。

次の例では、サイト設定、システム設定、トグルを組み合わせて、ダークモードを表示するタイミングを決めています。サイトのパレットはシステム設定よりも優先されます。デモのロード時にシステム設定がサイトのパレットと異なる場合、サイトのパレットが使用されます。

:::info
Not sure how to change the system settings? Here's how to enable dark mode on [Windows 11](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe) and on [macOS](https://support.apple.com/en-us/HT208976).
:::

import ClassDarkMode from '@site/static/usage/v8/theming/class-dark-mode/index.md';

<ClassDarkMode />

:::caution Important
The `.ion-palette-dark` class **must** be added to the `html` element in order to work with the imported dark palette.
:::

## システム UI コンポーネントを調整する

ダークパレットを開発する際、特定のシステムUIコンポーネントがダークモードに正しく調整されないことに気づくかもしれません。これを修正するには `color-scheme` を指定する必要があります。クロスブラウザ対応の詳細については、<a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">browser compatibility for color-scheme</a>を参照してください。

ネイティブコンポーネントだけではなく、主に Ionic コンポーネントを使用している場合に、 `color-scheme` はスクロールバーなどのアプリケーションの側面にも影響します。 `color-scheme` を使用するには、次の HTML をアプリケーションの`head`に追加する必要があります:

```html
<meta name="color-scheme" content="light dark" />
```

これにより、ページは、どのカラースキームでレンダリングするのが快適かを示すことができます。また、次の CSS を追加して、要素ごとに設定することもできます。

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

## Ionic Dark Palette

Ionicには推奨のダークパレットがあり、3種類の方法で有効にできます： [always](#always)、[system](#system)の設定に基づく方法、[CSS class](#css-class)を使用する方法です。それぞれの方法には、対応する名前のダークパレットファイルをインポートすることが含まれます。

各ファイルの内容は、参考のために以下に含まれています。これらの変数は、該当するダークパレットファイルをインポートすることで設定されるため、アプリにコピーする必要はありません。さらなるカスタマイズのための追加変数を含む、変更される変数の詳細については、[Themes](themes.md)セクションを参照してください。

<Tabs groupId="darkFiles" defaultValue="always" values={[{ value: 'always', label: 'Always (dark.always.css)' }, { value: 'system', label: 'System (dark.system.css)' }, { value: 'class', label: 'Class (dark.class.css)' }]}>

<TabItem value="always">

The **always** dark palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark palette in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the dark palette on `ios` devices using the `:root.ios` selector.
3. Setting variables for the dark palette on `md` devices using the `:root.md` selector.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark palette variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `:root` selector. A higher specificity selector, such as `:root.ios`, is required.
:::

:::info
The contents of Ionic's dark palette can be [viewed on GitHub](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.scss). The CSS used to apply the **always** dark palette can be found [here](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.always.scss).
:::

</TabItem>

<TabItem value="system">

The **system** dark palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark palette in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the dark palette on `ios` devices using the `:root.ios` selector.
3. Setting variables for the dark palette on `md` devices using the `:root.md` selector.
4. Only applies these variables when the [CSS media query for `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is `dark`.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark palette variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `:root` selector. A higher specificity selector, such as `:root.ios`, is required.
:::

:::info
The contents of Ionic's dark palette can be [viewed on GitHub](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.scss). The CSS used to apply the **system** dark palette can be found [here](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.system.scss).
:::

</TabItem>

<TabItem value="class">

The **class** dark palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark palette in the `.ion-palette-dark` selector. The `.ion-palette-dark` class must be added to the `html` element in an app.
2. Setting variables for the dark palette on `ios` devices using the `.ion-palette-dark.ios` selector.
3. Setting variables for the dark palette on `md` devices using the `.ion-palette-dark.md` selector.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark palette variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `.ion-palette-dark` selector. A higher specificity selector, such as `.ion-palette-dark.ios`, is required.
:::

:::info
The contents of Ionic's dark palette can be [viewed on GitHub](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.scss). The CSS used to apply the **class** dark palette can be found [here](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.class.scss).
:::

</TabItem>

</Tabs>
