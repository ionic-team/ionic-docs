

### getInputElement

| | |
| --- | --- |
| **Description** | Returns the native `<input>` element used under the hood.<br /><br />自動翻訳: フードの下で使用されているネイティブの `<input>` 要素を返します。 |
| **Signature** | `getInputElement() => Promise<HTMLInputElement>` |


### setFocus

| | |
| --- | --- |
| **Description** | Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.<br /><br />Developers who wish to focus an input when a page enters should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.<br /><br />自動翻訳: ion-input` のネイティブ `input` にフォーカスを設定する。グローバルな `input.focus()` の代わりに、このメソッドを使用します。  ページが入ったときに入力にフォーカスを当てたい開発者は、`ionViewDidEnter()` ライフサイクルメソッドの中で `setFocus()` を呼び出してください。 |
| **Signature** | `setFocus() => Promise<void>` |


