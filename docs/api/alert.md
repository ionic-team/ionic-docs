---
title: "ion-alert"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/alert/props.md';
import Events from '@site/static/auto-generated/alert/events.md';
import Methods from '@site/static/auto-generated/alert/methods.md';
import Parts from '@site/static/auto-generated/alert/parts.md';
import CustomProps from '@site/static/auto-generated/alert/custom-props.md';
import Slots from '@site/static/auto-generated/alert/slots.md';

<head>
  <title>ion-alert: Ionic API Alert Buttons with Custom Message Prompts</title>
  <meta name="description" content="ion-alertダイアログは、入力を使用して情報を提示または収集します。カスタムアラートボタンメッセージは、アプリのコンテンツの上に表示され、手動で解除する必要があります。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

アラートは、ユーザーに情報を提示したり、入力を使ってユーザーから情報を収集したりするダイアログである。アラートはアプリのコンテンツの上に表示され、アプリとの対話を再開する前に、ユーザーが手動で解除する必要があります。また、オプションで `header`、`subHeader`、`message` を持つことができます。

## Inline Alerts (Recommended)

`ion-alert` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the Alert.

import Trigger from '@site/static/usage/v7/alert/presenting/trigger/index.md';

<Trigger />

### Using `isOpen`

The `isOpen` property on `ion-alert` allows developers to control the presentation state of the Alert from their application state. This means when `isOpen` is set to `true` the Alert will be presented, and when `isOpen` is set to `false` the Alert will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the Alert is dismissed. Developers should listen for the `ionAlertDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-alert` from being tightly coupled with the state of the application. With a one way data binding, the Alert only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the Alert needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import IsOpen from '@site/static/usage/v7/alert/presenting/isOpen/index.md';

<IsOpen />

## Controller Alerts

The `alertController` can be used in situations where more control is needed over when the Alert is presented and dismissed.

import Controller from '@site/static/usage/v7/alert/presenting/controller/index.md';

<Controller />

## Buttons

`buttons` の配列には、各buttonの `text` のプロパティと、オプションで `handler` を利用することができます。 `handler` が `false` を返した場合、buttonがクリックされてもAlertは自動的に解除されません。すべての `buttons` は、左から右にボタン配列に追加された順序で表示されます。 Note: 一番右のボタン(配列の最後の1つ)がメインボタンです。

オプションで、`cancel`のような `role` プロパティをボタンに追加することができます。もし `cancel` ロールがボタンのいずれかに設定されている場合、バックドロップをタップしてアラートが解除されると、キャンセルロールを持つボタンから handler が起動されます。

import Buttons from '@site/static/usage/v7/alert/buttons/index.md';

<Buttons />


## Inputs

Alertには、複数の異なるInputを含めることもでき、そのデータをアプリで受け取ることができます。 Inputはユーザーに情報の入力を促す簡単な方法として使用できます。Radios, checkboxes と text inputs textarea はすべて利用できますが、これらを混ぜて利用することはできません。例えば、Alertはすべてbutton Inputであったり、すべてcheckboxでのInputを持つことはできますが、同一のAlertにradioとcheckbox Inputを混ぜることはできません。ただし、"text" Inputでは、 `url`, `email`, `text` などの複数のtypeを混ぜて利用することはできます。 Alertのガイドラインに収まらない複雑なForm UIが必要な場合は、代わりにModal内でFormを構築することをお勧めします。

### Text Inputs Example

import TextInputs from '@site/static/usage/v7/alert/inputs/text-inputs/index.md';

<TextInputs />

### Radio Example

import Radios from '@site/static/usage/v7/alert/inputs/radios/index.md';

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

import Customization from '@site/static/usage/v7/alert/customization/index.md';

<Customization />

:::note
IonicのAngularアプリを構築する場合、スタイルはグローバルなスタイルシートファイルに追加する必要があります。
:::

## Accessibility

Ionic automatically sets the Alert's `role` to either [`alertdialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) if there are any inputs or buttons included, or [`alert`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) if there are none.

If the `header` property is defined for the Alert, the `aria-labelledby` attribute will be automatically set to the header's ID. The `subHeader` element will be used as a fallback if `header` is not defined. Similarly, the `aria-describedby` attribute will be automatically set to the ID of the `message` element if that property is defined.

It is strongly recommended that your Alert have a `message`, as well as either a `header` or `subHeader`, in order to align with the ARIA spec. If you choose not to include a `header` or `subHeader`, an alternative is to provide a descriptive `aria-label` using the `htmlAttributes` property.

All ARIA attributes can be manually overwritten by defining custom values in the `htmlAttributes` property of the Alert.


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