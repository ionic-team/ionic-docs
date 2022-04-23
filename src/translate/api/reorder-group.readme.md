# ion-reorder-group

reorder groupは、`ion-reorder` コンポーネントを使用するアイテムのラッパーコンポーネントです。`ion-reorder-group` の中でアイテムをドラッグするために使用されるアンカーコンポーネントの詳細については、[Reorder documentation](../reorder/) を参照してください。

ユーザがアイテムをドラッグして新しい位置にドロップすると、 `ionItemReorder` イベントが送出されます。`complete()` メソッドを呼び出すハンドラを実装する必要があります。

`ionItemReorder` イベントの `detail` プロパティには、 `from` および `to` インデックスを含む、reorderの操作に関するすべての関連情報が含まれている。並べ替えのコンテキストでは、アイテムは`from`インデックスから新しい `to`インデックスに移動します。  

## Completing a Reorder

When the `ionItemReorder` event is dispatched, developers have the option to call the `complete()` method on `ion-reorder-group`. This will complete the reorder operation.

By default, the `complete()` method will re-order the DOM nodes inside of `ion-reorder-group`.

For developers who need to sort an array based on the order of the items in `ion-reorder-group`, we recommend passing the array as a parameter in `complete()`. Ionic will sort and return the array so that it can be reassigned.

In some cases, it may be necessary for an app to re-order both the array and the DOM nodes on its own. When this happens, it is recommended to pass `false` to the `complete()` method. This will prevent Ionic from re-ordering any DOM nodes inside of `ion-reorder-group`.

## Usage with Virtual Scroll

The reorder group requires a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <ion-reorder-group disabled="false">
      <ion-item>
        <ion-label>
          Item 1
        </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
      <ion-item>
        <ion-label>
          Item 2
        </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </virtual-scroll-element>
</ion-content>
```

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
