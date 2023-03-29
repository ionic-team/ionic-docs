

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the popover overlay after it has been presented.<br /><br />自動翻訳: ポップオーバーオーバーレイが提示された後、それを解除する。 |
| **Signature** | `dismiss(data?: any, role?: string, dismissParentPopover?: boolean) => Promise<boolean>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the popover did dismiss.<br /><br />自動翻訳: ポップオーバーが解除されたタイミングを解決するプロミスを返します。 |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the popover will dismiss.<br /><br />自動翻訳: ポップオーバーが解除されるタイミングを解決するプロミスを返します。 |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the popover overlay after it has been created. Developers can pass a mouse, touch, or pointer event to position the popover relative to where that event was dispatched.<br /><br />自動翻訳: ポップオーバーが作成された後に、ポップオーバーを表示します。開発者は、マウス、タッチ、またはポインタイベントを渡すことで、そのイベントがディスパッチされた場所と相対的にポップオーバーを配置することができます。 |
| **Signature** | `present(event?: MouseEvent ｜ TouchEvent ｜ PointerEvent ｜ CustomEvent) => Promise<void>` |


