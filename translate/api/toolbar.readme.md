# ion-toolbar

Toolbarはコンテンツの上または下に配置されます。Toolbarを`<ion-header>`に配置すると、Toolbarはコンテンツの一番上に固定されて表示され、`<ion-footer>`に配置すると、Toolbarは一番下に固定されて表示されます。全画面表示のコンテンツは、ヘッダーまたはフッターのToolbarの後ろにスクロールされます。`<ion-content>`内に配置すると、Toolbarはコンテンツとともにスクロールします。


## Buttons

Toolbarに配置するボタンは`<ion-buttons>`要素の中に配置しなければなりません。`<ion-buttons>`要素はnamed slotを使ってToolbarの内側に置くことができます。次の表に、各slotの説明を示します。

| Slot         | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `secondary`  | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode.  |
| `primary`    | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.      |
| `start`      | Positions to the `left` of the content in LTR, and to the `right` in RTL.                                |
| `end`        | Positions to the `right` of the content in LTR, and to the `left` in RTL.                                |


## Borders

In `md` mode, the `<ion-header>` will receive a box-shadow on the bottom, and the `<ion-footer>` will receive a box-shadow on the top.  In `ios` mode, the `<ion-header>` will receive a border on the bottom, and the `<ion-footer>` will receive a border on the top.


