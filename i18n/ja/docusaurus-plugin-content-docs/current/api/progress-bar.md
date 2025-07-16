---
title: "ion-progress-bar"
demoUrl: "/docs/demos/api/progress-bar/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/progress-bar/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Progress Bar | Horizontal App Progress Bar for Loading Indicator</title>
  <meta name="description" content="ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes—such as submitting a form or saving updates." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### buffer

| | |
| --- | --- |
| **Description** | バッファと値が1より小さい場合、バッファの円が表示されます。バッファは[0, 1]の間である必要があります。 |
| **Attribute** | `buffer` |
| **Type** | `number` |
| **Default** | `1` |



### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### reversed

| | |
| --- | --- |
| **Description** | true の場合、プログレスバーの方向を反転させます。 |
| **Attribute** | `reversed` |
| **Type** | `boolean` |
| **Default** | `false` |



### type

| | |
| --- | --- |
| **Description** | 処理にかかる時間が既知か否かに応じて、プログレスバーの状態を指定します。デフォルトのオプションは以下の通り。determinate"` (アニメーションなし), `"indeterminate"` (左から右へアニメーションする). |
| **Attribute** | `type` |
| **Type** | `"determinate" \| "indeterminate"` |
| **Default** | `'determinate'` |



### value

| | |
| --- | --- |
| **Description** | この値は、`type`が`"determinate"`である場合に、アクティブバーをどれだけ表示するかを決定するものです。値は [0, 1] の間であるべきです。 |
| **Attribute** | `value` |
| **Type** | `number` |
| **Default** | `0` |



## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `progress` | type`が`"determinate"`のときは現在値を表示し、`type`が`"indeterminate"`のときは前後にスライドするプログレスバーです。 |
| `stream` | バッファリング中に表示されるアニメーションの円です。これは `buffer` が設定され、`type` が `"determinate"` のときのみ表示される。 |
| `track` | プログレスバーの後ろにあるトラックバーです。buffer`プロパティが設定され、`type`が `"determinate"` である場合、トラックは `buffer` 値の幅となる。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | プログレストラックの背景、または `buffer` が設定されている場合はバッファバー。 |
| `--background` | プログレストラックの背景、または `buffer` が設定されている場合はバッファバー。 |
| `--progress-background` | 現在値を表すプログレスバーの背景 |
| `--progress-background` | 現在値を表すプログレスバーの背景 |

