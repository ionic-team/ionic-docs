---
title: "ion-tab"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-tab - Ionic Framework Application Component</title>
  <meta name="description" content="ion-tab is a child component of tabs. Each ion-tab can contain a top level navigation stack for an application or a single view. Read to learn more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### component

| | |
| --- | --- |
| **Description** | タブの内側に表示するコンポーネントです。 |
| **Attribute** | `component` |
| **Type** | `Function \| HTMLElement \| null \| string \| undefined` |
| **Default** | `undefined` |



### tab

| | |
| --- | --- |
| **Description** | 各 `ion-tab` にはタブ ID を指定する必要があります。これは、選択されたタブを参照したり、ルータがタブを切り替えたりするために内部的に使用される。 |
| **Attribute** | `tab` |
| **Type** | `string` |
| **Default** | `undefined` |



## Methods


### setActive

| | |
| --- | --- |
| **Description** | タブのアクティブコンポーネントを設定します。 |
| **Signature** | `setActive() => Promise<void>` |


