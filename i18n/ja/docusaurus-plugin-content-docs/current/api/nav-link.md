---
title: 'ion-nav-link'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-nav-link: The Element for Navigation to a Specified Component</title>
  <meta
    name="description"
    content="Navigation links navigate to specified components. It is the element form of calling the push(), pop(), and setRoot() methods. Read for more on ion-nav-link."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

## Properties

### component

|                 |                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| **Description** | ナビゲート先のコンポーネント。 `routerDirection`が `"forward"` または `"root"` である場合にのみ使用します。 |
| **Attribute**   | `component`                                                                                                 |
| **Type**        | `Function \| HTMLElement \| ViewController \| null \| string \| undefined`                                  |
| **Default**     | `undefined`                                                                                                 |

### componentProps

|                 |                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Description** | コンポーネントに props として渡したいデータ。routerDirection"`が`"forward"`または`"root"` である場合のみ使用します。 |
| **Attribute**   | `component-props`                                                                                                    |
| **Type**        | `undefined \| { [key: string]: any; }`                                                                               |
| **Default**     | `undefined`                                                                                                          |

### routerAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | 別ページに移動する際の遷移アニメーション。              |
| **Attribute**   | `router-animation`                                      |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default**     | `undefined`                                             |

### routerDirection

|                 |                                      |
| --------------- | ------------------------------------ |
| **Description** | 別ページに移動する際の遷移方向です。 |
| **Attribute**   | `router-direction`                   |
| **Type**        | `"back" \| "forward" \| "root"`      |
| **Default**     | `'forward'`                          |
