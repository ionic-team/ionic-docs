---
title: "ion-input"
---
import Props from '@ionic-internal/component-api/v7/input/props.md';
import Events from '@ionic-internal/component-api/v7/input/events.md';
import Methods from '@ionic-internal/component-api/v7/input/methods.md';
import Parts from '@ionic-internal/component-api/v7/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/input/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/input/slots.md';

<head>
  <title>ion-input: Custom Input Value Type Styling and CSS Properties</title>
  <meta name="description" content="ion-inputは、HTMLのinput要素のラッパーで、カスタムな値型のスタイルと機能を備えています。デスクトップでも動作し、モバイルではキーボードと統合されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


inputコンポーネントは、カスタム・スタイル設定と追加機能を持つHTMLのInput要素のラッパーです。HTML Inputとほとんど同じプロパティーを受け入れますが、デスクトップ・デバイスでは優れた動作をし、モバイル・デバイスではキーボードと統合されます。


## 基本的な使い方

import Basic from '@site/static/usage/v7/input/basic/index.md';

<Basic />


## Types

input コンポーネントは、`"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, `"url"` などのテキストタイプの入力のみを対象としています。また、keyup、keydown、keypressなどの標準的なテキスト入力イベントをすべてサポートしています。デフォルトの `type` は `"text"` です。

import Types from '@site/static/usage/v7/input/types/index.md';

<Types />


## Label Placement

ラベルは、デフォルトでそのコンテンツの幅を占めます。 開発者は `labelPlacement` プロパティを使用して、ラベルがどのように配置されるかを制御することができます。

import LabelPlacement from '@site/static/usage/v7/input/label-placement/index.md';

<LabelPlacement />


## Clear Options

Inputsには、入力の操作方法に応じて、Inputをクリアするための2つのオプションがあります。最初の方法は `clearInput` プロパティを追加することで、Inputに `value` があるときにクリアボタンを表示します。2つ目の方法は `clearOnEdit` プロパティで、入力が編集削除された後、再度入力されるとクリアされます。 `type` が `"password"` に設定されているInputは、デフォルトで `clearOnEdit` が有効になっています。

import Clear from '@site/static/usage/v7/input/clear/index.md';

<Clear />


## Filled Inputs

Material Design では、Inputに塗りつぶしのスタイルが用意されています。Inputの `fill` プロパティは `"solid"` または `"outline"` のいずれかに設定することができます。

`fill` スタイルはInputコンテナを視覚的に定義するため、`fill` を使用するInputは `ion-item` で使用すべきではありません。

import Fill from '@site/static/usage/v7/input/fill/index.md';

<Fill />


## Helper & Error Text

ヘルパーテキストとエラーテキストは、`helperText` と `errorText` プロパティを使用して入力の内部で使用することができます。エラーテキストは、 `ion-invalid` クラスと `ion-touched` クラスが `ion-input` に追加されていない限り表示されない。これにより、ユーザがデータを入力する前にエラーが表示されることはありません。

Angularでは、これはフォームバリデーションによって自動的に行われます。JavaScript、React、Vueでは、独自のバリデーションに基づいてクラスを手動で追加する必要があります。

import HelperError from '@site/static/usage/v7/input/helper-error/index.md';

<HelperError />

## Input Counter

Input Counterは、Inputの下に表示されるテキストで、入力可能な文字数のうち、何文字が入力されたかをユーザーに通知するものです。カウンターを追加する場合、デフォルトの動作は、表示される値を `inputLength` / `maxLength` としてフォーマットすることです。この動作は、`counterFormatter`プロパティにフォーマッタ関数を渡すことでカスタマイズすることができます。

import Counter from '@site/static/usage/v7/input/counter/index.md';

<Counter />

## Filtering User Input

開発者は `ionInput` イベントを使用して、キー入力などのユーザー入力に応答して入力値を更新することができます。これは、無効な文字や不要な文字をフィルタリングするのに便利です。

ステート変数に値を格納する場合、ステート変数と `ion-input` コンポーネントの値の両方を更新することを推奨します。これにより、状態変数と `ion-input` コンポーネントの値が確実に同期されます。

import FilteringData from '@site/static/usage/v7/input/filtering/index.md';

<FilteringData />

## テーマ

### Colors

`color`プロパティを設定すると、各Inputのカラーパレットが変更されます。 `ios`モードでは、このプロパティはキャレットカラーを変更します。 `md`モードでは、このプロパティはキャレットカラーとハイライト/アンダーラインカラーを変更します。

import Colors from '@site/static/usage/v7/input/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

Inputはscoped encapsulationを採用しており、実行時に各スタイルに追加のクラスを付加することで、CSSを自動的にスコープ化します。CSSでscopedセレクタを上書きするには、[higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。そのため、クラスを追加してカスタマイズすることをお勧めします。

import CSSProps from '@site/static/usage/v7/input/theming/css-properties/index.md';

<CSSProps />

## レガシーな Input 構文からの移行

Ionic 7.0では、よりシンプルなInput構文が導入されました。この新しい構文は、Inputのセットアップに必要な定型文を減らし、アクセシビリティの問題を解決し、開発者のエクスペリエンスを向上させます。

開発者は、この移行を一度に1つのInputで実行できます。開発者はレガシー構文を使い続けることができますが、できるだけ早く移行することをお勧めします。

### 最新の構文の使い方

最新の構文を使うには、3つのステップがあります。

1. `ion-label` を削除して、代わりに `ion-input` の `label` プロパティを使用します。ラベルの配置は `ion-input` の `labelPlacement` プロパティで設定することができる。
2. Input固有のプロパティを `ion-item` から `ion-input` に移動します。これには、`counter`、`counterFormatter`、`fill`、`shape`プロパティが含まれる。
3. `ion-item` の `helper` と `error` スロットの使用を削除し、代わりに `ion-input` の `helperText` と `errorText` プロパティを使用します。

import Migration from '@site/static/usage/v7/input/migration/index.md';

<Migration />

### レガシー構文の使用

Ionicは、アプリが最新のInput構文を使用しているかどうかをヒューリスティックに検出します。場合によっては、レガシーな構文を使い続けることが望ましいこともあります。開発者は、`ion-input`の`legacy`プロパティを`true`に設定することで、そのInputのインスタンスにレガシー構文を使用するように強制できます。

## Interfaces

### InputChangeEventDetail

```typescript
interface InputChangeEventDetail {
  value: string | undefined | null;
}
```

### InputCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface InputCustomEvent extends CustomEvent {
  detail: InputChangeEventDetail;
  target: HTMLIonInputElement;
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
