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

Labels should be used to describe the textarea. They can be used visually, and they will also be read out by screen readers when the user is focused on the textarea. This makes it easy for the user to understand the intent of the textarea. Textarea has several ways to assign a label:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels (experimental)
- `aria-label`: used to provide a label for screen readers but adds no visible label

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
Textareas that use `fill` should not be used in an `ion-item` due to styling conflicts between the components.
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

The `start` and `end` slots can be used to place icons, buttons, or prefix/suffix text on either side of the textarea.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

:::note
In most cases, [Icon](./icon.md) components placed in these slots should have `aria-hidden="true"`. See the [Icon accessibility docs](https://ionicframework.com/docs/api/icon#accessibility) for more information.

If slot content is meant to be interacted with, it should be wrapped in an interactive element such as a [Button](./button.md). This ensures that the content can be tabbed to.
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
