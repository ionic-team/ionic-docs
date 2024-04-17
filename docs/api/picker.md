---
title: "ion-picker"
---
import Props from '@ionic-internal/component-api/v8/picker/props.md';
import Events from '@ionic-internal/component-api/v8/picker/events.md';
import Methods from '@ionic-internal/component-api/v8/picker/methods.md';
import Parts from '@ionic-internal/component-api/v8/picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/picker/custom-props.md';
import Slots from '@ionic-internal/component-api/v8/picker/slots.md';

<head>
  <title>ion-picker: Display a list of options in columns</title>
  <meta name="description" content="ピッカーは、ユーザーが選択できるオプションを持つ1つまたは複数の列を表示します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

ピッカーは、ユーザーが選択できるオプションを持つ1つまたは複数の列を表示します。

import Basic from '@site/static/usage/v8/picker/basic/index.md';

<Basic />

## Prefix と Suffix コンテンツ

`prefix` スロットと `suffix` スロットを使用して、ピッカーに追加コンテンツを追加します。

import PrefixSuffix from '@site/static/usage/v8/picker/prefix-suffix/index.md';

<PrefixSuffix />

## テーマ

### CSS変数

ピッカーのハイライトとフェードは `ion-picker` の CSS 変数を使ってカスタマイズできる。開発者は、`ion-picker-column-options` を直接ターゲットにして、ホストレベルのスタイリングを使用することで、個々の外観をカスタマイズすることができます。

import CSSProps from '@site/static/usage/v8/picker/theming/css-properties/index.md';

<CSSProps />

## Picker を Modal で使う

ピッカーは`ion-modal`のようなオーバーレイの中に表示することができ、確認ボタンやキャンセルボタンを使ってピッカー体験を作り出すことができる。

import ModalExample from '@site/static/usage/v8/picker/modal/index.md';

<ModalExample />

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
