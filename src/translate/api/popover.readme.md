# ion-popover

Popoverは、現在のページの上部に表示されるダイアログです。これは何にでも使用できますが、通常はナビゲーションバーに収まらないオーバーフローアクションに使用されます。

### Creating

Popoverは、[Popover Controller](../popover-controller) を利用して作成します。これらは、popover controllerのcreateメソッドにPopoverのオプションを渡すことでカスタマイズできます。

### Presenting

Popoverを表示するには、Popoverインスタンスで`present`メソッドを呼び出します。クリックされた要素を基準にしてpopoverを配置するには、`present`メソッドのオプションにclickイベントを渡す必要があります。イベントが渡されない場合、Popoverはビューポートの中央に配置されます。

