---
title: "ion-radio-group"
---
import Props from '@ionic-internal/component-api/v7/radio-group/props.md';
import Events from '@ionic-internal/component-api/v7/radio-group/events.md';
import Methods from '@ionic-internal/component-api/v7/radio-group/methods.md';
import Parts from '@ionic-internal/component-api/v7/radio-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/radio-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/radio-group/slots.md';

<head>
  <title>ion-radio-group: Radio Button Group Usage for Ionic Apps</title>
  <meta name="description" content="radio groupとは、radioボタンのグループです。radio groupは、ユーザーがセットから最大1つのradioボタンを選択できるようにします。 ion-radio-groupの使用方法について、詳しくはこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


ラジオ・グループは、[ラジオ](./radio)のグループのためのコンテナです。ラジオグループは、ユーザーがラジオボタンを1つだけ選択できるようにします。ラジオ・グループに属するラジオ・ボタンを1つチェックすると、同じグループ内で以前にチェックされたラジオ・ボタンのチェックは解除されます。ラジオ・グループの使用例については、[radio](./radio)のドキュメントを参照してください。


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
