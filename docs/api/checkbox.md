---
title: "ion-checkbox"
---

import Props from '@site/static/auto-generated/checkbox/props.md';
import Events from '@site/static/auto-generated/checkbox/events.md';
import Methods from '@site/static/auto-generated/checkbox/methods.md';
import Parts from '@site/static/auto-generated/checkbox/parts.md';
import CustomProps from '@site/static/auto-generated/checkbox/custom-props.md';
import Slots from '@site/static/auto-generated/checkbox/slots.md';

<head>
  <title>ion-checkboxes: Ionic App Component to Select Multiple Options</title>
  <meta name="description" content="ion-checkboxは、セットから複数の選択肢を選択でき、アクティブにするとチェックされた（ticked）ように表示されます。Ionicアプリのチェックボックスコンポーネントについて説明します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Checkboxを使用すると、一連のオプションから複数のオプションを選択できます。選択すると、チェックマークが付いた状態(checked)で表示されます。checkboxをクリックすると、 `checked` プロパティーが切り替わります。`checked` プロパティを設定して、プログラムで `checked` を切り替えることもできます。

## Basic Usage

import Basic from '@site/static/usage/checkbox/basic/index.md';

<Basic />

## Indeterminate Checkboxes

import Indeterminate from '@site/static/usage/checkbox/indeterminate/index.md';

<Indeterminate />

## Theming

### CSS Custom Properties

import CSSProps from '@site/static/usage/checkbox/theming/css-properties/index.md';

<CSSProps />

## Interfaces

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### CheckboxCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
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
