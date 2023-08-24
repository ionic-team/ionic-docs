---
title: "ion-reorder-group"
---
import Props from '@ionic-internal/component-api/v7/reorder-group/props.md';
import Events from '@ionic-internal/component-api/v7/reorder-group/events.md';
import Methods from '@ionic-internal/component-api/v7/reorder-group/methods.md';
import Parts from '@ionic-internal/component-api/v7/reorder-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/reorder-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/reorder-group/slots.md';

<head>
  <title>ion-reorder-group: Wrapper Component for Reorder Items</title>
  <meta name="description" content="ion-reorder-groupは、Ionicアプリでion-reorderコンポーネントを使用するアイテムのためのラッパーコンポーネントです。ion-reorder-groupの使い方はこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


reorder groupは、[reorder](./reorder) コンポーネントを使用したアイテムのコンテナです。ユーザがアイテムをドラッグして新しい位置にドロップすると、 `ionItemReorder` イベントがディスパッチされる。このイベントのハンドラは `complete` メソッドを呼び出すように実装する必要があります。

`ionItemReorder` イベントの `detail` プロパティには、`from` と `to` インデックスを含む、並べ替え操作に関するすべての関連情報が含まれます。並び替えのコンテキストでは、アイテムは `from` インデックスから `to` インデックスに移動します。reorder groupの使用例については、[reorder](./reorder) のドキュメントを参照してください。


## Interfaces

### ItemReorderEventDetail

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

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
