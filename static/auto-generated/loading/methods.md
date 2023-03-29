

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the loading overlay after it has been presented.<br /><br />自動翻訳: ローディングオーバーレイが提示された後、それを解除する。 |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the loading did dismiss.<br /><br />自動翻訳: ローディングが解除されたタイミングを解決するプロミスを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the loading will dismiss.<br /><br />自動翻訳: ローディングが解除されるタイミングを解決するプロミスを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the loading overlay after it has been created.<br /><br />自動翻訳: 作成後のローディングオーバーレイを提示する。 |
| **Signature** | `present() => Promise<void>` |


