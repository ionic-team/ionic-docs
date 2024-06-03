---
title: "ion-alert"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v8/alert/props.md';
import Events from '@ionic-internal/component-api/v8/alert/events.md';
import Methods from '@ionic-internal/component-api/v8/alert/methods.md';
import Parts from '@ionic-internal/component-api/v8/alert/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/alert/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/alert/slots.md';

<head>
  <title>ion-alert: Ionic Alert Buttons with Custom Message Prompts</title>
  <meta name="description" content="ion-alertダイアログは、Inputを使用して情報を提示または収集します。カスタムアラートボタンメッセージは、アプリのコンテンツの上に表示され、手動で解除する必要があります。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

アラートは、ユーザーに情報を提示したり、Inputを使ってユーザーから情報を収集したりするダイアログである。アラートはアプリのコンテンツの上に表示され、アプリとの対話を再開する前に、ユーザーが手動で解除する必要があります。また、オプションで `header`、`subHeader`、`message` を持つことができます。

## インラインアラート(推奨)

`ion-alert` は、テンプレートに直接コンポーネントを記述して使用することができます。これにより、アラートを表示するために必要なハンドラの数を減らすことができます。

import Trigger from '@site/static/usage/v8/alert/presenting/trigger/index.md';

<Trigger />

### `isOpen` を使う

`ion-alert` の `isOpen` プロパティは、開発者がアプリケーションの状態からアラートの表示状態を制御することを可能にします。つまり、`isOpen` を `true` に設定するとアラートが表示され、`isOpen` を `false` に設定するとアラートは解除されます。

`isOpen` は一方通行のデータバインディングを使用しているため、アラートが解除されたときに自動的に `false` に設定されることはありません。開発者は `ionAlertDidDismiss` または `didDismiss` イベントを待ち、`isOpen` を `false` に設定する必要があります。この理由は、`ion-alert` の内部がアプリケーションの状態と密接に結合するのを防ぐためである。一方通行のデータバインディングでは、アラートはリアクティブ変数が提供するブーリアン値だけを気にすればよい。双方向のデータバインディングでは、アラートはブーリアン値とリアクティブ変数の存在の両方に関心を持つ必要があります。これは、非決定的な動作につながり、アプリケーションのデバッグを困難にする可能性があります。

import IsOpen from '@site/static/usage/v8/alert/presenting/isOpen/index.md';

<IsOpen />

## Controller Alerts

`alertController`は、アラートを表示するタイミングや解除するタイミングをより細かく制御する必要がある場合に使用することができる。

import Controller from '@site/static/usage/v8/alert/presenting/controller/index.md';

<Controller />

## Buttons

`buttons` の配列には、各buttonの `text` のプロパティと、オプションで `handler` を利用することができます。 `handler` が `false` を返した場合、buttonがクリックされてもAlertは自動的に解除されません。すべての `buttons` は、左から右にボタン配列に追加された順序で表示されます。 Note: 一番右のボタン(配列の最後の1つ)がメインボタンです。

オプションで、`cancel`のような `role` プロパティをボタンに追加することができます。もし `cancel` ロールがボタンのいずれかに設定されている場合、バックドロップをタップしてアラートが解除されると、キャンセルロールを持つボタンから handler が起動されます。

import Buttons from '@site/static/usage/v8/alert/buttons/index.md';

<Buttons />


## Inputs

Alertには、複数の異なるInputを含めることもでき、そのデータをアプリで受け取ることができます。 Inputはユーザーに情報の入力を促す簡単な方法として使用できます。Radios, checkboxes と text inputs textarea はすべて利用できますが、これらを混ぜて利用することはできません。例えば、Alertはすべてbutton Inputであったり、すべてcheckboxでのInputを持つことはできますが、同一のAlertにradioとcheckbox Inputを混ぜることはできません。ただし、"text" Inputでは、 `url`, `email`, `text` などの複数のtypeを混ぜて利用することはできます。アラートのガイドラインに収まらない複雑なForm UIが必要な場合は、代わりにModal内でFormを構築することをお勧めします。

### Text Inputs Example

import TextInputs from '@site/static/usage/v8/alert/inputs/text-inputs/index.md';

