---
title: 'ion-router-outlet'
---

import Props from '@ionic-internal/component-api/v7/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v7/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v7/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v7/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/router-outlet/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/router-outlet/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

router outlet は Angular の組み込み router outlet コンポーネントや Vue のルーター・ビューコンポーネントと同様の振る舞いをしますが、スタック式のナビゲーションを提供し、ビューをアニメーションで出し入れするためのロジックを含んでいます。

router outlet はナビゲーション用のメソッドを備えていますが、フレームワークのルーターにあるナビゲーションメソッドを使用することをお勧めします。

## ライフサイクル Hook

Router Outlet で Routes がレンダリングされた時、アニメーションに関連付けられた特定の Ionic イベントにアクセスできます。

| Event Name         | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションがはじまる時に発火します。 |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが終了した時に発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションがはじまる時に発火します。   |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが終了した時に発火します。   |

これらのイベントは Ionic のアニメーションシステムと連携し、コンポーネントがアニメーションを完成させたときにアプリの挙動を調整するのに使用できる。これらのイベントはフレームワーク独自のイベントシステムに代わるものではなく、追加されたものです。

Router Guards を扱うために、以前の`ionViewCanEnter` と `ionViewCanLeave`は、フレームワーク特有の同等のものに置き換えられました。Angular には[Router Guards](https://angular.jp/guide/router#milestone-5-route-guards)があります。

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
