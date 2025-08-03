---
title: "ion-checkbox"
---

import Props from '@ionic-internal/component-api/v8/checkbox/props.md';
import Events from '@ionic-internal/component-api/v8/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v8/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v8/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/checkbox/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/checkbox/slots.md';

<head>
  <title>ion-checkbox: Ionic App Checkbox to Select Multiple Options</title>
  <meta name="description" content="ion-checkboxは、セットから複数の選択肢を選択でき、アクティブにするとチェックされた（ticked）ように表示されます。Ionicアプリのチェックボックスコンポーネントについて説明します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Checkboxを使用すると、一連のオプションから複数のオプションを選択できます。選択すると、チェックマークが付いた状態(checked)で表示されます。checkboxをクリックすると、 `checked` プロパティーが切り替わります。`checked` プロパティを設定して、プログラムで `checked` を切り替えることもできます。

## 基本的な使い方

import Basic from '@site/static/usage/v8/checkbox/basic/index.md';

<Basic />

## Label Placement

開発者は `labelPlacement` プロパティを使用して、ラベルをコントロールに対してどのように配置するかを制御できます。このプロパティはフレックスボックスの `flex-direction` プロパティを反映しています。

import LabelPlacement from '@site/static/usage/v8/checkbox/label-placement/index.md';

<LabelPlacement />

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

:::note
Stacked checkboxes can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.
:::

import Alignment from '@site/static/usage/v8/checkbox/alignment/index.md';

<Alignment />

## Justification

開発者は `justify` プロパティを使用して、ラベルとコントロールの行の詰め方を制御することができます。このプロパティはフレックスボックスの `justify-content` プロパティを反映しています。

import Justify from '@site/static/usage/v8/checkbox/justify/index.md';

<Justify />


:::note
`ion-item`は、 `justify` がどのように機能するかを強調するためにデモで使用されているだけです。 `justify` が正しく機能するために必須ではありません。
:::

## Indeterminate Checkboxes

import Indeterminate from '@site/static/usage/v8/checkbox/indeterminate/index.md';

<Indeterminate />

## Links inside of Labels

Checkbox labels can sometimes be accompanied with links. These links can provide more information related to the checkbox. However, clicking the link should not check the checkbox. To achieve this, we can use [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) to prevent the click event from bubbling. When using this approach, the rest of the label still remains clickable.

import LabelLink from '@site/static/usage/v8/checkbox/label-link/index.md';

<LabelLink />

## Helper & Error Text

Helper and error text can be used inside of a checkbox with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-checkbox`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v8/checkbox/helper-error/index.md';

<HelperError />

## Theming

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v8/checkbox/theming/css-properties/index.md';

<CSSProps />

## Interfaces

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### CheckboxCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
}
```

## Properties
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
