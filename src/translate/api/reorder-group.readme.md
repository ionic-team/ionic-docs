# ion-reorder-group

reorder groupは、`ion-reorder`コンポーネントのラッパーコンポーネントです。`ion-reorder-group` のList内でItemをドラッグするために使用するアンカーコンポーネントの詳細については、 [Reorder documentation](../reorder/) を参照してください。

ユーザがアイテムをドラッグして新しい位置にドロップすると、 `ionItemReorder` イベントが発生します。変更をコミットするには、開発者がhandlerを実装する必要があります。

```js
reorderGroup.addEventListener('ionItemReorder', (ev) => {
  console.log(`Moving item from ${ev.detail.from} to ${ev.detail.to}`);

  this.dataList = reorderArray(this.dataList, ev.detail.from, ev.detail.to);
  ev.detail.complete();
});
```

イベントの詳細には、 `from` インデックスと `to` インデックスを含む、reorderの操作に関するすべての関連情報が含まれます。並べ替えのコンテキストでは、Itemは `from` インデックスX `to`インデックスYに移動します。

たとえば、次のリストでは、インデックス0の項目をインデックス3に移動します:

```
BEFORE | AFTER
  0    |   1
  1    |   2
  2    |   3
  3    |   0
  4    |   4
```

```
detail: {
  from: 0
  to: 3
}
```

reorderの変更を反映するようにデータ構造が更新されたら、`complete()` メソッドを呼び出さなければならない。
このメソッドは、並べ替え操作を終了し、 `ion-reorder-group` コンポーネントによって適用されたすべてのCSS変換をリセットします。

幸いなことに、この`complete()`メソッドはオプションとして配列を入力として受け入れることができ、その場合にはに基づいて、`detail.from` と `detail.to` に基づいて、順序を変更したコピーを返します。

```ts
this.dataList = reorderGroup.complete(this.dataList);
```
