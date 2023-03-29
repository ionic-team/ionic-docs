

### canGoBack

| | |
| --- | --- |
| **Description** | Returns `true` if the current view can go back.<br /><br />自動翻訳: 現在のビューが戻ることができる場合は `true` を返します。 |
| **Signature** | `canGoBack(view?: ViewController) => Promise<boolean>` |


### getActive

| | |
| --- | --- |
| **Description** | Get the active view.<br /><br />自動翻訳: アクティブビューを取得します。 |
| **Signature** | `getActive() => Promise<ViewController ｜ undefined>` |


### getByIndex

| | |
| --- | --- |
| **Description** | Get the view at the specified index.<br /><br />自動翻訳: 指定されたインデックスにあるビューを取得します。 |
| **Signature** | `getByIndex(index: number) => Promise<ViewController ｜ undefined>` |


### getPrevious

| | |
| --- | --- |
| **Description** | Get the previous view.<br /><br />自動翻訳: 前のビューを取得します。 |
| **Signature** | `getPrevious(view?: ViewController) => Promise<ViewController ｜ undefined>` |


### insert

| | |
| --- | --- |
| **Description** | Inserts a component into the navigation stack at the specified index. This is useful to add a component at any point in the navigation stack.<br /><br />自動翻訳: 指定されたインデックスのナビゲーションスタックにコンポーネントを挿入します。これは、ナビゲーションスタックの任意の位置にコンポーネントを追加するのに便利です。 |
| **Signature** | `insert<T extends NavComponent>(insertIndex: number, component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### insertPages

| | |
| --- | --- |
| **Description** | Inserts an array of components into the navigation stack at the specified index. The last component in the array will become instantiated as a view, and animate in to become the active view.<br /><br />自動翻訳: 指定されたインデックスのナビゲーションスタックにコンポーネントの配列を挿入する。配列の最後のコンポーネントはビューとしてインスタンス化され、アニメーションしてアクティブビューになります。 |
| **Signature** | `insertPages(insertIndex: number, insertComponents: NavComponent[] ｜ NavComponentWithProps[], opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### pop

| | |
| --- | --- |
| **Description** | Pop a component off of the navigation stack. Navigates back from the current component.<br /><br />自動翻訳: ナビゲーションスタックからコンポーネントをポップオフする。現在のコンポーネントからナビゲートして戻る。 |
| **Signature** | `pop(opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### popTo

| | |
| --- | --- |
| **Description** | Pop to a specific index in the navigation stack.<br /><br />自動翻訳: ナビゲーションスタック内の特定のインデックスにポップします。 |
| **Signature** | `popTo(indexOrViewCtrl: number ｜ ViewController, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### popToRoot

| | |
| --- | --- |
| **Description** | Navigate back to the root of the stack, no matter how far back that is.<br /><br />自動翻訳: スタックのルートまで戻ってナビゲートする、それがどんなに遠くても。 |
| **Signature** | `popToRoot(opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### push

| | |
| --- | --- |
| **Description** | Push a new component onto the current navigation stack. Pass any additional information along as an object. This additional information is accessible through NavParams.<br /><br />自動翻訳: 新しいコンポーネントを現在のナビゲーションスタックにプッシュします。追加情報があれば、オブジェクトとして一緒に渡す。この追加情報には、NavParamsからアクセスできます。 |
| **Signature** | `push<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### removeIndex

| | |
| --- | --- |
| **Description** | Removes a component from the navigation stack at the specified index.<br /><br />自動翻訳: 指定されたインデックスにあるコンポーネントをナビゲーションスタックから削除します。 |
| **Signature** | `removeIndex(startIndex: number, removeCount?: number, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### setPages

| | |
| --- | --- |
| **Description** | Set the views of the current navigation stack and navigate to the last view. By default animations are disabled, but they can be enabled by passing options to the navigation controller. Navigation parameters can also be passed to the individual pages in the array.<br /><br />自動翻訳: 現在のナビゲーションスタックのビューを設定し、最後のビューにナビゲートします。デフォルトではアニメーションは無効になっていますが、ナビゲーションコントローラーにオプションを渡すことで有効にすることができます。ナビゲーションパラメーターは、配列内の各ページに渡すこともできます。 |
| **Signature** | `setPages(views: NavComponent[] ｜ NavComponentWithProps[], opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### setRoot

| | |
| --- | --- |
| **Description** | Set the root for the current navigation stack to a component.<br /><br />自動翻訳: 現在のナビゲーションスタックのルートをコンポーネントに設定します。 |
| **Signature** | `setRoot<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


