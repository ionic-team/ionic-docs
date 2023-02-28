

### close

| | |
| --- | --- |
| **Description** | Closes the menu. If the menu is already closed or it can't be closed, it returns `false`. |
| **Signature** | `close(animated?: boolean) => Promise<boolean>` |


### isActive

| | |
| --- | --- |
| **Description** | Returns `true` is the menu is active.<br /><br />A menu is active when it can be opened or closed, meaning it's enabled and it's not part of a `ion-split-pane`. |
| **Signature** | `isActive() => Promise<boolean>` |


### isOpen

| | |
| --- | --- |
| **Description** | Returns `true` is the menu is open. |
| **Signature** | `isOpen() => Promise<boolean>` |


### open

| | |
| --- | --- |
| **Description** | Opens the menu. If the menu is already open or it can't be opened, it returns `false`. |
| **Signature** | `open(animated?: boolean) => Promise<boolean>` |


### setOpen

| | |
| --- | --- |
| **Description** | Opens or closes the button. If the operation can't be completed successfully, it returns `false`. |
| **Signature** | `setOpen(shouldOpen: boolean, animated?: boolean) => Promise<boolean>` |


### toggle

| | |
| --- | --- |
| **Description** | Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it. If the operation can't be completed successfully, it returns `false`. |
| **Signature** | `toggle(animated?: boolean) => Promise<boolean>` |


