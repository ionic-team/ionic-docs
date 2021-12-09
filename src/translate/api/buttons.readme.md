# ion-buttons

Buttonsコンポーネントはコンテナ要素です。toolbarに配置するButtonは、 `<ion-buttons>` 要素の内部に配置する必要があります。

`<ion-buttons>` 要素は、値を指定したslotを使用してtoolbarの内側に配置できます。次の表に、各slotの説明を示します。

| Slot         | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `secondary`  | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode.  |
| `primary`    | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.      |
| `start`      | Positions to the `left` of the content in LTR, and to the `right` in RTL.                                |
| `end`        | Positions to the `right` of the content in LTR, and to the `left` in RTL.                                |

