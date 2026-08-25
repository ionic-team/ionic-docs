---
title: "ion-back-button"
---
import Props from '@ionic-internal/component-api/v9/back-button/props.md';
import Events from '@ionic-internal/component-api/v9/back-button/events.md';
import Methods from '@ionic-internal/component-api/v9/back-button/methods.md';
import Parts from '@ionic-internal/component-api/v9/back-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/back-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/back-button/slots.md';

<head>
  <title>ion-back-button: Custom Menu Back Button for Applications</title>
  <meta name="description" content="ion-back-buttonは、Android、iOS、およびProgressive Web Apps用のカスタムメニューアイコンです。Ionic Frameworkのコンポーネントを使用して、簡単にアプリケーションを構築できます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Back Buttonは、クリックされるとアプリの履歴に戻るようにナビゲートします。このボタンは、ナビゲーションスタックに履歴があるときのみ表示されます。ただし、 [`defaultHref`](#default-back-history) が設定されている場合は除きます。戻るボタンはモードに応じて異なるテキストとアイコンを表示しますが、これはカスタマイズすることができます。

## 基本的な使い方

import Basic from '@site/static/usage/v9/back-button/basic/index.mdx';

<Basic />

## カスタムのBack Button

デフォルトでは、戻るボタンは`ios`では`"chevron-back"`アイコン付きで`"Back"`のテキストを表示し、`md`では`"arrow-back-sharp"`アイコンを表示します。これは、各戻るボタンコンポーネントごとに`icon`または`text`プロパティを設定することでカスタマイズ可能です。あるいは、グローバル設定で`backButtonIcon`または`backButtonText`プロパティを使用してグローバルに設定することもできます。詳細は[Configドキュメント](../developing/config)を参照してください。

import Custom from '@site/static/usage/v9/back-button/custom/index.mdx';

<Custom />

## デフォルトのBack履歴 {/* #default-back-history */}

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
