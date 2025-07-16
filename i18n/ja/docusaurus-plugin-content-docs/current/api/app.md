---
title: "ion-app"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-app: Container Element for an Ionic Application</title>
  <meta name="description" content="ion-app is a container element for an Ionic application. Apps can have many Ionic components including menus, headers, content, and footers. Read to learn more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Methods


### setFocus

| | |
| --- | --- |
| **Description** | ion-focusable`を使用している要素にフォーカスを設定するために使用する。キーボードイベントの結果として要素にフォーカスを当てる場合は、このメソッドを使用しないでください。このメソッドは、他のユーザアクションの結果としてプログラム的に要素にフォーカスを当てたい場合に使用します。(例: ユーザーがポップオーバーを提示したときに、ポップオーバー内の最初の要素にフォーカスを当てますが、ポップオーバーは常にキーボード操作の結果として提示されるわけではありません)。 |
| **Signature** | `setFocus(elements: HTMLElement[]) => Promise<void>` |


