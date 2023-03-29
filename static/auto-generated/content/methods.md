

### getScrollElement

| | |
| --- | --- |
| **Description** | Get the element where the actual scrolling takes place. This element can be used to subscribe to `scroll` events or manually modify `scrollTop`. However, it's recommended to use the API provided by `ion-content`:<br /><br />i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events and `scrollToPoint()` to scroll the content into a certain point.<br /><br />自動翻訳: 実際のスクロールが行われる要素を取得します。この要素を使用して、`scroll` イベントを購読したり、`scrollTop` を手動で変更したりすることができる。スクロールイベントには `ionScroll`, `ionScrollStart`, `ionScrollEnd` を、コンテンツを特定のポイントにスクロールさせるには `scrollToPoint()` を使用することが推奨されます。 |
| **Signature** | `getScrollElement() => Promise<HTMLElement>` |


### scrollByPoint

| | |
| --- | --- |
| **Description** | Scroll by a specified X/Y distance in the component.<br /><br />自動翻訳: コンポーネントを指定したX/Y距離だけスクロールさせる。 |
| **Signature** | `scrollByPoint(x: number, y: number, duration: number) => Promise<void>` |


### scrollToBottom

| | |
| --- | --- |
| **Description** | Scroll to the bottom of the component.<br /><br />自動翻訳: コンポーネントの一番下までスクロールします。 |
| **Signature** | `scrollToBottom(duration?: number) => Promise<void>` |


### scrollToPoint

| | |
| --- | --- |
| **Description** | Scroll to a specified X/Y location in the component.<br /><br />自動翻訳: コンポーネント内の指定したX/Y位置までスクロールする。 |
| **Signature** | `scrollToPoint(x: number ｜ undefined ｜ null, y: number ｜ undefined ｜ null, duration?: number) => Promise<void>` |


### scrollToTop

| | |
| --- | --- |
| **Description** | Scroll to the top of the component.<br /><br />自動翻訳: コンポーネントの上部にスクロールします。 |
| **Signature** | `scrollToTop(duration?: number) => Promise<void>` |


