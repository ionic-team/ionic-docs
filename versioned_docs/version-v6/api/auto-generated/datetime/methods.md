

### cancel

| | |
| --- | --- |
| **Description** | Emits the ionCancel event and optionally closes the popover or modal that the datetime was presented in. |
| **Signature** | `cancel(closeOverlay?: boolean) => Promise<void>` |


### confirm

| | |
| --- | --- |
| **Description** | Confirms the selected datetime value, updates the `value` property, and optionally closes the popover or modal that the datetime was presented in. |
| **Signature** | `confirm(closeOverlay?: boolean) => Promise<void>` |


### reset

| | |
| --- | --- |
| **Description** | Resets the internal state of the datetime but does not update the value. Passing a valid ISO-8601 string will reset the state of the component to the provided date. If no value is provided, the internal state will be reset to the clamped value of the min, max and today. |
| **Signature** | `reset(startDate?: string) => Promise<void>` |


