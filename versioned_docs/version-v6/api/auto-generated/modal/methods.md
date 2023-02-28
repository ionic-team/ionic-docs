

### dismiss

| | |
| --- | --- |
| **Description** | Dismiss the modal overlay after it has been presented. |
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` |


### getCurrentBreakpoint

| | |
| --- | --- |
| **Description** | Returns the current breakpoint of a sheet style modal |
| **Signature** | `getCurrentBreakpoint() => Promise<number ｜ undefined>` |


### onDidDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the modal did dismiss. |
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### onWillDismiss

| | |
| --- | --- |
| **Description** | Returns a promise that resolves when the modal will dismiss. |
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` |


### present

| | |
| --- | --- |
| **Description** | Present the modal overlay after it has been created. |
| **Signature** | `present() => Promise<void>` |


### setCurrentBreakpoint

| | |
| --- | --- |
| **Description** | Move a sheet style modal to a specific breakpoint. The breakpoint value must be a value defined in your `breakpoints` array. |
| **Signature** | `setCurrentBreakpoint(breakpoint: number) => Promise<void>` |


