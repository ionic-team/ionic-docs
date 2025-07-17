---
title: 'ion-input-otp'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

## Properties

### autocapitalize

|                 |                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | テキスト値がユーザーによって入力／編集される際に、自動的に大文字にするかどうか、またどのようにするかについて示します。利用可能なオプション off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute**   | `autocapitalize`                                                                                                                                                                                              |
| **Type**        | `string`                                                                                                                                                                                                      |
| **Default**     | `'off'`                                                                                                                                                                                                       |

### color

|                 |                                                                                                                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                                                   |
| **Type**        | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined`                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                               |

### disabled

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | `true`の場合、ユーザは Input と対話することができません。 |
| **Attribute**   | `disabled`                                                |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### fill

|                 |                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The fill for the input boxes. If `"solid"` the input boxes will have a background. If `"outline"` the input boxes will be transparent with a border. |
| **Attribute**   | `fill`                                                                                                                                               |
| **Type**        | `"outline" \| "solid" \| undefined`                                                                                                                  |
| **Default**     | `'outline'`                                                                                                                                          |

### inputmode

|                 |                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`. For numbers (type="number"): "numeric" For text (type="text"): "text" |
| **Attribute**   | `inputmode`                                                                                                                                                                                                                            |
| **Type**        | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url" \| undefined`                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                            |

### length

|                 |                                       |
| --------------- | ------------------------------------- |
| **Description** | The number of input boxes to display. |
| **Attribute**   | `length`                              |
| **Type**        | `number`                              |
| **Default**     | `4`                                   |

### pattern

|                 |                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | A regex pattern string for allowed characters. Defaults based on type. For numbers (`type="number"`): `"[\p{N}]"` For text (`type="text"`): `"[\p{L}\p{N}]"` |
| **Attribute**   | `pattern`                                                                                                                                                    |
| **Type**        | `string \| undefined`                                                                                                                                        |
| **Default**     | `undefined`                                                                                                                                                  |

### readonly

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | `true`の場合、ユーザーは値を変更することができません。 |
| **Attribute**   | `readonly`                                             |
| **Type**        | `boolean`                                              |
| **Default**     | `false`                                                |

### separators

|                 |                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Where separators should be shown between input boxes. Can be a comma-separated string or an array of numbers. For example: `"3"` will show a separator after the 3rd input box. `[1,4]` will show a separator after the 1st and 4th input boxes. `"all"` will show a separator between every input box. |
| **Attribute**   | `separators`                                                                                                                                                                                                                                                                                            |
| **Type**        | `number[] \| string \| undefined`                                                                                                                                                                                                                                                                       |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                             |

### shape

|                 |                                                                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The shape of the input boxes. If "round" they will have an increased border radius. If "rectangular" they will have no border radius. If "soft" they will have a soft border radius. |
| **Attribute**   | `shape`                                                                                                                                                                              |
| **Type**        | `"rectangular" \| "round" \| "soft"`                                                                                                                                                 |
| **Default**     | `'round'`                                                                                                                                                                            |

### size

|                 |                                  |
| --------------- | -------------------------------- |
| **Description** | The size of the input boxes.     |
| **Attribute**   | `size`                           |
| **Type**        | `"large" \| "medium" \| "small"` |
| **Default**     | `'medium'`                       |

### type

|                 |                                               |
| --------------- | --------------------------------------------- |
| **Description** | The type of input allowed in the input boxes. |
| **Attribute**   | `type`                                        |
| **Type**        | `"number" \| "text"`                          |
| **Default**     | `'number'`                                    |

### value

|                 |                                         |
| --------------- | --------------------------------------- |
| **Description** | The value of the input group.           |
| **Attribute**   | `value`                                 |
| **Type**        | `null \| number \| string \| undefined` |
| **Default**     | `''`                                    |

## Events