<TextInputs />

### Radio Example

import Radios from '@site/static/usage/v8/alert/inputs/radios/index.md';

<Radios />

## カスタマイズ

Alertはscopedによるカプセル化を使用しており、実行時に各スタイルにクラスを追加することで自動的にCSSをスコープします。CSSでscopedセレクタをオーバーライドするには、[higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。

`create` メソッドで `cssClass` にカスタムクラスを渡し、それを使ってホストと内部要素にカスタムスタイルを追加することをお勧めします。このプロパティは、スペースで区切られた複数のクラスを受け付けることもできます。

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

[CSSカスタムプロパティ](#css-custom-properties) は、個々の要素をターゲットにすることなく、アラートのスタイルに使用することができます。

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

import Customization from '@site/static/usage/v8/alert/customization/index.md';

<Customization />

:::note
IonicのAngularアプリを構築する場合、スタイルはグローバルなスタイルシートファイルに追加する必要があります。
:::

## アクセシビリティ

### Screen Readers

アラートは、スクリーンリーダーにとって[アクセシブル](../reference/glossary#a11y)であるために、ariaプロパティを設定しますが、これらのプロパティは、十分な説明がない場合、またはアラートがアプリでどのように使用されているかと一致しない場合は、オーバーライドすることができます。

#### Role

Ionicは自動的にアラートの`role`を、入力やボタンがある場合は[`alertdialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)に、何もない場合は[`alert`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)に設定します。

#### Alert の概要

アラートに `header` プロパティが定義されている場合、`aria-labelledby` 属性は自動的にヘッダの ID に設定されます。 `header` が定義されていない場合、`subHeader` 要素がフォールバックとして使用されます。同様に、 `aria-describedby` 属性が定義されている場合は、自動的に `message` 要素の ID が設定されます。

ARIAの仕様に合わせるために、アラートには `message` と `header` または `subHeader` を含めることを強くお勧めします。もし `header` や `subHeader` を含めない場合は、`htmlAttributes` プロパティを使用して、説明的な `aria-label` を指定することができます。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  message: 'This is an alert with custom aria attributes.',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const alert = await this.alertController.create({
  message: 'This is an alert with custom aria attributes.',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonAlert({
  message: 'This is an alert with custom aria attributes.',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="vue">

```javascript
const alert = await alertController.create({
  message: 'This is an alert with custom aria attributes.',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

</Tabs>


すべてのARIA属性は、アラートの`htmlAttributes`プロパティにカスタム値を定義することで、手動で上書きすることができます。

#### Alert Buttons の概要

Buttons containing text will be read by a screen reader. If a description other than the existing text is desired, a label can be set on the button by passing `aria-label` to the `htmlAttributes` property on the button.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  header: 'Header',
  buttons: [
    {
      text: 'Exit',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const alert = await this.alertController.create({
  header: 'Header',
  buttons: [
    {
      text: 'Exit',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonAlert({
  header: 'Header',
  buttons: [
    {
      text: 'Exit',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="vue">

```javascript
const alert = await alertController.create({
  header: 'Header',
  buttons: [
    {
      text: 'Exit',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

</Tabs>

## Interfaces

### AlertButton

```typescript
type AlertButtonOverlayHandler = boolean | void | { [key: string]: any };

interface AlertButton {
  text: string;
  role?: 'cancel' | 'destructive' | string;
  cssClass?: string | string[];
  id?: string;
  htmlAttributes?: { [key: string]: any };
  handler?: (value: any) => AlertButtonOverlayHandler | Promise<AlertButtonOverlayHandler>;
}
```


### AlertInput

```typescript
interface AlertInput {
  type?: TextFieldTypes | 'checkbox' | 'radio' | 'textarea';
  name?: string;
  placeholder?: string;
  value?: any;
  /**
   * The label text to display next to the input, if the input type is `radio` or `checkbox`.
   */
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  handler?: (input: AlertInput) => void;
  min?: string | number;
  max?: string | number;
  cssClass?: string | string[];
  attributes?: { [key: string]: any };
  tabindex?: number;
}
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
  htmlAttributes?: { [key: string]: any };

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />
