

### component 

| | |
| --- | --- |
| **Description** | Component to navigate to. Only used if the `routerDirection` is `"forward"` or `"root"`. |
| **Attribute** | `component` |
| **Type** | `Function ｜ HTMLElement ｜ ViewController ｜ null ｜ string ｜ undefined` |
| **Default** | `undefined` |



### componentProps 

| | |
| --- | --- |
| **Description** | Data you want to pass to the component as props. Only used if the `"routerDirection"` is `"forward"` or `"root"`. |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### routerAnimation 

| | |
| --- | --- |
| **Description** | The transition animation when navigating to another page. |
| **Attribute** | `undefined` |
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` |
| **Default** | `undefined` |



### routerDirection 

| | |
| --- | --- |
| **Description** | The transition direction when navigating to another page. |
| **Attribute** | `router-direction` |
| **Type** | `"back" ｜ "forward" ｜ "root"` |
| **Default** | `'forward'` |

