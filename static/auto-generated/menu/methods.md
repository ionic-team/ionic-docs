

### close

| | |
| --- | --- |
| **Description** | Closes the menu. If the menu is already closed or it can't be closed, it returns `false`.<br /><br />自動翻訳: メニューを閉じる。メニューが既に閉じられていたり、閉じることができない場合は、`false`を返す。 |
| **Signature** | `close(animated?: boolean) => Promise<boolean>` |


### isActive

| | |
| --- | --- |
| **Description** | Returns `true` is the menu is active.<br /><br />A menu is active when it can be opened or closed, meaning it's enabled and it's not part of a `ion-split-pane`.<br /><br />自動翻訳: メニューがアクティブであれば `true` を返す。  メニューがアクティブな状態とは、メニューを開いたり閉じたりできる状態、つまり有効な状態であり、`ion-split-pane`の一部でない状態であることを意味する。 |
| **Signature** | `isActive() => Promise<boolean>` |


### isOpen

| | |
| --- | --- |
| **Description** | Returns `true` is the menu is open.<br /><br />自動翻訳: メニューが開いている場合は `true` を返す。 |
| **Signature** | `isOpen() => Promise<boolean>` |


### open

| | |
| --- | --- |
| **Description** | Opens the menu. If the menu is already open or it can't be opened, it returns `false`.<br /><br />自動翻訳: メニューを開く。メニューが既に開いているか、開くことができない場合は、`false`を返す。 |
| **Signature** | `open(animated?: boolean) => Promise<boolean>` |


### setOpen

| | |
| --- | --- |
| **Description** | Opens or closes the button. If the operation can't be completed successfully, it returns `false`.<br /><br />自動翻訳: ボタンを開いたり閉じたりする。操作が正常に完了しない場合は `false` を返す。 |
| **Signature** | `setOpen(shouldOpen: boolean, animated?: boolean) => Promise<boolean>` |


### toggle

| | |
| --- | --- |
| **Description** | Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it. If the operation can't be completed successfully, it returns `false`.<br /><br />自動翻訳: メニューを切り替えます。メニューが既に開かれている場合は閉じようとし、そうでない場合は開こうとする。操作が正常に完了しない場合は、`false`を返す。 |
| **Signature** | `toggle(animated?: boolean) => Promise<boolean>` |


