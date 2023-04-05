

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the modal will animate.<br /><br />自動翻訳: `true`の場合、モーダルはアニメーションを行います。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropBreakpoint 

| | |
| --- | --- |
| **Description** | A decimal value between 0 and 1 that indicates the point after which the backdrop will begin to fade in when using a sheet modal. Prior to this point, the backdrop will be hidden and the content underneath the sheet can be interacted with. This value is exclusive meaning the backdrop will become active after the value specified.<br /><br />自動翻訳: シートモーダル使用時に背景がフェードインし始めるポイントを示す0～1の10進数値です。それ以前は、背景は非表示で、シートの下のコンテンツは操作可能です。この値は排他的で、指定された値の後に背景がアクティブになることを意味します。 |
| **Attribute** | `backdrop-breakpoint` |
| **Type** | `number` |
| **Default** | `0` |



### backdropDismiss 

| | |
| --- | --- |
| **Description** | If `true`, the modal will be dismissed when the backdrop is clicked.<br /><br />自動翻訳: `true`の場合、バックドロップがクリックされるとモーダルは解除されます。 |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### breakpoints 

| | |
| --- | --- |
| **Description** | The breakpoints to use when creating a sheet modal. Each value in the array must be a decimal between 0 and 1 where 0 indicates the modal is fully closed and 1 indicates the modal is fully open. Values are relative to the height of the modal, not the height of the screen. One of the values in this array must be the value of the `initialBreakpoint` property. For example: [0, .25, .5, 1]<br /><br />自動翻訳: シート モーダルを作成するときに使用するブレークポイントです。配列の各値は 0 から 1 の間の 10 進数でなければならず、0 はモーダルが完全に閉じていることを、1 はモーダルが完全に開いていることを示しています。値は、画面の高さではなく、モーダルの高さに対する相対値です。この配列の値の1つは、`initialBreakpoint` プロパティの値でなければなりません。例えば[0, .25, .5, 1] |
| **Attribute** | `undefined` |
| **Type** | `number[] ｜ undefined` |
| **Default** | `undefined` |



### canDismiss 

| | |
| --- | --- |
| **Description** | Determines whether or not a modal can dismiss when calling the `dismiss` method.<br /><br />If the value is `true` or the value's function returns `true`, the modal will close when trying to dismiss. If the value is `false` or the value's function returns `false`, the modal will not close when trying to dismiss.<br /><br />自動翻訳: モーダルが `dismiss` メソッドを呼び出したときに、退出できるかどうかを決定します。  値が `true` または値の関数が `true` を返す場合、モーダルは終了しようとするときに閉じます。値が `false` または値の関数が `false` を返す場合、モーダルは終了しようとしたときに閉じません。 |
| **Attribute** | `can-dismiss` |
| **Type** | `((data?: any, role?: string ｜ undefined) => Promise<boolean>) ｜ boolean ｜ undefined` |
| **Default** | `undefined` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the modal is presented.<br /><br />自動翻訳: モーダルが表示されたときに使用するアニメーション。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### handle 

| | |
| --- | --- |
| **Description** | The horizontal line that displays at the top of a sheet modal. It is `true` by default when setting the `breakpoints` and `initialBreakpoint` properties.<br /><br />自動翻訳: シートモーダルの上部に表示される水平線です。breakpoints`と`initialBreakpoint`プロパティを設定すると、デフォルトで`true`になります。 |
| **Attribute** | `handle` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |



### handleBehavior 

| | |
| --- | --- |
| **Description** | The interaction behavior for the sheet modal when the handle is pressed.<br /><br />Defaults to `"none"`, which  means the modal will not change size or position when the handle is pressed. Set to `"cycle"` to let the modal cycle between available breakpoints when pressed.<br /><br />Handle behavior is unavailable when the `handle` property is set to `false` or when the `breakpoints` property is not set (using a fullscreen or card modal).<br /><br />自動翻訳: ハンドルが押されたときのシートモーダルのインタラクション動作です。  デフォルトは `"none"` で、ハンドルが押されてもモーダルはサイズも位置も変わりません。cycle"` に設定すると、押されたときにモーダルが利用可能なブレークポイント間を循環するようになります。  ハンドルの動作は、`handle` プロパティが `false` に設定されている場合、または `breakpoints` プロパティが設定されていない場合（フルスクリーンまたはカード モーダルを使用している場合）には、利用できません。 |
| **Attribute** | `handle-behavior` |
| **Type** | `"cycle" ｜ "none" ｜ undefined` |
| **Default** | `'none'` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the modal.<br /><br />自動翻訳: モーダルに渡す追加属性。 |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### initialBreakpoint 

