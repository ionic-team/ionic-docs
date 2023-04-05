---
title: "ion-breadcrumb"
---
import Props from '@ionic-internal/component-api/v7/breadcrumb/props.md';
import Events from '@ionic-internal/component-api/v7/breadcrumb/events.md';
import Methods from '@ionic-internal/component-api/v7/breadcrumb/methods.md';
import Parts from '@ionic-internal/component-api/v7/breadcrumb/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/breadcrumb/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/breadcrumb/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Breadcrumbは、Breadcrumbsコンポーネントの子であり、単一のナビゲーションアイテムです。Breadcrumbは、アプリ内の他の場所にリンクすることも、プレーンテキストにすることもできます。Breadcrumbsは、次のBreadcrumbとの間にセパレータを持ち、オプションでアイコンを含むことができます。

詳しい説明は [Breadcrumbs](./breadcrumbs) を参照ください。

## Interfaces

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

必須ではありませんが、より強い型付けのために、このインターフェースを `CustomEvent` インターフェースの代わりに使用することができます。

```typescript
interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail;
  target: HTMLIonBreadcrumbElement;
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
