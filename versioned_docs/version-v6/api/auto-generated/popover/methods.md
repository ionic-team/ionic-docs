

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the popover overlay after it has been presented. |
| **Signature** | `dismiss(data?: any, role?: string, dismissParentPopover?: boolean) => Promise<boolean>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the popover did dismiss. |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the popover will dismiss. |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the popover overlay after it has been created. Developers can pass a mouse, touch, or pointer event to position the popover relative to where that event was dispatched. |
| **Signature** | `present(event?: MouseEvent ｜ TouchEvent ｜ PointerEvent ｜ CustomEvent) => Promise<void>` |


