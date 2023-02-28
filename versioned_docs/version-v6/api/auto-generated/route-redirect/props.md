

### from 

| | |
| --- | --- |
| **Description** | A redirect route, redirects "from" a URL "to" another URL. This property is that "from" URL. It needs to be an exact match of the navigated URL in order to apply.<br /><br />The path specified in this value is always an absolute path, even if the initial `/` slash is not specified. |
| **Attribute** | `from` |
| **Type** | `string` |
| **Default** | `undefined` |



### to 

| | |
| --- | --- |
| **Description** | A redirect route, redirects "from" a URL "to" another URL. This property is that "to" URL. When the defined `ion-route-redirect` rule matches, the router will redirect to the path specified in this property.<br /><br />The value of this property is always an absolute path inside the scope of routes defined in `ion-router` it can't be used with another router or to perform a redirection to a different domain.<br /><br />Note that this is a virtual redirect, it will not cause a real browser refresh, again, it's a redirect inside the context of ion-router.<br /><br />When this property is not specified or his value is `undefined` the whole redirect route is noop, even if the "from" value matches. |
| **Attribute** | `to` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `undefined` |

