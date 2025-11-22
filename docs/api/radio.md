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

## Label Wrapping

ラベルの配置に関係なく、長いテキストはデフォルトで折り返されません。ラジオの幅が制約されている場合、オーバーフローしたテキストは省略記号で切り詰められます。ラジオテキストの周りのラッパーに`ion-text-wrap`クラスを追加するか、`::part()`セレクタを使用して`label`シャドウパーツをスタイリングすることで、テキストの折り返しを有効にできます。

import LabelWrap from '@site/static/usage/v8/radio/label-wrap/index.md';

<LabelWrap />

## Object Value References

By default, the radio group uses strict equality (`===`) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.

import UsingComparewith from '@site/static/usage/v8/radio/using-comparewith/index.md';

<UsingComparewith />

## Alignment

開発者は`alignment`プロパティを使用して、ラベルとコントロールがクロス軸上でどのように配置されるかを制御できます。このプロパティは、flexboxの`align-items`プロパティを反映しています。

:::note
スタックされたラジオは、`alignment`プロパティを使用して配置できます。ラベルとコントロールを水平方向に中央揃えする必要がある場合に便利です。
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

ヘルパーテキストとエラーテキストは、`helperText`と`errorText`プロパティを使用してラジオグループ内で使用できます。エラーテキストは、`ion-invalid`と`ion-touched`クラスが`ion-radio-group`に追加されていない限り表示されません。これにより、ユーザーがデータを入力する前にエラーが表示されることはありません。

Angularでは、これはフォームバリデーションによって自動的に行われます。JavaScript、React、Vueでは、独自のバリデーションに基づいてクラスを手動で追加する必要があります。

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
