---
title: High Contrast Mode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ハイコントラストモード: 色のコントラストを向上</title>
  <meta
    name="description"
    content="開発者は、ユーザーの好みをサポートするためにネイティブアプリケーションにハイコントラストモードCSSを追加しています。Ionicアプリのハイコントラストカラースキームについて詳しく学びましょう。"
  />
</head>

Ionicは、視力の低いユーザー向けにコントラストを向上させたパレットを提供します。これらのパレットは、テキストなどの前景コンテンツとUIコンポーネントなどの背景コンテンツ間のコントラストを増幅することで機能します。Ionicは、ハイコントラストを実現するためにライトとダークの両方のバリアントを提供します。

## 概要

Ionicのデフォルトパレットは、適切なコントラストカラーと組み合わせて使用すると、Web Content Accessibility Guidelines（WCAG）で定義されている[Level AA色コントラスト](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)を満たす[Ionic colors](./colors.md)を提供します。ハイコントラストパレットの[Ionic colors](./colors.md)は、適切なコントラストカラーと組み合わせて使用すると、[Level AAA色コントラスト](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)を満たすように更新されています。特に、ボーダー、テキスト、背景色を含むUIコンポーネントのコントラストが改善されています。ただし、ハイコントラストパレット内では、テキストの可読性が優先されることに注意することが重要です。これは、ページの背景に対するUIコンポーネントのコントラストを調整すると、コンポーネントのテキストとその背景間のコントラストが大幅に損なわれる場合、UIコンポーネントの背景のコントラストは変更されないままになることを意味します。

## ハイコントラストテーマを有効にする

アプリでハイコントラストパレットを有効にする方法は3つあります：**always**、**system**設定に基づく方法、またはCSS**class**を使用する方法です。

### Always

ハイコントラストパレットは、適切なファイルに以下のスタイルシートをインポートすることで有効にできます。このアプローチは、コントラスト設定のシステム設定に関係なく、ハイコントラストパレットを有効にします。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```scss
@import '@ionic/angular/css/palettes/high-contrast.always.css'; // Light palette
// @import '@ionic/angular/css/palettes/high-contrast-dark.always.css'; // Dark palette
```

</TabItem>
<TabItem value="javascript">

```typescript
import '@ionic/core/css/palettes/high-contrast.always.css'; // Light palette
// import '@ionic/core/css/palettes/high-contrast-dark.always.css'; // Dark palette
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.always.css'; // Light palette
// import '@ionic/react/css/palettes/high-contrast-dark.always.css'; // Dark palette
```

</TabItem>
<TabItem value="vue">

```typescript
import '@ionic/vue/css/palettes/high-contrast.always.css'; // Light palette
// import '@ionic/vue/css/palettes/high-contrast-dark.always.css'; // Dark palette
```

</TabItem>

</Tabs>

ハイコントラストダークパレットは、`high-contrast.always.css`の代わりに`high-contrast-dark.always.css`をインポートすることで適用できます。

以下の例は、ユーザーのハイコントラストまたはダークモードの設定に関係なく、常にハイコントラストライトパレットを表示します。

import AlwaysHighContrastMode from '@site/static/usage/v8/theming/always-high-contrast-mode/index.md';

<AlwaysHighContrastMode />

### System

ハイコントラストモードを有効にするシステムアプローチでは、ユーザーの好みのコントラストをシステム設定で確認します。これは、新しいIonic Frameworkアプリを起動するときのデフォルトです。適切なファイルに以下のスタイルシートをインポートすると、システム設定からユーザーの好みを自動的に取得し、ハイコントラストが優先される場合にハイコントラストパレットを適用します。