| | |
| --- | --- |
| **Description** | A decimal value between 0 and 1 that indicates the initial point the modal will open at when creating a sheet modal. This value must also be listed in the `breakpoints` array.<br /><br />自動翻訳: シートモーダル作成時にモーダルが開く初期点を示す 0 から 1 までの 10 進値。この値は `breakpoints` 配列にも記載されている必要があります。 |
| **Attribute** | `initial-breakpoint` |
| **Type** | `number ｜ undefined` |
| **Default** | `undefined` |



### isOpen 

| | |
| --- | --- |
| **Description** | If `true`, the modal will open. If `false`, the modal will close. Use this if you need finer grained control over presentation, otherwise just use the modalController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the modal dismisses. You will need to do that in your code.<br /><br />自動翻訳: `true`の場合、モーダルは開かれます。 `false`の場合、モーダルは閉じます。それ以外の場合は、modalController または `trigger` プロパティを使用してください。注意: `isOpen` は、モーダルが終了しても自動的に `false` に戻されません。あなたのコードでそれを行う必要があります。 |
| **Attribute** | `is-open` |
| **Type** | `boolean` |
| **Default** | `false` |



### keepContentsMounted 

| | |
| --- | --- |
| **Description** | If `true`, the component passed into `ion-modal` will automatically be mounted when the modal is created. The component will remain mounted even when the modal is dismissed. However, the component will be destroyed when the modal is destroyed. This property is not reactive and should only be used when initially creating a modal.<br /><br />Note: This feature only applies to inline modals in JavaScript frameworks such as Angular, React, and Vue.<br /><br />自動翻訳: `true`の場合、モーダルの作成時に `ion-modal` に渡されたコンポーネントが自動的にマウントされます。このコンポーネントは、モーダルが終了してもマウントされたままです。しかし、モーダルが破棄されると、コンポーネントは破棄されます。このプロパティはリアクティブではないので、モーダルを最初に作成するときにのみ使用する必要があります。  注意：この機能は、Angular、React、Vue などの JavaScript フレームワークのインライン モーダルにのみ適用されます。 |
| **Attribute** | `keep-contents-mounted` |
| **Type** | `boolean` |
| **Default** | `false` |



### keyboardClose 

| | |
| --- | --- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented.<br /><br />自動翻訳: `true`の場合、オーバーレイが表示されたときにキーボードが自動的に解除されます。 |
| **Attribute** | `keyboard-close` |
| **Type** | `boolean` |
| **Default** | `true` |



### leaveAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the modal is dismissed.<br /><br />自動翻訳: モーダルが解除されたときに使用するアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### mode 

| | |
| --- | --- |
| **Description** | The mode determines which platform styles to use.<br /><br />自動翻訳: モードは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" ｜ "md"` |
| **Default** | `undefined` |



### presentingElement 

| | |
| --- | --- |
| **Description** | The element that presented the modal. This is used for card presentation effects and for stacking multiple modals on top of each other. Only applies in iOS mode.<br /><br />自動翻訳: モーダルを提示した要素です。カード提示効果や、複数のモーダルを重ねる場合に使用します。iOSモードでのみ適用されます。 |
| **Attribute** | `undefined` |
| **Type** | `HTMLElement ｜ undefined` |
| **Default** | `undefined` |



### showBackdrop 

| | |
| --- | --- |
| **Description** | If `true`, a backdrop will be displayed behind the modal. This property controls whether or not the backdrop darkens the screen when the modal is presented. It does not control whether or not the backdrop is active or present in the DOM.<br /><br />自動翻訳: `true`の場合、モーダルの後ろに背景が表示されます。このプロパティは、モーダルが表示されたときに背景が画面を暗くするかどうかを制御します。このプロパティは、背景がアクティブであるかどうか、または DOM に存在するかどうかを制御するものではありません。 |
| **Attribute** | `show-backdrop` |
| **Type** | `boolean` |
| **Default** | `true` |



### swipeToClose (deprecated)

| | |
| --- | --- |
| **Description** | If `true`, the modal can be swiped to dismiss. Only applies in iOS mode.<br /><br />自動翻訳: `true`の場合、スワイプでモーダルを解除することができます。iOSモードでのみ適用されます。 _Deprecated_ - To prevent modals from dismissing, use canDismiss instead. |
| **Attribute** | `swipe-to-close` |
| **Type** | `boolean` |
| **Default** | `false` |



### trigger 

| | |
| --- | --- |
| **Description** | An ID corresponding to the trigger element that causes the modal to open when clicked.<br /><br />自動翻訳: クリックされたときにモーダルを開かせるトリガー要素に対応するIDです。 |
| **Attribute** | `trigger` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |

