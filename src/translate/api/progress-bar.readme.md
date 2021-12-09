# ion-progress-bar

Progress bars inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. There are two types of progress bars: `determinate` and `indeterminate`.

## Progress Type

### Determinate

Determinate is the default type. It should be used when the percentage of an operation is known. The progress is represented by setting the `value` property. This can be used to show the progress increasing from 0 to 100% of the track.

If the `buffer` property is set, a buffer stream will show with animated circles to indicate activity. The value of the `buffer` property will also be represented by how much visible track there is. If the value of `buffer` is less than the `value` property, there will be no visible track. If `buffer` is equal to `1` then the buffer stream will be hidden.

### Indeterminate

実行中の操作を表します。操作にかかる時間を示す必要はありません。

`reversed="true"`を指定した場合、ロード前状態を表すための表示となります。
