---
title: "ion-menu-button"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Menu Button | ion-menu-button to Open an App Menu on A Page</title>
  <meta name="description" content="Menu Button is component that automatically creates the icon and functionality to open a menu on an app page. Read to learn more about ion-menu-button." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### autoHide

| | |
| --- | --- |
| **Description** | 対応するメニューがアクティブでない場合、メニューボタンを自動的に非表示にします。 |
| **Attribute** | `auto-hide` |
| **Type** | `boolean` |
| **Default** | `true` |



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
| **Description** | `true`の場合、ユーザはメニューボタンを操作することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### menu

| | |
| --- | --- |
| **Description** | メニューの `menuId` プロパティに対応するオプションのプロパティです。メニュー側には `start` または `end` を指定することもできます。これは、トグルするための正しいメニューを見つけるために使用されます。 |
| **Attribute** | `menu` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### type

| | |
| --- | --- |
| **Description** | ボタンの種類です。 |
| **Attribute** | `type` |
| **Type** | `"button" \| "reset" \| "submit"` |
| **Default** | `'button'` |



## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `icon` | メニューボタンのアイコン（ion-iconを使用）です。 |
| `native` | すべての子要素を包むネイティブ HTML ボタン要素。 |


## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | メニューボタンの背景 |
| `--background` | メニューボタンの背景 |
| `--background-focused` | タブキーでフォーカスしたときのメニューボタンの背景色 |
| `--background-focused` | タブキーでフォーカスしたときのメニューボタンの背景色 |
| `--background-focused-opacity` | タブキーでフォーカスしたときのメニューボタンの背景の不透明度 |
| `--background-focused-opacity` | タブキーでフォーカスしたときのメニューボタンの背景の不透明度 |
| `--background-hover` | ホバー時のメニューボタンの背景 |
| `--background-hover` | ホバー時のメニューボタンの背景 |
| `--background-hover-opacity` | ホバー時の背景の不透明度 |
| `--background-hover-opacity` | ホバー時の背景の不透明度 |
| `--border-radius` | メニューボタンのボーダー半径 |
| `--border-radius` | メニューボタンのボーダー半径 |
| `--color` | メニューボタンの色 |
| `--color` | メニューボタンの色 |
| `--color-focused` | タブキーでフォーカスしたときのメニューボタンの色 |
| `--color-focused` | タブキーでフォーカスしたときのメニューボタンの色 |
| `--color-hover` | ホバー時のメニューボタンの色 |
| `--color-hover` | ホバー時のメニューボタンの色 |
| `--padding-bottom` | ボタンのBottom Padding |
| `--padding-bottom` | ボタンのBottom Padding |
| `--padding-end` | ボタンの向きが左から右の場合はRight Padding、右から左の場合はLeft Paddingとなります。 |
| `--padding-end` | ボタンの向きが左から右の場合はRight Padding、右から左の場合はLeft Paddingとなります。 |
| `--padding-start` | ボタンの向きが左から右の場合はLeft Padding、右から左の場合はRight Paddingとなります。 |
| `--padding-start` | ボタンの向きが左から右の場合はLeft Padding、右から左の場合はRight Paddingとなります。 |
| `--padding-top` | ボタンのTop Padding |
| `--padding-top` | ボタンのTop Padding |

