# ion-progress-bar

ion-progress-bar は操作や処理の進捗を可視化するための、水平方向のプログレスバーです。`determinate` または `indeterminate`の2タイプから選択できます。

## Progress Type

### Determinate

操作の進捗率が分かる場合はdeterminateタイプを選択するべきです。このタイプはデフォルトであり、進捗率は`value`属性値にて指定します。

バッファは何らかの処理中であることを表す、円のアニメーションを表示します。 `buffer`属性値が1より小さければ、追加のバッファ処理の進捗率を示すことが可能です。

### Indeterminate

実行中の操作を表します。操作にかかる時間を示す必要はありません。

`reversed="true"`を指定した場合、ロード前状態を表すための表示となります。
