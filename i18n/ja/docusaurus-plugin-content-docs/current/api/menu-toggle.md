---
title: "ion-menu-toggle"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-menu-toggle | MenuToggle Component to Open/Close Active Menus</title>
  <meta name="description" content="The MenuToggle component can be used to toggle a menu open or closed—by default, it's only visible when the selected menu is active. Read more about usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### autoHide

| | |
| --- | --- |
| **Description** | 対応するメニューがアクティブでない場合に、自動的にコンテンツを非表示にします。  デフォルトでは `true` になっています。メニューの状態に関係なく `ion-menu-toggle` を常に表示しておきたい場合は、`false` に変更します。 |
| **Attribute** | `auto-hide` |
| **Type** | `boolean` |
| **Default** | `true` |



### menu

| | |
| --- | --- |
| **Description** | メニューの `menuId` プロパティに対応するオプションのプロパティです。メニュー側には `start` または `end` を指定することもできます。これは、トグルするための正しいメニューを見つけるために使用される。  このプロパティを使用しない場合、`ion-menu-toggle`は、最初にアクティブになったメニューをトグルします。 |
| **Attribute** | `menu` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



## Slots

| Name | Description |
| --- | --- |
| `` | トグルの内側にコンテンツを配置し、クリックターゲットとして機能させます。 |

