
| Name | Description |
| --- | --- |
| `ionPull` | Emitted while the user is pulling down the content and exposing the refresher. |
| `ionRefresh` | Emitted when the user lets go of the content and has pulled down further than the `pullMin` or pulls the content down and exceeds the pullMax. Updates the refresher state to `refreshing`. The `complete()` method should be called when the async operation has completed. |
| `ionStart` | Emitted when the user begins to start pulling down. |

