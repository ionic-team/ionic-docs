---
title: 'ion-loading'
demoUrl: '/docs/demos/api/loading/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/loading/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Loading | Application Loading Indicator Overlay | ion-loading</title>
  <meta
    name="description"
    content="The ion-loading overlay indicates activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

## Properties

### animated

|                 |                                                                |
| --------------- | -------------------------------------------------------------- |
| **Description** | `true`の場合、ロードインジケータをアニメーションで表示します。 |
| **Attribute**   | `animated`                                                     |
| **Type**        | `boolean`                                                      |
| **Default**     | `true`                                                         |

### backdropDismiss

|                 |                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Description** | `true`の場合、バックドロップがクリックされたときにローディングインジケータが解除される。 |
| **Attribute**   | `backdrop-dismiss`                                                                       |
| **Type**        | `boolean`                                                                                |
| **Default**     | `false`                                                                                  |

### cssClass

|                 |                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------- |
| **Description** | カスタム CSS に適用する追加のクラス。複数のクラスを指定する場合は、スペースで区切る必要があります。 |
| **Attribute**   | `css-class`                                                                                         |
| **Type**        | `string \| string[] \| undefined`                                                                   |
| **Default**     | `undefined`                                                                                         |

### duration

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | ローディングインジケータを解除するまでの待ち時間（ミリ秒）。 |
| **Attribute**   | `duration`                                                   |
| **Type**        | `number`                                                     |
| **Default**     | `0`                                                          |

### enterAnimation

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Description** | ローディングインジケータが表示されたときに使用するアニメーションです。 |
| **Attribute**   | `enter-animation`                                                      |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`                |
| **Default**     | `undefined`                                                            |

### htmlAttributes

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | ローダーに渡す追加属性。               |
| **Attribute**   | `html-attributes`                      |
| **Type**        | `undefined \| { [key: string]: any; }` |
| **Default**     | `undefined`                            |

### isOpen

|                 |                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`の場合、ローディングインジケータは開きます。`false`の場合、ローディングインジケータは閉じます。より細かく表示を制御したい場合に使用します。そうでない場合は、loadingController または `trigger` プロパティを使用してください。注意: ローディングインジケータが終了しても、`isOpen`は自動的に `false`に戻されません。あなたのコードでそれを行う必要があります。 |
| **Attribute**   | `is-open`                                                                                                                                                                                                                                                                                                                                                            |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                                            |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                                              |

### keyboardClose

|                 |                                                                                |
| --------------- | ------------------------------------------------------------------------------ |
| **Description** | `true`の場合、オーバーレイが表示されたときにキーボードが自動的に解除されます。 |
| **Attribute**   | `keyboard-close`                                                               |
| **Type**        | `boolean`                                                                      |
| **Default**     | `true`                                                                         |

### leaveAnimation

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Description** | ローディングインジケータが解除されたときに使用するアニメーションです。 |
| **Attribute**   | `leave-animation`                                                      |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`                |
| **Default**     | `undefined`                                                            |

### message

|                 |                                                                                                                                                                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ローディングインジケータに表示するテキストコンテンツを任意で指定します。 このプロパティは、文字列としてカスタム HTML を受け入れます。コンテンツはデフォルトでプレーンテキストとしてパースされます。カスタム HTML を使用するには、Ionic の設定で `innerHTMLTemplatesEnabled` を `true` に設定する必要があります。 |
| **Attribute**   | `message`                                                                                                                                                                                                                                                                                                        |
| **Type**        | `IonicSafeString \| string \| undefined`                                                                                                                                                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                      |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### showBackdrop

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Description** | `true`の場合、ロードインジケータの後ろにバックドロップが表示されます。 |
| **Attribute**   | `show-backdrop`                                                        |
| **Type**        | `boolean`                                                              |
| **Default**     | `true`                                                                 |

### spinner

|                 |                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | 表示するスピナーの名前。                                                                                                                                |
| **Attribute**   | `spinner`                                                                                                                                               |
| **Type**        | `"bubbles" \| "circles" \| "circular" \| "crescent" \| "dots" \| "lines" \| "lines-sharp" \| "lines-sharp-small" \| "lines-small" \| null \| undefined` |
| **Default**     | `undefined`                                                                                                                                             |

### translucent

|                 |                                                                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`の場合、ロードインジケータは半透明になります。mode が `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute**   | `translucent`                                                                                                                                                                                                                             |
| **Type**        | `boolean`                                                                                                                                                                                                                                 |
| **Default**     | `false`                                                                                                                                                                                                                                   |

### trigger

|                 |                                                                              |
| --------------- | ---------------------------------------------------------------------------- |
| **Description** | クリックするとローディングインジケータが開くトリガー要素に対応する ID です。 |
| **Attribute**   | `trigger`                                                                    |
| **Type**        | `string \| undefined`                                                        |
| **Default**     | `undefined`                                                                  |

## Events

| Name                    | Description                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `didDismiss`            | ローディングインジケータが解除された後に発行されます。ionLoadingDidDismiss の略記。    |
| `didPresent`            | ローディングインジケータが提示された後に放出される。ionLoadingWillDismiss の略記。     |
| `ionLoadingDidDismiss`  | ローディングが解除された後に発行されます。                                             |
| `ionLoadingDidPresent`  | ローディングが提示された後に発行されます。                                             |
| `ionLoadingWillDismiss` | ローディングが解除される前に発行されます。                                             |
| `ionLoadingWillPresent` | ローディングが提示される前に発行されます。                                             |
| `willDismiss`           | ローディングインジケータが解散する前に発行されます。ionLoadingWillDismiss の略記です。 |
| `willPresent`           | ローディングインジケータが提示される前に発行されます。ionLoadingWillPresent の略記。   |

## Methods

### dismiss

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | ローディングオーバーレイが提示された後、それを解除します。 |
| **Signature**   | `dismiss(data?: any, role?: string) => Promise<boolean>`   |

### onDidDismiss

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | ローディングが解除されたタイミングを解決する Promise を返します。 |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`       |

### onWillDismiss

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | ローディングが解除されるタイミングを解決する Promise を返します。 |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`      |

### present

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | 作成後のローディングオーバーレイを提示します。 |
| **Signature**   | `present() => Promise<void>`                   |

## CSS Custom Properties

| Name                 | Description                        |
| -------------------- | ---------------------------------- |
| `--backdrop-opacity` | 背景の不透明度                     |
| `--backdrop-opacity` | 背景の不透明度                     |
| `--background`       | ローディングダイアログの背景       |
| `--background`       | ローディングダイアログの背景       |
| `--height`           | ローディングダイアログの高さ       |
| `--height`           | ローディングダイアログの高さ       |
| `--max-height`       | ローディングダイアログの最大の高さ |
| `--max-height`       | ローディングダイアログの最大の高さ |
| `--max-width`        | ローディングダイアログの最大幅     |
| `--max-width`        | ローディングダイアログの最大幅     |
| `--min-height`       | ローディングダイアログの最小高さ   |
| `--min-height`       | ローディングダイアログの最小高さ   |
| `--min-width`        | ローディングダイアログの最小幅     |
| `--min-width`        | ローディングダイアログの最小幅     |
| `--spinner-color`    | ローディングスピナーの色           |
| `--spinner-color`    | ローディングスピナーの色           |
| `--width`            | ローディングダイアログの幅         |
| `--width`            | ローディングダイアログの幅         |
