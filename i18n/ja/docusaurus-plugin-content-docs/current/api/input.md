---
title: "ion-input"
demoUrl: "/docs/demos/api/input/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/input/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-input: Custom Input Value Type Styling and CSS Properties</title>
  <meta name="description" content="ion-input is a wrapper to the HTML input element, with custom value type styling and functionality. It integrates with the keyboard on mobile devices." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


  
## Properties


### autocapitalize

| | |
| --- | --- |
| **Description** | テキスト値がユーザーによって入力／編集される際に、自動的に大文字にするかどうか、またどのようにするかについて示します。利用可能なオプションoff"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute** | `autocapitalize` |
| **Type** | `string` |
| **Default** | `'off'` |



### autocomplete

| | |
| --- | --- |
| **Description** | コントロールの値が、ブラウザによって自動的に補完されるかどうかを示します。 |
| **Attribute** | `autocomplete` |
| **Type** | `"name" \| "email" \| "tel" \| "url" \| "on" \| "off" \| "honorific-prefix" \| "given-name" \| "additional-name" \| "family-name" \| "honorific-suffix" \| "nickname" \| "username" \| "new-password" \| "current-password" \| "one-time-code" \| "organization-title" \| "organization" \| "street-address" \| "address-line1" \| "address-line2" \| "address-line3" \| "address-level4" \| "address-level3" \| "address-level2" \| "address-level1" \| "country" \| "country-name" \| "postal-code" \| "cc-name" \| "cc-given-name" \| "cc-additional-name" \| "cc-family-name" \| "cc-number" \| "cc-exp" \| "cc-exp-month" \| "cc-exp-year" \| "cc-csc" \| "cc-type" \| "transaction-currency" \| "transaction-amount" \| "language" \| "bday" \| "bday-day" \| "bday-month" \| "bday-year" \| "sex" \| "tel-country-code" \| "tel-national" \| "tel-area-code" \| "tel-local" \| "tel-extension" \| "impp" \| "photo"` |
| **Default** | `'off'` |



### autocorrect

| | |
| --- | --- |
| **Description** | ユーザーがテキスト値を入力/編集する際に、自動補正を有効にするかどうか。 |
| **Attribute** | `autocorrect` |
| **Type** | `"off" \| "on"` |
| **Default** | `'off'` |



### autofocus

| | |
| --- | --- |
| **Description** | ネイティブの入力要素に [`autofocus` 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) を設定します。  ページロード時に要素がフォーカスされるには、これだけでは不十分かもしれません。詳しくは[managing focus](/docs/developing/managing-focus)を参照してください。 |
| **Attribute** | `autofocus` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearInput

| | |
| --- | --- |
| **Description** | `true`の場合、値があるときにInputにクリアアイコンが表示されます。これをクリックすると、入力がクリアされます。 |
| **Attribute** | `clear-input` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearInputIcon

| | |
| --- | --- |
| **Description** | クリアボタンに使用するアイコン。clearInput` が `true` に設定されている場合にのみ適用される。 |
| **Attribute** | `clear-input-icon` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### clearOnEdit

| | |
| --- | --- |
| **Description** | `true`の場合、編集時にフォーカスされた後、値がクリアされる。デフォルトは `type` が `"password"` のとき `true` で、それ以外のときは `false` です。 |
| **Attribute** | `clear-on-edit` |
| **Type** | `boolean \| undefined` |
| **Default** | `undefined` |



### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### counter

| | |
| --- | --- |
| **Description** | `true`の場合、文字カウンタが使用された文字の比率と総文字数制限を表示します。カウンターを正しく計算するために、開発者は `maxlength` プロパティも設定する必要があります。 |
| **Attribute** | `counter` |
| **Type** | `boolean` |
| **Default** | `false` |



### counterFormatter

| | |
| --- | --- |
| **Description** | カウンターのテキストをフォーマットするためのコールバック。デフォルトでは、カウンタのテキストは "itemLength / maxLength" に設定される。  コールバック内から `this` にアクセスする必要がある場合は https://ionicframework.com/docs/troubleshooting/runtime#accessing-this を参照。 |
| **Attribute** | `counter-formatter` |
| **Type** | `((inputLength: number, maxLength: number) => string) \| undefined` |
| **Default** | `undefined` |



### debounce

| | |
| --- | --- |
| **Description** | キーを押すたびに `ionInput` イベントが発生するまでの待ち時間をミリ秒単位で設定します。 |
| **Attribute** | `debounce` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### disabled

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザはInputと対話することができません。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### enterkeyhint

| | |
| --- | --- |
| **Description** | どのエンターキーを表示するかのブラウザへのヒント。指定可能な値。enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`. |
| **Attribute** | `enterkeyhint` |
| **Type** | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send" \| undefined` |
| **Default** | `undefined` |



