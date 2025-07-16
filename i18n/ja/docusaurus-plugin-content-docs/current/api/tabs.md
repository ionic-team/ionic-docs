---
title: "ion-tabs"
demoUrl: "/docs/demos/api/tabs/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/tabs/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Ion-Tabs: Tab-Based Component for App Top-Level Navigation</title>
  <meta name="description" content="Tabs are top-level components to implement tab-based navigation. Ion-tabs have no styling & work as router outlets for navigation that behaves like native apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Events

| Name | Description |
| --- | --- |
| `ionTabsDidChange` | ナビゲーションが新しいコンポーネントに遷移し終わったときに発行されます。 |
| `ionTabsWillChange` | ナビゲーションが新しいコンポーネントに移行しようとするときに発行されます。 |


## Methods


### getSelected

| | |
| --- | --- |
| **Description** | 現在選択されているタブを取得します。このメソッドは、バニラJavaScriptプロジェクトでのみ使用できます。Angular、React、Vueのタブの実装は、各フレームワークのルーターと結合しています。 |
| **Signature** | `getSelected() => Promise<string \| undefined>` |


### getTab

| | |
| --- | --- |
| **Description** | 特定のタブを `tab` プロパティの値または要素参照で取得する。このメソッドは vanilla JavaScript プロジェクトでのみ利用可能です。Angular、React、Vue のタブの実装は、それぞれのフレームワークのルータと結合しています。 |
| **Signature** | `getTab(tab: string \| HTMLIonTabElement) => Promise<HTMLIonTabElement \| undefined>` |


### select

| | |
| --- | --- |
| **Description** | タブを `tab` プロパティの値または要素参照で選択する。このメソッドはバニラJavaScriptプロジェクトでのみ利用可能です。Angular、React、Vue のタブの実装は、それぞれのフレームワークのルータと結合しています。 |
| **Signature** | `select(tab: string \| HTMLIonTabElement) => Promise<boolean>` |



## Slots

| Name | Description |
| --- | --- |
| `` | slotがない状態で提供される場合、コンテンツは名前付きslotの間に配置されます。 |
| `bottom` | コンテンツは画面下部に配置されます。 |
| `top` | コンテンツは画面上部に配置されます。 |

