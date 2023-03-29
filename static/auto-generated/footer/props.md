

### collapse 

| | |
| --- | --- |
| **Description** | Describes the scroll effect that will be applied to the footer. Only applies in iOS mode.<br /><br />自動翻訳: フッターに適用されるスクロール効果を記述する。iOSモードでのみ適用されます。 |
| **Attribute** | `collapse` |
| **Type** | `"fade" ｜ undefined` |
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
| **Description** | If `true`, the footer will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />Note: In order to scroll content behind the footer, the `fullscreen` attribute needs to be set on the content.<br /><br />自動翻訳: `true`の場合、フッターは半透明になります。モードが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合のみ適用されます。  注意：フッターの後ろにコンテンツをスクロールさせるためには、コンテンツに `fullscreen` 属性が設定されている必要があります。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |

