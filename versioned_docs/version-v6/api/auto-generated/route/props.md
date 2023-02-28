

### beforeEnter 

| | |
| --- | --- |
| **Description** | A navigation hook that is fired when the route tries to enter. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified. |
| **Attribute** | `undefined` |
| **Type** | `(() => NavigationHookResult ｜ Promise<NavigationHookResult>) ｜ undefined` |
| **Default** | `undefined` |



### beforeLeave 

| | |
| --- | --- |
| **Description** | A navigation hook that is fired when the route tries to leave. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified. |
| **Attribute** | `undefined` |
| **Type** | `(() => NavigationHookResult ｜ Promise<NavigationHookResult>) ｜ undefined` |
| **Default** | `undefined` |



### component 

| | |
| --- | --- |
| **Description** | Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-nav`) when the route matches.<br /><br />The value of this property is not always the tagname of the component to load, in `ion-tabs` it actually refers to the name of the `ion-tab` to select. |
| **Attribute** | `component` |
| **Type** | `string` |
| **Default** | `undefined` |



### componentProps 

| | |
| --- | --- |
| **Description** | A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed to the defined component when rendered. |
| **Attribute** | `undefined` |
| **Type** | `undefined ｜ { [key: string]: any; }` |
| **Default** | `undefined` |



### url 

| | |
| --- | --- |
| **Description** | Relative path that needs to match in order for this route to apply.<br /><br />Accepts paths similar to expressjs so that you can define parameters in the url /foo/:bar where bar would be available in incoming props. |
| **Attribute** | `url` |
| **Type** | `string` |
| **Default** | `''` |

