# ion-item-sliding

item-slidingには、Buttonを表示するためにドラッグできるItemを含む必要があるため、[item](../item)コンポーネントを子要素に配置します。表示するすべてのオプションは、[item options](../item-options)要素に配置する必要があります。


## Swipe Direction

デフォルトでは、ボタンは `"end"` 側に配置されます。つまり、スライドするItemを最後から最初にスワイプすると、オプションが表示されます。LTRでは右から左、RTLでは左から右です。反対側に配置するには、反対方向にスワイプすると表示されるように、[`ion-item-options`]((../item-options)要素の `side` 属性を `"start"` に設定します。最大2つの `ion-item-options` を同時に使用して、スワイプ方向に応じて2つの異なるオプションセットを表示できます。


## レイアウトのオプション

デフォルトでは、iconを [item option](../item-option)内にtextとともに配置すると、iconはtextの上に表示されますが、icon slotを次のいずれかに変更してオプション内に配置することができます。

| Slot        | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `start`     | In LTR, start is the left side of the button, and in RTL it is the right |
| `top`       | The icon is above the text                                               |
| `icon-only` | The icon is the only content of the button                               |
| `bottom`    | The icon is below the text                                               |
| `end`       | In LTR, end is the right side of the button, and in RTL it is the left   |


## 拡張可能なオプション

特定のポイントをスワイプすると、オプションを展開してアイテムの幅全体を表示できます。これを `ionSwipe` イベントと組み合わせて、classのmethodを呼び出すことができます。

