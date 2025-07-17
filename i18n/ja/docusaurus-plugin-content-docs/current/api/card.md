---
title: 'ion-card'
demoUrl: '/docs/demos/api/card/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/card/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-card: Card UI Components for Ionic Framework API</title>
  <meta
    name="description"
    content="ion-card UI components are entry points to more detailed information. Cards can be single components or made up of some header, title, subtitle, and content."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### button

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Description** | `true`の場合、ボタンタグがレンダリングされ、カードはタップ可能になる。 |
| **Attribute**   | `button`                                                               |
| **Type**        | `boolean`                                                              |
| **Default**     | `false`                                                                |

### color

|                 |                                                                                                                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                                                   |
| **Type**        | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined`                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                               |

### disabled

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | `true`の場合、ユーザはカードと対話することができません。 |
| **Attribute**   | `disabled`                                               |
| **Type**        | `boolean`                                                |
| **Default**     | `false`                                                  |

### download

|                 |                                                                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | この属性は、ブラウザが URL に移動する代わりに URL をダウンロードするように指示し、ユーザはローカルファイルとして保存するように促されます。この属性に値がある場合、保存のプロンプトであらかじめ入力されたファイル名として使用されます（ユーザーはファイル名を変更することができます）。 |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                             |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                            |

### href

|                 |                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | ハイパーリンクが指し示す URL または URL フラグメントを格納します。このプロパティが設定されている場合、アンカータグがレンダリングされます。 |
| **Attribute**   | `href`                                                                                                                                     |
| **Type**        | `string \| undefined`                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

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

### type

|                 |                                                                                |
| --------------- | ------------------------------------------------------------------------------ |
| **Description** | ボタンの種類。onclick`または`button`プロパティが存在する場合にのみ使用される。 |
| **Attribute**   | `type`                                                                         |
| **Type**        | `"button" \| "reset" \| "submit"`                                              |
| **Default**     | `'button'`                                                                     |

## CSS Shadow Parts

| Name     | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| `native` | すべての子要素をラップするネイティブ HTML のボタン、アンカー、または div 要素です。 |

## CSS Custom Properties

| Name           | Description  |
| -------------- | ------------ |
| `--background` | カードの背景 |
| `--background` | カードの背景 |
| `--color`      | カードの色   |
| `--color`      | カードの色   |
