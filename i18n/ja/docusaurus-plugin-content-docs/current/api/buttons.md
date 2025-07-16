---
title: "ion-buttons"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-buttons: Toolbar Element with Named Slots for Buttons</title>
  <meta name="description" content="The Buttons component is a container element. Buttons placed in a toolbar should be inside the ion-buttons element and can be positioned using named slots." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


  
## Properties


### collapse

| | |
| --- | --- |
| **Description** | trueを指定すると、ツールバーが最初のツールバーでない場合、親ツールバーが完全に折り畳まれたときにボタンが消えます。ツールバーが最初のツールバーである場合、ボタンは隠され、すべてのツールバーが完全に折りたたまれたときにのみ表示されます。  ion-header`で `collapse` を `true` に設定した `ios` modeにのみ適用されます。  通常、[Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)に使用されます。 |
| **Attribute** | `collapse` |
| **Type** | `boolean` |
| **Default** | `false` |


