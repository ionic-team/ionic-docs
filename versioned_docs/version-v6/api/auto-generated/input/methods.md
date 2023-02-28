

### getInputElement

| | |
| --- | --- |
| **Description** | Returns the native `<input>` element used under the hood. |
| **Signature** | `getInputElement() => Promise<HTMLInputElement>` |


### setFocus

| | |
| --- | --- |
| **Description** | Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.<br /><br />Developers who wish to focus an input when a page enters should call `setFocus()` in the `ionViewDidEnter()` lifecycle method. |
| **Signature** | `setFocus() => Promise<void>` |


