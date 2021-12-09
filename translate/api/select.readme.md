# ion-select

Selectは、ネイティブの`<select>`要素と同様に、オプションのセットからオプションを選択するためのフォームコントロールです。ユーザがselectをタップすると、すべてのオプションを含むダイアログが、選択しやすい大きなリストで表示されます。

selectは、子要素`<ion-select-option>`とともに使用する必要があります。子要素のオプションに`value`属性が指定されていない場合、そのtextが値として使用されます。

`value`が`<ion-select>`にセットされている場合、オプションはその値に基づいて選択済みになります。


## インターフェイス

デフォルトでは、select は [ion-alert](../alert) を使ってAlertのオプションのオーバーレイを開きます。インターフェイスを変更して、[ion-action-sheet](../action-sheet) または [ion-popover](../popover) を使用するには、`action-sheet`または`popover`を`interface`プロパティに渡します。各インタフェースの制限については、他のセクションを参照してください。


## 単一選択

デフォルトでは、selectを使用すると、ユーザは1つのOptionだけを選択できます。Alertのインターフェースでは、Optionのリストがradio button形式で表示されます。action sheetインタフェースは、1つの値選択でのみ使用できます。selectコンポーネントの値は、選択したオプションの値の値を受け取ります。


## 複数選択

`multiple` 属性を追加して選択すると、複数のOptionを選択できます。複数のOptionを選択できる場合は、checkbox形式のオプションのリストがAlertオーバーレイで表示されます。selectコンポーネントの値は、選択されたすべてのオプション値の配列を受け取ります。

Note: `action-sheet` と `popover` インターフェイスでは、複数選択は動作しません


## Object値について

選択した値にObjectを使用する場合、これらのObjectの識別情報がサーバーまたはデータベースからのものであれば変更できますが、選択した値の識別情報は変更されません。たとえば、目的のObject値を持つ既存の値がselectにロードされたが、新しく取得されたselectオプションが異なるIDを持つようになった場合などです。これにより、元の選択がそのままの状態であっても、選択に値がまったく表示されなくなります。

デフォルトでは、selectはObjectの等価性(`===`)を使用して、オプションが選択されているかどうかを判断します。これは`compareWiths`プロパティにプロパティ名または関数を指定することで上書きできます。

## SelectのButton

alertはふたつのボタンをサポートしています: `Cancel` と `OK` です。それぞれのボタンは、 `cancelText` と `okText`  プロパティを使ってカスタマイズできます。

`action-sheet` と `popover` インタフェースには `OK` ボタンがありません。いずれかのオプションをクリックすると、自動的にオーバーレイが閉じ、その値が選択されます。`popover` インターフェースには`Cancel`ボタンがないので、backdropをクリックするとオーバーレイが閉じます。


## インターフェイスオプション

Since select uses the alert, action sheet and popover interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more.

See the [ion-alert docs](../alert), [ion-action-sheet docs](../action-sheet), and [ion-popover docs](../popover) for the properties that each interface accepts.

Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.

## Customization

There are two units that make up the Select component and each need to be styled separately. The `ion-select` element is represented on the view by the selected value(s), or placeholder if there is none, and dropdown icon. The interface, which is defined in the [Interfaces](#interfaces) section above, is the dialog that opens when clicking on the `ion-select`. The interface contains all of the options defined by adding `ion-select-option` elements. The following sections will go over the differences between styling these.

### Styling Select Element

As mentioned, the `ion-select` element consists only of the value(s), or placeholder, and icon that is displayed on the view. To customize this, style using a combination of CSS and any of the [CSS custom properties](#css-custom-properties):

```css
ion-select {
  /* Applies to the value and placeholder color */
  color: #545ca7;

  /* Set a different placeholder color */
  --placeholder-color: #971e49;

  /* Set full opacity on the placeholder */
  --placeholder-opacity: 1;
}
```

Alternatively, depending on the [browser support](https://caniuse.com/#feat=mdn-css_selectors_part) needed, CSS shadow parts can be used to style the select:

```css
/* Set the width to the full container and center the content */
ion-select {
  width: 100%;

  justify-content: center;
}

/* Set the flex in order to size the text width to its content */
ion-select::part(placeholder),
ion-select::part(text) {
  flex: 0 0 auto;
}

/* Set the placeholder color and opacity */
ion-select::part(placeholder) {
  color: #20a08a;
  opacity: 1;
}

/*
 * Set the font of the first letter of the placeholder
 * Shadow parts work with pseudo-elements, too!
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
 */
ion-select::part(placeholder)::first-letter {
  font-size: 24px;
  font-weight: 500;
}

/* Set the text color */
ion-select::part(text) {
  color: #545ca7;
}

/* Set the icon color and opacity */
ion-select::part(icon) {
  color: #971e49;
  opacity: 1;
}
```

Notice that by using `::part`, any CSS property on the element can be targeted.

### Styling Select Interface

Customizing the interface dialog should be done by following the Customization section in that interface's documentation:

- [Alert Customization](../alert#customization)
- [Action Sheet Customization](../action-sheet#customization)
- [Popover Customization](../popover#customization)

However, the Select Option does set a class for easier styling and allows for the ability to pass a class to the overlay option, see the [Select Options documentation](../select-option) for usage examples of customizing options.
