# ion-action-sheet

Action Sheetは複数の選択肢を表示するダイアログです。アプリのコンテンツ上に表示され、ユーザが手動で破棄しないとアプリの利用を再開することはできません。`ios` modeでは、破壊的な選択肢は明示されます（コンテンツの削除などは赤字などでわかりやすく表示されます）。Action Sheetを破棄するには、背景をタップする、デスクトップのパソコンの場合はエスケープキーを押すなど、複数の選択肢があります。

### Creating

Action Sheetは、 [Action Sheet Controller](../action-sheet-controller) を使って、 `buttons` とそれぞれのボタンごとに `text` とオプションで `handler` と `role` をつけて作成します。handlerの返り値が `false` の場合、Action Sheetは破棄されません。Action Sheetはオプションで `title`, `subTitle` と `icon` を持つことができます。.

### Buttons

Buttonの `role` プロパティは、 `destructive` か `cancel` のどちらかを利用できます。 roleプロパティがない場合は、プラットフォームに応じたデフォルトの外観となります。`cancel` role を持つButtonは、配列 `buttons` のどこに配置してもAction Sheetの最下部に表示されます。 Note: `destructive` roleをつけるButtonは、一番上のButtonとして配置することをおすすめします。また、背景をタップしてAction Sheetを破棄した場合、cancel role に設定されているhandlerが実行されます。

