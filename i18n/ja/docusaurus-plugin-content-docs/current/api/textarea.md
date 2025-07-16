---
title: "ion-textarea"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Ionic Textarea Component and CSS Properties for Multi-Line Input</title>
  <meta name="description" content="Textarea is for multi-line input. The component accepts native textarea attributes in addition to Ionic properties. Read to learn about use and CSS elements." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


  
## Properties


### autoGrow

| | |
| --- | --- |
| **Description** | `true`の場合、textareaコンテナはtextareaの内容に応じて拡大・縮小します。 |
| **Attribute** | `auto-grow` |
| **Type** | `boolean` |
| **Default** | `false` |



### autocapitalize

| | |
| --- | --- |
| **Description** | テキスト値がユーザーによって入力／編集される際に、自動的に大文字にするかどうか、またどのようにするかについて示します。利用可能なオプションoff"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute** | `autocapitalize` |
| **Type** | `string` |
| **Default** | `'none'` |



### autofocus

| | |
| --- | --- |
| **Description** | ネイティブの入力要素に [`autofocus` 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) を設定します。  ページロード時に要素がフォーカスされるには、これだけでは不十分かもしれません。詳しくは[managing focus](/docs/developing/managing-focus)を参照してください。 |
| **Attribute** | `autofocus` |
| **Type** | `boolean` |
| **Default** | `false` |



### clearOnEdit

| | |
| --- | --- |
| **Description** | true`の場合、編集時にフォーカスが当たった後、値がクリアされる。 |
| **Attribute** | `clear-on-edit` |
| **Type** | `boolean` |
| **Default** | `false` |



### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### cols

| | |
| --- | --- |
| **Description** | テキストコントロールの可視幅を、平均文字幅で指定します。指定する場合は、正の整数である必要があります。 |
| **Attribute** | `cols` |
| **Type** | `number \| undefined` |
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
| **Description** | `true`の場合、ユーザはテキストエリアと対話することができません。 |
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
| **Description** | テキストエリアの下に配置され、エラーが検出されたときに表示されるテキストです。 |
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
| **Description** | textareaの下に配置され、エラーが検出されなかった場合に表示されるテキストです。 |
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
| **Description** | textareaに関連付けられた可視ラベル。  プレーンテキストのラベルをレンダリングする必要がある場合に使用する。  両方が使用されている場合、`label` プロパティが `label` スロットよりも優先される。 |
| **Attribute** | `label` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### labelPlacement

| | |
| --- | --- |
| **Description** | テキストエリアと相対的にラベルを配置する場所。"start"`：ラベルはLTRではテキストエリアの左側に、RTLでは右側に表示されます。`"end"`：ラベルはLTRではテキストエリアの右側に、RTLでは左側に表示されます。"floating"`：ラベルは、テキストエリアにフォーカスが当たっているか、値がある場合、小さく表示され、テキストエリアの上に表示されます。それ以外の場合はtextareaの上に表示されます。`"stacked"`：テキストエリアがぼやけた状態や値がない場合でも、ラベルは小さく表示され、テキストエリアの上に表示されます。固定"`：ラベルの幅が固定される以外は、`"start"`と同じ動作になります。長いテキストは省略記号（"..."）で切り捨てられます。 |
| **Attribute** | `label-placement` |
| **Type** | `"end" \| "fixed" \| "floating" \| "stacked" \| "start"` |
| **Default** | `'start'` |



### maxlength

| | |
| --- | --- |
| **Description** | この属性は、ユーザが入力できる最大文字数を指定します。 |
| **Attribute** | `maxlength` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### minlength

| | |
| --- | --- |
| **Description** | この属性は、ユーザーが入力できる最小の文字数を指定します。 |
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



### name

| | |
| --- | --- |
| **Description** | フォームデータとともに送信されるコントロールの名前。 |
| **Attribute** | `name` |
| **Type** | `string` |
| **Default** | `this.inputId` |



### placeholder

| | |
| --- | --- |
| **Description** | 入力が値を持つ前に表示される指示文。 |
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



### rows

| | |
| --- | --- |
| **Description** | コントロールの可視テキスト行数。 |
| **Attribute** | `rows` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### shape

| | |
| --- | --- |
| **Description** | テキストエリアの形状を指定します。round "の場合、ボーダーの半径が大きくなります。 |
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



### value

| | |
| --- | --- |
| **Description** | textareaの値です。 |
| **Attribute** | `value` |
| **Type** | `null \| string \| undefined` |
| **Default** | `''` |



### wrap

