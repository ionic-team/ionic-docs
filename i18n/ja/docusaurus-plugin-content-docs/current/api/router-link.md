---
title: 'ion-router-link'
demoUrl: '/docs/demos/api/router-link/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/router-link/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Router Link | Navigating The ion-router-link Component</title>
  <meta
    name="description"
    content="Use the ion-router-link component to navigate to a specified link. The router link can accept an href for location and a direction for the transition animation."
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

### href

|                 |                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | ハイパーリンクが指し示す URL または URL フラグメントを格納します。このプロパティが設定されている場合、アンカータグがレンダリングされます。 |
| **Attribute**   | `href`                                                                                                                                     |
| **Type**        | `string \| undefined`                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                |

### rel

|                 |                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ターゲットオブジェクトとリンクオブジェクトの関係を指定します。値は、スペースで区切られた[リンクタイプ](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)のリストです。 |
| **Attribute**   | `rel`                                                                                                                                                                              |
| **Type**        | `string \| undefined`                                                                                                                                                              |
| **Default**     | `undefined`                                                                                                                                                                        |

### routerAnimation

|                 |                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------- |
| **Description** | ルータを使用する場合、`href`を使用して別のページに移動する際の遷移アニメーションを指定します。 |
| **Attribute**   | `router-animation`                                                                             |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`                                        |
| **Default**     | `undefined`                                                                                    |

### routerDirection

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **Description** | ルータを使用する場合、`href`を使用して他のページに移動する際の遷移方向を指定します。 |
| **Attribute**   | `router-direction`                                                                   |
| **Type**        | `"back" \| "forward" \| "root"`                                                      |
| **Default**     | `'forward'`                                                                          |

### target

|                 |                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | リンク先の URL を表示する場所を指定します。href`を指定した場合のみ適用される。特別なキーワードがあります。_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                              |
| **Type**        | `string \| undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                           |

## CSS Custom Properties

| Name           | Description            |
| -------------- | ---------------------- |
| `--background` | ルーターリンクの背景   |
| `--color`      | ルーターリンクの文字色 |
