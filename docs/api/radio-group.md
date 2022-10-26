---
title: "ion-radio-group"
---
import Props from '@site/static/auto-generated/radio-group/props.md';
import Events from '@site/static/auto-generated/radio-group/events.md';
import Methods from '@site/static/auto-generated/radio-group/methods.md';
import Parts from '@site/static/auto-generated/radio-group/parts.md';
import CustomProps from '@site/static/auto-generated/radio-group/custom-props.md';
import Slots from '@site/static/auto-generated/radio-group/slots.md';

<head>
  <title>ion-radio-group | Radio Button Group Usage for Ionic Apps</title>
  <meta name="description" content="radio groupとは、radioボタンのグループです。radio groupは、ユーザーがセットから最大1つのradioボタンを選択できるようにします。 ion-radio-groupの使用方法について、詳しくはこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


A radio group is a container for a group of [radios](./radio). It allows a user to select at most one radio button from a set. Checking one radio button that belongs to a radio group unchecks any previous checked radio button within the same group. For example usage of the radio group, see the [radio](./radio) documentation.


## Interfaces

### RadioGroupChangeEventDetail

```typescript
interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}
```

### RadioGroupCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface RadioGroupCustomEvent<T = any> extends CustomEvent {
  detail: RadioGroupChangeEventDetail<T>;
  target: HTMLIonRadioGroupElement;
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
