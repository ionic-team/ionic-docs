# ion-reorder-group

reorder groupは、`ion-reorder` コンポーネントを使用するアイテムのラッパーコンポーネントです。`ion-reorder-group` の中でアイテムをドラッグするために使用されるアンカーコンポーネントの詳細については、[Reorder documentation](../reorder/) を参照してください。

ユーザがアイテムをドラッグして新しい位置にドロップすると、 `ionItemReorder` イベントが送出されます。`complete()` メソッドを呼び出すハンドラを実装する必要があります。

`ionItemReorder` イベントの `detail` プロパティには、 `from` および `to` インデックスを含む、reorderの操作に関するすべての関連情報が含まれている。並べ替えのコンテキストでは、アイテムは`from`インデックスから新しい `to`インデックスに移動します。  

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

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ItemReorderCustomEvent extends CustomEvent {
  detail: ItemReorderEventDetail;
  target: HTMLIonReorderGroupElement;
}
```
