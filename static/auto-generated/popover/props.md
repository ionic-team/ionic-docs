

### alignment 

| | |
| --- | --- |
| **Description** | Describes how to align the popover content with the `reference` point. Defaults to `'center'` for `ios` mode, and `'start'` for `md` mode.<br /><br />自動翻訳: ポップオーバーのコンテンツを `reference` ポイントに揃える方法を記述します。デフォルトは `ios` モードでは `'center'` で、`md` モードでは `'start'` です。 |
| **Attribute** | `alignment` |
| **Type** | `"center" ｜ "end" ｜ "start" ｜ undefined` |
| **Default** | `undefined` |



### animated 

| | |
| --- | --- |
| **Description** | If `true`, the popover will animate.<br /><br />自動翻訳: `true`の場合、ポップオーバーはアニメーションを行います。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### arrow 

| | |
| --- | --- |
| **Description** | If `true`, the popover will display an arrow that points at the `reference` when running in `ios` mode. Does not apply in `md` mode.<br /><br />自動翻訳: `true`の場合、`ios`モードで動作しているとき、ポップオーバーは `reference` を指し示す矢印を表示します。md` モードでは適用されない。 |
| **Attribute** | `arrow` |
| **Type** | `boolean` |
| **Default** | `true` |



### backdropDismiss 

| | |
| --- | --- |
| **Description** | If `true`, the popover will be dismissed when the backdrop is clicked.<br /><br />自動翻訳: `true`の場合、バックドロップがクリックされたときにポップオーバーが解除される。 |
| **Attribute** | `backdrop-dismiss` |
| **Type** | `boolean` |
| **Default** | `true` |



### component 

| | |
| --- | --- |
| **Description** | The component to display inside of the popover. You only need to use this if you are not using a JavaScript framework. Otherwise, you can just slot your component inside of `ion-popover`.<br /><br />自動翻訳: ポップオーバーの内側に表示するコンポーネントです。これを使う必要があるのは、JavaScriptフレームワークを使用していない場合だけです。そうでない場合は、`ion-popover`の中にコンポーネントを入れるだけでよい。 |
| **Attribute** | `component` |
| **Type** | `Function ｜ HTMLElement ｜ null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### componentProps 

| | |
| --- | --- |
| **Description** | The data to pass to the popover component. You only need to use this if you are not using a JavaScript framework. Otherwise, you can just set the props directly on your component.<br /><br />自動翻訳: ポップオーバー・コンポーネントに渡すデータです。これを使う必要があるのは、JavaScriptフレームワークを使用していない場合だけです。そうでなければ、コンポーネントに直接propsを設定すればよいのです。 |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### dismissOnSelect 

| | |
| --- | --- |
| **Description** | If `true`, the popover will be automatically dismissed when the content has been clicked.<br /><br />自動翻訳: `true`の場合、コンテンツがクリックされると、ポップオーバーは自動的に解除される。 |
| **Attribute** | `dismiss-on-select` |
| **Type** | `boolean` |
| **Default** | `false` |



### enterAnimation 

| | |
| --- | --- |
| **Description** | Animation to use when the popover is presented.<br /><br />自動翻訳: ポップオーバーが表示されたときに使用するアニメーションです。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### event 

| | |
| --- | --- |
| **Description** | The event to pass to the popover animation.<br /><br />自動翻訳: ポップオーバー・アニメーションに渡すイベントです。 |
| **Attribute** | `event` |
| **Type** | `any` |
| **Default** | `undefined` |



### htmlAttributes 

| | |
| --- | --- |
| **Description** | Additional attributes to pass to the popover.<br /><br />自動翻訳: ポップオーバーに渡す追加属性。 |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### isOpen 

| | |
| --- | --- |
| **Description** | If `true`, the popover will open. If `false`, the popover will close. Use this if you need finer grained control over presentation, otherwise just use the popoverController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the popover dismisses. You will need to do that in your code.<br /><br />自動翻訳: `true`の場合、ポップオーバーは開く。もし `false` ならば、ポップオーバーは閉じます。より細かく表示を制御する必要がある場合はこれを使用し、そうでない場合は popoverController または `trigger` プロパティを使用します。注意: ポップオーバーが閉じると `isOpen` は自動的に `false` に戻されません。あなたのコードでそれを行う必要があります。 |
| **Attribute** | `is-open` |
| **Type** | `boolean` |
| **Default** | `false` |



### keepContentsMounted 

| | |
| --- | --- |
| **Description** | If `true`, the component passed into `ion-popover` will automatically be mounted when the popover is created. The component will remain mounted even when the popover is dismissed. However, the component will be destroyed when the popover is destroyed. This property is not reactive and should only be used when initially creating a popover.<br /><br />Note: This feature only applies to inline popovers in JavaScript frameworks such as Angular, React, and Vue.<br /><br />自動翻訳: `true`の場合、ポップオーバーの作成時に `ion-popover` に渡されたコンポーネントが自動的にマウントされます。このコンポーネントは、ポップオーバーが削除されてもマウントされたままです。ただし、ポップオーバーが破棄されると、コンポーネントは破棄されます。このプロパティはリアクティブではないので、ポップオーバーを最初に作成するときにのみ使用する必要があります。  注：この機能は、Angular、React、VueなどのJavaScriptフレームワークのインラインポップオーバーにのみ適用されます。 |
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
| **Description** | Animation to use when the popover is dismissed.<br /><br />自動翻訳: ポップオーバーが解除されたときに使用するアニメーションです。 |
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



