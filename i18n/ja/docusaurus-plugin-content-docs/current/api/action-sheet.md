---
title: 'ion-action-sheet'
demoUrl: '/docs/demos/api/action-sheet/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/action-sheet/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-action-sheet | Action Sheet Dialog for iOS and Android Apps</title>
  <meta
    name="description"
    content="Action Sheets are dialogs that display a set of options above app content and must be manually dismissed. Read to learn about use on iOS and Android devices."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

## Properties

### animated

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | `true`の場合、アクションシートはアニメーションを行います。 |
| **Attribute**   | `animated`                                                 |
| **Type**        | `boolean`                                                  |
| **Default**     | `true`                                                     |

### backdropDismiss

|                 |                                                                                |
| --------------- | ------------------------------------------------------------------------------ |
| **Description** | `true`の場合、バックドロップがクリックされるとアクションシートが解除されます。 |
| **Attribute**   | `backdrop-dismiss`                                                             |
| **Type**        | `boolean`                                                                      |
| **Default**     | `true`                                                                         |

### buttons

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | アクションシートのボタンの配列です。   |
| **Attribute**   | `buttons`                              |
| **Type**        | `(string \| ActionSheetButton<any>)[]` |
| **Default**     | `[]`                                   |

### cssClass

|                 |                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------- |
| **Description** | カスタム CSS に適用する追加のクラス。複数のクラスを指定する場合は、スペースで区切る必要があります。 |
| **Attribute**   | `css-class`                                                                                         |
| **Type**        | `string \| string[] \| undefined`                                                                   |
| **Default**     | `undefined`                                                                                         |

### enterAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | アクションシートの提示時に使用するアニメーションです。  |
| **Attribute**   | `enter-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default**     | `undefined`                                             |

### header

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | アクションシートのタイトルです。 |
| **Attribute**   | `header`                         |
| **Type**        | `string \| undefined`            |
| **Default**     | `undefined`                      |

### htmlAttributes

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | アクションシートに渡す追加属性。       |
| **Attribute**   | `html-attributes`                      |
| **Type**        | `undefined \| { [key: string]: any; }` |
| **Default**     | `undefined`                            |

### isOpen

|                 |                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`の場合、アクションシートは開かれます。`false`の場合、アクションシートは閉じます。プレゼンテーションの細かな制御が必要な場合はこれを使用し、そうでない場合は actionSheetController または `trigger` プロパティを使用します。注意: アクションシートが終了しても、`isOpen`は自動的に`false`に戻されません。あなたのコードでそれを行う必要があります。 |
| **Attribute**   | `is-open`                                                                                                                                                                                                                                                                                                                                                |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                                |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                                  |

### keyboardClose

|                 |                                                                                |
| --------------- | ------------------------------------------------------------------------------ |
| **Description** | `true`の場合、オーバーレイが表示されたときにキーボードが自動的に解除されます。 |
| **Attribute**   | `keyboard-close`                                                               |
| **Type**        | `boolean`                                                                      |
| **Default**     | `true`                                                                         |

### leaveAnimation

|                 |                                                                |
| --------------- | -------------------------------------------------------------- |
| **Description** | アクションシートが解除されたときに使用するアニメーションです。 |
| **Attribute**   | `leave-animation`                                              |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`        |
| **Default**     | `undefined`                                                    |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### subHeader

|                 |                                      |
| --------------- | ------------------------------------ |
| **Description** | アクションシートのサブタイトルです。 |
| **Attribute**   | `sub-header`                         |
| **Type**        | `string \| undefined`                |
| **Default**     | `undefined`                          |

### translucent

|                 |                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`の場合、アクションシートは半透明になります。mode が `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute**   | `translucent`                                                                                                                                                                                                                           |
| **Type**        | `boolean`                                                                                                                                                                                                                               |
| **Default**     | `false`                                                                                                                                                                                                                                 |

### trigger

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | クリックするとアクションシートが開くトリガー要素に対応する ID。 |
| **Attribute**   | `trigger`                                                       |
| **Type**        | `string \| undefined`                                           |
| **Default**     | `undefined`                                                     |

## Events

| Name                        | Description                                                                      |
| --------------------------- | -------------------------------------------------------------------------------- |
| `didDismiss`                | アクションシートが解散した後に発行されます。ionActionSheetDidDismiss の略記。    |
| `didPresent`                | アクションシートが提示された後に発行されます。ionActionSheetWillDismiss の略語。 |
| `ionActionSheetDidDismiss`  | アクションシートが解散した後に発行されます。                                     |
| `ionActionSheetDidPresent`  | アクションシートが提示された後に発行されます。                                   |
| `ionActionSheetWillDismiss` | アクションシートが解散する前に発行されます。                                     |
| `ionActionSheetWillPresent` | アクションシートが提示される前に発行されます。                                   |
| `willDismiss`               | アクションシートが解散する前に発行されます。ionActionSheetWillDismiss の略記。   |
| `willPresent`               | アクションシートが提示される前に発行されます。ionActionSheetWillPresent の略記。 |

## Methods

### dismiss

|                 |                                                                  |
| --------------- | ---------------------------------------------------------------- |
| **Description** | アクションシートのオーバーレイが提示された後、それを解除します。 |
| **Signature**   | `dismiss(data?: any, role?: string) => Promise<boolean>`         |

### onDidDismiss

|                 |                                                               |
| --------------- | ------------------------------------------------------------- |
| **Description** | アクションシートが解散したときに解決する Promise を返します。 |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`   |

