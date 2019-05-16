# ion-reorder

Reorderは、Itemをドラッグして順序を変更できるようにするコンポーネントです。視覚的なドラッグ&ドロップインターフェイスを提供するために、 `ion-reorder-group` 内で使用する必要があります。

`ion-reorder` は、ユーザーが  `ion-reorder-group` 内でアイテムをドラッグ&ドロップする際に使用するanchorです。

```html
<ion-item>
  <ion-label>
    Item
  </ion-label>
  <ion-reorder slot="end"></ion-reorder>
</ion-item>
```
