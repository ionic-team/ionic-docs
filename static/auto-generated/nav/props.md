

### animated 

| | |
| --- | --- |
| **Description** | If `true`, the nav should animate the transition of components.<br /><br />自動翻訳: `true`の場合、コンポーネントの遷移をアニメーションで表現する。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### animation 

| | |
| --- | --- |
| **Description** | By default `ion-nav` animates transition between pages based in the mode (ios or material design). However, this property allows to create custom transition using `AnimationBuilder` functions.<br /><br />自動翻訳: デフォルトでは、`ion-nav` はモード（ios または Material Design）に応じてページ間の遷移をアニメーション化します。しかし、このプロパティは `AnimationBuilder` 関数を使用して、独自の遷移を作成することができます。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### root 

| | |
| --- | --- |
| **Description** | Root NavComponent to load<br /><br />自動翻訳: ロードするルートNavComponent |
| **Attribute** | `root` |
| **Type** | `Function ｜ HTMLElement ｜ ViewController ｜ null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### rootParams 

| | |
| --- | --- |
| **Description** | Any parameters for the root component<br /><br />自動翻訳: ルートコンポーネントの任意のパラメータ |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### swipeGesture 

| | |
| --- | --- |
| **Description** | If the nav component should allow for swipe-to-go-back.<br /><br />自動翻訳: ナビコンポーネントがスワイプで戻ることができるようにする場合。 |
| **Attribute** | `swipe-gesture` |
| **Type** | `boolean ｜ undefined` |
| **Default** | `undefined` |

