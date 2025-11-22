---
title: ダークモード
initialTab: 'preview'
inlineHtmlPreviews: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ダークモード: カラースキームとCSSプロパティを変更</title>
  <meta
    name="description"
    content="開発者は、ユーザーの好みをサポートするためにネイティブアプリケーションにダークモードCSSを追加しています。Ionicアプリのダークカラースキームについて詳しく学びましょう。"
  />
</head>

Ionic では、ダークな配色をサポートするなど、アプリのパレットを簡単に変更できます。ダークモードは、アプリのすべてのビューをダークパレットに変更する表示設定です。iOS と Android でシステム全体でサポートされているため、開発者にとってアプリに追加することが非常に望ましいです。

## ダークパレットを有効にする

アプリでダークパレットを有効にする方法は 3 つあります: **always** ダークパレットを有効にする方法、**system** OS の設定に基づく方法、**class** CSS のクラスを使用する方法です。

### Always

Ionic Framework で提供されるデフォルトのパレットは、明るい背景と暗いテキストで構成されるライトパレットです。しかし、以下のスタイルシートを適切なファイルにインポートすることで、デフォルトのパレットをダークパレットに変更できます：

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

ダークモードを有効にするシステムアプローチでは、ユーザーの好みの配色をシステム設定で確認します。これは、新しい Ionic Framework アプリを起動するときのデフォルトです。適切なファイルに以下のスタイルシートをインポートすると、システム設定からユーザーの好みを自動的に取得し、ダークモードが優先される場合にダークパレットを適用します：

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

:::caution 重要
インポートされたダークパレットを機能させるには、`.ion-palette-dark`クラスを`html`要素に追加する**必要があります**。
:::

## システム UI コンポーネントを調整する

ダークパレットを開発する際、特定のシステム UI コンポーネントがダークモードに正しく調整されないことに気づくかもしれません。これを修正するには `color-scheme` を指定する必要があります。クロスブラウザ対応の詳細については、<a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">browser compatibility for color-scheme</a>を参照してください。

ネイティブコンポーネントだけではなく、主に Ionic コンポーネントを使用している場合に、 `color-scheme` はスクロールバーなどのアプリケーションの側面にも影響します。 `color-scheme` を使用するには、次の HTML をアプリケーションの`head`に追加する必要があります:

```html
<meta name="color-scheme" content="light dark" />
```

これにより、ページは、どのカラースキームでレンダリングするのが快適かを示すことができます。また、次の CSS を追加して、要素ごとに設定することもできます。

```css
color-scheme: light dark;
```

| Default scrollbar                                                                                                                                      | Scrollbar with `color-scheme`                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![A default light-themed scrollbar in an application interface.](/img/theming/color-scheme-light.png 'Default scrollbar appearance without dark mode') | ![A dark-themed scrollbar in an application interface, demonstrating the effect of the 'color-scheme' property.](/img/theming/color-scheme-dark.png "Scrollbar appearance with dark mode 'color-scheme' applied") |

