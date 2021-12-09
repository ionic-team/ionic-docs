# ion-reorder-group

reorder groupは、`ion-reorder` コンポーネントを使用するアイテムのラッパーコンポーネントです。`ion-reorder-group` の中でアイテムをドラッグするために使用されるアンカーコンポーネントの詳細については、[Reorder documentation](../reorder/) を参照してください。

ユーザがアイテムをドラッグして新しい位置にドロップすると、 `ionItemReorder` イベントが送出されます。`complete()` メソッドを呼び出すハンドラを実装する必要があります。

`ionItemReorder` イベントの `detail` プロパティには、 `from` および `to` インデックスを含む、reorderの操作に関するすべての関連情報が含まれている。並べ替えのコンテキストでは、アイテムは`from`インデックスから新しい `to`インデックスに移動します。  
