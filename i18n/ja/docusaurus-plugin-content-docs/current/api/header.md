---
title: 'ion-header'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-header: Header Parent Component for Ionic Framework Apps</title>
  <meta
    name="description"
    content="Ion-header is a parent component that holds the toolbar. It's important to note that ion-header needs to be the one of the three root elements of a page."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

## Properties

### collapse

|                 |                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ヘッダーに適用されるスクロール効果を記述します。iOS mode でのみ適用されます。 通常、[折りたたみ式ラージタイトル](https://ionicframework.com/docs/api/title#collapsible-large-titles)に使用します。 |
| **Attribute**   | `collapse`                                                                                                                                                                                         |
| **Type**        | `"condense" \| "fade" \| undefined`                                                                                                                                                                |
| **Default**     | `undefined`                                                                                                                                                                                        |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### translucent

|                 |                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | `true`の場合、ヘッダーは半透明になります。mode が `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 注意：ヘッダーの後ろにコンテンツをスクロールさせるには、コンテンツに `fullscreen` 属性が設定されている必要があります。 |
| **Attribute**   | `translucent`                                                                                                                                                                                                                                                                                                                                          |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                              |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                                |