### reference 

| | |
| --- | --- |
| **Description** | Describes what to position the popover relative to. If `'trigger'`, the popover will be positioned relative to the trigger button. If passing in an event, this is determined via event.target. If `'event'`, the popover will be positioned relative to the x/y coordinates of the trigger action. If passing in an event, this is determined via event.clientX and event.clientY.<br /><br />自動翻訳: ポップオーバーを何に対して相対的に配置するかを記述します。もし `'trigger'` ならば、ポップオーバーはトリガーボタンに相対して配置されます。イベントを渡すと、event.targetで決定されます。もし `'event'` ならば、ポップオーバーはトリガーアクションのx/y座標に相対的に配置されます。イベントを渡す場合、これはevent.clientXとevent.clientYを介して決定されます。 |
| **Attribute** | `reference` |
| **Type** | `"event" ｜ "trigger"` |
| **Default** | `'trigger'` |



### showBackdrop 

| | |
| --- | --- |
| **Description** | If `true`, a backdrop will be displayed behind the popover. This property controls whether or not the backdrop darkens the screen when the popover is presented. It does not control whether or not the backdrop is active or present in the DOM.<br /><br />自動翻訳: `true`の場合、ポップオーバーの後ろに背景が表示されます。このプロパティは、ポップオーバーが表示されたときに背景が画面を暗くするかどうかを制御します。このプロパティは、背景がアクティブであるかどうか、またはDOMに存在するかどうかを制御しません。 |
| **Attribute** | `show-backdrop` |
| **Type** | `boolean` |
| **Default** | `true` |



### side 

| | |
| --- | --- |
| **Description** | Describes which side of the `reference` point to position the popover on. The `'start'` and `'end'` values are RTL-aware, and the `'left'` and `'right'` values are not.<br /><br />自動翻訳: ポップオーバーを `reference` ポイントのどちら側に配置するかを記述する。start'` と `end'` は RTL を意識した値で、`left'` と `right'` はそうでない値です。 |
| **Attribute** | `side` |
| **Type** | `"bottom" ｜ "end" ｜ "left" ｜ "right" ｜ "start" ｜ "top"` |
| **Default** | `'bottom'` |



### size 

| | |
| --- | --- |
| **Description** | Describes how to calculate the popover width. If `'cover'`, the popover width will match the width of the trigger. If `'auto'`, the popover width will be determined by the content in the popover.<br /><br />自動翻訳: ポップオーバーの幅を計算する方法を説明します。cover'` の場合、ポップオーバーの幅はトリガーの幅と一致します。auto'` の場合、ポップオーバーの幅はポップオーバー内のコンテンツによって決定されます。 |
| **Attribute** | `size` |
| **Type** | `"auto" ｜ "cover"` |
| **Default** | `'auto'` |



### translucent 

| | |
| --- | --- |
| **Description** | If `true`, the popover will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).<br /><br />自動翻訳: `true`の場合、ポップオーバーは半透明になります。モードが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |



### trigger 

| | |
| --- | --- |
| **Description** | An ID corresponding to the trigger element that causes the popover to open. Use the `trigger-action` property to customize the interaction that results in the popover opening.<br /><br />自動翻訳: ポップオーバーを開かせるトリガー要素に対応するIDです。trigger-action`プロパティを使用して、ポップオーバーを開くためのインタラクションをカスタマイズすることができます。 |
| **Attribute** | `trigger` |
| **Type** | `string ｜ undefined` |
| **Default** | `undefined` |



### triggerAction 

| | |
| --- | --- |
| **Description** | Describes what kind of interaction with the trigger that should cause the popover to open. Does not apply when the `trigger` property is `undefined`. If `'click'`, the popover will be presented when the trigger is left clicked. If `'hover'`, the popover will be presented when a pointer hovers over the trigger. If `'context-menu'`, the popover will be presented when the trigger is right clicked on desktop and long pressed on mobile. This will also prevent your device's normal context menu from appearing.<br /><br />自動翻訳: どのようなトリガーとの相互作用でポップオーバーを開くべきかを記述する。trigger`プロパティが `undefined` の場合は適用されません。click'` の場合、トリガーが左クリックされたときにポップオーバーが表示されます。hover'` の場合、ポインタがトリガーの上に乗ったときにポップオーバーが表示されます。コンテキストメニュー'`の場合、デスクトップでは右クリック、モバイルでは長押しでポップオーバーが表示されます。これは、デバイスの通常のコンテキストメニューが表示されるのを防ぐことにもなります。 |
| **Attribute** | `trigger-action` |
| **Type** | `"click" ｜ "context-menu" ｜ "hover"` |
| **Default** | `'click'` |

