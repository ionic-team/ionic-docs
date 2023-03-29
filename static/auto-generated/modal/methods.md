

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the modal overlay after it has been presented.<br /><br />自動翻訳: モーダルオーバーレイが表示された後、それを解除する。 |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### getCurrentBreakpoint

| | |
| --- | --- |
| **Description** | Returns the current breakpoint of a sheet style modal<br /><br />自動翻訳: シートスタイルモーダルの現在のブレークポイントを返します。 |
| **Signature** | `getCurrentBreakpoint() => Promise<number ｜ undefined>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the modal did dismiss.<br /><br />自動翻訳: モーダルが解除されたときに解決するプロミスを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the modal will dismiss.<br /><br />自動翻訳: モーダルがいつ解散するかを解決するプロミスを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the modal overlay after it has been created.<br /><br />自動翻訳: モーダルオーバーレイを作成した後に提示する。 |
| **Signature** | `present() => Promise<void>` |


### setCurrentBreakpoint

| | |
| --- | --- |
| **Description** | Move a sheet style modal to a specific breakpoint. The breakpoint value must be a value defined in your `breakpoints` array.<br /><br />自動翻訳: シートスタイルモーダルを特定のブレークポイントに移動します。ブレークポイントの値は、 `breakpoints` 配列で定義された値でなければなりません。 |
| **Signature** | `setCurrentBreakpoint(breakpoint: number) => Promise<void>` |


