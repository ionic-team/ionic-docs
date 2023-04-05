

### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the infinite scroll will be hidden and scroll event listeners will be removed.<br /><br />Set this to true to disable the infinite scroll from actively trying to receive new data while scrolling. This is useful when it is known that there is no more data that can be added, and the infinite scroll is no longer needed.<br /><br />自動翻訳: `true`の場合、無限スクロールは非表示になり、スクロールイベントリスナーが削除されます。  trueを設定すると、無限スクロールがスクロール中に新しいデータを積極的に受け取ろうとするのを無効にすることができます。これは、追加できるデータがもうないことが分かっていて、無限スクロールが不要になった場合に有効です。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### position 

| | |
| --- | --- |
| **Description** | The position of the infinite scroll element. The value can be either `top` or `bottom`.<br /><br />自動翻訳: 無限スクロール要素の位置を指定する。値は `top` または `bottom` のどちらかである。 |
| **Attribute** | `position` |
| **Type** | `"bottom" ｜ "top"` |
| **Default** | `'bottom'` |



### threshold 

| | |
| --- | --- |
| **Description** | The threshold distance from the bottom of the content to call the `infinite` output event when scrolled. The threshold value can be either a percent, or in pixels. For example, use the value of `10%` for the `infinite` output event to get called when the user has scrolled 10% from the bottom of the page. Use the value `100px` when the scroll is within 100 pixels from the bottom of the page.<br /><br />自動翻訳: スクロールしたときに `infinite` 出力イベントを呼び出すための、コンテンツの底からの閾値の距離。閾値はパーセントかピクセル単位で指定します。例えば、`10%`という値を使用すると、ユーザがページの下から10%スクロールしたときに `infinite` 出力イベントが呼び出されるようになります。また、ページの下から100ピクセル以内にスクロールした場合には、`100px`という値を使用します。 |
| **Attribute** | `threshold` |
| **Type** | `string` |
| **Default** | `'15%'` |