`color-scheme` に関する詳細は、[Web.dev guide on color schemes](https://web.dev/color-scheme/)を参照してください。

:::note
`color-scheme` はキーボードに反映されません。キーボードのダークモードについての詳しい情報は [Keyboard Documentation](../developing/keyboard.md#dark-mode) をご覧ください。
:::

:::note
iOS 15のSafariのステータスバーの下またはmacOSのSafariのツールバーのテーマカラーをカスタマイズしたい開発者は、[`theme-color` Meta](./advanced.md#theme-color-meta)を参照してください。
:::

## Ionic Dark Palette

Ionic には推奨のダークパレットがあり、3 種類の方法で有効にできます： [always](#always)、[system](#system)の設定に基づく方法、[CSS class](#css-class)を使用する方法です。それぞれの方法には、対応する名前のダークパレットファイルをインポートすることが含まれます。

各ファイルの内容は、参考のために以下に含まれています。これらの変数は、該当するダークパレットファイルをインポートすることで設定されるため、アプリにコピーする必要はありません。さらなるカスタマイズのための追加変数を含む、変更される変数の詳細については、[Themes](themes.md)セクションを参照してください。

<Tabs groupId="darkFiles" defaultValue="always" values={[{ value: 'always', label: 'Always (dark.always.css)' }, { value: 'system', label: 'System (dark.system.css)' }, { value: 'class', label: 'Class (dark.class.css)' }]}>

<TabItem value="always">

**always**ダークパレットは、以下のように動作します：

1. `:root`セレクタで、すべての[modes](platform-styles.md#ionic-modes)の[Ionic colors](colors.md)をダークパレットに補完するように設定します。[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)セレクタは、[specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)が高いことを除いて、セレクタ`html`と同一です。
2. `:root.ios`セレクタを使用して、`ios`デバイスでダークパレットの変数を設定します。
3. `:root.md`セレクタを使用して、`md`デバイスでダークパレットの変数を設定します。

:::caution
Ionicダークパレット変数のいずれかをオーバーライドする場合は、specificityに注意することが重要です。たとえば、`--ion-item-background`変数は各モードで設定されているため、`:root`セレクタでオーバーライドできません。`:root.ios`などのより高いspecificityセレクタが必要です。
:::

:::info
Ionicのダークパレットの内容は[GitHubで確認できます](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.scss)。**always**ダークパレットを適用するために使用されるCSSは、[リポジトリ](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.always.scss)で見つけることができます。
:::

</TabItem>

<TabItem value="system">

**system**ダークパレットは、以下のように動作します：

1. `:root`セレクタで、すべての[modes](platform-styles.md#ionic-modes)の[Ionic colors](colors.md)をダークパレットに補完するように設定します。[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)セレクタは、[specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)が高いことを除いて、セレクタ`html`と同一です。
2. `:root.ios`セレクタを使用して、`ios`デバイスでダークパレットの変数を設定します。
3. `:root.md`セレクタを使用して、`md`デバイスでダークパレットの変数を設定します。
4. [CSS media query for `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)が`dark`の場合にのみ、これらの変数を適用します。

:::caution
Ionicダークパレット変数のいずれかをオーバーライドする場合は、specificityに注意することが重要です。たとえば、`--ion-item-background`変数は各モードで設定されているため、`:root`セレクタでオーバーライドできません。`:root.ios`などのより高いspecificityセレクタが必要です。
:::

:::info
Ionicのダークパレットの内容は[GitHubで確認できます](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.scss)。**system**ダークパレットを適用するために使用されるCSSは、[リポジトリ](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.system.scsss)で見つけることができます。
:::

</TabItem>

<TabItem value="class">

**class**ダークパレットは、以下のように動作します：

1. `.ion-palette-dark`セレクタで、すべての[modes](platform-styles.md#ionic-modes)の[Ionic colors](colors.md)をダークパレットに補完するように設定します。`.ion-palette-dark`クラスは、アプリの`html`要素に追加する必要があります。
2. `.ion-palette-dark.ios`セレクタを使用して、`ios`デバイスでダークパレットの変数を設定します。
3. `.ion-palette-dark.md`セレクタを使用して、`md`デバイスでダークパレットの変数を設定します。

:::caution
Ionicダークパレット変数のいずれかをオーバーライドする場合は、specificityに注意することが重要です。たとえば、`--ion-item-background`変数は各モードで設定されているため、`.ion-palette-dark`セレクタでオーバーライドできません。`.ion-palette-dark.ios`などのより高いspecificityセレクタが必要です。
:::

:::info
Ionicのダークパレットの内容は[GitHubで確認できます](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.scss)。**class**ダークパレットを適用するために使用されるCSSは、[リポジトリ](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.class.scss)で見つけることができます。
:::

</TabItem>

</Tabs>
