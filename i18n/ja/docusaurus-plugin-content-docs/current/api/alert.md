---
title: "ion-alert"
demoUrl: "/docs/demos/api/alert/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/alert/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-alert: Ionic API Alert Buttons with Custom Message Prompts</title>
  <meta name="description" content="ion-alert dialog presents or collects information using inputs. Custom alert button messages appear above the app's content and must be manually dismissed." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


  
## Properties


### animated

| | |
| --- | --- |
| **Description** | `true`の場合、アラートはアニメーションで表示されます。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropDismiss

| | |
| --- | --- |
| **Description** | `true`の場合、バックドロップがクリックされるとアラートが解除される。 |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### buttons

| | |
| --- | --- |
| **Description** | アラートに追加されるボタンの配列。 |
| **Attribute** | `buttons` |
| **Type** | `(string \| AlertButton)[]` |
| **Default** | `[]` |



### cssClass

| | |
| --- | --- |
| **Description** | カスタムCSSに適用する追加のクラス。複数のクラスを指定する場合は、スペースで区切る必要があります。 |
| **Attribute** | `css-class` |
| **Type** | `string \| string[] \| undefined` |
| **Default** | `undefined` |



### enterAnimation

| | |
| --- | --- |
| **Description** | アラート提示時に使用するアニメーションです。 |
| **Attribute** | `enter-animation` |
| **Type** | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default** | `undefined` |



### header

| | |
| --- | --- |
| **Description** | アラートの見出しにあるメインタイトルです。 |
| **Attribute** | `header` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### htmlAttributes

| | |
| --- | --- |
| **Description** | アラートに渡す追加属性。 |
| **Attribute** | `html-attributes` |
| **Type** | `undefined \| { [key: string]: any; }` |
| **Default** | `undefined` |



### inputs

| | |
| --- | --- |
| **Description** | アラートに表示するInputの配列。 |
| **Attribute** | `inputs` |
| **Type** | `AlertInput[]` |
| **Default** | `[]` |



### isOpen

| | |
| --- | --- |
| **Description** | `true`の場合、アラートは開く。もし `false` ならば、アラートは閉じます。alertControllerや`trigger`プロパティを使用してください。注意: アラートが終了しても `isOpen` は自動的に `false` に戻りません。あなたのコードでそれを行う必要があります。 |
| **Attribute** | `is-open` |
| **Type** | `boolean` |
| **Default** | `false` |



### keyboardClose

| | |
| --- | --- |
| **Description** | `true`の場合、オーバーレイが表示されたときにキーボードが自動的に解除されます。 |
| **Attribute** | `keyboard-close` |
| **Type** | `boolean` |
| **Default** | `true` |



### leaveAnimation

| | |
| --- | --- |
| **Description** | アラートが解除されたときに使用するアニメーション。 |
| **Attribute** | `leave-animation` |
| **Type** | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default** | `undefined` |



### message

| | |
| --- | --- |
| **Description** | アラートに表示されるメインメッセージ。`message`には、文字列としてプレーンテキストまたはHTMLのいずれかを指定することができます。通常HTML用に予約されている文字を表示するには、エスケープする必要があります。例えば、`<Ionic>`は `&lt;Ionic&gt;` になります：[セキュリティ・ドキュメント](https://ionicframework.com/docs/faq/security) このプロパティは、カスタムHTMLを文字列として受け付けます。デフォルトでは、コンテンツはプレーンテキストとしてパースされます。カスタムHTMLを使用するには、Ionicの設定で `innerHTMLTemplatesEnabled` を `true` に設定する必要があります。 |
| **Attribute** | `message` |
| **Type** | `IonicSafeString \| string \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### subHeader

| | |
| --- | --- |
| **Description** | アラートの見出しにあるサブタイトルです。タイトルの下に表示されます。 |
| **Attribute** | `sub-header` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### translucent

| | |
| --- | --- |
| **Description** | `true`の場合、アラートは半透明になります。modeが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |



### trigger

| | |
| --- | --- |
| **Description** | クリックされるとアラートが開くトリガー要素に対応するID。 |
| **Attribute** | `trigger` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `didDismiss` | アラートが解除された後に発行されます。ionAlertDidDismissの略記。 |
| `didPresent` | アラートが提示された後に発行されます。ionAlertWillDismissの略記。 |
| `ionAlertDidDismiss` | アラートが解除された後に発行されます。 |
| `ionAlertDidPresent` | アラートが提示された後に発行されます。 |
| `ionAlertWillDismiss` | アラートが解除される前に発行されます。 |
| `ionAlertWillPresent` | アラートが提示される前に発行されます。 |
| `willDismiss` | アラートが解除される前に発行されます。ionAlertWillDismissの略記。 |
| `willPresent` | アラートが提示される前に発行されます。ionAlertWillPresentの略記。 |


## Methods


### dismiss

| | |
| --- | --- |
| **Description** | アラートオーバーレイが表示された後、解除します。 |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | アラートが解除されたことを解決するPromiseを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | アラートが解除されるタイミングを解決するPromiseを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | アラートオーバーレイを作成した後に提示します。 |
| **Signature** | `present() => Promise<void>` |



## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--backdrop-opacity` | 背景の不透明度 |
| `--backdrop-opacity` | 背景の不透明度 |
| `--background` | 注意喚起の背景 |
| `--background` | 注意喚起の背景 |
| `--height` | アラートの高さ |
| `--height` | アラートの高さ |
| `--max-height` | アラートの最大の高さ |
| `--max-height` | アラートの最大の高さ |
| `--max-width` | アラートの最大幅 |
| `--max-width` | アラートの最大幅 |
| `--min-height` | アラートの最小の高さ |
| `--min-height` | アラートの最小の高さ |
| `--min-width` | アラートの最小幅 |
| `--min-width` | アラートの最小幅 |
| `--width` | アラートの幅 |
| `--width` | アラートの幅 |

