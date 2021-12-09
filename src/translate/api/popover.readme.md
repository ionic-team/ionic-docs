# ion-popover

Popoverは、現在のページの上部に表示されるダイアログです。これは何にでも使用できますが、通常はナビゲーションバーに収まらないオーバーフローアクションに使用されます。

## Presenting

Popoverを表示するには、Popoverインスタンスで`present`メソッドを呼び出します。クリックされた要素を基準にしてpopoverを配置するには、`present`メソッドのオプションにclickイベントを渡す必要があります。イベントが渡されない場合、Popoverはビューポートの中央に配置されます。

## Customization

Popover uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the [Usage](#usage) section for an example of how to pass a class using `cssClass`.

```css
/* DOES NOT WORK - not specific enough */
.popover-content {
  background: #222;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .popover-content {
  background: #222;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Popover without needing to target individual elements:

```css
.my-custom-class {
  --background: #222;
}
```

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.

