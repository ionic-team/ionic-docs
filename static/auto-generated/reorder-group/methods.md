

### complete

| | |
| --- | --- |
| **Description** | Completes the reorder operation. Must be called by the `ionItemReorder` event.<br /><br />If a list of items is passed, the list will be reordered and returned in the proper order.<br /><br />If no parameters are passed or if `true` is passed in, the reorder will complete and the item will remain in the position it was dragged to. If `false` is passed, the reorder will complete and the item will bounce back to its original position.<br /><br />自動翻訳: 再注文操作を完了する。ionItemReorder` イベントで呼び出す必要がある。  アイテムのリストが渡された場合、リストは適切な順序に並び替えられ、返される。  パラメータが渡されない場合、または `true` が渡された場合、並べ替えは完了し、アイテムはドラッグされた位置に留まります。 `false`が渡された場合、並び替えは完了し、アイテムは元の位置に跳ね返されます。 |
| **Signature** | `complete(listOrReorder?: boolean ｜ any[]) => Promise<any>` |


