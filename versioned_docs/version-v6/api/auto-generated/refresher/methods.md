

### cancel

| | |
| --- | --- |
| **Description** | Changes the refresher's state from `refreshing` to `cancelling`. |
| **Signature** | `cancel() => Promise<void>` |


### complete

| | |
| --- | --- |
| **Description** | Call `complete()` when your async operation has completed. For example, the `refreshing` state is while the app is performing an asynchronous operation, such as receiving more data from an AJAX request. Once the data has been received, you then call this method to signify that the refreshing has completed and to close the refresher. This method also changes the refresher's state from `refreshing` to `completing`. |
| **Signature** | `complete() => Promise<void>` |


### getProgress

| | |
| --- | --- |
| **Description** | A number representing how far down the user has pulled. The number `0` represents the user hasn't pulled down at all. The number `1`, and anything greater than `1`, represents that the user has pulled far enough down that when they let go then the refresh will happen. If they let go and the number is less than `1`, then the refresh will not happen, and the content will return to it's original position. |
| **Signature** | `getProgress() => Promise<number>` |


