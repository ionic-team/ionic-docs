# ion-col

Columnは [grid](../grid) system のセルとなるコンポーネントで、行の内側に入ります。 [row](../row) を埋めるように展開されます。
グリッド内のすべてのコンテンツは、Columnの内側に配置する必要があります。

詳しくは [Grid Layout](/docs/layout/grid) をご覧ください。


## Column attributes

デフォルトでは、column は行の高さ全体に合わせて伸縮します。
この動作をカスタマイズするために、column に追加できる属性がいくつかあります。

| Property              | Description                                                                                                 |
|-----------------------|-------------------------------------------------------------------------------------------------------------|
| align-self-start      | Adds `align-self: flex-start`. The column will be vertically aligned at the top.                            |
| align-self-center     | Adds `align-self: center`. The column will be vertically aligned in the center.                             |
| align-self-end        | Adds `align-self: flex-end`. The column will be vertically aligned at the bottom.                           |
| align-self-stretch    | Adds `align-self: stretch`. The column will be stretched to take up the entire height of the row.           |
| align-self-baseline   | Adds `align-self: baseline`. The column will be vertically aligned at its baseline.                         |


