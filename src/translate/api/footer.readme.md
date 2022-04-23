# ion-footer

Footerは、ページの最下部にあるページのルートコンポーネントです。
Footerは、コンテンツ領域が正しくサイズ設定されていることを確認するために、`ion-toolbar` のラッパーとして使用できます。

## Fade Footer

The `collapse` property can be set to `'fade'` on a page's `ion-footer` to have the background color of the toolbars fade in as users scroll. This provides the same fade effect that is found in many native iOS applications.

### Usage with Virtual Scroll

Fade footer requires a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
</ion-content>
<ion-footer collapse="fade">
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
```
