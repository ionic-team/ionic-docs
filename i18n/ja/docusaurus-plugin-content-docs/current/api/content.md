---
title: 'ion-content'
demoUrl: '/docs/demos/api/content/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/content/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-content: Scrollable CSS Component for Ionic App Content Areas</title>
  <meta
    name="description"
    content="ion-content provides an easy to use content area with useful methods to control the scrollable area. Learn more about this CSS component for Ionic apps."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### color

|                 |                                                                                                                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                                                   |
| **Type**        | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined`                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                               |

### fixedSlotPlacement

|                 |                                                                                                                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | 固定コンテンツが DOM 内のメイン・コンテンツの相対的などこに配置されるかを制御します。これは、固定要素がキーボード・フォーカスを受ける順番を制御するために使用できます。例えば、固定スロットの FAB がメインページのコンテンツよりも先にキーボードフォーカスを受け取るようにする場合、このプロパティを `'before'` に設定します。 |
| **Attribute**   | `fixed-slot-placement`                                                                                                                                                                                                                                                                                                         |
| **Type**        | `"after" \| "before"`                                                                                                                                                                                                                                                                                                          |
| **Default**     | `'after'`                                                                                                                                                                                                                                                                                                                      |

### forceOverscroll

|                 |                                                                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`で、コンテンツがオーバーフロースクロールを引き起こさない場合、スクロールインタラクションはバウンスを引き起こします。コンテンツが ionContent の境界を超えた場合、何も変化しません。なお、これは iOS のシステムバウンスを無効にするものではありません。これは OS レベルの設定です。 |
| **Attribute**   | `force-overscroll`                                                                                                                                                                                                                                                                      |
| **Type**        | `boolean \| undefined`                                                                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                             |

### fullscreen

|                 |                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`の場合、コンテンツはヘッダーとフッターの後ろにスクロールされます。この効果は、ツールバーを透明に設定することで簡単に確認することができます。 |
| **Attribute**   | `fullscreen`                                                                                                                                       |
| **Type**        | `boolean`                                                                                                                                          |
| **Default**     | `false`                                                                                                                                            |

### scrollEvents

|                 |                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | パフォーマンス上の理由から、ionScroll イベントはデフォルトで無効になっています。ionScroll イベントを有効にして(ionScroll)からリスニングを開始するには、このプロパティを`true`に設定します。 |
| **Attribute**   | `scroll-events`                                                                                                                                                                             |
| **Type**        | `boolean`                                                                                                                                                                                   |
| **Default**     | `false`                                                                                                                                                                                     |

### scrollX

|                 |                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Description** | X 軸方向のコンテンツスクロールを有効にしたい場合は、このプロパティを`true`に設定します。 |
| **Attribute**   | `scroll-x`                                                                               |
| **Type**        | `boolean`                                                                                |
| **Default**     | `false`                                                                                  |

### scrollY

|                 |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Description** | Y 軸方向のコンテンツスクロールを無効にしたい場合は、このプロパティに`false`を設定します。 |
| **Attribute**   | `scroll-y`                                                                                |
| **Type**        | `boolean`                                                                                 |
| **Default**     | `true`                                                                                    |

## Events

| Name             | Description                                                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ionScroll`      | スクロール中に発行されます。このイベントはデフォルトで無効になっています。有効にするには `scrollEvents` に `true` を設定します。                   |
| `ionScrollEnd`   | スクロールが終了したときに発行されます。このイベントはデフォルトで無効になっている。有効にするには `scrollEvents` に `true` を設定します。         |
| `ionScrollStart` | スクロールが開始されたときに発行されます。このイベントはデフォルトで無効になっている。有効にするには `scrollEvents` に `true` を設定してください。 |

## Methods

### getScrollElement

|                 |                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | 実際のスクロールが行われる要素を取得します。この要素を使用して、`scroll` イベントを購読したり、`scrollTop` を手動で変更したりすることができる。スクロールイベントには `ionScroll`, `ionScrollStart`, `ionScrollEnd` を、コンテンツを特定のポイントにスクロールさせるには `scrollToPoint()` を使用することが推奨されます。 |
| **Signature**   | `getScrollElement() => Promise<HTMLElement>`                                                                                                                                                                                                                                                                              |

### scrollByPoint

|                 |                                                                          |
| --------------- | ------------------------------------------------------------------------ |
| **Description** | コンポーネントを指定した X/Y 距離だけスクロールさせる。                  |
| **Signature**   | `scrollByPoint(x: number, y: number, duration: number) => Promise<void>` |

### scrollToBottom

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | コンポーネントの一番下までスクロールします。         |
| **Signature**   | `scrollToBottom(duration?: number) => Promise<void>` |

### scrollToPoint

|                 |                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Description** | コンポーネント内の指定した X/Y 位置までスクロールします。                                                           |
| **Signature**   | `scrollToPoint(x: number \| undefined \| null, y: number \| undefined \| null, duration?: number) => Promise<void>` |

### scrollToTop

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | コンポーネントの上部にスクロールします。          |
| **Signature**   | `scrollToTop(duration?: number) => Promise<void>` |

## CSS Shadow Parts

| Name         | Description                            |
| ------------ | -------------------------------------- |
| `background` | コンテンツの背景です。                 |
| `scroll`     | コンテンツのスクロール可能なコンテナ。 |

## CSS Custom Properties

| Name                | Description                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `--background`      | コンテンツの背景                                                                             |
| `--color`           | コンテンツの色                                                                               |
| `--keyboard-offset` | コンテンツのキーボードオフセット                                                             |
| `--offset-bottom`   | コンテンツのオフセットボトム                                                                 |
| `--offset-top`      | コンテンツのオフセットトップ                                                                 |
| `--padding-bottom`  | コンテンツの Bottom Padding                                                                  |
| `--padding-end`     | コンテンツの方向が左から右の場合は Right Padding、右から左の場合は Left Padding となります。 |
| `--padding-start`   | コンテンツの方向が左から右の場合は Left Padding、右から左の場合は Right Padding となります。 |
| `--padding-top`     | コンテンツの Top Padding                                                                     |

## Slots

| Name    | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| ``      | slot なしで提供される場合、コンテンツはスクロール可能な領域に配置されます。 |
| `fixed` | スクロールしてはいけない固定コンテンツに使用する必要があります。            |
