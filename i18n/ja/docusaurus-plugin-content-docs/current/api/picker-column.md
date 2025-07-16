---
title: "ion-picker-column"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `'primary'` |



### disabled

| | |
| --- | --- |
| **Description** | true`の場合、ユーザーはピッカーと対話することができない。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### value

| | |
| --- | --- |
| **Description** | ピッカーで選択されているオプション。 |
| **Attribute** | `value` |
| **Type** | `number \| string \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionChange` | 値が変更されたときに発行される。  プログラムで `value` プロパティを設定した場合は、このイベントは発生しない。 |


## Methods


### setFocus

| | |
| --- | --- |
| **Description** | ピッカーカラム内のスクロール可能なコンテナにフォーカスを設定します。グローバルメソッド `pickerColumn.focus()` の代わりにこのメソッドを使用します。 |
| **Signature** | `setFocus() => Promise<void>` |



## Slots

| Name | Description |
| --- | --- |
| `prefix` | ピッカー・オプションの左側に表示するコンテンツ。 |
| `suffix` | ピッカー・オプションの右側に表示するコンテンツ。 |

