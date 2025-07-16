---
title: "ion-router-outlet"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Ion-Router-Outlet for Animation & Stacked Navigation | Ionic</title>
  <meta name="description" content="Ion-router-outlet contains the logic for providing stacked navigation and animating views in and out. Learn about the life cycle hooks and properties here." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### animated

| | |
| --- | --- |
| **Description** | `true`の場合、ルータ・アウトレットはコンポーネントの遷移をアニメーションで表現する必要があります。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### animation

| | |
| --- | --- |
| **Description** | このプロパティは、AnimationBuilder の機能を使用して、カスタムトランジションを作成することができます。 |
| **Attribute** | `animation` |
| **Type** | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `getIonMode(this)` |


