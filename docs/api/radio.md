---
title: "ion-radio"
---
import Props from '@ionic-internal/component-api/v7/radio/props.md';
import Events from '@ionic-internal/component-api/v7/radio/events.md';
import Methods from '@ionic-internal/component-api/v7/radio/methods.md';
import Parts from '@ionic-internal/component-api/v7/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/radio/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/radio/slots.md';

<head>
  <title>ion-radio Component: Radio Property for iOS and Android</title>
  <meta name="description" content="Radioコンポーネントは、iOSおよびAndroidデバイスのion-radio-groupsの内部で使用する必要があります。Radioコンポーネントの使用方法とインストール方法については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


ラジオは、[ラジオグループ](./radio-group)の中で使用する必要があります。ラジオを押すと、そのラジオがチェックされ、前に選択されていたラジオがある場合は、そのチェックが解除されます。また、親ラジオグループのvalueプロパティをラジオの値に設定することで、プログラム的にチェックすることもできます。

ラジオがラジオグループの中にある場合、いつでもチェックされるのは1つのラジオだけです。複数の項目を選択する場合は、[checkboxes](./checkbox)を代わりに使用する必要があります。ラジオをグループ内で無効にすると、ラジオとの相互作用を防ぐことができます。

## 基本的な使い方

import Basic from '@site/static/usage/v7/radio/basic/index.md';

<Basic />

## Label Placement

開発者は `labelPlacement` プロパティを使用して、ラベルがどのように配置されるかを制御することができます。

import LabelPlacement from '@site/static/usage/v7/radio/label-placement/index.md';

<LabelPlacement />

## Justification

開発者は `justify` プロパティを使用して、ラベルとコントロールの行の詰め方を制御することができます。

import Justify from '@site/static/usage/v7/radio/justify/index.md';

<Justify />


:::note
`ion-item` is only used in the demos to emphasize how `justify` works. It is not needed in order for `justify` to function correctly.
:::

## ラジオの選択を解除する

デフォルトでは、一度選択されたラジオは選択を解除することができず、もう一度押すと選択されたままになります。この動作は、親ラジオグループの `allowEmptySelection` プロパティを使用することで変更することができ、ラジオを非選択にすることができます。

import EmptySelection from '@site/static/usage/v7/radio/empty-selection/index.md';

<EmptySelection />


## テーマ

### Colors

import Colors from '@site/static/usage/v7/radio/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/radio/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/radio/theming/css-shadow-parts/index.md';

<CSSParts />

## Legacy Radio Syntaxからの移行

Ionic 7.0では、よりシンプルなラジオ構文が導入されました。この新しい構文は、ラジオを設定するために必要な定型文を減らし、アクセシビリティの問題を解決し、開発者のエクスペリエンスを向上させます。

開発者は、この移行を一度に1つのラジオで実行できます。開発者はレガシー構文を使い続けることができますが、できるだけ早く移行することをお勧めします。

### 最新の構文の使い方

最新の構文を使用するには、`ion-label`を削除して、`ion-radio`の内部にラベルを直接渡します。ラベルの配置は `ion-radio` の `labelPlacement` プロパティを使用して設定することができます。ラベルとコントロールの行の詰め方は、`ion-radio` の `justify` プロパティを使用して制御することができます。

import Migration from '@site/static/usage/v7/radio/migration/index.md';

<Migration />
  

:::note
Ionic の過去のバージョンでは、`ion-radio` が正しく機能するためには `ion-item` が必要でした。Ionic 7.0 からは、`ion-radio` は `ion-item` の中で、そのアイテムが `ion-list` に配置される場合にのみ使用されます。また、`ion-radio`が正しく機能するためには、`ion-item`はもはや必須ではありません。
:::

### レガシー構文の使用

Ionicは、アプリが最新の無線構文を使用しているかどうかをヒューリスティックで検出します。場合によっては、レガシー構文を使い続けることが望ましい場合もあります。開発者は `ion-radio` の `legacy` プロパティを `true` に設定することで、その無線機のインスタンスがレガシー構文を使用するように強制できます。



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
