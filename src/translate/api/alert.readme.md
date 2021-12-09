# ion-alert

Alertは、ユーザーに情報を提示したり、Inputを使用してユーザーから情報を収集したりするダイアログです。Alertはアプリのコンテンツの上に表示され、アプリの利用を再開する前にユーザーが手動で破棄する必要があります。 オプションに `header`, `subHeader` と `message` を持つことができます。

### Buttons

`buttons` の配列には、各buttonの `text` のプロパティと、オプションで `handler` を利用することができます。 `handler` が `false` を返した場合、buttonがクリックされてもAlertは自動的に解除されません。すべての `buttons` は、左から右にボタン配列に追加された順序で表示されます。 Note: 一番右のボタン(配列の最後の1つ)がメインボタンです。  

Optionally, a `role` property can be added to a button, such as `cancel`. If a `cancel` role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.


### Inputs

Alertには、複数の異なるInputを含めることもでき、そのデータをアプリで受け取ることができます。 Inputはユーザーに情報の入力を促す簡単な方法として使用できます。Radios, checkboxes と text inputs textarea はすべて利用できますが、これらを混ぜて利用することはできません。例えば、Alertはすべてbutton Inputであったり、すべてcheckboxでのInputを持つことはできますが、同一のAlertにradioとcheckbox Inputを混ぜることはできません。ただし、"text" Inputでは、 `url`, `email`, `text` などの複数のtypeを混ぜて利用することはできます。 Alertのガイドラインに収まらない複雑なForm UIが必要な場合は、代わりにModal内でFormを構築することをお勧めします。

## Customization

Alert uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the [Usage](#usage) section for an example of how to pass a class using `cssClass`.

```css
/* DOES NOT WORK - not specific enough */
.alert-wrapper {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Alert without needing to target individual elements:

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.

## Interfaces

### AlertButton

```typescript
interface AlertButton {
  text: string;
  role?: 'cancel' | 'destructive' | string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void | {[key: string]: any};
}
```


### AlertInput

```typescript
interface AlertInput {
  type?: TextFieldTypes | 'checkbox' | 'radio' | 'textarea';
  name?: string;
  placeholder?: string;
  value?: any;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  handler?: (input: AlertInput) => void;
  min?: string | number;
  max?: string | number;
  cssClass?: string | string[];
  attributes?: AlertInputAttributes | AlertTextareaAttributes;
  tabindex?: number;
}
```

### AlertInputAttributes

```typescript
interface AlertInputAttributes extends JSXBase.InputHTMLAttributes<HTMLInputElement> {}
```

### AlertOptions

```typescript
interface AlertOptions {
  header?: string;
  subHeader?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  inputs?: AlertInput[];
  buttons?: (AlertButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  htmlAttributes?: AlertAttributes;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

### AlertAttributes
```typescript
interface AlertAttributes extends JSXBase.HTMLAttributes<HTMLElement> {}
```

### AlertTextareaAttributes
```typescript
interface AlertTextareaAttributes extends JSXBase.TextareaHTMLAttributes<HTMLTextAreaElement> {}
```


