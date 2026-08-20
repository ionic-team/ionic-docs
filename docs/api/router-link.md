---
title: "ion-router-link"
---

import Props from '@ionic-internal/component-api/v9/router-link/props.md';
import Events from '@ionic-internal/component-api/v9/router-link/events.md';
import Methods from '@ionic-internal/component-api/v9/router-link/methods.md';
import Parts from '@ionic-internal/component-api/v9/router-link/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/router-link/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/router-link/slots.md';

<head>
  <title>ion-router-link: Navigate To a Specified Link</title>
  <meta name="description" content="ion-router-linkコンポーネントを使用すると、指定したリンクに移動することができます。ルーターリンクは、hrefで場所を、directionで遷移のアニメーションを指定することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

ルーターリンクコンポーネントは、指定されたリンクに移動するために使用します。ブラウザのアンカータグと同様に、`href` で場所を、`direction` で遷移のアニメーションを指定できます。

:::note
このコンポーネントは、Vanilla JavaScript と Stencil のプロジェクトでのみ使用してください。Angular プロジェクトでは、[`ion-router-outlet`](router-outlet.md) と Angular ルーターを使用してください。
:::

詳細については、[ルーター](./router)のドキュメントを参照してください。

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

## スロット
<Slots />
