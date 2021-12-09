# ion-content

Contentコンポーネントは、スクロール可能領域を制御するいくつかの便利なメソッドを備えた、
使いやすいコンテンツ領域を提供します。
1つのビューに表示できるコンテンツは1つだけです。

Contentは、他の多くのIonicコンポーネントと同様に、 [CSS Utilities](/docs/layout/css-utilities) で提供されるグローバルスタイルを使用するか、CSSおよび使用可能な [CSS Custom Properties](#css-custom-properties) を使用して個別にスタイル設定することによって、`padding` や `margin` などを変更するようにカスタマイズできます。


## Fixed Content

In order to place elements outside of the scrollable area, `slot="fixed"` can be added to the element. This will absolutely position the element placing it in the top left. In order to place the element in a different position, style it using [top, right, bottom, and left](https://developer.mozilla.org/en-US/docs/Web/CSS/position).

