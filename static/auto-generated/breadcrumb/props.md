

### active 

| | |
| --- | --- |
| **Description** | If `true`, the breadcrumb will take on a different look to show that it is the currently active breadcrumb. Defaults to `true` for the last breadcrumb if it is not set on any.<br /><br />自動翻訳: `true`の場合、パンくずが現在アクティブなパンくずであることを示すために、パンくずの外観を変化させることができる。最後のパンくずが設定されていない場合、デフォルトは `true` です。 |
| **Attribute** | `active` |
| **Type** | `boolean` |
| **Default** | `false` |



### color 

| | |
| --- | --- |
| **Description** | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).<br /><br />自動翻訳: アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。一次色"`、二次色"`、三次色"`、成功色"`、警告色"`、危険色"`、明色"`、中色"`、暗色"`です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string & Record<never, never> ｜ undefined` |
| **Default** | `undefined` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the user cannot interact with the breadcrumb.<br /><br />自動翻訳: `true`の場合、ユーザーはパンくずと対話することができない。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### download 

| | |
| --- | --- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).<br /><br />自動翻訳: この属性は、ブラウザが URL に移動する代わりに URL をダウンロードするように指示し、ユーザはローカルファイルとして保存するように促されます。この属性に値がある場合、保存のプロンプトであらかじめ入力されたファイル名として使用されます（ユーザーはファイル名を変更することができます）。 |
| **Attribute** | `download` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### href 

| | |
| --- | --- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.<br /><br />自動翻訳: ハイパーリンクが指し示す URL または URL フラグメントを格納する。このプロパティが設定されている場合、アンカータグがレンダリングされます。 |
| **Attribute** | `href` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### rel 

| | |
| --- | --- |
| **Description** | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).<br /><br />自動翻訳: ターゲットオブジェクトとリンクオブジェクトの関係を指定する。値は、スペースで区切られた[リンクタイプ](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)のリストである。 |
| **Attribute** | `rel` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### routerAnimation 

| | |
| --- | --- |
| **Description** | When using a router, it specifies the transition animation when navigating to another page using `href`.<br /><br />自動翻訳: ルータを使用する場合、`href`を使用して別のページに移動する際の遷移アニメーションを指定する。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### routerDirection 

| | |
| --- | --- |
| **Description** | When using a router, it specifies the transition direction when navigating to another page using `href`.<br /><br />自動翻訳: ルータを使用する場合、`href`を使用して他のページに移動する際の遷移方向を指定する。 |
| **Attribute** | `router-direction` |
| **Type** | `"back" ｜ "forward" ｜ "root"` |
| **Default** | `'forward'` |



### separator 

| | |
| --- | --- |
| **Description** | If true, show a separator between this breadcrumb and the next. Defaults to `true` for all breadcrumbs except the last.<br /><br />自動翻訳: trueの場合、このパンくずと次のパンくずの間にセパレータを表示する。デフォルトは `true` で、最後のパンくずを除くすべてのパンくずが表示されます。 |
| **Attribute** | `separator` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |



### target 

| | |
| --- | --- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.<br /><br />自動翻訳: リンク先のURLを表示する場所を指定する。href`を指定した場合のみ適用される。特別なキーワードがあります。_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute** | `target` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |

