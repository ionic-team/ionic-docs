

### root 

| | |
| --- | --- |
| **Description** | The root path to use when matching URLs. By default, this is set to "/", but you can specify an alternate prefix for all URL paths.<br /><br />自動翻訳: URLのマッチング時に使用するルートパスです。デフォルトでは"/"に設定されていますが、すべてのURLパスに対して代替プレフィックスを指定することができます。 |
| **Attribute** | `root` |
| **Type** | `string` |
| **Default** | `'/'` |



### useHash 

| | |
| --- | --- |
| **Description** | The router can work in two "modes": - With hash: `/index.html#/path/to/page` - Without hash: `/path/to/page`<br /><br />Using one or another might depend in the requirements of your app and/or where it's deployed.<br /><br />Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might requires additional server-side configuration in order to properly work.<br /><br />On the other side hash-navigation is much easier to deploy, it even works over the file protocol.<br /><br />By default, this property is `true`, change to `false` to allow hash-less URLs.<br /><br />自動翻訳: ルーターは2つの "モード "で動作します。- ハッシュを使用する。ハッシュあり： `/index.html#/path/to/page` - ハッシュなし。ハッシュなし： `/path/to/page` - ハッシュあり： `/index.html#/path/to/page` どちらを使うかは、アプリの要件や配置される場所によって異なるかもしれません。  通常、「ハッシュなし」ナビゲーションはSEOに有利で、よりユーザーフレンドリーですが、適切に動作させるためにサーバー側の追加設定が必要な場合があります。  一方、ハッシュ・ナビゲーションは、ファイル・プロトコルで動作するため、導入が非常に簡単です。  デフォルトでは、このプロパティは `true` です。ハッシュのない URL を許可するには `false` に変更します。 |
| **Attribute** | `use-hash` |
| **Type** | `boolean` |
| **Default** | `true` |

