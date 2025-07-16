---
title: "ion-infinite-scroll-content"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### loadingSpinner

| | |
| --- | --- |
| **Description** | ロード中に表示されるアニメーションSVGスピナーです。 |
| **Attribute** | `loading-spinner` |
| **Type** | `"bubbles" \| "circles" \| "circular" \| "crescent" \| "dots" \| "lines" \| "lines-sharp" \| "lines-sharp-small" \| "lines-small" \| null \| undefined` |
| **Default** | `undefined` |



### loadingText

| | |
| --- | --- |
| **Description** | ロード中に表示するオプションのテキスト。`loadingText`には、文字列としてプレーンテキストまたはHTMLのいずれかを指定することができます。通常HTML用に予約されている文字を表示するには、エスケープする必要があります。例えば、`<Ionic>`は `&lt;Ionic&gt;` になります。詳しくはこちら：[セキュリティ・ドキュメント](https://ionicframework.com/docs/faq/security) このプロパティは、カスタムHTMLを文字列として受け付けます。デフォルトでは、コンテンツはプレーンテキストとしてパースされます。カスタムHTMLを使用するには、Ionicの設定で `innerHTMLTemplatesEnabled` を `true` に設定する必要があります。 |
| **Attribute** | `loading-text` |
| **Type** | `IonicSafeString \| string \| undefined` |
| **Default** | `undefined` |


