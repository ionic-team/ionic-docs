---
title: "ion-infinite-scroll"
demoUrl: "/docs/demos/api/infinite-scroll/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/infinite-scroll/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Infinite Scroller | ion-infinite-scroll Action Component</title>
  <meta name="description" content="The ion-infinite-scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、無限スクロールは非表示になり、スクロールイベントリスナーが削除されます。 `true` を設定すると、無限スクロールがスクロール中に新しいデータを積極的に受け取ろうとするのを無効にすることができます。これは、追加できるデータがもうないことが分かっていて、無限スクロールが不要になった場合に有効です。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### position

| | |
| --- | --- |
| **Description** | 無限スクロール要素の位置を指定します。値は `top` または `bottom` のどちらかです。 |
| **Attribute** | `position` |
| **Type** | `"bottom" \| "top"` |
| **Default** | `'bottom'` |



### threshold

| | |
| --- | --- |
| **Description** | スクロールしたときに `infinite` 出力イベントを呼び出すための、コンテンツの底からの閾値の距離。閾値はパーセントかピクセル単位で指定します。例えば、`10%`という値を使用すると、ユーザがページの下から10%スクロールしたときに `infinite` 出力イベントが呼び出されるようになります。また、ページの下から100ピクセル以内にスクロールした場合には、`100px`という値を使用します。 |
| **Attribute** | `threshold` |
| **Type** | `string` |
| **Default** | `'15%'` |



## Events

| Name | Description |
| --- | --- |
| `ionInfinite` | スクロールが閾値の距離に達したときに発行されます。非同期処理が完了したら、無限ハンドラから無限スクロールの `complete()` メソッドを呼び出す必要があります。 |


## Methods


### complete

| | |
| --- | --- |
| **Description** | 非同期操作が完了したら、`ionInfinite`出力イベントハンドラ内で `complete()` を呼び出します。例えば、AJAX リクエストからデータを受信してデータリストに項目を追加するなど、アプリが非同期処理を実行している間が `loading` 状態です。データの受信とUIの更新が完了したら、このメソッドを呼び出してロードが完了したことを知らせます。このメソッドは、無限スクロールの状態を `loading` から `enabled` へと変更します。 |
| **Signature** | `complete() => Promise<void>` |


