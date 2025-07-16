---
title: "ion-segment"
demoUrl: "/docs/demos/api/segment/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/segment/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-segment: API Documentation for Segmented Controls</title>
  <meta name="description" content="ion-segments display a group of related buttons—sometimes known as segmented controls. View our Segment API Documentation to learn more about usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザーはセグメントと対話することができません。 |
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



### scrollable

| | |
| --- | --- |
| **Description** | `true`の場合、セグメントボタンはオーバーフローし、ユーザーはスワイプしてそれらを見ることができます。また、スワイプして隠れたボタンを見るために、ボタンの間でインジケータをドラッグするジェスチャーを無効にします。 |
| **Attribute** | `scrollable` |
| **Type** | `boolean` |
| **Default** | `false` |



### selectOnFocus

| | |
| --- | --- |
| **Description** | `true`の場合、キーボードで `ion-segment-button` に移動すると、その要素にフォーカスが当たって選択される。 `false` の場合、キーボードによるナビゲーションは `ion-segment-button` 要素にのみフォーカスを当てます。 |
| **Attribute** | `select-on-focus` |
| **Type** | `boolean` |
| **Default** | `false` |



### swipeGesture

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザーはセグメントボタンの間をスワイプしてアクティブにすることができます。 |
| **Attribute** | `swipe-gesture` |
| **Type** | `boolean` |
| **Default** | `true` |



### value

| | |
| --- | --- |
| **Description** | セグメントの価値 |
| **Attribute** | `value` |
| **Type** | `number \| string \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionChange` | valueプロパティが変更され、`ion-segment`からドラッグしていたポインタが解放されたときに発行される。  プログラムで `value` プロパティを設定した場合は、このイベントは発生しない。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | セグメントボタンの背景 |
| `--background` | セグメントボタンの背景 |

