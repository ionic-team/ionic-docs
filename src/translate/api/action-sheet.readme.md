# ion-action-sheet

Action Sheetは複数の選択肢を表示するダイアログです。アプリのコンテンツ上に表示され、ユーザが手動で破棄しないとアプリの利用を再開することはできません。`ios` modeでは、破壊的な選択肢は明示されます（コンテンツの削除などは赤字などでわかりやすく表示されます）。Action Sheetを破棄するには、背景をタップする、デスクトップのパソコンの場合はエスケープキーを押すなど、複数の選択肢があります。

## Button

Buttonの `role` プロパティは、 `destructive` か `cancel` のどちらかを利用できます。 roleプロパティがない場合は、プラットフォームに応じたデフォルトの外観となります。`cancel` role を持つButtonは、配列 `buttons` のどこに配置してもAction Sheetの最下部に表示されます。 Note: `destructive` roleをつけるButtonは、一番上のButtonとして配置することをおすすめします。また、背景をタップしてAction Sheetを破棄した場合、cancel role に設定されているhandlerが実行されます。

## Customization

Action Sheet uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the [Usage](#usage) section for an example of how to pass a class using `cssClass`.

```css
/* DOES NOT WORK - not specific enough */
.action-sheet-group {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Action Sheet without needing to target individual elements:

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.

