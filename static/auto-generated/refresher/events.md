
| Name | Description |
| --- | --- |
| `ionPull` | Emitted while the user is pulling down the content and exposing the refresher.<br /><br />自動翻訳: ユーザーがコンテンツを引き下げ、リフレッシャーを露出している間に発する。 |
| `ionRefresh` | Emitted when the user lets go of the content and has pulled down further than the `pullMin` or pulls the content down and exceeds the pullMax. Updates the refresher state to `refreshing`. The `complete()` method should be called when the async operation has completed.<br /><br />自動翻訳: ユーザーがコンテンツから手を離し、`pullMin`を越えて下に引いたとき、またはコンテンツを下に引き、pullMaxを越えたときに発せられる。リフレッシャーの状態を `refreshing` に更新する。非同期処理が完了したら `complete()` メソッドを呼び出す必要があります。 |
| `ionStart` | Emitted when the user begins to start pulling down.<br /><br />自動翻訳: ユーザーが引き下げを開始するときに発する。 |

