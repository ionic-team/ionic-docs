

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the alert overlay after it has been presented.<br /><br />自動翻訳: アラートオーバーレイが表示された後、解除する。 |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the alert did dismiss.<br /><br />自動翻訳: アラートが解除されたことを解決するプロミスを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the alert will dismiss.<br /><br />自動翻訳: アラートが解除されるタイミングを解決するプロミスを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the alert overlay after it has been created.<br /><br />自動翻訳: アラートオーバーレイを作成した後に提示する。 |
| **Signature** | `present() => Promise<void>` |


