---
title: "ion-back-button"
---
import Props from '@ionic-internal/component-api/v7/back-button/props.md';
import Events from '@ionic-internal/component-api/v7/back-button/events.md';
import Methods from '@ionic-internal/component-api/v7/back-button/methods.md';
import Parts from '@ionic-internal/component-api/v7/back-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/back-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/back-button/slots.md';

<head>
  <title>Back Button | ion-back-button: Custom Menu Icon for Applications</title>
  <meta name="description" content="ion-back-buttonは、Android、iOS、およびProgressive Web Apps用のカスタムメニューアイコンです。Ionic Frameworkのコンポーネントを使用して、簡単にアプリケーションを構築できます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Back Buttonは、クリックされるとアプリの履歴に戻るようにナビゲートします。このボタンは、ナビゲーションスタックに履歴があるときのみ表示されます。ただし、 [`defaultHref`](#default-back-history) が設定されている場合は除きます。戻るボタンはモードに応じて異なるテキストとアイコンを表示しますが、これはカスタマイズすることができます。

## 基本的な使い方

import Basic from '@site/static/usage/v7/back-button/basic/index.md';

<Basic />

## カスタムのBack Button

デフォルトでは、Back Buttonはテキスト `"Back"` と共に、`ios` では `"chevron-back"` アイコン、`md` では `"arrow-back-sharp"` アイコンを表示します。これは、`icon`または`text`プロパティを設定することで、戻るボタンコンポーネントごとにカスタマイズすることができます。また、グローバル設定の `backButtonIcon` または `backButtonText` プロパティを使用して、グローバルに設定することもできます。詳しくは、[Config docs](../developing/config) を参照してください。

import Custom from '@site/static/usage/v7/back-button/custom/index.md';

<Custom />

## デフォルトのBack履歴

時折、アプリが履歴がないときに戻るボタンを表示し、ナビゲートする必要がある場合があります。この場合、戻るボタンの `defaultHref` をパスに設定することで実現できます。 `defaultHref` を使用するには、アプリにパスが設定されたルーターが含まれている必要があります。

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
