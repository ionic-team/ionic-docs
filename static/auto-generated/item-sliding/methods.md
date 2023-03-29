

### close

| | |
| --- | --- |
| **Description** | Close the sliding item. Items can also be closed from the [List](./list).<br /><br />自動翻訳: スライドしているアイテムを閉じる。アイテムは[リスト](./list)からも閉じることができます。 |
| **Signature** | `close() => Promise<void>` |


### closeOpened

| | |
| --- | --- |
| **Description** | Close all of the sliding items in the list. Items can also be closed from the [List](./list).<br /><br />自動翻訳: リスト内のスライドアイテムをすべて閉じます。アイテムは、[リスト](./list)からも閉じることができます。 |
| **Signature** | `closeOpened() => Promise<boolean>` |


### getOpenAmount

| | |
| --- | --- |
| **Description** | Get the amount the item is open in pixels.<br /><br />自動翻訳: アイテムが開いている量をピクセル単位で取得します。 |
| **Signature** | `getOpenAmount() => Promise<number>` |


### getSlidingRatio

| | |
| --- | --- |
| **Description** | Get the ratio of the open amount of the item compared to the width of the options. If the number returned is positive, then the options on the right side are open. If the number returned is negative, then the options on the left side are open. If the absolute value of the number is greater than 1, the item is open more than the width of the options.<br /><br />自動翻訳: オプションの幅と比較した、アイテムのオープン量の比率を取得します。返された数値が正の場合、右側のオプションが開いていることになります。返された数値が負の場合、左側のオプションが開いている。数値の絶対値が1より大きい場合、その項目は選択肢の幅より多く開いていることになります。 |
| **Signature** | `getSlidingRatio() => Promise<number>` |


### open

| | |
| --- | --- |
| **Description** | Open the sliding item.<br /><br />自動翻訳: スライド式の項目を開く。 |
| **Signature** | `open(side: Side ｜ undefined) => Promise<void>` |


