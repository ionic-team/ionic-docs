---
title: "ion-textarea"
---
import Props from '@ionic-internal/component-api/v7/textarea/props.md';
import Events from '@ionic-internal/component-api/v7/textarea/events.md';
import Methods from '@ionic-internal/component-api/v7/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v7/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/textarea/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/textarea/slots.md';

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

import BasicPlayground from '@site/static/usage/v7/textarea/basic/index.md';

<BasicPlayground />

## Label Placement

ラベルは、デフォルトでそのコンテンツの幅を占めます。 開発者は `labelPlacement` プロパティを使用して、ラベルがどのように配置されるかを制御することができます。

import Labels from '@site/static/usage/v7/textarea/label-placement/index.md';

<LabelPlacement />

## Filled Textareas

Material Designでは、テキストエリアの塗りつぶしスタイルが用意されています。アイテムの `fill` プロパティは `"solid"` または `"outline"` のいずれかに設定することができます。

`fill` スタイルはテキストエリアのコンテナを視覚的に定義するため、`fill` を使用するテキストエリアは `ion-item` で使用すべきではありません。

import Fill from '@site/static/usage/v7/textarea/fill/index.md';

<Fill />

## Helper & Error Text

ヘルパーテキストとエラーテキストは、`helperText` と `errorText` プロパティを使って textarea 内で使用することができます。エラーテキストは、`ion-invalid` と `ion-touched` クラスが `ion-textarea` に追加されていない限り表示されません。これにより、ユーザがデータを入力する前にエラーが表示されることはありません。

Angularでは、これはフォームバリデーションによって自動的に行われます。JavaScript、React、Vueでは、独自のバリデーションに基づいてクラスを手動で追加する必要があります。

import HelperError from '@site/static/usage/v7/textarea/helper-error/index.md';

<HelperError />

## Textarea Counter

textareaカウンターは、textareaの下に表示されるテキストで、textareaが受け付ける合計文字数のうち、何文字が入力されたかをユーザーに通知します。カウンターを追加する場合、デフォルトの動作は、表示される値を `inputLength` / `maxLength` としてフォーマットすることです。この動作は、`counterFormatter`プロパティにフォーマッタ関数を渡すことでカスタマイズすることができます。

import Counter from '@site/static/usage/v7/textarea/counter/index.md';

<Counter />

## Autogrow

`autoGrow`プロパティが`true`に設定されている場合、テキストエリアはその内容に基づいて拡大・縮小します。

import AutogrowPlayground from '@site/static/usage/v7/textarea/autogrow/index.md';

<AutogrowPlayground />

## Clear on Edit

`clearOnEdit`プロパティを`true`に設定すると、テキストエリアが編集削除された後、再度入力されるとクリアされます。

import ClearOnEditPlayground from '@site/static/usage/v7/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## レガシーtextarea構文からの移行

Ionic 7.0では、よりシンプルなtextareaの構文が導入されました。この新しい構文は、textareaを設定するために必要な定型文を減らし、アクセシビリティの問題を解決し、開発者の体験を向上させます。

開発者はこの移行を一度に1つのtextareaで行うことができます。開発者は従来の構文を使い続けることができますが、できるだけ早く移行することをお勧めします。


### 最新の構文の使い方

最新の構文を使うには、3つのステップがあります。

1. `ion-label` を削除して、代わりに `ion-textarea` の `label` プロパティを使用します。ラベルの配置は `ion-textarea` の `labelPlacement` プロパティを使用して設定することができる。
2. テキストエリア固有のプロパティを `ion-item` から `ion-textarea` に移動します。これには、`counter`、`counterFormatter`、`fill`、`shape`プロパティが含まれます。
3. `ion-item` の `helper` と `error` スロットの使用を削除し、代わりに `ion-textarea` の `helperText` と `errorText` プロパティを使用します。

import Migration from '@site/static/usage/v7/textarea/migration/index.md';

<Migration />

### レガシー構文の使用

Ionicは、アプリが最新のtextarea構文を使用しているかどうかをヒューリスティックで検出します。場合によっては、レガシーな構文を使い続けることが望ましいこともあります。開発者は、`ion-textarea`の`legacy`プロパティを`true`に設定することで、そのインスタンスのtextareaがレガシー構文を使用するように強制できます。

## テーマ

import ThemingPlayground from '@site/static/usage/v7/textarea/theming/index.md';

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
