---
title: "ion-button"
demoUrl: "/docs/demos/api/button/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/button/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-button: Design and Style Buttons with Custom CSS Properties</title>
  <meta name="description" content="ion-button provides a clickable element for use anywhere needing standard button functionality. Design and style button elements with custom CSS properties." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### buttonType

| | |
| --- | --- |
| **Description** | ボタンの種類です。 |
| **Attribute** | `button-type` |
| **Type** | `string` |
| **Default** | `'button'` |



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
| **Description** | `true`の場合、ユーザはボタンと対話することができません。 |
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



### expand

| | |
| --- | --- |
| **Description** | 全角のボタンなら`"block"`、角が四角く左右のボーダーがない全角のボタンなら`"full"`に設定します。 |
| **Attribute** | `expand` |
| **Type** | `"block" \| "full" \| undefined` |
| **Default** | `undefined` |



### fill

| | |
| --- | --- |
| **Description** | フラットなボタンに似た透明なボタンには `"clear"` を、ボーダーのある透明なボタンには `"outline"` を、背景を塗りつぶしたボタンには `"solid"` を設定します。デフォルトの塗りつぶしは `"solid"` です。ただし、ツールバーの内側では `"clear"` となります。 |
| **Attribute** | `fill` |
| **Type** | `"clear" \| "default" \| "outline" \| "solid" \| undefined` |
| **Default** | `undefined` |



### form

| | |
| --- | --- |
| **Description** | HTML のフォーム要素またはフォーム要素 ID。ボタンがフォームの子でない場合に、フォームを送信するために使用します。 |
| **Attribute** | `form` |
| **Type** | `HTMLFormElement \| string \| undefined` |
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



### shape

| | |
| --- | --- |
| **Description** | round"` に設定すると、より角が丸いボタンになります。 |
| **Attribute** | `shape` |
| **Type** | `"round" \| undefined` |
| **Default** | `undefined` |



### size

| | |
| --- | --- |
| **Description** | ボタンの高さとPaddingが少ない場合は `"small"` に、ボタンの高さとPaddingがデフォルトの場合は `"default"` に、ボタンの高さとPaddingが多い場合は `"large"` に設定します。ただし、ボタンがアイテムの中にある場合は、デフォルトでサイズが `"small"` になっています。アイテムの内部でサイズを `"default"` に設定すると、標準サイズのボタンになります。 |
| **Attribute** | `size` |
| **Type** | `"default" \| "large" \| "small" \| undefined` |
| **Default** | `undefined` |



### strong

| | |
| --- | --- |
| **Description** | `true`の場合、より重いFont Weightを持つボタンをアクティブにします。 |
| **Attribute** | `strong` |
| **Type** | `boolean` |
| **Default** | `false` |



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
| `native` | すべての子要素をラップするネイティブHTMLのボタンまたはアンカー要素です。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | ボタンの背景 |
| `--background` | ボタンの背景 |
| `--background-activated` | ボタンが押されたときの背景。注意：これを設定すると、Material Designの波紋に干渉します。 |
| `--background-activated` | ボタンが押されたときの背景。注意：これを設定すると、Material Designの波紋に干渉します。 |
| `--background-activated-opacity` | ボタンが押されたときの不透明度 |
| `--background-activated-opacity` | ボタンが押されたときの不透明度 |
| `--background-focused` | タブキーでフォーカスしたときのボタンの背景 |
| `--background-focused` | タブキーでフォーカスしたときのボタンの背景 |
| `--background-focused-opacity` | タブキーでフォーカスしたときのボタンの不透明度 |
| `--background-focused-opacity` | タブキーでフォーカスしたときのボタンの不透明度 |
| `--background-hover` | ホバー時のボタンの背景 |
| `--background-hover` | ホバー時のボタンの背景 |
| `--background-hover-opacity` | ホバー時の背景の不透明度 |
| `--background-hover-opacity` | ホバー時の背景の不透明度 |
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
| `--color` | ボタンの文字色 |
| `--color` | ボタンの文字色 |
| `--color-activated` | ボタンが押されたときの文字色 |
| `--color-activated` | ボタンが押されたときの文字色 |
| `--color-focused` | タブキーでフォーカスしたときのボタンの文字色 |
| `--color-focused` | タブキーでフォーカスしたときのボタンの文字色 |
| `--color-hover` | ホバー時のボタンの文字色 |
| `--color-hover` | ホバー時のボタンの文字色 |
| `--opacity` | ボタンの不透明度 |
| `--opacity` | ボタンの不透明度 |
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


## Slots

| Name | Description |
| --- | --- |
| `` | slotがない状態で提供される場合、コンテンツは名前付きslotの間に配置されます。 |
| `end` | コンテンツは、LTRの場合はボタンテキストの右側に、RTLの場合は左側に配置されます。 |
| `icon-only` | テキストを持たないボタン内のアイコンに対して使用されるべきです。 |
| `start` | コンテンツは、LTRではボタンテキストの左側に、RTLでは右側に配置されます。 |

