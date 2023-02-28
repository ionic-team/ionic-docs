

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the picker overlay after it has been presented. |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### getColumn

| | |
| --- | --- |
| **Description** | Get the column that matches the specified name. |
| **Signature** | `getColumn(name: string) => Promise<PickerColumn ｜ undefined>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the picker did dismiss. |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the picker will dismiss. |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the picker overlay after it has been created. |
| **Signature** | `present() => Promise<void>` |


