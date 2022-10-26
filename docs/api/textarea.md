---
title: "ion-textarea"
---
import Props from '@site/static/auto-generated/textarea/props.md';
import Events from '@site/static/auto-generated/textarea/events.md';
import Methods from '@site/static/auto-generated/textarea/methods.md';
import Parts from '@site/static/auto-generated/textarea/parts.md';
import CustomProps from '@site/static/auto-generated/textarea/custom-props.md';
import Slots from '@site/static/auto-generated/textarea/slots.md';

<head>
  <title>Ionic Textarea Component and CSS Properties for Multi-Line Input</title>
  <meta name="description" content="Textareaは複数行の入力のためのものです。このコンポーネントは、Ionicのプロパティに加えて、ネイティブのtextareaの属性を受け付けます。使用方法とCSS要素については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.

ネイティブのtextarea要素とは異なり、Ionicのtextareaは要素内部のコンテンツからその値を読み込むことをサポートしていません。textareaの値は`value`属性で設定しなくてはなりません。

textareaコンポーネントはIonicのプロパティに加えて [ネイティブのtextareaの属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) に対応します。

## Basic Usage

import BasicPlayground from '@site/static/usage/textarea/basic/index.md';

<BasicPlayground />

## Autogrow

When the `autoGrow` property is set to `true`, the textarea will grow and shrink based on its contents.

import AutogrowPlayground from '@site/static/usage/textarea/autogrow/index.md';

<AutogrowPlayground />

## Clear on Edit

Setting the `clearOnEdit` property to `true` will clear the textarea after it has been blurred and then typed in again.

import ClearOnEditPlayground from '@site/static/usage/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## Theming

import ThemingPlayground from '@site/static/usage/textarea/theming/index.md';

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

## Properties
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