

### cancel

| | |
| --- | --- |
| **Description** | Changes the refresher's state from `refreshing` to `cancelling`.<br /><br />自動翻訳: リフレッシュの状態を `refreshing` から `cancelling` に変更する。 |
| **Signature** | `cancel() => Promise<void>` |


### complete

| | |
| --- | --- |
| **Description** | Call `complete()` when your async operation has completed. For example, the `refreshing` state is while the app is performing an asynchronous operation, such as receiving more data from an AJAX request. Once the data has been received, you then call this method to signify that the refreshing has completed and to close the refresher. This method also changes the refresher's state from `refreshing` to `completing`.<br /><br />自動翻訳: 非同期操作が完了したら `complete()` を呼び出します。例えば、`refreshing`状態は、アプリがAJAXリクエストからより多くのデータを受信するなど、非同期操作を実行している間です。データを受信したら、このメソッドを呼び出して、リフレッシュが完了したことを示し、リフレッシュャを閉じます。このメソッドは、リフレッシャーの状態を `refreshing` から `completing` に変更します。 |
| **Signature** | `complete() => Promise<void>` |


### getProgress

| | |
| --- | --- |
| **Description** | A number representing how far down the user has pulled. The number `0` represents the user hasn't pulled down at all. The number `1`, and anything greater than `1`, represents that the user has pulled far enough down that when they let go then the refresh will happen. If they let go and the number is less than `1`, then the refresh will not happen, and the content will return to it's original position.<br /><br />自動翻訳: ユーザーがどれだけ下に引っ張られたかを表す数値です。数値 `0` は、ユーザーが全く下に引いていないことを表します。数値 `1` および `1` より大きい数値は、ユーザーが手を離したときに更新が行われるほど十分に下に引っ張られたことを表します。もしユーザーが手を離し、数値が `1` より小さい場合は、更新は行われず、コンテンツは元の位置に戻ります。 |
| **Signature** | `getProgress() => Promise<number>` |


