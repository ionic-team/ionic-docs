---
title: 'ion-menu'
demoUrl: '/docs/demos/api/menu/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/menu/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-menu: API Framework Docs for Types of Menu Components</title>
  <meta
    name="description"
    content="ion-menu components are navigation drawers that slide in from the side of the current view. Read our framework docs for the available menu types on Ionic API."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### contentId

|                 |                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | メインコンテンツの `id` です。ルータを使用する場合は、通常 `ion-router-outlet` となります。ルータを使用しない場合は、通常、メインビューの `ion-content` となります。これは `ion-menu` 内の `ion-content` の ID ではありません。 |
| **Attribute**   | `content-id`                                                                                                                                                                                                                    |
| **Type**        | `string \| undefined`                                                                                                                                                                                                           |
| **Default**     | `undefined`                                                                                                                                                                                                                     |

### disabled

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | `true`の場合、メニューは無効化される。 |
| **Attribute**   | `disabled`                             |
| **Type**        | `boolean`                              |
| **Default**     | `false`                                |

### maxEdgeStart

|                 |                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ドラッグでメニューを開く際のエッジのしきい値です。この値を超えてドラッグ/スワイプが行われた場合、メニューはトリガーされない。 |
| **Attribute**   | `max-edge-start`                                                                                                              |
| **Type**        | `number`                                                                                                                      |
| **Default**     | `50`                                                                                                                          |

### menuId

|                 |                       |
| --------------- | --------------------- |
| **Description** | メニューの ID です。  |
| **Attribute**   | `menu-id`             |
| **Type**        | `string \| undefined` |
| **Default**     | `undefined`           |

### side

|                 |                                              |
| --------------- | -------------------------------------------- |
| **Description** | メニューがビューのどの側に配置されるべきか。 |
| **Attribute**   | `side`                                       |
| **Type**        | `"end" \| "start"`                           |
| **Default**     | `'start'`                                    |

### swipeGesture

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | `true`の場合、スワイプによるメニュー操作が有効になる。 |
| **Attribute**   | `swipe-gesture`                                        |
| **Type**        | `boolean`                                              |
| **Default**     | `true`                                                 |

### type

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | メニューの表示形式を指定します。利用可能なオプション。overlay"`, `"reveal"`, `"push"`. |
| **Attribute**   | `type`                                                                                 |
| **Type**        | `"overlay" \| "push" \| "reveal" \| undefined`                                         |
| **Default**     | `undefined`                                                                            |

## Events

| Name           | Description                                      |
| -------------- | ------------------------------------------------ |
| `ionDidClose`  | メニューが閉じられたときに発行されます。         |
| `ionDidOpen`   | メニューが開いているときに発行されます。         |
| `ionWillClose` | メニューが閉じられようとするときに発行されます。 |
| `ionWillOpen`  | メニューが開かれようとするときに発行されます。   |

## Methods

### close

|                 |                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Description** | メニューを閉じる。メニューが既に閉じられていたり、閉じることができない場合は、`false`を返します。 |
| **Signature**   | `close(animated?: boolean, role?: string) => Promise<boolean>`                                    |

### isActive

|                 |                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | メニューがアクティブであれば `true` を返します。 メニューがアクティブな状態とは、メニューを開いたり閉じたりできる状態、つまり有効な状態であり、`ion-split-pane`の一部でない状態であることを意味します。 |
| **Signature**   | `isActive() => Promise<boolean>`                                                                                                                                                                        |

### isOpen

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | メニューが開いている場合は `true` を返します。 |
| **Signature**   | `isOpen() => Promise<boolean>`                 |

### open

|                 |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Description** | メニューを開く。メニューが既に開いているか、開くことができない場合は、`false`を返します。 |
| **Signature**   | `open(animated?: boolean) => Promise<boolean>`                                            |

### setOpen

|                 |                                                                                       |
| --------------- | ------------------------------------------------------------------------------------- |
| **Description** | ボタンを開いたり閉じたりします。操作が正常に完了しない場合は `false` を返します。     |
| **Signature**   | `setOpen(shouldOpen: boolean, animated?: boolean, role?: string) => Promise<boolean>` |

### toggle

|                 |                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | メニューを切り替えます。メニューが既に開かれている場合は閉じようとし、そうでない場合は開こうとします。操作が正常に完了しない場合は、`false`を返します。 |
| **Signature**   | `toggle(animated?: boolean) => Promise<boolean>`                                                                                                        |

## CSS Shadow Parts

| Name        | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `backdrop`  | メニューを開いているときに、メインコンテンツの上に表示される背景です。 |
| `container` | メニューの内容を格納するコンテナです。                                 |

## CSS Custom Properties

| Name           | Description            |
| -------------- | ---------------------- |
| `--background` | メニューの背景         |
| `--background` | メニューの背景         |
| `--height`     | メニューの高さ         |
| `--height`     | メニューの高さ         |
| `--max-height` | メニューの最大の高さ   |
| `--max-height` | メニューの最大の高さ   |
| `--max-width`  | メニューの最大幅       |
| `--max-width`  | メニューの最大幅       |
| `--min-height` | メニューの高さの最小値 |
| `--min-height` | メニューの高さの最小値 |
| `--min-width`  | メニューの最小幅       |
| `--min-width`  | メニューの最小幅       |
| `--width`      | メニューの幅           |
| `--width`      | メニューの幅           |
