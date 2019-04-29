# ion-fab-button

Floating Action Buttons (FABs) は、アプリケーションでの主要なアクションを表します。デフォルトでは、円形状になっています。ボタンを押すと、関連するアクションがさらに開きます。名前が示すように、FABは通常、固定された位置で内容の上に浮動します。これは、 `<ion-fab-button>FAB</ion-fab-button>` だけで実装することはできません。コンテンツを固定するには、 `<ion-fab>` コンポーネントでラップする必要があります。

FABボタンが `<ion-fab>` で囲まれていない場合は、`content` とともにスクロールします。FABボタンには、default size と mini size があり、異なるcolorを使用できます:
