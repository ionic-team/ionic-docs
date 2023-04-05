

### from 

| | |
| --- | --- |
| **Description** | A redirect route, redirects "from" a URL "to" another URL. This property is that "from" URL. It needs to be an exact match of the navigated URL in order to apply.<br /><br />The path specified in this value is always an absolute path, even if the initial `/` slash is not specified.<br /><br />自動翻訳: リダイレクトルートは、あるURLから別のURLへリダイレクトさせるルートです。このプロパティは、その「from」URLです。このプロパティを適用するには、ナビゲートされるURLと完全に一致する必要があります。  この値で指定されるパスは、最初の `/` スラッシュが指定されていない場合でも、常に絶対パスとなります。 |
| **Attribute** | `from` |
| **Type** | `string` |
| **Default** | `undefined` |



### to 

| | |
| --- | --- |
| **Description** | A redirect route, redirects "from" a URL "to" another URL. This property is that "to" URL. When the defined `ion-route-redirect` rule matches, the router will redirect to the path specified in this property.<br /><br />The value of this property is always an absolute path inside the scope of routes defined in `ion-router` it can't be used with another router or to perform a redirection to a different domain.<br /><br />Note that this is a virtual redirect, it will not cause a real browser refresh, again, it's a redirect inside the context of ion-router.<br /><br />When this property is not specified or his value is `undefined` the whole redirect route is noop, even if the "from" value matches.<br /><br />自動翻訳: リダイレクトルートは、あるURLから別のURLへリダイレクトさせるルートです。このプロパティは、その "to "URLである。定義された `ion-route-redirect` ルールにマッチした場合、ルータはこのプロパティで指定されたパスにリダイレクトする。  このプロパティの値は、常に `ion-router` で定義されたルートの範囲内の絶対パスであり、別のルータや別のドメインへのリダイレクトを実行するために使用することはできない。  これは仮想的なリダイレクトであり、実際のブラウザのリフレッシュを引き起こすことはないことに注意してください。  このプロパティが指定されていない場合、または値が `undefined` の場合、たとえ "from" の値が一致しても、リダイレクトルート全体は noop となります。 |
| **Attribute** | `to` |
| **Type** | `null ｜ string ｜ undefined` |
| **Default** | `undefined` |

