---
title: "ion-radio-group"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-radio-group | Radio Button Group Usage for Ionic Apps</title>
  <meta name="description" content="A radio group is a group of radio buttons. Radio groups allow a user to select at most one radio button from a set. Learn more about ion-radio-group usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### allowEmptySelection

| | |
| --- | --- |
| **Description** | `true`の場合、ラジオを非選択にすることができる。 |
| **Attribute** | `allow-empty-selection` |
| **Type** | `boolean` |
| **Default** | `false` |



### compareWith

| | |
| --- | --- |
| **Description** | このプロパティを使用すると、開発者は、ion-radio-group で選択されたオプションを決定するときにオブジェクトを比較するためのカスタム関数またはプロパティ名を指定できます。指定しない場合、デフォルトの動作では、比較に厳密な等式 (===) が使用されます。 |
| **Attribute** | `compare-with` |
| **Type** | `((currentValue: any, compareValue: any) => boolean) \| null \| string \| undefined` |
| **Default** | `undefined` |



### errorText

| | |
| --- | --- |
| **Description** | The error text to display at the top of the radio group. |
| **Attribute** | `error-text` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### helperText

| | |
| --- | --- |
| **Description** | The helper text to display at the top of the radio group. |
| **Attribute** | `helper-text` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### name

| | |
| --- | --- |
| **Description** | フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### value

| | |
| --- | --- |
| **Description** | 無線グループの値です。 |
| **Attribute** | `value` |
| **Type** | `any` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionChange` | 値が変更されたときに発行される。  プログラムで `value` プロパティを設定した場合は、このイベントは発生しない。 |

