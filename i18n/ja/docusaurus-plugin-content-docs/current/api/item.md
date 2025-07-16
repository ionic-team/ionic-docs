---
title: "ion-item"
demoUrl: "/docs/demos/api/item/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/item/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-item: Input, Edit, or Delete iOS and Android Item Elements</title>
  <meta name="description" content="ion-item elements for iOS/Android contain text, icons, images, and other custom elements. They're placed in a list and can be input, deleted, edited, and more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### button

| | |
| --- | --- |
| **Description** | `true`の場合、ボタンタグがレンダリングされ、アイテムはタップ可能になる。 |
| **Attribute** | `button` |
| **Type** | `boolean` |
| **Default** | `false` |



### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### detail

| | |
| --- | --- |
| **Description** | `true`の場合、アイテムに詳細矢印が表示されます。デフォルトは `false` で、`mode` が `ios` で `href` または `button` プロパティが存在する場合のみです。 |
| **Attribute** | `detail` |
| **Type** | `boolean \| undefined` |
| **Default** | `undefined` |



### detailIcon

| | |
| --- | --- |
| **Description** | `detail` が `true` に設定されているときに使用するアイコンです。 |
| **Attribute** | `detail-icon` |
| **Type** | `string` |
| **Default** | `chevronForward` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザはそのアイテムと対話することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### download

| | |
| --- | --- |
| **Description** | この属性は、ブラウザが URL に移動する代わりに URL をダウンロードするように指示し、ユーザはローカルファイルとして保存するように促されます。この属性に値がある場合、保存のプロンプトであらかじめ入力されたファイル名として使用されます（ユーザーはファイル名を変更することができます）。 |
| **Attribute** | `download` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### href

| | |
| --- | --- |
| **Description** | ハイパーリンクが指し示す URL または URL フラグメントを格納します。このプロパティが設定されている場合、アンカータグがレンダリングされます。 |
| **Attribute** | `href` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### lines

| | |
| --- | --- |
| **Description** | アイテムに表示される下枠の表示方法。 |
| **Attribute** | `lines` |
| **Type** | `"full" \| "inset" \| "none" \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### rel

| | |
| --- | --- |
| **Description** | ターゲットオブジェクトとリンクオブジェクトの関係を指定します。値は、スペースで区切られた[リンクタイプ](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)のリストです。 |
| **Attribute** | `rel` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### routerAnimation

| | |
| --- | --- |
| **Description** | ルータを使用する場合、`href`を使用して別のページに移動する際の遷移アニメーションを指定します。 |
| **Attribute** | `router-animation` |
| **Type** | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default** | `undefined` |



### routerDirection

| | |
| --- | --- |
| **Description** | ルータを使用する場合、`href`を使用して他のページに移動する際の遷移方向を指定します。 |
| **Attribute** | `router-direction` |
| **Type** | `"back" \| "forward" \| "root"` |
| **Default** | `'forward'` |



### target

| | |
| --- | --- |
| **Description** | リンク先のURLを表示する場所を指定します。href`を指定した場合のみ適用される。特別なキーワードがあります。_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute** | `target` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### type