### errorText

| | |
| --- | --- |
| **Description** | Inputの下に配置され、エラーが検出されたときに表示されるテキストです。 |
| **Attribute** | `error-text` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### fill

| | |
| --- | --- |
| **Description** | アイテムの塗りつぶし。もし `"solid"` ならば、アイテムは背景を持つようになります。もし `"outline"` ならば、アイテムはボーダー付きの透明なものになります。md`モードでのみ使用可能です。 |
| **Attribute** | `fill` |
| **Type** | `"outline" \| "solid" \| undefined` |
| **Default** | `undefined` |



### helperText

| | |
| --- | --- |
| **Description** | Inputの下に配置され、エラーが検出されなかった場合に表示されるテキストです。 |
| **Attribute** | `helper-text` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### inputmode

| | |
| --- | --- |
| **Description** | どのキーボードを表示するかのブラウザへのヒント。指定可能な値。none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`. |
| **Attribute** | `inputmode` |
| **Type** | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url" \| undefined` |
| **Default** | `undefined` |



### label

| | |
| --- | --- |
| **Description** | 入力に関連付けられた可視ラベル。  プレーンテキストのラベルをレンダリングする必要がある場合に使用する。  両方が使用されている場合、`label` プロパティが `label` スロットよりも優先される。 |
| **Attribute** | `label` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### labelPlacement

| | |
| --- | --- |
| **Description** | 入力に対してラベルを配置する位置。`"start"`：ラベルはLTRでは入力の左側に、RTLでは右側に表示されます。`"end"`：ラベルはLTRでは入力の右側、RTLでは左側に表示されます。"floating"`：`"floating"`：ラベルは、入力にフォーカスが当たっているときや、入力に値があるときは小さく表示され、入力の上に表示されます。それ以外の場合は、入力の上に表示されます。`"スタック(stacked)"`：入力がぼやけた状態や値がない場合でも、ラベルは小さく表示され、入力の上に表示されます。`"fixed"`：ラベルの幅が固定される以外は、`"start"`と同じ動作になります。長いテキストは省略記号（"..."）で切り捨てられます。 |
| **Attribute** | `label-placement` |
| **Type** | `"end" \| "fixed" \| "floating" \| "stacked" \| "start"` |
| **Default** | `'start'` |



### max

| | |
| --- | --- |
| **Description** | 最大値で、その最小値（min属性）より小さくてはなりません。 |
| **Attribute** | `max` |
| **Type** | `number \| string \| undefined` |
| **Default** | `undefined` |



### maxlength

| | |
| --- | --- |
| **Description** | type属性の値が `text`, `email`, `search`, `password`, `tel`, または `url` の場合、この属性はユーザーが入力できる最大文字数を指定します。 |
| **Attribute** | `maxlength` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### min

| | |
| --- | --- |
| **Description** | 最小値で、その最大値（max属性）より大きくてはなりません。 |
| **Attribute** | `min` |
| **Type** | `number \| string \| undefined` |
| **Default** | `undefined` |



### minlength

| | |
| --- | --- |
| **Description** | type属性の値が `text`, `email`, `search`, `password`, `tel`, または `url` の場合、この属性はユーザーが入力できる最小文字数を指定します。 |
| **Attribute** | `minlength` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### multiple

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザは複数の値を入力することができる。この属性は、type属性が `"email"` に設定されている場合に適用され、それ以外の場合は無視される。 |
| **Attribute** | `multiple` |
| **Type** | `boolean \| undefined` |
| **Default** | `undefined` |



### name

| | |
| --- | --- |
| **Description** | フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### pattern

| | |
| --- | --- |
| **Description** | 値をチェックするための正規表現。パターンは、部分的なものだけでなく、値全体にマッチする必要があります。title 属性を使って、ユーザーを助けるためにパターンを説明します。この属性は、type属性の値が `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, または `"password"` であるときに適用され、それ以外のときは無視されます。type 属性が `"date"` の場合、`pattern` は `"date"` Inputタイプをネイティブにサポートしないブラウザでのみ使用されます。詳しくは https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date を参照してください。 |
| **Attribute** | `pattern` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### placeholder

