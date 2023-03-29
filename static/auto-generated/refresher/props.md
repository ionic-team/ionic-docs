

### closeDuration 

| | |
| --- | --- |
| **Description** | Time it takes to close the refresher. Does not apply when the refresher content uses a spinner, enabling the native refresher.<br /><br />自動翻訳: リフレッシャーを閉じるのにかかる時間。リフレッシュコンテンツがスピナーを使用している場合は適用されず、ネイティブリフレッシャーが有効になります。 |
| **Attribute** | `close-duration` |
| **Type** | `string` |
| **Default** | `'280ms'` |



### disabled 

| | |
| --- | --- |
| **Description** | If `true`, the refresher will be hidden.<br /><br />自動翻訳: `true`の場合、リフレッシャーは非表示となる。 |
| **Attribute** | `disabled` |
| **Type** | `boolean` |
| **Default** | `false` |



### pullFactor 

| | |
| --- | --- |
| **Description** | How much to multiply the pull speed by. To slow the pull animation down, pass a number less than `1`. To speed up the pull, pass a number greater than `1`. The default value is `1` which is equal to the speed of the cursor. If a negative value is passed in, the factor will be `1` instead.<br /><br />For example: If the value passed is `1.2` and the content is dragged by `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels (an increase of 20 percent). If the value passed is `0.8`, the dragged amount will be `8` pixels, less than the amount the cursor has moved.<br /><br />Does not apply when the refresher content uses a spinner, enabling the native refresher.<br /><br />自動翻訳: 引きの速さを何倍にするか。引きのアニメーションを遅くするには、`1`より小さい数値を渡します。引っ張る速度を速くするには、`1`より大きい数値を渡します。デフォルト値は `1` で、カーソルの速度と同じです。もし負の値が渡された場合、代わりに `1` が係数となります。  例えば例えば、渡された値が `1.2` で、コンテンツが `10` ピクセルでドラッグされた場合、`10` ピクセルではなく、`12` ピクセルでドラッグされます（20% の増加です）。渡された値が `0.8` の場合、ドラッグされた量はカーソルの移動量より少ない `8` ピクセルとなります。  リフレッシュコンテンツがスピナーを使用している場合は適用されず、ネイティブリフレッシャーが有効になります。 |
| **Attribute** | `pull-factor` |
| **Type** | `number` |
| **Default** | `1` |



### pullMax 

| | |
| --- | --- |
| **Description** | The maximum distance of the pull until the refresher will automatically go into the `refreshing` state. Defaults to the result of `pullMin + 60`. Does not apply when  the refresher content uses a spinner, enabling the native refresher.<br /><br />自動翻訳: リフレッシャーが自動的に `refreshing` 状態になるまでの、引っ張りの最大距離。デフォルトは `pullMin + 60` の結果である。リフレッシュコンテンツがスピナーを使用している場合は適用されず、ネイティブリフレッシャーが有効になります。 |
| **Attribute** | `pull-max` |
| **Type** | `number` |
| **Default** | `this.pullMin + 60` |



### pullMin 

| | |
| --- | --- |
| **Description** | The minimum distance the user must pull down until the refresher will go into the `refreshing` state. Does not apply when the refresher content uses a spinner, enabling the native refresher.<br /><br />自動翻訳: リフレッシャーが `refreshing` 状態になるまでに、ユーザが引き下げるべき最小距離。リフレッシャーコンテンツがスピナーを使用する場合は適用されず、ネイティブリフレッシャーが有効になる。 |
| **Attribute** | `pull-min` |
| **Type** | `number` |
| **Default** | `60` |



### snapbackDuration 

| | |
| --- | --- |
| **Description** | Time it takes the refresher to snap back to the `refreshing` state. Does not apply when the refresher content uses a spinner, enabling the native refresher.<br /><br />自動翻訳: リフレッシャーが `refreshing` 状態にスナップバックするのにかかる時間。リフレッシュコンテンツがスピナーを使用している場合は適用されず、ネイティブリフレッシュが有効になります。 |
| **Attribute** | `snapback-duration` |
| **Type** | `string` |
| **Default** | `'280ms'` |