| | |
| --- | --- |
| **Description** | コントロールがテキストをどのように折り返すかを示します。 |
| **Attribute** | `wrap` |
| **Type** | `"hard" \| "off" \| "soft" \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionBlur` | Inputのフォーカスが外れたときに発行されます。 |
| `ionChange` | onChange` イベントは、ユーザが textarea の値を変更したときに発生する。ionInput` イベントとは異なり、`ionChange` イベントは値が変更された後に要素のフォーカスが外れたときに発生する。  このイベントは、プログラムで `value` プロパティを設定した場合には発生しない。 |
| `ionFocus` | Inputにフォーカスが当たったときに発行されます。 |
| `ionInput` | ionInput` イベントは、ユーザが textarea の値を変更するたびに発生する。ionChange` イベントとは異なり、 `ionInput` イベントは textarea の値が変更されるたびに発生する。これは通常、ユーザがキーを入力するたびに発生する。  clearOnEdit` が有効な場合、ユーザが textarea をクリアするためにキーダウンを行うと、 `ionInput` イベントが発生する。 |


## Methods


### getInputElement

| | |
| --- | --- |
| **Description** | 要素の内部で使用されるネイティブの `<textarea>` 要素を返します。 |
| **Signature** | `getInputElement() => Promise<HTMLTextAreaElement>` |


### setFocus

| | |
| --- | --- |
| **Description** | ion-textarea`のネイティブ `textarea` にフォーカスを設定する。グローバルメソッド `textarea.focus()` の代わりにこのメソッドを使用する。  詳細は [managing focus](/docs/developing/managing-focus) を参照してください。 |
| **Signature** | `setFocus() => Promise<void>` |



## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | textareaの背景 |
| `--background` | textareaの背景 |
| `--border-color` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合のテキストエリア下のボーダーの色 |
| `--border-color` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合のテキストエリア下のボーダーの色 |
| `--border-radius` | テキストエリアの境界半径 |
| `--border-radius` | テキストエリアの境界半径 |
| `--border-style` | ヘルパーテキスト、エラーテキスト、カウンター使用時のテキストエリア下のボーダーのスタイル |
| `--border-style` | ヘルパーテキスト、エラーテキスト、カウンター使用時のテキストエリア下のボーダーのスタイル |
| `--border-width` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合のテキストエリア下のボーダーの幅 |
| `--border-width` | ヘルパーテキスト、エラーテキスト、カウンターを使用する場合のテキストエリア下のボーダーの幅 |
| `--color` | 本文の色 |
| `--color` | 本文の色 |
| `--highlight-color-focused` | フォーカスされたときのテキストエリアのハイライトの色 |
| `--highlight-color-focused` | フォーカスされたときのテキストエリアのハイライトの色 |
| `--highlight-color-invalid` | 無効時のテキストエリア上のハイライトの色 |
| `--highlight-color-invalid` | 無効時のテキストエリア上のハイライトの色 |
| `--highlight-color-valid` | 有効時のテキストエリアのハイライトの色 |
| `--highlight-color-valid` | 有効時のテキストエリアのハイライトの色 |
| `--highlight-height` | テキストエリアのハイライトの高さ。mdモードにのみ適用される。 |
| `--highlight-height` | テキストエリアのハイライトの高さ。mdモードにのみ適用される。 |
| `--padding-bottom` | テキストエリアのBottom Padding |
| `--padding-bottom` | テキストエリアのBottom Padding |
| `--padding-end` | テキストエリアの方向が左から右の場合はRight Padding、右から左の場合はLeft Paddingを使用します。 |
| `--padding-end` | テキストエリアの方向が左から右の場合はRight Padding、右から左の場合はLeft Paddingを使用します。 |
| `--padding-start` | textareaの方向が左から右の場合はLeft Padding、右から左の場合はRight Padding。 |
| `--padding-start` | textareaの方向が左から右の場合はLeft Padding、右から左の場合はRight Padding。 |
| `--padding-top` | textareaのTop Padding |
| `--padding-top` | textareaのTop Padding |
| `--placeholder-color` | Placeholderテキストの色 |
| `--placeholder-color` | Placeholderテキストの色 |
| `--placeholder-font-style` | Placeholderテキストのスタイル |
| `--placeholder-font-style` | Placeholderテキストのスタイル |
| `--placeholder-font-weight` | Placeholderテキストの重さ |
| `--placeholder-font-weight` | Placeholderテキストの重さ |
| `--placeholder-opacity` | Placeholderテキストの不透明度 |
| `--placeholder-opacity` | Placeholderテキストの不透明度 |


## Slots

| Name | Description |
| --- | --- |
| `end` | textarea の末尾に表示する内容。(実験的) |
| `label` | テキストエリアに関連付けるラベルテキスト。labelPlacement`プロパティを使用して、textareaに対するラベルの位置を制御する。ラベルをカスタム HTML でレンダリングする必要がある場合に使用します。(実験的) |
| `start` | textarea の前端に表示する内容。(実験的) |

