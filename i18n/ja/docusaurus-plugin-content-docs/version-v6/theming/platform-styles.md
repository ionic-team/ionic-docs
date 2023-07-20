---
title: プラットフォームの外観
---

<head>
  <title>Ionic Platform Styles | Platform-Specific Styles for Ionic Apps</title>
  <meta
    name="description"
    content="Ionic provides platform-specific styles based on the app's device. Styling the components to match the device guidelines allows the app to feel native to users."
  />
</head>

Ionicは、アプリケーションが実行されているデバイスに基づいてプラットフォーム固有の外観を提供します。デバイスのガイドラインに合わせてコンポーネントをスタイリングすることで、アクセスしたデバイスに応じてユーザーにはネイティブに見えます。

## Ionic Modes

Ionicは **modes** を使ってコンポーネントの外観をカスタマイズします。それぞれの **プラットフォーム** はデフォルトの **mode** を持っていますが、これはグローバルの [config](../developing/config.md) で上書き設定をすることができます。次の表は、それぞれの **プラットフォーム** に追加されているデフォルトの **mode** を示しています。

| プラットフォーム  | Mode  | 概要                                                                                                                          |
| --------- | ----- | -------------------------------------------------------------------------------------------------------------------------------- |
| `ios`     | `ios` | iPhone, iPad, もしくは iPod で表示する時は [iOS styles](https://www.apple.com/ios) が適用されます。                                   |
| `android` | `md`  | Androidのデバイスから表示する時は [Material Design styles](https://material.io/guidelines/) が適用されます。.                             |
| `core`    | `md`  | 上記のどのプラットフォームにも当てはまらないプラットフォームでは、 [Material Design styles](https://material.io/guidelines/) が適用されます。  |

例えば、Androidプラットフォームが利用されている時は `md` (Material Design) が標準で利用されます。 `<html>` エレメントに `class="md"` が追加され、すべてのコンポーネントには Material Design styles が適用されます。:

```html
<html class="md"></html>
```

_Note: **platform** と **mode** は別物です。platformはアプリの [config](../developing/config.md) で任意の mode を設定することができます。_

## Mode Stylesの上書き

それぞれのIonicのコンポーネントは、mode に基づいた外観を設定します。 `html` エレメントは、 現在のmodeに基づいて、 `class` と `mode` の両方の属性を持ちます。 これらは任意のコンポーネントの外観を上書きすることに利用することができます。例えば、`ios` modeの時のみ `ion-badge` のテキストに `uppercase` を適用する場合、こうなります:

```css
.ios ion-badge {
  text-transform: uppercase;
}
```

スタイルを上書きするために使用できる多くのグローバルCSS変数もあります。`ios` アプリの背景色をスタイルするには、次のように設定します:

```css
.ios {
  --ion-background-color: #222;
}
```

上書きするすべてのグローバルCSS変数のリストについては、[Ionic's color variables](colors.md), [theme variables](themes.md) and [global component variables](advanced.md) をご覧ください。
