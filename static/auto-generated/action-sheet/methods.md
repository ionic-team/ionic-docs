

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the action sheet overlay after it has been presented.<br /><br />自動翻訳: アクションシートのオーバーレイが提示された後、それを解除する。 |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the action sheet did dismiss.<br /><br />自動翻訳: アクションシートが解散したときに解決するプロミスを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the action sheet will dismiss.<br /><br />自動翻訳: アクションシートが解散するタイミングを解決するプロミスを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the action sheet overlay after it has been created.<br /><br />自動翻訳: アクションシートのオーバーレイを作成後に提示する。 |
| **Signature** | `present() => Promise<void>` |


