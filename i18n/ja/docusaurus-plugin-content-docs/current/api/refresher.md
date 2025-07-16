---
title: "ion-refresher"
demoUrl: "/docs/demos/api/refresher/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/refresher/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-refresher: Pull-to-Refresh Page Content on Ionic Apps</title>
  <meta name="description" content="ion-refresher provides pull-to-refresh functionality on content components. Learn how this lets users pull down on a page using touch to retrieve more data." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### closeDuration

| | |
| --- | --- |
| **Description** | リフレッシャーを閉じるのにかかる時間。リフレッシュコンテンツがスピナーを使用している場合は適用されず、ネイティブリフレッシャーが有効になります。 |
| **Attribute** | `close-duration` |
| **Type** | `string` |
| **Default** | `'280ms'` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、リフレッシャーは非表示となる。 |
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



### pullFactor

| | |
| --- | --- |
| **Description** | 引きの速さを何倍にするか。引きのアニメーションを遅くするには、`1`より小さい数値を渡します。引っ張る速度を速くするには、`1`より大きい数値を渡します。デフォルト値は `1` で、カーソルの速度と同じです。もし負の値が渡された場合、代わりに `1` が係数となります。  例えば例えば、渡された値が `1.2` で、コンテンツが `10` ピクセルでドラッグされた場合、`10` ピクセルではなく、`12` ピクセルでドラッグされます（20% の増加です）。渡された値が `0.8` の場合、ドラッグされた量はカーソルの移動量より少ない `8` ピクセルとなります。  リフレッシュコンテンツがスピナーを使用している場合は適用されず、ネイティブリフレッシャーが有効になります。 |
| **Attribute** | `pull-factor` |
| **Type** | `number` |
| **Default** | `1` |



### pullMax

| | |
| --- | --- |
| **Description** | リフレッシャーが自動的に `refreshing` 状態になるまでの、引っ張りの最大距離。デフォルトは `pullMin + 60` の結果です。リフレッシュコンテンツがスピナーを使用している場合は適用されず、ネイティブリフレッシャーが有効になります。 |
| **Attribute** | `pull-max` |
| **Type** | `number` |
| **Default** | `this.pullMin + 60` |



### pullMin

| | |
| --- | --- |
| **Description** | リフレッシャーが `refreshing` 状態になるまでに、ユーザが引き下げるべき最小距離。リフレッシャーコンテンツがスピナーを使用する場合は適用されず、ネイティブリフレッシャーが有効になる。 |
| **Attribute** | `pull-min` |
| **Type** | `number` |
| **Default** | `60` |



### snapbackDuration

| | |
| --- | --- |
| **Description** | リフレッシャーが `refreshing` 状態にスナップバックするのにかかる時間。リフレッシュコンテンツがスピナーを使用している場合は適用されず、ネイティブリフレッシュが有効になります。 |
| **Attribute** | `snapback-duration` |
| **Type** | `string` |
| **Default** | `'280ms'` |



## Events

| Name | Description |
| --- | --- |
| `ionPull` | ユーザーがコンテンツを引き下げ、リフレッシャーを露出している間に発行されます。 |
| `ionRefresh` | ユーザーがコンテンツから手を離し、`pullMin`を越えて下に引いたとき、またはコンテンツを下に引き、pullMaxを越えたときに発行されます。リフレッシャーの状態を `refreshing` に更新します。非同期処理が完了したら `complete()` メソッドを呼び出す必要があります。 |
| `ionStart` | ユーザーが引き下げを開始するときに発行されます。 |


## Methods


### cancel

| | |
| --- | --- |
| **Description** | リフレッシュの状態を `refreshing` から `cancelling` に変更します。 |
| **Signature** | `cancel() => Promise<void>` |


### complete

| | |
| --- | --- |
| **Description** | 非同期操作が完了したら `complete()` を呼び出します。例えば、`refreshing`状態は、アプリがAJAXリクエストからより多くのデータを受信するなど、非同期操作を実行している間です。データを受信したら、このメソッドを呼び出して、リフレッシュが完了したことを示し、リフレッシュャを閉じます。このメソッドは、リフレッシャーの状態を `refreshing` から `completing` に変更します。 |
| **Signature** | `complete() => Promise<void>` |


### getProgress

| | |
| --- | --- |
| **Description** | ユーザーがどれだけ下に引っ張られたかを表す数値です。数値 `0` は、ユーザーが全く下に引いていないことを表します。数値 `1` および `1` より大きい数値は、ユーザーが手を離したときに更新が行われるほど十分に下に引っ張られたことを表します。もしユーザーが手を離し、数値が `1` より小さい場合は、更新は行われず、コンテンツは元の位置に戻ります。 |
| **Signature** | `getProgress() => Promise<number>` |


