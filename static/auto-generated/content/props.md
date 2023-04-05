

### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).<br /><br />自動翻訳: アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。一次色"`、二次色"`、三次色"`、成功色"`、警告色"`、危険色"`、明色"`、中色"`、暗色"`です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### forceOverscroll 

| | |
| --- | --- |
| **Description** | If `true` and the content does not cause an overflow scroll, the scroll interaction will cause a bounce. If the content exceeds the bounds of ionContent, nothing will change. Note, the does not disable the system bounce on iOS. That is an OS level setting.<br /><br />自動翻訳: `true`で、コンテンツがオーバーフロースクロールを引き起こさない場合、スクロールインタラクションはバウンスを引き起こします。コンテンツがionContentの境界を超えた場合、何も変化しません。iOSのシステムバウンスを無効にしないことに注意してください。これはOSレベルの設定です。 |
| **Attribute** | `force-overscroll` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |



### fullscreen 

| | |
| --- | --- |
| **Description** | If `true`, the content will scroll behind the headers and footers. This effect can easily be seen by setting the toolbar to transparent.<br /><br />自動翻訳: `true`の場合、コンテンツはヘッダーとフッターの後ろにスクロールされます。この効果は、ツールバーを透明に設定することで簡単に確認することができます。 |
| **Attribute** | `fullscreen` |
| **Type** | `boolean` |
| **Default** | `false` |



### scrollEvents 

| | |
| --- | --- |
| **Description** | Because of performance reasons, ionScroll events are disabled by default, in order to enable them and start listening from (ionScroll), set this property to `true`.<br /><br />自動翻訳: パフォーマンス上の理由から、ionScrollイベントはデフォルトで無効になっています。ionScrollイベントを有効にして(ionScroll)からリスニングを開始するには、このプロパティを`true`に設定します。 |
| **Attribute** | `scroll-events` |
| **Type** | `boolean` |
| **Default** | `false` |



### scrollX 

| | |
| --- | --- |
| **Description** | If you want to enable the content scrolling in the X axis, set this property to `true`.<br /><br />自動翻訳: X軸方向のコンテンツスクロールを有効にしたい場合は、このプロパティを`true`に設定します。 |
| **Attribute** | `scroll-x` |
| **Type** | `boolean` |
| **Default** | `false` |



### scrollY 

| | |
| --- | --- |
| **Description** | If you want to disable the content scrolling in the Y axis, set this property to `false`.<br /><br />自動翻訳: Y軸方向のコンテンツスクロールを無効にしたい場合は、このプロパティに`false`を設定します。 |
| **Attribute** | `scroll-y` |
| **Type** | `boolean` |
| **Default** | `true` |

