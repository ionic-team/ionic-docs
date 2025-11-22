---
title: "ion-reorder-group"
---
import Props from '@ionic-internal/component-api/v8/reorder-group/props.md';
import Events from '@ionic-internal/component-api/v8/reorder-group/events.md';
import Methods from '@ionic-internal/component-api/v8/reorder-group/methods.md';
import Parts from '@ionic-internal/component-api/v8/reorder-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/reorder-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/reorder-group/slots.md';

<head>
  <title>ion-reorder-group: Wrapper Component for Reorder Items</title>
  <meta name="description" content="ion-reorder-groupは、Ionicアプリでion-reorderコンポーネントを使用するアイテムのためのラッパーコンポーネントです。ion-reorder-groupの使い方はこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Reorder groupは、[reorder](./reorder)コンポーネントを使用するアイテムのコンテナです。ユーザーがアイテムをドラッグしてドロップすると、`ionReorderEnd`イベントが発行されます。このイベントのハンドラを実装し、`complete`メソッドを呼び出す必要があります。

`ionReorderEnd`イベントの`detail`プロパティには、`from`と`to`のインデックスを含む、reorder操作に関するすべての関連情報が含まれています。reorderのコンテキストでは、アイテムはインデックス`from`からインデックス`to`に移動します。reorder groupの使用例については、[reorder](./reorder)ドキュメントを参照してください。


## Interfaces

### ReorderMoveEventDetail

```typescript
interface ReorderMoveEventDetail {
  from: number;
  to: number;
}
```

### ReorderEndEventDetail

```typescript
interface ReorderEndEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ReorderMoveCustomEvent

必須ではありませんが、このコンポーネントから発行されるIonicイベントでより強く型付けを行うために、`CustomEvent`インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ReorderMoveCustomEvent extends CustomEvent {
  detail: ReorderMoveEventDetail;
  target: HTMLIonReorderGroupElement;
}

```

### ReorderEndCustomEvent

必須ではありませんが、このコンポーネントから発行されるIonicイベントでより強く型付けを行うために、`CustomEvent`インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ReorderEndCustomEvent extends CustomEvent {
  detail: ReorderEndEventDetail;
  target: HTMLIonReorderGroupElement;
}
```

### ItemReorderEventDetail (deprecated)

**_Deprecated_** — Use the `ionReorderEnd` event with `ReorderEndEventDetail` instead.

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent (deprecated)

**_Deprecated_** — Use the `ionReorderEnd` event with `ReorderEndCustomEvent` instead.

```typescript
interface ItemReorderCustomEvent extends CustomEvent {
  detail: ItemReorderEventDetail;
  target: HTMLIonReorderGroupElement;
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