| Name          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ionBlur`     | Emitted when the input group loses focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `ionChange`   | The `ionChange` event is fired when the user modifies the input's value. Unlike the `ionInput` event, the `ionChange` event is only fired when changes are committed, not as the user types. The `ionChange` event fires when the `<ion-input-otp>` component loses focus after its value has changed. This event will not emit when programmatically setting the `value` property.                                                                                                                                                                     |
| `ionComplete` | Emitted when all input boxes have been filled with valid values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `ionFocus`    | Emitted when the input group has focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `ionInput`    | ionInput` イベントは、ユーザが入力値を変更するたびに発生する。ionChange` イベントとは異なり、 `ionInput` イベントは入力値が変更されるたびに発生する。これは通常、ユーザが入力を行うたびに発生します。 テキスト入力を受け付ける要素(`type=text`, `type=tel`など)の場合、インターフェイスは[`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent)となります。その他の要素の場合、インターフェイスは[`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)となります。編集時に入力がクリアされる場合、型は `null` となる。 |

## Methods

### setFocus

|                 |                                             |
| --------------- | ------------------------------------------- |
| **Description** | Sets focus to an input box.                 |
| **Signature**   | `setFocus(index?: number) => Promise<void>` |

## CSS Custom Properties

| Name                        | Description                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `--background`              | Background color of the input boxes                                                                            |
| `--background`              | Background color of the input boxes                                                                            |
| `--border-color`            | Border color of the input boxes                                                                                |
| `--border-color`            | Border color of the input boxes                                                                                |
| `--border-radius`           | Border radius of the input boxes                                                                               |
| `--border-radius`           | Border radius of the input boxes                                                                               |
| `--border-width`            | Border width of the input boxes                                                                                |
| `--border-width`            | Border width of the input boxes                                                                                |
| `--color`                   | Text color of the input                                                                                        |
| `--color`                   | Text color of the input                                                                                        |
| `--height`                  | Height of input boxes                                                                                          |
| `--height`                  | Height of input boxes                                                                                          |
| `--highlight-color-focused` | フォーカスされたときの入力のハイライトの色                                                                     |
| `--highlight-color-focused` | フォーカスされたときの入力のハイライトの色                                                                     |
| `--highlight-color-invalid` | 入力が無効な場合のハイライトの色                                                                               |
| `--highlight-color-invalid` | 入力が無効な場合のハイライトの色                                                                               |
| `--highlight-color-valid`   | 有効時の入力のハイライトの色                                                                                   |
| `--highlight-color-valid`   | 有効時の入力のハイライトの色                                                                                   |
| `--margin-bottom`           | Bottom margin of the input group                                                                               |
| `--margin-bottom`           | Bottom margin of the input group                                                                               |
| `--margin-end`              | Right margin if direction is left-to-right, and left margin if direction is right-to-left of the input group   |
| `--margin-end`              | Right margin if direction is left-to-right, and left margin if direction is right-to-left of the input group   |
| `--margin-start`            | Left margin if direction is left-to-right, and right margin if direction is right-to-left of the input group   |
| `--margin-start`            | Left margin if direction is left-to-right, and right margin if direction is right-to-left of the input group   |
| `--margin-top`              | Top margin of the input group                                                                                  |
| `--margin-top`              | Top margin of the input group                                                                                  |
| `--min-width`               | Minimum width of input boxes                                                                                   |
| `--min-width`               | Minimum width of input boxes                                                                                   |
| `--padding-bottom`          | Bottom padding of the input group                                                                              |
| `--padding-bottom`          | Bottom padding of the input group                                                                              |
| `--padding-end`             | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input group |
| `--padding-end`             | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input group |
| `--padding-start`           | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input group |
| `--padding-start`           | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input group |
| `--padding-top`             | Top padding of the input group                                                                                 |
| `--padding-top`             | Top padding of the input group                                                                                 |
| `--separator-border-radius` | Border radius of the separator between boxes                                                                   |
| `--separator-border-radius` | Border radius of the separator between boxes                                                                   |
| `--separator-color`         | Color of the separator between boxes                                                                           |
| `--separator-color`         | Color of the separator between boxes                                                                           |
| `--separator-height`        | Height of the separator between boxes                                                                          |
| `--separator-height`        | Height of the separator between boxes                                                                          |
| `--separator-width`         | Width of the separator between boxes                                                                           |
| `--separator-width`         | Width of the separator between boxes                                                                           |
| `--width`                   | Width of input boxes                                                                                           |
| `--width`                   | Width of input boxes                                                                                           |
