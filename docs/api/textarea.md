---
title: "ion-textarea"
---
import Props from '@ionic-internal/component-api/v8/textarea/props.md';
import Events from '@ionic-internal/component-api/v8/textarea/events.md';
import Methods from '@ionic-internal/component-api/v8/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v8/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/textarea/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/textarea/slots.md';

<head>
  <title>Ionic Textarea Component and CSS Properties for Multi-Line Input</title>
  <meta name="description" content="Textareaは複数行の入力のためのものです。このコンポーネントは、Ionicのプロパティに加えて、ネイティブのtextareaの属性を受け付けます。使用方法とCSS要素については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

textareaコンポーネントは、複数行のテキスト入力に使用されます。ネイティブの textarea 要素は、コンポーネントの内部でレンダリングされます。ネイティブのtextareaを制御することで、textareaコンポーネントのユーザーエクスペリエンスとインタラクティブ性を向上させることができます。

ネイティブのtextarea要素とは異なり、Ionicのtextareaは要素内部のコンテンツからその値を読み込むことをサポートしていません。textareaの値は`value`属性で設定しなくてはなりません。

textareaコンポーネントはIonicのプロパティに加えて [ネイティブのtextareaの属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) に対応します。

## 基本的な使い方

import BasicPlayground from '@site/static/usage/v8/textarea/basic/index.md';

<BasicPlayground />

## Labels

ラベルは、textareaを説明するために使用すべきです。視覚的に使用でき、ユーザーがtextareaにフォーカスしたときにスクリーンリーダーによって読み上げられます。これにより、ユーザーがtextareaの意図を理解しやすくなります。Textareaには、ラベルを割り当てるいくつかの方法があります：

- `label` プロパティ: プレーンテキストのラベルに使用
- `label` スロット: カスタムHTMLラベルに使用（実験的）
- `aria-label`: スクリーンリーダーにラベルを提供するために使用されますが、表示されるラベルは追加されません

### Label Placement

ラベルは、デフォルトでそのコンテンツの幅を占めます。 開発者は `labelPlacement` プロパティを使用して、ラベルがどのように配置されるかを制御することができます。

import LabelPlacement from '@site/static/usage/v8/textarea/label-placement/index.md';

<LabelPlacement />

### Label Slot (実験的)

プレーンテキストのラベルは `label` プロパティを通して渡されるべきですが、カスタム HTML が必要な場合は、代わりに `label` スロットを通して渡すことができます。

この機能は、[Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)のシミュレート版に依存しているため、実験的なものとみなされていることに注意してください。その結果、シミュレートされた動作はネイティブのスロットの動作と完全に一致するとは限りません。

import LabelSlot from '@site/static/usage/v8/textarea/label-slot/index.md';

<LabelSlot />

### No Visible Label

ラベルの表示が必要ない場合でも、開発者は`aria-label`を指定して、textareaがスクリーンリーダーにアクセスできるようにすべきです。

import NoVisibleLabel from '@site/static/usage/v8/textarea/no-visible-label/index.md';

<NoVisibleLabel />

## Filled Textareas

Material Designでは、テキストエリアの塗りつぶしスタイルが用意されています。アイテムの `fill` プロパティは `"solid"` または `"outline"` のいずれかに設定することができます。

iOSでは、Textareasの`mode`を`md`に設定することで、Filled Textareasを使うことができます。

:::warning
コンポーネント間のスタイリングの競合のため、`fill`を使用するTextareaは`ion-item`内で使用すべきではありません。
:::

import Fill from '@site/static/usage/v8/textarea/fill/index.md';

<Fill />

## Helper & Error Text

ヘルパーテキストとエラーテキストは、`helperText` と `errorText` プロパティを使って textarea 内で使用することができます。エラーテキストは、`ion-invalid` と `ion-touched` クラスが `ion-textarea` に追加されていない限り表示されません。これにより、ユーザがデータを入力する前にエラーが表示されることはありません。

Angularでは、これはフォームバリデーションによって自動的に行われます。JavaScript、React、Vueでは、独自のバリデーションに基づいてクラスを手動で追加する必要があります。

import HelperError from '@site/static/usage/v8/textarea/helper-error/index.md';

<HelperError />

## Textarea Counter

textareaカウンターは、textareaの下に表示されるテキストで、textareaが受け付ける合計文字数のうち、何文字が入力されたかをユーザーに通知します。カウンターを追加する場合、デフォルトの動作は、表示される値を `inputLength` / `maxLength` としてフォーマットすることです。この動作は、`counterFormatter`プロパティにフォーマッタ関数を渡すことでカスタマイズすることができます。

import Counter from '@site/static/usage/v8/textarea/counter/index.md';

<Counter />

## Autogrow

`autoGrow`プロパティが`true`に設定されている場合、テキストエリアはその内容に基づいて拡大・縮小します。

import AutogrowPlayground from '@site/static/usage/v8/textarea/autogrow/index.md';

<AutogrowPlayground />

## Clear on Edit

`clearOnEdit`プロパティを`true`に設定すると、テキストエリアが編集削除された後、再度入力されるとクリアされます。

import ClearOnEditPlayground from '@site/static/usage/v8/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## Start and End Slots (experimental)

`start`と`end`スロットは、textareaの両側にアイコン、ボタン、またはプレフィックス/サフィックステキストを配置するために使用できます。

この機能は、[Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)のシミュレート版に依存しているため、実験的なものとみなされていることに注意してください。その結果、シミュレートされた動作はネイティブのスロットの動作と完全に一致するとは限りません。

:::note
ほとんどの場合、これらのスロットに配置された[Icon](./icon.md)コンポーネントには`aria-hidden="true"`を設定すべきです。詳細については、[Icon accessibility docs](https://ionicframework.com/docs/api/icon#accessibility)を参照してください。

スロットコンテンツが操作対象である場合、[Button](./button.md)などのインタラクティブ要素でラップする必要があります。これにより、コンテンツにタブで移動できるようになります。
:::

import StartEndSlots from '@site/static/usage/v8/textarea/start-end-slots/index.md';

<StartEndSlots />

## Theming

import ThemingPlayground from '@site/static/usage/v8/textarea/theming/index.md';

<ThemingPlayground />

## Interfaces

### TextareaChangeEventDetail

```typescript
interface TextareaChangeEventDetail {
  value?: string | null;
}
```

### TextareaCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface TextareaCustomEvent extends CustomEvent {
  detail: TextareaChangeEventDetail;
  target: HTMLIonTextareaElement;
}
```

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />
