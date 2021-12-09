# ion-split-pane

Split-Paneはマルチビューレイアウトを作成するときに便利です。
ビューポートの幅を広げると、メニューのようなUI要素を表示できます。

デバイスの画面幅が特定のサイズより小さい場合、分割ペインは縮小され、メニューは非表示になります。これは、ブラウザで提供され、アプリストアを通じてスマートフォンやタブレットにデプロイされるアプリを作成するのに理想的な動作です。


## Setting Breakpoints

デフォルトでは、画面が992pxを超えると分割ペインが拡張表示されます。これをカスタマイズするには、 `when` プロパティにブレークポイントを渡します。`when` プロパティには、真偽値、有効なメディア・クエリー、またはIonicの事前定義サイズのいずれかを指定できます。


```html
<!-- can be "xs", "sm", "md", "lg", or "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- can be any valid media query https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```


 | Size | Value                 | Description                                                           |
 |------|-----------------------|-----------------------------------------------------------------------|
 | `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |
 | `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |
 | `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px                       |
 | `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px (default break point) |
 | `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |

