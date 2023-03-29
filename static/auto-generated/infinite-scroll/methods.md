

### complete

| | |
| --- | --- |
| **Description** | Call `complete()` within the `ionInfinite` output event handler when your async operation has completed. For example, the `loading` state is while the app is performing an asynchronous operation, such as receiving more data from an AJAX request to add more items to a data list. Once the data has been received and UI updated, you then call this method to signify that the loading has completed. This method will change the infinite scroll's state from `loading` to `enabled`.<br /><br />自動翻訳: 非同期操作が完了したら、`ionInfinite`出力イベントハンドラ内で `complete()` を呼び出します。例えば、AJAX リクエストからデータを受信してデータリストに項目を追加するなど、アプリが非同期処理を実行している間が `loading` 状態です。データの受信とUIの更新が完了したら、このメソッドを呼び出してロードが完了したことを知らせます。このメソッドは、無限スクロールの状態を `loading` から `enabled` へと変更します。 |
| **Signature** | `complete() => Promise<void>` |


