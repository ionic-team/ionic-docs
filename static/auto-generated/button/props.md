

### buttonType 

| | |
| --- | --- |
| **Description** | The type of button.<br /><br />自動翻訳: ボタンの種類です。 |
| **Attribute** | `button-type` |
| **Type** | `string` |
| **Default** | `'button'` |



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
| **Description** | If `true`, the user cannot interact with the button.<br /><br />自動翻訳: `true`の場合、ユーザはボタンと対話することができない。 |
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



### expand 

| | |
| --- | --- |
| **Description** | Set to `"block"` for a full-width button or to `"full"` for a full-width button with square corners and no left or right borders.<br /><br />自動翻訳: 全角のボタンなら`"block"`、角が四角く左右のボーダーがない全角のボタンなら`"full"`に設定します。 |
| **Attribute** | `expand` |
| **Type** | `"block" ｜ "full" ｜ undefined` |
| **Default** | `undefined` |



### fill 

| | |
| --- | --- |
| **Description** | Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is `"solid"` except inside of a toolbar, where the default is `"clear"`.<br /><br />自動翻訳: フラットなボタンに似た透明なボタンには `"clear"` を、ボーダーのある透明なボタンには `"outline"` を、背景を塗りつぶしたボタンには `"solid"` を設定します。デフォルトの塗りつぶしは `"solid"` です。ただし、ツールバーの内側では `"clear"` となります。 |
| **Attribute** | `fill` |
| **Type** | `"clear" ｜ "default" ｜ "outline" ｜ "solid" ｜ undefined` |
| **Default** | `undefined` |



### form 

| | |
| --- | --- |
| **Description** | The HTML form element or form element id. Used to submit a form when the button is not a child of the form.<br /><br />自動翻訳: HTML のフォーム要素またはフォーム要素 ID。ボタンがフォームの子でない場合に、フォームを送信するために使用します。 |
| **Attribute** | `form` |
| **Type** | `HTMLFormElement ｜ string ｜ undefined` |
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



### shape 

| | |
| --- | --- |
| **Description** | Set to `"round"` for a button with more rounded corners.<br /><br />自動翻訳: round"` に設定すると、より角が丸いボタンになります。 |
| **Attribute** | `shape` |
| **Type** | `"round" ｜ undefined` |
| **Default** | `undefined` |



### size 

| | |
| --- | --- |
| **Description** | Set to `"small"` for a button with less height and padding, to `"default"` for a button with the default height and padding, or to `"large"` for a button with more height and padding. By default the size is unset, unless the button is inside of an item, where the size is `"small"` by default. Set the size to `"default"` inside of an item to make it a standard size button.<br /><br />自動翻訳: ボタンの高さとパディングが少ない場合は `"small"` に、ボタンの高さとパディングがデフォルトの場合は `"default"` に、ボタンの高さとパディングが多い場合は `"large"` に設定します。ただし、ボタンがアイテムの中にある場合は、デフォルトでサイズが `"small"` になっています。アイテムの内部でサイズを `"default"` に設定すると、標準サイズのボタンになります。 |
| **Attribute** | `size` |
| **Type** | `"default" ｜ "large" ｜ "small" ｜ undefined` |
| **Default** | `undefined` |



### strong 

| | |
| --- | --- |
| **Description** | If `true`, activates a button with a heavier font weight.<br /><br />自動翻訳: `true`の場合、より重いフォントウェイトを持つボタンをアクティブにする。 |
| **Attribute** | `strong` |
| **Type** | `boolean` |
| **Default** | `false` |



### target 

| | |
| --- | --- |
| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.<br /><br />自動翻訳: リンク先のURLを表示する場所を指定する。href`を指定した場合のみ適用される。特別なキーワードがあります。_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute** | `target` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### type 

| | |
| --- | --- |
| **Description** | The type of the button.<br /><br />自動翻訳: ボタンの種類です。 |
| **Attribute** | `type` |
| **Type** | `"button" ｜ "reset" ｜ "submit"` |
| **Default** | `'button'` |

