---
title: 'ion-toast'
demoUrl: '/docs/demos/api/toast/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toast/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-toast Component: A Dismissible App Notification Alert</title>
  <meta
    name="description"
    content="ion-toast component is an app notification displaying system messages or feedback. Toast alerts appear above content and are dismissed to resume interaction."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### animated

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | `true`の場合、トーストはアニメーションします。 |
| **Attribute**   | `animated`                                     |
| **Type**        | `boolean`                                      |
| **Default**     | `true`                                         |

### buttons

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Description** | トースト用のボタンがずらり。             |
| **Attribute**   | `buttons`                                |
| **Type**        | `(string \| ToastButton)[] \| undefined` |
| **Default**     | `undefined`                              |

### color

|                 |                                                                                                                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                                                   |
| **Type**        | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined`                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                               |

### cssClass

|                 |                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------- |
| **Description** | カスタム CSS に適用する追加のクラス。複数のクラスを指定する場合は、スペースで区切る必要があります。 |
| **Attribute**   | `css-class`                                                                                         |
| **Type**        | `string \| string[] \| undefined`                                                                   |
| **Default**     | `undefined`                                                                                         |

### duration

|                 |                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| **Description** | トーストを隠すまでに何ミリ秒待つかを指定します。デフォルトでは、`dismiss()`が呼ばれるまで表示されます。 |
| **Attribute**   | `duration`                                                                                              |
| **Type**        | `number`                                                                                                |
| **Default**     | `config.getNumber('toastDuration', 0)`                                                                  |

### enterAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | 乾杯の音頭をとるときに使うアニメーションです。          |
| **Attribute**   | `enter-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default**     | `undefined`                                             |

### header

|                 |                                |
| --------------- | ------------------------------ |
| **Description** | トーストに表示されるヘッダー。 |
| **Attribute**   | `header`                       |
| **Type**        | `string \| undefined`          |
| **Default**     | `undefined`                    |

### htmlAttributes

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | トーストに渡す追加の属性。             |
| **Attribute**   | `html-attributes`                      |
| **Type**        | `undefined \| { [key: string]: any; }` |
| **Default**     | `undefined`                            |

### icon

|                 |                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Description** | 表示するアイコンの名前、または有効な SVG ファイルへのパスを指定します。ion-icon`を参照。https://ionic.io/ionicons |
| **Attribute**   | `icon`                                                                                                            |
| **Type**        | `string \| undefined`                                                                                             |
| **Default**     | `undefined`                                                                                                       |

### isOpen

|                 |                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | もし `true` ならば、トーストは表示されます。もし `false` ならば、トーストは閉じます。プレゼンテーションの細かい制御が必要な場合はこれを使用し、そうでない場合は toastController または `trigger` プロパティを使用してください。注意: トーストが終了しても `isOpen` は自動的に `false` に戻りません。あなたのコードでそれを行う必要があります。 |
| **Attribute**   | `is-open`                                                                                                                                                                                                                                                                                                                                      |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                      |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                        |

### keyboardClose

|                 |                                                                                |
| --------------- | ------------------------------------------------------------------------------ |
| **Description** | `true`の場合、オーバーレイが表示されたときにキーボードが自動的に解除されます。 |
| **Attribute**   | `keyboard-close`                                                               |
| **Type**        | `boolean`                                                                      |
| **Default**     | `false`                                                                        |

### layout

|                 |                                                                                                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | トーストのメッセージやボタンの配置を定義します。'baseline'を指定します。メッセージとボタンは同じ行に表示されます。メッセージテキストはメッセージコンテナ内で折り返すことができます。'stacked':ボタンコンテナとメッセージが重なるように表示されます。ボタンに長いテキストがある場合に使用します。 |
| **Attribute**   | `layout`                                                                                                                                                                                                                                                                                         |
| **Type**        | `"baseline" \| "stacked"`                                                                                                                                                                                                                                                                        |
| **Default**     | `'baseline'`                                                                                                                                                                                                                                                                                     |

### leaveAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | トーストの解散時に使用するアニメーションです。          |
| **Attribute**   | `leave-animation`                                       |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default**     | `undefined`                                             |

### message

|                 |                                                                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | トーストに表示するメッセージ。このプロパティは、文字列としてカスタム HTML を受け入れます。デフォルトではコンテンツはプレーンテキストとしてパースされます。カスタム HTML を使用するには、Ionic の設定で `innerHTMLTemplatesEnabled` を `true` に設定する必要があります。 |
| **Attribute**   | `message`                                                                                                                                                                                                                                                               |
| **Type**        | `IonicSafeString \| string \| undefined`                                                                                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                                                                                             |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### position

|                 |                                                                                       |
| --------------- | ------------------------------------------------------------------------------------- |
| **Description** | 画面上のトーストの開始位置。 `positionAnchor`プロパティを使ってさらに微調整できます。 |
| **Attribute**   | `position`                                                                            |
| **Type**        | `"bottom" \| "middle" \| "top"`                                                       |
| **Default**     | `'bottom'`                                                                            |

### positionAnchor

|                 |                                                                                                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | トーストの位置を固定する要素。直接参照するか、要素の ID を指定します。position="bottom"`の場合、トーストは選択した要素の上に表示されます。position="top"`の場合、トーストは選択した要素の下に位置します。position="middle"`の場合、`positionAnchor`の値は無視される。 |
| **Attribute**   | `position-anchor`                                                                                                                                                                                                                                                     |
| **Type**        | `HTMLElement \| string \| undefined`                                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                                                           |

### swipeGesture

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | vertical'に設定すると、スワイプジェスチャーで Toast を消すことができます。スワイプの方向は `position` プロパティの値によって決まります：top`：top`: 上方向にスワイプすることでトーストを消すことができます。top`: トーストを上方向にスワイプして消すことができます：top`: 上方向にスワイプすると Toast が表示され、下方向にスワイプすると Toast が表示されます。middle`：トーストは上下にスワイプして消すことができます。 |
| **Attribute**   | `swipe-gesture`                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Type**        | `"vertical" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                               |

### translucent

|                 |                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`の場合、トーストは半透明になります。mode が `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute**   | `translucent`                                                                                                                                                                                                                   |
| **Type**        | `boolean`                                                                                                                                                                                                                       |
| **Default**     | `false`                                                                                                                                                                                                                         |

### trigger

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | クリックされたときにトーストを開かせるトリガー要素に対応する ID。 |
| **Attribute**   | `trigger`                                                         |
| **Type**        | `string \| undefined`                                             |
| **Default**     | `undefined`                                                       |

## Events

| Name                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `didDismiss`          | トーストが終了した後に発行されます。ionToastDidDismiss の略記。      |
| `didPresent`          | トーストがはじまった後に発行されます。ionToastWillDismiss の略語。   |
| `ionToastDidDismiss`  | トーストが解散した後に発行されます。                                 |
| `ionToastDidPresent`  | トーストが提示された後に発行されます。                               |
| `ionToastWillDismiss` | 乾杯が解散する前に発行されます。                                     |
| `ionToastWillPresent` | トーストが提示される前に発行されます。                               |
| `willDismiss`         | トーストが終了する前に発行されます。ionToastWillDismiss の略語です。 |
| `willPresent`         | トーストが表示される前に発行されます。ionToastWillPresent の略記。   |

## Methods

### dismiss

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | トーストのオーバーレイが提示された後、それを解除します。 |
| **Signature**   | `dismiss(data?: any, role?: string) => Promise<boolean>` |

### onDidDismiss

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | トーストが解散したことを解決する Promise を返します。       |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |

### onWillDismiss

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | トーストが解散するタイミングを解決する Promise を返します。  |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |

### present

|                 |                                                  |
| --------------- | ------------------------------------------------ |
| **Description** | トーストのオーバーレイを作成した後に提示します。 |
| **Signature**   | `present() => Promise<void>`                     |

## CSS Shadow Parts

| Name            | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| `button`        | トーストの内側に表示される任意のボタン要素。                        |
| `button cancel` | トーストの内側に表示される、"cancel "というロールを持つボタン要素。 |
| `container`     | すべての子要素を包む要素。                                          |
| `header`        | 乾杯のヘッダーテキストです。                                        |
| `icon`          | トーストの内容の横に表示されるアイコンです。                        |
| `message`       | 乾杯の音頭の本文です。                                              |

## CSS Custom Properties

| Name              | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `--background`    | 乾杯の背景                                                             |
| `--background`    | 乾杯の背景                                                             |
| `--border-color`  | トーストのボーダーカラー                                               |
| `--border-color`  | トーストのボーダーカラー                                               |
| `--border-radius` | トーストのボーダー半径                                                 |
| `--border-radius` | トーストのボーダー半径                                                 |
| `--border-style`  | トーストのボーダースタイル                                             |
| `--border-style`  | トーストのボーダースタイル                                             |
| `--border-width`  | トーストのボーダー幅                                                   |
| `--border-width`  | トーストのボーダー幅                                                   |
| `--box-shadow`    | 乾杯の箱影                                                             |
| `--box-shadow`    | 乾杯の箱影                                                             |
| `--button-color`  | ボタンテキストの色                                                     |
| `--button-color`  | ボタンテキストの色                                                     |
| `--color`         | トーストの文字色                                                       |
| `--color`         | トーストの文字色                                                       |
| `--end`           | 方向が左から右の場合は右から、方向が右から左の場合は左から位置すること |
| `--end`           | 方向が左から右の場合は右から、方向が右から左の場合は左から位置すること |
| `--height`        | トーストの高さ                                                         |
| `--height`        | トーストの高さ                                                         |
| `--max-height`    | トーストの最大の高さ                                                   |
| `--max-height`    | トーストの最大の高さ                                                   |
| `--max-width`     | トーストの最大幅                                                       |
| `--max-width`     | トーストの最大幅                                                       |
| `--min-height`    | トーストの最小の高さ                                                   |
| `--min-height`    | トーストの最小の高さ                                                   |
| `--min-width`     | トーストの最小幅                                                       |
| `--min-width`     | トーストの最小幅                                                       |
| `--start`         | 方向が左から右の場合は左から、方向が右から左の場合は右から位置すること |
| `--start`         | 方向が左から右の場合は左から、方向が右から左の場合は右から位置すること |
| `--white-space`   | 乾杯メッセージのホワイトスペース                                       |
| `--white-space`   | 乾杯メッセージのホワイトスペース                                       |
| `--width`         | トーストの幅                                                           |
| `--width`         | トーストの幅                                                           |
