

### root 

| | |
| --- | --- |
| **Description** | The root path to use when matching URLs. By default, this is set to "/", but you can specify an alternate prefix for all URL paths. |
| **Attribute** | `root` |
| **Type** | `string` |
| **Default** | `'/'` |



### useHash 

| | |
| --- | --- |
| **Description** | The router can work in two "modes": - With hash: `/index.html#/path/to/page` - Without hash: `/path/to/page`<br /><br />Using one or another might depend in the requirements of your app and/or where it's deployed.<br /><br />Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might requires additional server-side configuration in order to properly work.<br /><br />On the other side hash-navigation is much easier to deploy, it even works over the file protocol.<br /><br />By default, this property is `true`, change to `false` to allow hash-less URLs. |
| **Attribute** | `use-hash` |
| **Type** | `boolean` |
| **Default** | `true` |

