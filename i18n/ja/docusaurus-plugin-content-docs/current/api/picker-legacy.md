---
title: "ion-picker-legacy"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


  
## Properties


### animated

| | |
| --- | --- |
| **Description** | `true`の場合、ピッカーはアニメーションを行います。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropDismiss

| | |
| --- | --- |
| **Description** | `true`の場合、バックドロップがクリックされるとピッカーが解除される。 |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### buttons

| | |
| --- | --- |
| **Description** | ピッカーの上部に表示されるボタンの配列。 |
| **Attribute** | `buttons` |
| **Type** | `PickerButton[]` |
| **Default** | `[]` |



### columns

| | |
| --- | --- |
| **Description** | ピッカーに表示されるカラムの配列。 |
| **Attribute** | `columns` |
| **Type** | `PickerColumn[]` |
| **Default** | `[]` |



### cssClass

| | |
| --- | --- |
| **Description** | カスタムCSSに適用する追加のクラス。複数のクラスを指定する場合は、スペースで区切る必要があります。 |
| **Attribute** | `css-class` |
| **Type** | `string \| string[] \| undefined` |
| **Default** | `undefined` |



### duration

| | |
| --- | --- |
| **Description** | ピッカーが終了するまでの待ち時間をミリ秒単位で指定します。 |
| **Attribute** | `duration` |
| **Type** | `number` |
| **Default** | `0` |



### enterAnimation

| | |
| --- | --- |
| **Description** | ピッカーが表示されたときに使用するアニメーション。 |
| **Attribute** | `enter-animation` |
| **Type** | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default** | `undefined` |



### htmlAttributes

| | |
| --- | --- |
| **Description** | ピッカーに渡す追加属性。 |
| **Attribute** | `html-attributes` |
| **Type** | `undefined \| { [key: string]: any; }` |
| **Default** | `undefined` |



### isOpen

| | |
| --- | --- |
| **Description** | `true`の場合、ピッカーは開きます。`false`の場合、ピッカーは閉じます。ピッカーの表示をより細かく制御したい場合に使用します。それ以外の場合は pickerController や `trigger` プロパティを使用します。注意: ピッカーが終了しても `isOpen` は自動的に `false` に戻りません。あなたのコードでそれを行う必要があります。 |
| **Attribute** | `is-open` |
| **Type** | `boolean` |
| **Default** | `false` |



### keyboardClose

| | |
| --- | --- |
| **Description** | `true`の場合、オーバーレイが表示されたときにキーボードが自動的に解除されます。 |
| **Attribute** | `keyboard-close` |
| **Type** | `boolean` |
| **Default** | `true` |



### leaveAnimation

| | |
| --- | --- |
| **Description** | ピッカーが解除されたときに使用するアニメーションです。 |
| **Attribute** | `leave-animation` |
| **Type** | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### showBackdrop

| | |
| --- | --- |
| **Description** | `true`の場合、ピッカーの後ろに背景が表示されます。 |
| **Attribute** | `show-backdrop` |
| **Type** | `boolean` |
| **Default** | `true` |



### trigger

| | |
| --- | --- |
| **Description** | クリックするとピッカーが開くトリガー要素に対応するID。 |
| **Attribute** | `trigger` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `didDismiss` | ピッカーが解散した後に発行されます。ionPickerDidDismissの略記です。 |
| `didPresent` | ピッカーが提示された後に発行されます。ionPickerWillDismissの略記です。 |
| `ionPickerDidDismiss` | ピッカーが解散した後に発行されます。 |
| `ionPickerDidPresent` | ピッカーが提示された後に発行されます。 |
| `ionPickerWillDismiss` | ピッカーが解散する前に発行されます。 |
| `ionPickerWillPresent` | ピッカーが提示される前に発行されます。 |
| `willDismiss` | ピッカーが解散する前に発行されます。ionPickerWillDismissの略記です。 |
| `willPresent` | ピッカーが提示される前に発行されます。ionPickerWillPresentの略記です。 |


## Methods


### dismiss

| | |
| --- | --- |
| **Description** | ピッカー・オーバーレイが表示された後、それを解除します。 |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### getColumn

| | |
| --- | --- |
| **Description** | 指定された名前に一致するカラムを取得します。 |
| **Signature** | `getColumn(name: string) => Promise<PickerColumn \| undefined>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | ピッカーが解散したことを解決するPromiseを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | ピッカーが解散するタイミングを解決するPromiseを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | ピッカー・オーバーレイを作成した後に提示します。 |
| **Signature** | `present() => Promise<void>` |



## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--backdrop-opacity` | 背景の不透明度 |
| `--backdrop-opacity` | 背景の不透明度 |
| `--background` | ピッカーの背景 |
| `--background` | ピッカーの背景 |
| `--background-rgb` | ピッカーの背景（rgb形式） |
| `--background-rgb` | ピッカーの背景（rgb形式） |
| `--border-color` | ピッカーのボーダーカラー |
| `--border-color` | ピッカーのボーダーカラー |
| `--border-radius` | ピッカーのボーダー半径 |
| `--border-radius` | ピッカーのボーダー半径 |
| `--border-style` | ピッカーのボーダースタイル |
| `--border-style` | ピッカーのボーダースタイル |
| `--border-width` | ピッカーのボーダー幅 |
| `--border-width` | ピッカーのボーダー幅 |
| `--height` | ピッカーの高さ |
| `--height` | ピッカーの高さ |
| `--max-height` | ピッカーの最大の高さ |
| `--max-height` | ピッカーの最大の高さ |
| `--max-width` | ピッカーの最大幅 |
| `--max-width` | ピッカーの最大幅 |
| `--min-height` | ピッカーの最小の高さ |
| `--min-height` | ピッカーの最小の高さ |
| `--min-width` | ピッカーの最小幅 |
| `--min-width` | ピッカーの最小幅 |
| `--width` | ピッカーの幅 |
| `--width` | ピッカーの幅 |