| | |
| --- | --- |
| **Description** | Inputが値を持つ前に表示される指示テキスト。このプロパティは、`type`プロパティが `"email"`, `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, または `"url"` に設定されている場合にのみ適用され、それ以外は無視されます。 |
| **Attribute** | `placeholder` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### readonly

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザーは値を変更することができません。 |
| **Attribute** | `readonly` |
| **Type** | `boolean` |
| **Default** | `false` |



### required

| | |
| --- | --- |
| **Description** | `true`の場合、ユーザーはフォームを送信する前に値を入力する必要があります。 |
| **Attribute** | `required` |
| **Type** | `boolean` |
| **Default** | `false` |



### shape

| | |
| --- | --- |
| **Description** | 入力の形状を指定します。"round"の場合、境界線の半径が大きくなります。 |
| **Attribute** | `shape` |
| **Type** | `"round" \| undefined` |
| **Default** | `undefined` |



### spellcheck

| | |
| --- | --- |
| **Description** | `true`の場合、その要素のスペルチェックと文法チェックが行われる。 |
| **Attribute** | `spellcheck` |
| **Type** | `boolean` |
| **Default** | `false` |



### step

| | |
| --- | --- |
| **Description** | min属性、max属性と連携して、値を設定する際の増分を制限することができます。設定可能な値は以下の通りです。any"`または正の浮動小数点数。 |
| **Attribute** | `step` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### type

| | |
| --- | --- |
| **Description** | 表示するコントロールの種類を指定します。デフォルトのタイプはテキストです。 |
| **Attribute** | `type` |
| **Type** | `"date" \| "datetime-local" \| "email" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url" \| "week"` |
| **Default** | `'text'` |



### value

| | |
| --- | --- |
| **Description** | 入力された値です。 |
| **Attribute** | `value` |
| **Type** | `null \| number \| string \| undefined` |
| **Default** | `''` |



## Events

| Name | Description |
| --- | --- |
| `ionBlur` | Inputのフォーカスが外れたときに発行されます。 |
| `ionChange` | ionChange` イベントは、ユーザが入力値を変更したときに発生する。ionInput` イベントとは異なり、`ionChange` イベントは変更がコミットされたときにのみ発生する。  ユーザが明示的に変更をコミットしたとき (例えば、`<ion-input type="date">` の日付ピッカーから日付を選択したり、"Enter" キーを押したりしたときなど)。- 値が変更された後、要素がフォーカスを失ったとき。  このイベントは、プログラムで `value` プロパティを設定する場合には発生しません。 |
| `ionFocus` | Inputにフォーカスが当たったときに発行されます。 |
| `ionInput` | ionInput` イベントは、ユーザが入力値を変更するたびに発生する。ionChange` イベントとは異なり、 `ionInput` イベントは入力値が変更されるたびに発生する。これは通常、ユーザが入力を行うたびに発生します。  テキスト入力を受け付ける要素(`type=text`, `type=tel`など)の場合、インターフェイスは[`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent)となります。その他の要素の場合、インターフェイスは[`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)となります。編集時に入力がクリアされる場合、型は `null` となる。 |


## Methods


### getInputElement

