

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the picker overlay after it has been presented.<br /><br />自動翻訳: ピッカー・オーバーレイが表示された後、それを解除する。 |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### getColumn

| | |
| --- | --- |
| **Description** | Get the column that matches the specified name.<br /><br />自動翻訳: 指定された名前に一致するカラムを取得します。 |
| **Signature** | `getColumn(name: string) => Promise<PickerColumn ｜ undefined>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the picker did dismiss.<br /><br />自動翻訳: ピッカーが解散したことを解決するプロミスを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the picker will dismiss.<br /><br />自動翻訳: ピッカーが解散するタイミングを解決するプロミスを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the picker overlay after it has been created.<br /><br />自動翻訳: ピッカー・オーバーレイを作成した後に提示する。 |
| **Signature** | `present() => Promise<void>` |


