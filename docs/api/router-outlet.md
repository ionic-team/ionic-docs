---
title: "ion-router-outlet"
hide_table_of_contents: true
---
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/router-outlet/props.md';
import Events from '@site/static/auto-generated/router-outlet/events.md';
import Methods from '@site/static/auto-generated/router-outlet/methods.md';
import Parts from '@site/static/auto-generated/router-outlet/parts.md';
import CustomProps from '@site/static/auto-generated/router-outlet/custom-props.md';
import Slots from '@site/static/auto-generated/router-outlet/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



router outletはAngularの組み込みrouter outletコンポーネントやVueのルーター・ビューコンポーネントと同様の振る舞いをしますが、スタック式のナビゲーションを提供し、ビューをアニメーションで出し入れするためのロジックを含んでいます。

router outlet はナビゲーション用のメソッドを備えていますが、フレームワークのルーターにあるナビゲーションメソッドを使用することをお勧めします。

## ライフサイクルHook

Router OutletでRoutesがレンダリングされた時、アニメーションに関連付けられた特定のIonicイベントにアクセスできます。


| Event Name         | Description                                                          |
|--------------------|------------------------------------------------------------------|
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションがはじまる時に発火します。 |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが終了した時に発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションがはじまる時に発火します。  |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが終了した時に発火します。 |


これらのイベントはIonicのアニメーションシステムと連携し、コンポーネントがアニメーションを完成させたときにアプリの挙動を調整するのに使用できる。これらのイベントはフレームワーク独自のイベントシステムに代わるものではなく、追加されたものです。

Router Guardsを扱うために、以前の`ionViewCanEnter` と `ionViewCanLeave`は、フレームワーク特有の同等のものに置き換えられました。Angularには[Router Guards](https://angular.jp/guide/router#milestone-5-route-guards)があります。




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