| | |
| --- | --- |
| **Description** | 要素の内部で使用されているネイティブの `<input>` 要素を返します。 |
| **Signature** | `getInputElement() => Promise<HTMLInputElement>` |


### setFocus

| | |
| --- | --- |
| **Description** | ion-input` のネイティブ `input` にフォーカスを設定する。グローバルな `input.focus()` の代わりにこのメソッドを使用する。  ページ入力時に入力にフォーカスを当てたい場合は、 `ionViewDidEnter()` ライフサイクルメソッド内で `setFocus()` を呼び出す必要がある。  オーバーレイが表示されたときに入力にフォーカスを当てたい開発者は、 `didPresent` が解決した後に `setFocus` を呼び出してください。  詳細については、[managing focus](/docs/developing/managing-focus)を参照してください。 |
| **Signature** | `setFocus() => Promise<void>` |



## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | Inputの背景 |
| `--background` | Inputの背景 |
| `--border-color` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合のInput下のボーダーの色 |
| `--border-color` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合のInput下のボーダーの色 |
| `--border-radius` | 入力の半径。fill="outline "を使う場合、半径が大きいと表示が不 均一になることがある。 |
| `--border-radius` | 入力の半径。fill="outline "を使う場合、半径が大きいと表示が不 均一になることがある。 |
| `--border-style` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合の入力下のボーダーのスタイル |
| `--border-style` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合の入力下のボーダーのスタイル |
| `--border-width` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合の入力下のボーダーの幅 |
| `--border-width` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合の入力下のボーダーの幅 |
| `--color` | Inputのテキストの色 |
| `--color` | Inputのテキストの色 |
| `--highlight-color-focused` | フォーカスされたときの入力のハイライトの色 |
| `--highlight-color-focused` | フォーカスされたときの入力のハイライトの色 |
| `--highlight-color-invalid` | 入力が無効な場合のハイライトの色 |
| `--highlight-color-invalid` | 入力が無効な場合のハイライトの色 |
| `--highlight-color-valid` | 有効時の入力のハイライトの色 |
| `--highlight-color-valid` | 有効時の入力のハイライトの色 |
| `--highlight-height` | 入力のハイライトの高さ。mdモードにのみ適用される。 |
| `--highlight-height` | 入力のハイライトの高さ。mdモードにのみ適用される。 |
| `--padding-bottom` | InputのBottom Padding |
| `--padding-bottom` | InputのBottom Padding |
| `--padding-end` | 入力の方向が左から右の場合はRight Padding、右から左の場合はLeft Paddingとなります。 |
| `--padding-end` | 入力の方向が左から右の場合はRight Padding、右から左の場合はLeft Paddingとなります。 |
| `--padding-start` | 入力の方向が左から右の場合はLeft Padding、右から左の場合はRight Paddingとなります。 |
| `--padding-start` | 入力の方向が左から右の場合はLeft Padding、右から左の場合はRight Paddingとなります。 |
| `--padding-top` | InputのTop Padding |
| `--padding-top` | InputのTop Padding |
| `--placeholder-color` | InputのPlaceholderテキストの色 |
| `--placeholder-color` | InputのPlaceholderテキストの色 |
| `--placeholder-font-style` | InputのPlaceholderテキストのFont Style |
| `--placeholder-font-style` | InputのPlaceholderテキストのFont Style |
| `--placeholder-font-weight` | InputのPlaceholderテキストのFont Weight |
| `--placeholder-font-weight` | InputのPlaceholderテキストのFont Weight |
| `--placeholder-opacity` | InputのPlaceholderテキストの不透明度 |
| `--placeholder-opacity` | InputのPlaceholderテキストの不透明度 |


## Slots

| Name | Description |
| --- | --- |
| `end` | 入力の後端に表示する内容。(実験的) |
| `label` | 入力に関連付けるラベルテキスト。labelPlacement`プロパティを使用すると、入力に対してラベルを配置する位置を制御することができる。ラベルをカスタム HTML でレンダリングする必要がある場合に使用します。(EXPERIMENTAL) |
| `start` | 入力の最先端に表示するコンテンツ。(実験的) |

