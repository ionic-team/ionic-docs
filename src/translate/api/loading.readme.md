# ion-loading

ユーザインタラクションをブロックしながらアクティビティを示すためのオーバーレイです。ローディング・インジケータはアプリのコンテンツの上に表示され、ユーザーの操作を再開するために消すことができます。オプションでbackdropが含まれており、`showBackdrop: false` で無効にすることができます。

## Dismissing

ローディング・インジケータは、ローディング・オプションの `duration` にミリ秒単位で設定することによって、一定時間後に自動的に閉じることができます。作成後にローディング・インジケータを終了するには、ロードインスタンスで `dismiss()` メソッドを呼び出します。`onDidDismiss` 関数は、ローディングインジケータが終了した後、アクションを実行するために呼び出すことができます。

## Customization

Loading uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the [Usage](#usage) section for an example of how to pass a class using `cssClass`.

```css
/* DOES NOT WORK - not specific enough */
ion-loading {
  color: green;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class {
  color: green;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Loading without needing to target individual elements:

```css
.my-custom-class {
  --background: #222;
  --spinner-color: #fff;

  color: #fff;
}
```

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.

