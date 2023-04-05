

### collapse 

| | |
| --- | --- |
| **Description** | Describes the scroll effect that will be applied to the header. Only applies in iOS mode.<br /><br />Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)<br /><br />自動翻訳: ヘッダーに適用されるスクロール効果を記述する。iOSモードでのみ適用されます。  通常、[折りたたみ式大型タイトル](https://ionicframework.com/docs/api/title#collapsible-large-titles)に使用します。 |
| **Attribute** | `collapse` |
| **Type** | `"condense" ｜ "fade" ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the header will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />Note: In order to scroll content behind the header, the `fullscreen` attribute needs to be set on the content.<br /><br />自動翻訳: `true`の場合、ヘッダーは半透明になります。モードが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。  注意：ヘッダーの後ろにコンテンツをスクロールさせるには、コンテンツに `fullscreen` 属性が設定されている必要があります。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

