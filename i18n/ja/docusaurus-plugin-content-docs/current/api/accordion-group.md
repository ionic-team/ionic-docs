---
title: "ion-accordion-group"
---
import Props from '@ionic-internal/component-api/v7/accordion-group/props.md';
import Events from '@ionic-internal/component-api/v7/accordion-group/events.md';
import Methods from '@ionic-internal/component-api/v7/accordion-group/methods.md';
import Parts from '@ionic-internal/component-api/v7/accordion-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/accordion-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/accordion-group/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

アコーディオン・グループは、アコーディオンインスタンスのためのコンテナです。これは、アコーディオンの状態を管理し、キーボードナビゲーションを提供します。

より詳細な情報や使用方法については、 [Accordion](./accordion) を参照ください。


## Interfaces

### AccordionGroupChangeEventDetail

```typescript
interface AccordionGroupChangeEventDetail<T = any> {
  value: T;
}
```

### AccordionGroupCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface AccordionGroupCustomEvent<T = any> extends CustomEvent {
  detail: AccordionGroupChangeEventDetail<T>;
  target: HTMLIonAccordionGroupElement;
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