### onWillDismiss

|                 |                                                                     |
| --------------- | ------------------------------------------------------------------- |
| **Description** | アクションシートが解散するタイミングを解決する Promise を返します。 |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`        |

### present

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | アクションシートのオーバーレイを作成後に提示します。 |
| **Signature**   | `present() => Promise<void>`                         |

## CSS Custom Properties

| Name                                    | Description                                                                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `--backdrop-opacity`                    | 背景の不透明度                                                                                           |
| `--backdrop-opacity`                    | 背景の不透明度                                                                                           |
| `--background`                          | アクションシートグループの背景                                                                           |
| `--background`                          | アクションシートグループの背景                                                                           |
| `--button-background`                   | アクションシートボタンの背景                                                                             |
| `--button-background`                   | アクションシートボタンの背景                                                                             |
| `--button-background-activated`         | アクションシートボタンが押されたときの背景。注意：これを設定すると、Material Design の波紋に干渉します。 |
| `--button-background-activated`         | アクションシートボタンが押されたときの背景。注意：これを設定すると、Material Design の波紋に干渉します。 |
| `--button-background-activated-opacity` | アクションシートボタンが押されたときの背景の不透明度                                                     |
| `--button-background-activated-opacity` | アクションシートボタンが押されたときの背景の不透明度                                                     |
| `--button-background-focused`           | にタブしたときのアクションシートボタンの背景。                                                           |
| `--button-background-focused`           | にタブしたときのアクションシートボタンの背景。                                                           |
| `--button-background-focused-opacity`   | にタブしたときのアクションシートボタンの背景の不透明度。                                                 |
| `--button-background-focused-opacity`   | にタブしたときのアクションシートボタンの背景の不透明度。                                                 |
| `--button-background-hover`             | ホバー時のアクションシートボタンの背景                                                                   |
| `--button-background-hover`             | ホバー時のアクションシートボタンの背景                                                                   |
| `--button-background-hover-opacity`     | ホバー時のアクションシートボタンの背景の不透明度                                                         |
| `--button-background-hover-opacity`     | ホバー時のアクションシートボタンの背景の不透明度                                                         |
| `--button-background-selected`          | 選択したアクションシートボタンの背景                                                                     |
| `--button-background-selected`          | 選択したアクションシートボタンの背景                                                                     |
| `--button-background-selected-opacity`  | 選択されたアクションシートボタンの背景の不透明度                                                         |
| `--button-background-selected-opacity`  | 選択されたアクションシートボタンの背景の不透明度                                                         |
| `--button-color`                        | アクションシートボタンの色                                                                               |
| `--button-color`                        | アクションシートボタンの色                                                                               |
| `--button-color-activated`              | アクションシートボタンが押されたときの色                                                                 |
| `--button-color-activated`              | アクションシートボタンが押されたときの色                                                                 |
| `--button-color-disabled`               | 無効時の選択されたアクション・シート・ボタンの色                                                         |
| `--button-color-disabled`               | 無効時の選択されたアクション・シート・ボタンの色                                                         |
| `--button-color-focused`                | にタブで移動したときのアクションシートのボタンの色。                                                     |
| `--button-color-focused`                | にタブで移動したときのアクションシートのボタンの色。                                                     |
| `--button-color-hover`                  | ホバー時のアクションシートボタンの色                                                                     |
| `--button-color-hover`                  | ホバー時のアクションシートボタンの色                                                                     |
| `--button-color-selected`               | 選択されたアクションシートのボタンの色                                                                   |
| `--button-color-selected`               | 選択されたアクションシートのボタンの色                                                                   |
| `--color`                               | アクションシートテキストの色                                                                             |
| `--color`                               | アクションシートテキストの色                                                                             |
| `--height`                              | アクションシートの高さ                                                                                   |
| `--height`                              | アクションシートの高さ                                                                                   |
| `--max-height`                          | アクションシートの最大の高さ                                                                             |
| `--max-height`                          | アクションシートの最大の高さ                                                                             |
| `--max-width`                           | アクションシートの最大幅                                                                                 |
| `--max-width`                           | アクションシートの最大幅                                                                                 |
| `--min-height`                          | アクションシートの最小高さ                                                                               |
| `--min-height`                          | アクションシートの最小高さ                                                                               |
| `--min-width`                           | アクションシートの最小幅                                                                                 |
| `--min-width`                           | アクションシートの最小幅                                                                                 |
| `--width`                               | アクションシートの横幅                                                                                   |
| `--width`                               | アクションシートの横幅                                                                                   |
