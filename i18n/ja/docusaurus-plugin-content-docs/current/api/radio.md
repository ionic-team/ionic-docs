---
title: 'ion-radio'
demoUrl: '/docs/demos/api/radio/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/radio/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-radio Component: Radio Property for iOS and Android</title>
  <meta
    name="description"
    content="Radio components should be used inside of ion-radio-groups on iOS and Android devices. Read to learn more about radio property usage and installation."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### alignment

|                 |                                                                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ラジオとラベルの十字軸上の配置を制御する方法。start"`：ラベルとコントロールはLTRでは横軸の左側に、RTLでは右側に表示されます。center"`：ラベルとコントロールは LTR でも RTL でも横軸の中央に表示されます。このプロパティを設定すると、ラジオの `display` が `block` に変更されます。 |
| **Attribute**   | `alignment`                                                                                                                                                                                                                                                                         |
| **Type**        | `"center" \| "start" \| undefined`                                                                                                                                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                         |

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
| **Description** | `true`の場合、ユーザはラジオと対話することができません。 |
| **Attribute**   | `disabled`                                               |
| **Type**        | `boolean`                                                |
| **Default**     | `false`                                                  |

### justify

|                 |                                                                                                                                                                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ラベルとラジオを 1 行にまとめる方法。start"`：ラベルとラジオはLTRでは左に、RTLでは右に表示されます。end"`：ラベルとラジオは LTR では右に、RTL では左に表示されます。space-between"`：ラベルとラジオは行の反対側に表示され、2つの要素の間にはスペースが入ります。このプロパティを設定すると、ラジオの `display`が`block` に変更されます。 |
| **Attribute**   | `justify`                                                                                                                                                                                                                                                                                                                                |
| **Type**        | `"end" \| "space-between" \| "start" \| undefined`                                                                                                                                                                                                                                                                                       |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                              |

### labelPlacement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | ラジオに対してラベルを配置する位置。start"`：ラベルはLTRではラジオの左に、RTLでは右に表示されます。end"`：ラベルは LTR ではラジオの右、RTL では左に表示される。fixed"`：ラベルの幅が固定される以外は `"start"` と同じ動作をします。長いテキストは省略記号("...")で切り捨てられます。stacked"`：ラベルは向きに関係なくラジオの上に表示されます。ラベルの整列は `alignment` プロパティで制御できます。 |
| **Attribute**   | `label-placement`                                                                                                                                                                                                                                                                                                                                                                                    |
| **Type**        | `"end" \| "fixed" \| "stacked" \| "start"`                                                                                                                                                                                                                                                                                                                                                           |
| **Default**     | `'start'`                                                                                                                                                                                                                                                                                                                                                                                            |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### name

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | フォームデータとともに送信されるコントロールの名前。 |
| **Attribute**   | `name`                                               |
| **Type**        | `string`                                             |
| **Default**     | `this.inputId`                                       |

### value

|                 |                  |
| --------------- | ---------------- |
| **Description** | ラジオの値です。 |
| **Attribute**   | `value`          |
| **Type**        | `any`            |
| **Default**     | `undefined`      |

## Events

| Name       | Description                                            |
| ---------- | ------------------------------------------------------ |
| `ionBlur`  | ラジオボタンのフォーカスが外れたときに発行されます。   |
| `ionFocus` | ラジオボタンにフォーカスが当たったときに発行されます。 |

## CSS Shadow Parts

| Name        | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `container` | ラジオマークの入れ物です。                                               |
| `label`     | ラジオを説明するラベルテキスト。                                         |
| `mark`      | チェックされた状態を示すために使用されるチェックマークまたはドットです。 |

## CSS Custom Properties

| Name                    | Description                            |
| ----------------------- | -------------------------------------- |
| `--border-radius`       | ラジオのボーダー半径                   |
| `--border-radius`       | ラジオのボーダー半径                   |
| `--color`               | ラジオのカラー                         |
| `--color`               | ラジオのカラー                         |
| `--color-checked`       | チェックしたラジオの色                 |
| `--color-checked`       | チェックしたラジオの色                 |
| `--inner-border-radius` | 内側のチェック付きラジオのボーダー半径 |
| `--inner-border-radius` | 内側のチェック付きラジオのボーダー半径 |

## Slots

| Name | Description                                                                                                                  |
| ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| ``   | ラジオに関連付けるラベルテキストです。"labelPlacement"プロパティを使用して、ラジオに対するラベルの相対的な配置を制御します。 |
