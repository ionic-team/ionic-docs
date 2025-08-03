---
title: "ion-radio"
---
import Props from '@ionic-internal/component-api/v8/radio/props.md';
import Events from '@ionic-internal/component-api/v8/radio/events.md';
import Methods from '@ionic-internal/component-api/v8/radio/methods.md';
import Parts from '@ionic-internal/component-api/v8/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/radio/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/radio/slots.md';

<head>
  <title>ion-radio: Radio Component for iOS and Android</title>
  <meta name="description" content="Radioコンポーネントは、iOSおよびAndroidデバイスのion-radio-groupsの内部で使用する必要があります。Radioコンポーネントの使用方法とインストール方法については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


ラジオは、[ラジオグループ](./radio-group)の中で使用する必要があります。ラジオを押すと、そのラジオがチェックされ、前に選択されていたラジオがある場合は、そのチェックが解除されます。また、親ラジオグループのvalueプロパティをラジオの値に設定することで、プログラム的にチェックすることもできます。

ラジオがラジオグループの中にある場合、いつでもチェックされるのは1つのラジオだけです。複数の項目を選択する場合は、[checkboxes](./checkbox)を代わりに使用する必要があります。ラジオをグループ内で無効にすると、ラジオとの相互作用を防ぐことができます。

## 基本的な使い方

import Basic from '@site/static/usage/v8/radio/basic/index.md';

<Basic />

## Label Placement

開発者は `labelPlacement` プロパティを使用して、ラベルをコントロールに対してどのように配置するかを制御できます。 このプロパティはフレックスボックスの `flex-direction` プロパティを反映しています。

import LabelPlacement from '@site/static/usage/v8/radio/label-placement/index.md';

<LabelPlacement />

## Object Value References

By default, the radio group uses strict equality (`===`) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.

import UsingComparewith from '@site/static/usage/v8/radio/using-comparewith/index.md';

<UsingComparewith />

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

:::note
Stacked radios can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.
:::

import Alignment from '@site/static/usage/v8/radio/alignment/index.md';

<Alignment />

## Justification

開発者は `justify` プロパティを使用して、ラベルとコントロールの行の詰め方を制御することができます。このプロパティはフレックスボックスの `justify-content` プロパティを反映しています。

import Justify from '@site/static/usage/v8/radio/justify/index.md';

<Justify />

:::note
`ion-item`は、`justify`がどのように機能するかを強調するためにデモで使用されているだけです。 `justify` が正しく機能するために必須ではありません。
:::

## ラジオの選択を解除する

デフォルトでは、一度選択されたラジオは選択を解除することができず、もう一度押すと選択されたままになります。この動作は、親ラジオグループの `allowEmptySelection` プロパティを使用することで変更することができ、ラジオを非選択にすることができます。

import EmptySelection from '@site/static/usage/v8/radio/empty-selection/index.md';

<EmptySelection />

## Helper & Error Text

Helper and error text can be used inside of a radio group with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-radio-group`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v8/radio/helper-error/index.md';

<HelperError />


## テーマ

### Colors

import Colors from '@site/static/usage/v8/radio/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v8/radio/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v8/radio/theming/css-shadow-parts/index.md';

<CSSParts />

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