以下の例は、ハイコントラストライトパレットとハイコントラストダークパレットの両方を含める方法を示しています。システムのダークモード設定が確認され、ハイコントラストパレットのライトまたはダークバリアントが表示されます。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/high-contrast.system.css';
@import '@ionic/angular/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/high-contrast.system.css';
import '@ionic/core/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.system.css';
import '@ionic/react/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/high-contrast.system.css';
import '@ionic/vue/css/palettes/high-contrast-dark.system.css';
```

</TabItem>

</Tabs>

このアプローチは、[CSS media query for `prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)が`more`の場合にハイコントラストパレットをアクティブにします。`prefers-contrast`メディアクエリは[すべてのモダンブラウザ](https://caniuse.com/?search=prefers-contrast)でサポートされています。古いブラウザのサポートが必要な場合は、[CSS class](#css-class)アプローチを使用することをお勧めします。

以下の例は、ハイコントラストモードを表示するタイミングを決定するためにシステム設定を使用しています。

:::info
システム設定の変更方法がわからないですか？[Windows 11](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025)と[macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac)でハイコントラストモードを有効にする方法はこちらです。
:::

import SystemHighContrastMode from '@site/static/usage/v8/theming/system-high-contrast-mode/index.md';

<SystemHighContrastMode />

:::caution
ハイコントラストライトパレットは[core.css](../layout/global-stylesheets.md#corecss)の後にインポートする必要があり、
ハイコントラストダークパレットは`dark.system.css`の後にインポートする必要があります。そうしないと、標準のコントラストパレットが優先されます。
:::

### CSS Class

以前のアプローチは、ファイルのインポートだけでハイコントラストパレットを有効にするのに優れていますが、適用場所をより制御する必要があるシナリオもあります。トグルなどを通じてハイコントラストパレットを条件付きで適用する必要がある場合、またはシステム設定に基づいて機能を拡張したい場合、ハイコントラストパレットクラスファイルを提供します。このファイルは、特定のクラスがアプリに追加されたときにハイコントラストパレットを適用します。適切なファイルに以下のスタイルシートをインポートすると、クラスでハイコントラストパレットを使用するために必要なスタイルが提供されます：

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/high-contrast.class.css';
@import '@ionic/angular/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/high-contrast.class.css';
import '@ionic/core/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.class.css';
import '@ionic/react/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/high-contrast.class.css';
import '@ionic/vue/css/palettes/high-contrast-dark.class.css';
```

</TabItem>

</Tabs>

このアプローチは、`.ion-palette-high-contrast`クラスが`html`要素に設定されている場合にハイコントラストパレットをアクティブにします。このクラスは開発者が適用する必要があります。これは[`.ion-palette-dark`クラス](./dark-mode.md#css-class)と組み合わせて、条件付きでハイコントラストダークパレットを適用できます。

以下の例は、サイト設定、システム設定、トグルを組み合わせて、ハイコントラストモードを表示するタイミングを決定しています。サイトのパレットはシステム設定よりも優先されます。デモのロード時にシステム設定がサイトのパレットと異なる場合、サイトのパレットが使用されます。

:::info
システム設定の変更方法がわからないですか？[Windows 11](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025)と[macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac)でハイコントラストモードを有効にする方法はこちらです。
:::

import ClassHighContrastMode from '@site/static/usage/v8/theming/class-high-contrast-mode/index.md';

<ClassHighContrastMode />

:::caution
ハイコントラストライトパレットは[core.css](../layout/global-stylesheets.md#corecss)の後にインポートする必要があり、
ハイコントラストダークパレットは`dark.class.css`の後にインポートする必要があります。
そうしないと、標準のコントラストパレットが優先されます。
:::

:::caution
インポートされたハイコントラストパレットを機能させるには、`.ion-palette-high-contrast`クラスを`html`要素に追加する**必要があります**。
:::

## Ionicハイコントラストテーマのカスタマイズ

Ionicには、3つの異なる方法で有効にできる推奨のハイコントラストパレットがあります：[always](#always)、[system](#system)設定に基づく方法、または[CSS class](#css-class)を使用する方法です。これらの各方法には、対応する名前のハイコントラストパレットファイルをインポートすることが含まれます。

テーマ変数は、関連するハイコントラストパレットファイルをインポートすることで設定され、アプリにコピーする必要はありません。変更される変数、さらなるカスタマイズのための追加変数を含む詳細については、[Themes](themes.md)セクションを参照してください。

以下は、アプリケーションで適用された方法に応じてハイコントラストパレットをカスタマイズする方法の詳細を提供します。

<Tabs groupId="highContrastFile" defaultValue="always" values={[{ value: 'always', label: 'Always' }, { value: 'system', label: 'System' }, { value: 'class', label: 'Class' }]}>

<TabItem value="always">

**always**ハイコントラストパレットは、ライトバリアントには`high-contrast.always.css`を、ダークバリアントには`high-contrast-dark.always.css`をインポートすることでアクセスできます。

**always**ハイコントラストパレットは、以下のように動作します：

1. `:root`セレクタで、すべての[modes](platform-styles.md#ionic-modes)の[Ionic colors](colors.md)をハイコントラストパレットに補完するように設定します。[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)セレクタは、[specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)が高いことを除いて、セレクタ`html`と同一です。
2. `:root.ios`セレクタを使用して、`ios`デバイスでハイコントラストパレットの変数を設定します。
3. `:root.md`セレクタを使用して、`md`デバイスでハイコントラストパレットの変数を設定します。

</TabItem>

<TabItem value="system">

**system**ハイコントラストパレットは、ライトバリアントには`high-contrast.system.css`を、ダークバリアントには`high-contrast-dark.system.css`をインポートすることでアクセスできます。

**system**ハイコントラストパレットは、以下のように動作します：

1. `:root`セレクタで、すべての[modes](platform-styles.md#ionic-modes)の[Ionic colors](colors.md)をハイコントラストパレットに補完するように設定します。[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)セレクタは、[specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)が高いことを除いて、セレクタ`html`と同一です。
2. `:root.ios`セレクタを使用して、`ios`デバイスでハイコントラストパレットの変数を設定します。
3. `:root.md`セレクタを使用して、`md`デバイスでハイコントラストパレットの変数を設定します。
4. [CSS media query for `prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)が`more`の場合にのみ、これらの変数を適用します。

</TabItem>

<TabItem value="class">

**class**ハイコントラストパレットは、ライトバリアントには`high-contrast.class.css`を、ダークバリアントには`high-contrast-dark.class.css`をインポートすることでアクセスできます。

**class**ハイコントラストパレットは、以下のように動作します：

1. `.ion-palette-high-contrast`セレクタで、すべての[modes](platform-styles.md#ionic-modes)の[Ionic colors](colors.md)をハイコントラストパレットに補完するように設定します。`.ion-palette-high-contrast`クラスは、アプリの`html`要素に追加する必要があります。
2. `.ion-palette-high-contrast.ios`セレクタを使用して、`ios`デバイスでハイコントラストパレットの変数を設定します。
3. `.ion-palette-high-contrast.md`セレクタを使用して、`md`デバイスでハイコントラストパレットの変数を設定します。

</TabItem>

</Tabs>