# ion-header

Headerは、`toolbar`コンポーネントを保持する親コンポーネントです。
`ion-header` はページの3つのルート要素のうちの1つでなければならないことに注意してください。

## Fade Header

The `collapse` property can be set to `'fade'` on a page's main `ion-header` to have the background color of the toolbars fade in as users scroll. This provides the same fade effect that is found in many native iOS applications.

This functionality can be combined with [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles) as well. The `collapse="condense"` value should be set on the `ion-header` inside of your `ion-content`. The `collapse="fade"` value should be set on the `ion-header` outside of your `ion-content`.

