---
title: "ion-ripple-effect"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-ripple-effect | Ripple Effect Button Component for Ionic Apps</title>
  <meta name="description" content="The ripple effect button component adds the Material Design ink ripple interaction effect. It can only be used in an ion-app and can be added to any component." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### type

| | |
| --- | --- |
| **Description** | リップル効果の種類を設定します： - `bounded`：リップル効果はユーザーのクリック位置から拡大します - `unbounded`：リップル効果はボタンの中心から拡大し、コンテナを溢れさせます。  注：境界のある波紋のサーフェスは、overflowプロパティをhiddenに設定し、境界のない波紋のサーフェスは、visibleに設定する必要があります。 |
| **Attribute** | `type` |
| **Type** | `"bounded" \| "unbounded"` |
| **Default** | `'bounded'` |



## Methods


### addRipple

| | |
| --- | --- |
| **Description** | 親要素に波及効果を付加します。 |
| **Signature** | `addRipple(x: number, y: number) => Promise<() => void>` |


