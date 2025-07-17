---
title: 'ion-footer'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Page Footer | Ionic App Footer: Wrapper Root Page Component</title>
  <meta
    name="description"
    content="A footer is a root component that sits at the bottom of a page. Ionic footers can be a wrapper for ion-toolbar to make sure the content area is sized correctly."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

## Properties

### collapse

|                 |                                                                               |
| --------------- | ----------------------------------------------------------------------------- |
| **Description** | フッターに適用されるスクロール効果を記述します。iOS mode でのみ適用されます。 |
| **Attribute**   | `collapse`                                                                    |
| **Type**        | `"fade" \| undefined`                                                         |
| **Default**     | `undefined`                                                                   |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### translucent

|                 |                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | `true`の場合、フッターは半透明になります。mode が `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合のみ適用されます。 注意：フッターの後ろにコンテンツをスクロールさせるためには、コンテンツに `fullscreen` 属性が設定されている必要があります。 |
| **Attribute**   | `translucent`                                                                                                                                                                                                                                                                                                                                            |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                                |
| **Default**     | `false`                                                                                                                                                                                                                                                                                                                                                  |
