---
title: "ion-datetime-button"
---
import Props from '@ionic-internal/component-api/v8/datetime-button/props.md';
import Events from '@ionic-internal/component-api/v8/datetime-button/events.md';
import Methods from '@ionic-internal/component-api/v8/datetime-button/methods.md';
import Parts from '@ionic-internal/component-api/v8/datetime-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/datetime-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/datetime-button/slots.md';

<head>
  <title>ion-datetime-button: Ionic Input for Datetime Picker</title>
  <meta name="description" content="Datetime button links with a datetime instance to easily a datetime in a popover, modal, and more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Datetimeボタンは、[Datetime](./datetime) コンポーネントとリンクし、フォーマットされた日付と時刻を表示します。また、モーダルやポップオーバーなどで日時を表示するためのボタンも用意されています。

## 概要

Datetimeボタンは、スペースに制約がある場合に使用する必要があります。このコンポーネントは、現在の日付と時刻の値を表示するボタンを表示します。ボタンがタップされると、日付や時刻のピッカーがオーバーレイで表示されます。

Angular、React、VueなどのJavaScriptフレームワークでDatetime Buttonを使用する場合は、 [ion-modalのkeepContentsMountedプロパティ](./modal#keepcontentsmounted) または [ion-popover](./popover#keepcontentsmounted) を使用していることを確認してください。これにより、オーバーレイがまだ表示されていない場合でも、リンクされたdatetimeインスタンスがマウントされるようになります。

## 基本的な使い方

import Basic from '@site/static/usage/v8/datetime-button/basic/index.md';

<Basic />

## ローカライゼーション

`ion-datetime-button` のローカライズされたテキストは、関連する `ion-datetime` インスタンスの `locale` プロパティによって決まります。詳しくは、[Datetime Localization](./datetime#localization) を参照してください。

## Format Options

Datetimeインスタンスに`formatOptions`を指定することで、Datetime Buttonの日付と時刻の書式をカスタマイズすることができます。詳細は[Datetime Format Options](./datetime#format-options)を参照してください。

import FormatOptions from '@site/static/usage/v8/datetime-button/format-options/index.md';

<FormatOptions />

## モーダルやポップオーバーと使う

`ion-datetime-button` は、マウントされた `ion-datetime` インスタンスと関連付ける必要があります。そのため、[Inline Modals](./modal#inline-modals-recommended) と [Inline Popovers](./popover#inline-popovers) は `keepContentsMounted` プロパティを `true` に設定して使用しなければなりません。

<!--
## Customization

TODO

### Buttons

TODO

### テーマ

TODO
-->

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSS カスタムプロパティ
<CustomProps />

## Slots
<Slots />
