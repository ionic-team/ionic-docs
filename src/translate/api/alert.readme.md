# ion-alert

Alertは、ユーザーに情報を提示したり、Inputを使用してユーザーから情報を収集したりするダイアログです。Alertはアプリのコンテンツの上に表示され、アプリの利用を再開する前にユーザーが手動で破棄する必要があります。 オプションに `header`, `subHeader` と `message` を持つことができます。


### Creating

Alertは [Alert Controller](../alert-controller) を利用して作成します。Alert Controllerの `create` メソッドにAlertのオプションを渡すことでカスタマイズできます。


### Buttons

`buttons` の配列には、各buttonの `text` のプロパティと、オプションで `handler` を利用することができます。 `handler` が `false` を返した場合、buttonがクリックされてもAlertは自動的に解除されません。すべての `buttons` は、左から右にボタン配列に追加された順序で表示されます。 Note: 一番右のボタン(配列の最後の1つ)がメインボタンです。  

Optionally, a `role` property can be added to a button, such as `cancel`. If a `cancel` role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.


### Inputs

Alertには、複数の異なるInputを含めることもでき、そのデータをアプリで受け取ることができます。 Inputはユーザーに情報の入力を促す簡単な方法として使用できます。Radios, checkboxes と text inputs はすべて利用できますが、これらを混ぜて利用することはできません。例えば、Alertはすべてbutton Inputであったり、すべてcheckboxでのInputを持つことはできますが、同一のAlertにradioとcheckbox Inputを混ぜることはできません。ただし、"text" Inputでは、 `url`, `email`, `text` などの複数のtypeを混ぜて利用することはできます。 Alertのガイドラインに収まらない複雑なForm UIが必要な場合は、代わりにModal内でFormを構築することをお勧めします。

