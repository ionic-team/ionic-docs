

### checkEnd

| | |
| --- | --- |
| **Description** | This method marks the tail the items array as dirty, so they can be re-rendered.<br /><br />It's equivalent to calling:<br /><br />```js virtualScroll.checkRange(lastItemLen); ```<br /><br />自動翻訳: このメソッドは、アイテム配列の末尾をダーティとしてマークし、再レンダリングできるようにします。  これは次のように呼び出すのと同じです： ``js virtualScroll.checkRange(lastItemLen); ```。 |
| **Signature** | `checkEnd() => Promise<void>` |


### checkRange

| | |
| --- | --- |
| **Description** | This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as dirty any time the content or their style changes.<br /><br />The subset of items to be updated can are specifying by an offset and a length.<br /><br />自動翻訳: このメソッドは、アイテムのサブセットをダーティとしてマークし、再レンダリングができるようにします。アイテムは、コンテンツまたはそのスタイルが変更されるたびに、ダーティとしてマークされる必要があります。  更新されるアイテムのサブセットは、オフセットと長さで指定することができます。 |
| **Signature** | `checkRange(offset: number, len?: number) => Promise<void>` |


### positionForItem

| | |
| --- | --- |
| **Description** | Returns the position of the virtual item at the given index.<br /><br />自動翻訳: 指定されたインデックスの位置にある仮想アイテムの位置を返します。 |
| **Signature** | `positionForItem(index: number) => Promise<number>` |


