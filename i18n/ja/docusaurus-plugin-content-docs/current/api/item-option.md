---
title: 'ion-item-option'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-item-option: Option Button and Properties for Ionic Apps</title>
  <meta
    name="description"
    content="ion-item-option is the option button for an ion-item-sliding and must be placed inside of an <ion-item-options>. Read to learn more about properties."
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

### disabled

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Description** | `true`の場合、ユーザーはアイテムオプションと対話することができません。 |
| **Attribute**   | `disabled`                                                             |
| **Type**        | `boolean`                                                              |
| **Default**     | `false`                                                                |

### download

|                 |                                                                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | この属性は、ブラウザが URL に移動する代わりに URL をダウンロードするように指示し、ユーザはローカルファイルとして保存するように促されます。この属性に値がある場合、保存のプロンプトであらかじめ入力されたファイル名として使用されます（ユーザーはファイル名を変更することができます）。 |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                             |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                            |

### expandable

|                 |                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------ |
| **Description** | `true`の場合、オプションは利用可能な幅を占めるように展開し、他のオプションをカバーします。 |
| **Attribute**   | `expandable`                                                                               |
| **Type**        | `boolean`                                                                                  |
| **Default**     | `false`                                                                                    |

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

### target

|                 |                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | リンク先の URL を表示する場所を指定します。href`を指定した場合のみ適用される。特別なキーワードがあります。_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                              |
| **Type**        | `string \| undefined`                                                                                                                                 |
| **Default**     | `undefined`                                                                                                                                           |

### type

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | ボタンの種類です。                |
| **Attribute**   | `type`                            |
| **Type**        | `"button" \| "reset" \| "submit"` |
| **Default**     | `'button'`                        |

## CSS Shadow Parts

| Name     | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| `native` | すべての子要素をラップするネイティブ HTML のボタンまたはアンカー要素です。 |

## CSS Custom Properties

| Name           | Description                |
| -------------- | -------------------------- |
| `--background` | アイテムオプションの背景   |
| `--background` | アイテムオプションの背景   |
| `--color`      | アイテムオプションのカラー |
| `--color`      | アイテムオプションのカラー |

## Slots

| Name        | Description                                                                     |
| ----------- | ------------------------------------------------------------------------------- |
| ``          | slot がない状態で提供される場合、コンテンツは名前付き slot の間に配置されます。 |
| `bottom`    | コンテンツは、オプションテキストの下に配置されます。                            |
| `end`       | コンテンツは、LTR ではオプションテキストの右側に、RTL では左側に配置されます。  |
| `icon-only` | テキストを持たないオプションのアイコンに使用されるべきです。                    |
| `start`     | コンテンツは、LTR ではオプションテキストの左側に、RTL では右側に配置されます。  |
| `top`       | オプションテキストの上にコンテンツが配置されます。                              |
