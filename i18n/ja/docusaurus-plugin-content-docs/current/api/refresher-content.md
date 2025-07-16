---
title: "ion-refresher-content"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### pullingIcon

| | |
| --- | --- |
| **Description** | プルダウン開始時に表示する静的なアイコンまたはスピナーです。スピナー名を指定することで、iOSデバイスでプルダウン時に徐々にティックマークが表示されるようにすることができます。 |
| **Attribute** | `pulling-icon` |
| **Type** | `null \| string \| undefined` |
| **Default** | `undefined` |



### pullingText

| | |
| --- | --- |
| **Description** | プルダウン開始時に表示したいテキストです。 `pullingText` は、文字列としてプレーンテキストまたはHTMLのいずれかを受け取ることができます。通常HTML用に予約されている文字を表示するには、エスケープする必要があります。例えば、`<Ionic>`は `&lt;Ionic&gt;` になります：[セキュリティ・ドキュメント](https://ionicframework.com/docs/faq/security) デフォルトでは、コンテンツはプレーンテキストとして解析されます。カスタムHTMLを使用するには、Ionicの設定で `innerHTMLTemplatesEnabled` を `true` に設定する必要があります。 |
| **Attribute** | `pulling-text` |
| **Type** | `IonicSafeString \| string \| undefined` |
| **Default** | `undefined` |



### refreshingSpinner

| | |
| --- | --- |
| **Description** | リフレッシュ開始を示すアニメーションSVGスピナー |
| **Attribute** | `refreshing-spinner` |
| **Type** | `"bubbles" \| "circles" \| "circular" \| "crescent" \| "dots" \| "lines" \| "lines-sharp" \| "lines-sharp-small" \| "lines-small" \| null \| undefined` |
| **Default** | `undefined` |



### refreshingText

| | |
| --- | --- |
| **Description** | リフレッシュを行う際に表示したいテキストです。 `refreshingText` には、文字列としてプレーンテキストまたはHTMLのいずれかを指定することができます。通常HTML用に予約されている文字を表示するには、エスケープする必要があります。例えば、`<Ionic>`は `&lt;Ionic&gt;` となります：[セキュリティ・ドキュメント](https://ionicframework.com/docs/faq/security) デフォルトでは、コンテンツはプレーンテキストとして解析されます。カスタムHTMLを使用するには、Ionicの設定で `innerHTMLTemplatesEnabled` を `true` に設定する必要があります。 |
| **Attribute** | `refreshing-text` |
| **Type** | `IonicSafeString \| string \| undefined` |
| **Default** | `undefined` |


