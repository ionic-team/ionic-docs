

### complete

| | |
| --- | --- |
| **Description** | Completes the reorder operation. Must be called by the `ionItemReorder` event.<br /><br />If a list of items is passed, the list will be reordered and returned in the proper order.<br /><br />If no parameters are passed or if `true` is passed in, the reorder will complete and the item will remain in the position it was dragged to. If `false` is passed, the reorder will complete and the item will bounce back to its original position. |
| **Signature** | `complete(listOrReorder?: boolean ｜ any[]) => Promise<any>` |


