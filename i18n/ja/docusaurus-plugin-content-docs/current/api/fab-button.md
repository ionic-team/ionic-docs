---
title: "ion-fab-button"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Floating Action Button | Ionic FAB Button Icon for Primary Action</title>
  <meta name="description" content="Floating Action Buttons (FABs) represent the primary action in an app. The icons are circular and, when pressed, the button may open more related actions." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### activated

| | |
| --- | --- |
| **Description** | `true`の場合、ファブボタンにクローズアイコンを表示します。 |
| **Attribute** | `activated` |
| **Type** | `boolean` |
| **Default** | `false` |



### closeIcon

| | |
| --- | --- |
| **Description** | クローズアイコンに使用するアイコン名です。ファブボタンが押されたときに表示されます。ファブリストを含むファブ内のメインボタンである場合のみ適用されます。 |
| **Attribute** | `close-icon` |
| **Type** | `string` |
| **Default** | `close` |



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
| **Description** | `true`の場合、ユーザーはファブボタンを操作することができません。 |
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



### show

| | |
| --- | --- |
| **Description** | `true`の場合、fabボタンがfab-listにあるときに表示されます。 |
| **Attribute** | `show` |
| **Type** | `boolean` |
| **Default** | `false` |



### size

| | |
| --- | --- |
| **Description** | ボタンの大きさを指定します。ミニファブボタンを作るには、`small`に設定します。 |
| **Attribute** | `size` |
| **Type** | `"small" \| undefined` |
| **Default** | `undefined` |



### target

| | |
| --- | --- |
| **Description** | リンク先のURLを表示する場所を指定します。href`を指定した場合のみ適用される。特別なキーワードがあります。_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute** | `target` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### translucent

| | |
| --- | --- |
| **Description** | `true`の場合、ファブボタンが半透明になります。modeが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |



### type

| | |
| --- | --- |
| **Description** | ボタンの種類です。 |
| **Attribute** | `type` |
| **Type** | `"button" \| "reset" \| "submit"` |
| **Default** | `'button'` |



## Events

| Name | Description |
| --- | --- |
| `ionBlur` | ボタンのフォーカスが外れたときに発行されます。 |
| `ionFocus` | ボタンにフォーカスが当たっているときに発行されます。 |


## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `close-icon` | ファブリストを開いたときに表示されるクローズアイコン（ion-iconを使用します）。 |
| `native` | すべての子要素をラップするネイティブHTMLのボタンまたはアンカー要素です。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | ボタンの背景 |
| `--background` | ボタンの背景 |
| `--background-activated` | ボタンが押されたときの背景。注意：これを設定すると、Material Designの波紋に干渉します。 |
| `--background-activated` | ボタンが押されたときの背景。注意：これを設定すると、Material Designの波紋に干渉します。 |
| `--background-activated-opacity` | 押されたときのボタンの背景の不透明度 |
| `--background-activated-opacity` | 押されたときのボタンの背景の不透明度 |
| `--background-focused` | タブキーでフォーカスしたときのボタンの背景 |
| `--background-focused` | タブキーでフォーカスしたときのボタンの背景 |
| `--background-focused-opacity` | タブキーでフォーカスしたときのボタンの背景の不透明度 |
| `--background-focused-opacity` | タブキーでフォーカスしたときのボタンの背景の不透明度 |
| `--background-hover` | ホバー時のボタンの背景 |
| `--background-hover` | ホバー時のボタンの背景 |
| `--background-hover-opacity` | ホバー時のボタン背景の不透明度 |
| `--background-hover-opacity` | ホバー時のボタン背景の不透明度 |
| `--border-color` | ボタンのボーダーカラー |
| `--border-color` | ボタンのボーダーカラー |
| `--border-radius` | ボタンの境界半径 |
| `--border-radius` | ボタンの境界半径 |
| `--border-style` | ボタンのボーダースタイル |
| `--border-style` | ボタンのボーダースタイル |
| `--border-width` | ボタンのボーダー幅 |
| `--border-width` | ボタンのボーダー幅 |
| `--box-shadow` | ボタンのボックスシャドウ |
| `--box-shadow` | ボタンのボックスシャドウ |
| `--close-icon-font-size` | クローズアイコンのFont Size |
| `--close-icon-font-size` | クローズアイコンのFont Size |
| `--color` | ボタンの文字色 |
| `--color` | ボタンの文字色 |
| `--color-activated` | ボタンが押されたときの文字色 |
| `--color-activated` | ボタンが押されたときの文字色 |
| `--color-focused` | タブキーでフォーカスしたときのボタンの文字色 |
| `--color-focused` | タブキーでフォーカスしたときのボタンの文字色 |
| `--color-hover` | ホバー時のボタンの文字色 |
| `--color-hover` | ホバー時のボタンの文字色 |
| `--padding-bottom` | ボタンのBottom Padding |
| `--padding-bottom` | ボタンのBottom Padding |
| `--padding-end` | ボタンの向きが左から右の場合はRight Padding、右から左の場合はLeft Paddingとなります。 |
| `--padding-end` | ボタンの向きが左から右の場合はRight Padding、右から左の場合はLeft Paddingとなります。 |
| `--padding-start` | ボタンの向きが左から右の場合はLeft Padding、右から左の場合はRight Paddingとなります。 |
| `--padding-start` | ボタンの向きが左から右の場合はLeft Padding、右から左の場合はRight Paddingとなります。 |
| `--padding-top` | ボタンのTop Padding |
| `--padding-top` | ボタンのTop Padding |
| `--ripple-color` | ボタンリプルエフェクトの色 |
| `--ripple-color` | ボタンリプルエフェクトの色 |
| `--transition` | ボタンの遷移 |
| `--transition` | ボタンの遷移 |