| | |
| --- | --- |
| **Description** | ボタンの種類。onclick`または`button`プロパティが存在する場合にのみ使用される。 |
| **Attribute** | `type` |
| **Type** | `"button" \| "reset" \| "submit"` |
| **Default** | `'button'` |



## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `detail-icon` | アイテムのシェブロンアイコンを表示します。detail="true"`のときのみ適用されます。 |
| `native` | すべての子要素をラップするネイティブHTMLのボタン、アンカー、またはdiv要素です。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | アイテムの背景 |
| `--background` | アイテムの背景 |
| `--background-activated` | 押されたときのアイテムの背景。注意：これを設定すると、Material Designの波紋に干渉します。 |
| `--background-activated` | 押されたときのアイテムの背景。注意：これを設定すると、Material Designの波紋に干渉します。 |
| `--background-activated-opacity` | 押されたときのアイテム背景の不透明度 |
| `--background-activated-opacity` | 押されたときのアイテム背景の不透明度 |
| `--background-focused` | タブキーでフォーカスしたときのアイテムの背景 |
| `--background-focused` | タブキーでフォーカスしたときのアイテムの背景 |
| `--background-focused-opacity` | タブキーでフォーカスしたときのアイテムの背景の不透明度 |
| `--background-focused-opacity` | タブキーでフォーカスしたときのアイテムの背景の不透明度 |
| `--background-hover` | ホバー時のアイテムの背景 |
| `--background-hover` | ホバー時のアイテムの背景 |
| `--background-hover-opacity` | ホバー時のアイテムの背景の不透明度 |
| `--background-hover-opacity` | ホバー時のアイテムの背景の不透明度 |
| `--border-color` | アイテムの縁取りの色 |
| `--border-color` | アイテムの縁取りの色 |
| `--border-radius` | アイテムの境界線の半径 |
| `--border-radius` | アイテムの境界線の半径 |
| `--border-style` | アイテムの枠のスタイル |
| `--border-style` | アイテムの枠のスタイル |
| `--border-width` | アイテムの枠の幅 |
| `--border-width` | アイテムの枠の幅 |
| `--color` | アイテムのカラー |
| `--color` | アイテムのカラー |
| `--color-activated` | 押したときのアイテムの色 |
| `--color-activated` | 押したときのアイテムの色 |
| `--color-focused` | タブキーでフォーカスしたときのアイテムの色 |
| `--color-focused` | タブキーでフォーカスしたときのアイテムの色 |
| `--color-hover` | ホバー時のアイテムの色 |
| `--color-hover` | ホバー時のアイテムの色 |
| `--detail-icon-color` | アイテム詳細アイコンの色 |
| `--detail-icon-color` | アイテム詳細アイコンの色 |
| `--detail-icon-font-size` | アイテム詳細アイコンのFont Size |
| `--detail-icon-font-size` | アイテム詳細アイコンのFont Size |
| `--detail-icon-opacity` | アイテム詳細アイコンの不透明度 |
| `--detail-icon-opacity` | アイテム詳細アイコンの不透明度 |
| `--inner-border-width` | アイテム内枠の幅 |
| `--inner-border-width` | アイテム内枠の幅 |
| `--inner-box-shadow` | アイテム内側のボックスシャドウ |
| `--inner-box-shadow` | アイテム内側のボックスシャドウ |
| `--inner-padding-bottom` | アイテム内側のBottom Padding |
| `--inner-padding-bottom` | アイテム内側のBottom Padding |
| `--inner-padding-end` | 方向が左から右の場合はRight Padding、方向がアイテムの内側の右から左の場合はLeft Paddingとなります。 |
| `--inner-padding-end` | 方向が左から右の場合はRight Padding、方向がアイテムの内側の右から左の場合はLeft Paddingとなります。 |
| `--inner-padding-start` | 方向が左から右の場合はLeft Padding、方向が右から左の場合はRight Paddingがアイテム内側に入る |
| `--inner-padding-start` | 方向が左から右の場合はLeft Padding、方向が右から左の場合はRight Paddingがアイテム内側に入る |
| `--inner-padding-top` | アイテム内側のTop Padding |
| `--inner-padding-top` | アイテム内側のTop Padding |
| `--min-height` | アイテムの最小高さ |
| `--min-height` | アイテムの最小高さ |
| `--padding-bottom` | アイテムのBottom Padding |
| `--padding-bottom` | アイテムのBottom Padding |
| `--padding-end` | 方向が左から右の場合はRight Padding、方向が右から左の場合はLeft Paddingで項目を囲む |
| `--padding-end` | 方向が左から右の場合はRight Padding、方向が右から左の場合はLeft Paddingで項目を囲む |
| `--padding-start` | 方向が左から右の場合はLeft Padding、方向が右から左の場合はRight Paddingで項目を囲む |
| `--padding-start` | 方向が左から右の場合はLeft Padding、方向が右から左の場合はRight Paddingで項目を囲む |
| `--padding-top` | アイテムのTop Padding |
| `--padding-top` | アイテムのTop Padding |
| `--ripple-color` | アイテム波及効果の色 |
| `--ripple-color` | アイテム波及効果の色 |
| `--transition` | アイテムの変遷 |
| `--transition` | アイテムの変遷 |


## Slots

| Name | Description |
| --- | --- |
| `` | slotがない状態で提供される場合、コンテンツは名前付きslotの間に配置されます。 |
| `end` | コンテンツは、LTRではアイテムテキストの右側に、RTLでは左側に配置されます。 |
| `start` | コンテンツは、LTRではアイテムテキストの左側に、RTLでは右側に配置されます。 |

