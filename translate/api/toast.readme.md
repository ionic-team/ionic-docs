# ion-toast

Toastは、現代のアプリケーションで一般的に使用される小さな通知です。操作に関するフィードバックを提供したり、システムメッセージを表示したりするために使用できます。Toastはアプリのコンテンツの上に表示され、終了するとアプリとの対話を再開することができます。

## ポジション

Toastsは、ビューポートの上部、下部、または中央に配置できます。positionは作成時に値を渡すことができます。指定できる値は、`top`, `bottom` , `middle` です。位置を指定しない場合、Toastはビューポートの下部に表示されます。

## 消去

The toast can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the toast options. If a button with a role of `"cancel"` is added, then that button will dismiss the toast. To dismiss the toast after creation, call the `dismiss()` method on the instance.
