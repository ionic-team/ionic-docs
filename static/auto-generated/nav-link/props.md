

### component 

| | |
| --- | --- |
| **Description** | Component to navigate to. Only used if the `routerDirection` is `"forward"` or `"root"`.<br /><br />自動翻訳: ナビゲート先のコンポーネント。routerDirection`が `"forward"` または `"root"` である場合にのみ使用する。 |
| **Attribute** | `component` |
| **Type** | `Function ｜ HTMLElement ｜ ViewController ｜ null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### componentProps 

| | |
| --- | --- |
| **Description** | Data you want to pass to the component as props. Only used if the `"routerDirection"` is `"forward"` or `"root"`.<br /><br />自動翻訳: コンポーネントにpropsとして渡したいデータ。routerDirection"` が `"forward"` または `"root"` である場合のみ使用する。 |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### routerAnimation 

| | |
| --- | --- |
| **Description** | The transition animation when navigating to another page.<br /><br />自動翻訳: 別ページに移動する際の遷移アニメーション。 |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### routerDirection 

| | |
| --- | --- |
| **Description** | The transition direction when navigating to another page.<br /><br />自動翻訳: 別ページに移動する際の遷移方向です。 |
| **Attribute** | `router-direction` |
| **Type** | `"back" ｜ "forward" ｜ "root"` |
| **Default** | `'forward'` |

