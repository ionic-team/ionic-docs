

### beforeEnter 

| | |
| --- | --- |
| **Description** | A navigation hook that is fired when the route tries to enter. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified.<br /><br />自動翻訳: ルートが入力しようとしたときに発生するナビゲーションフックです。 `true`を返すとナビゲーションを進めることができ、`false`を返すとナビゲーションをキャンセルすることができます。NavigationHookOptions`オブジェクトを返すと、ルーターは指定されたパスにリダイレクトするようになります。 |
| **Attribute** | `undefined` |
| **Type** | `(() => NavigationHookResult ｜ Promise<NavigationHookResult>) ｜ undefined` |
| **Default** | `undefined` |



### beforeLeave 

| | |
| --- | --- |
| **Description** | A navigation hook that is fired when the route tries to leave. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified.<br /><br />自動翻訳: ルートが離脱しようとしたときに発生するナビゲーションフックです。 `true`を返すとナビゲーションを進めることができ、`false`を返すとナビゲーションをキャンセルすることができます。NavigationHookOptions`オブジェクトを返すと、ルーターは指定されたパスにリダイレクトするようになります。 |
| **Attribute** | `undefined` |
| **Type** | `(() => NavigationHookResult ｜ Promise<NavigationHookResult>) ｜ undefined` |
| **Default** | `undefined` |



### component 

| | |
| --- | --- |
| **Description** | Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-nav`) when the route matches.<br /><br />The value of this property is not always the tagname of the component to load, in `ion-tabs` it actually refers to the name of the `ion-tab` to select.<br /><br />自動翻訳: ルートが一致したときに、ナビゲーションアウトレット（`ion-tabs`、`ion-nav`）にロード/選択するコンポーネントの名前。  このプロパティの値は、常にロードするコンポーネントのタグ名とは限らず、`ion-tabs`では、実際には選択する `ion-tab` の名前を指します。 |
| **Attribute** | `component` |
| **Type** | `string` |
| **Default** | `undefined` |



### componentProps 

| | |
| --- | --- |
| **Description** | A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed to the defined component when rendered.<br /><br />自動翻訳: キーとなる値 `{ 'red': true, 'blue':'white'}` には、レンダリング時に定義されたコンポーネントに渡すべき小道具が含まれる。 |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### url 

| | |
| --- | --- |
| **Description** | Relative path that needs to match in order for this route to apply.<br /><br />Accepts paths similar to expressjs so that you can define parameters in the url /foo/:bar where bar would be available in incoming props.<br /><br />自動翻訳: このルートを適用するために一致させる必要がある相対パスです。  expressjs と同様にパスを受け付けるので、/foo/:bar のような url でパラメータを定義し、受信する props で bar を利用することができます。 |
| **Attribute** | `url` |
| **Type** | `string` |
| **Default** | `''` |

