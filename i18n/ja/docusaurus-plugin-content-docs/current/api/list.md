---
title: 'ion-list'
demoUrl: '/docs/demos/api/list/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/list/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-list: Item List View Component for iOS and Android Apps</title>
  <meta
    name="description"
    content="ion-lists are made up of multiple rows of items containing text, icons, toggles, and more. Learn about the list view component for iOS and Android Ionic apps."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

## Properties

### inset

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | `true`の場合、リストの周囲に余白ができ、角が丸くなる。 |
| **Attribute**   | `inset`                                                |
| **Type**        | `boolean`                                              |
| **Default**     | `false`                                                |

### lines

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | すべてのアイテムで、下のボーダーをどのように表示させるか。 |
| **Attribute**   | `lines`                                                    |
| **Type**        | `"full" \| "inset" \| "none" \| undefined`                 |
| **Default**     | `undefined`                                                |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

## Methods

### closeSlidingItems

|                 |                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | リスト内で `ion-item-sliding` が使用されている場合、このメソッドは開いているスライドアイテムを閉じる。 実際に `ion-item-sliding` が閉じられた場合は `true` を返します。 |
| **Signature**   | `closeSlidingItems() => Promise<boolean>`                                                                                                                               |
