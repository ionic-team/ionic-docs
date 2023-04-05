

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the toast overlay after it has been presented.<br /><br />自動翻訳: トーストのオーバーレイが提示された後、それを解除する。 |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the toast did dismiss.<br /><br />自動翻訳: トーストが解散したことを解決するプロミスを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the toast will dismiss.<br /><br />自動翻訳: トーストが解散するタイミングを解決するプロミスを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the toast overlay after it has been created.<br /><br />自動翻訳: トーストのオーバーレイを作成した後に提示する。 |
| **Signature** | `present() => Promise<void>` |


