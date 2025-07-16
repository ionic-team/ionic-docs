---
title: "ion-slides"
demoUrl: "/docs/demos/api/slides/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/slides/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Ion-Slides: Mobile Touch Slider with Built-In & Custom Animation</title>
  <meta name="description" content="Ion-Slides is a multi-section container which offers custom and built-in mobile touch slider animation effects. See how Ion-Slides works with iOS and Android." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### options

| | |
| --- | --- |
| **Description** | swiperインスタンスに渡すオプションです。有効なオプションについては、https://swiperjs.com/swiper-api を参照してください。 |
| **Attribute** | `options` |
| **Type** | `any` |
| **Default** | `{}` |



### pager

| | |
| --- | --- |
| **Description** | もし `true` ならば、ページネーションを表示します。 |
| **Attribute** | `pager` |
| **Type** | `boolean` |
| **Default** | `false` |



### scrollbar

| | |
| --- | --- |
| **Description** | `true`の場合、スクロールバーを表示します。 |
| **Attribute** | `scrollbar` |
| **Type** | `boolean` |
| **Default** | `false` |



## Events

| Name | Description |
| --- | --- |
| `ionSlideDidChange` | アクティブスライドが変更された後に発行されます。 |
| `ionSlideDoubleTap` | ユーザがスライドのコンテナをダブルタップしたときに発生します。 |
| `ionSlideDrag` | スライダーがアクティブに移動しているときに発行されます。 |
| `ionSlideNextEnd` | 次のスライドが終了したときに発行されます。 |
| `ionSlideNextStart` | 次のスライドが開始されたときに発行されます。 |
| `ionSlidePrevEnd` | 前のスライドが終了したときに発行されます。 |
| `ionSlidePrevStart` | 前のスライドが開始されたときに発行されます。 |
| `ionSlideReachEnd` | スライダーが最後のスライドになったときに発行されます。 |
| `ionSlideReachStart` | スライダーが初期位置にあるときに発行されます。 |
| `ionSlidesDidLoad` | Swiperの初期化後に発行されます。 |
| `ionSlideTap` | ユーザがスライドのコンテナをタップ/クリックしたときに発行されます。 |
| `ionSlideTouchEnd` | ユーザーがタッチを離したときに発行されます。 |
| `ionSlideTouchStart` | ユーザーがスライダーに初めて触れたときに発行されます。 |
| `ionSlideTransitionEnd` | スライド遷移が終了したときに発行されます。 |
| `ionSlideTransitionStart` | スライド遷移が開始されたときに発行されます。 |
| `ionSlideWillChange` | アクティブスライドが変更される前に発行されます。 |


## Methods


### getActiveIndex

| | |
| --- | --- |
| **Description** | アクティブなスライドのインデックスを取得します。 |
| **Signature** | `getActiveIndex() => Promise<number>` |


### getPreviousIndex

| | |
| --- | --- |
| **Description** | 前のスライドのインデックスを取得します。 |
| **Signature** | `getPreviousIndex() => Promise<number>` |


### getSwiper

| | |
| --- | --- |
| **Description** | Swiperのインスタンスを取得します。これを使用して、SwiperのフルAPIにアクセスします。すべてのAPIオプションについては、https://swiperjs.com/swiper-api を参照してください。 |
| **Signature** | `getSwiper() => Promise<any>` |


### isBeginning

| | |
| --- | --- |
| **Description** | 現在のスライドが最初のスライドであるか否かを取得します。 |
| **Signature** | `isBeginning() => Promise<boolean>` |


### isEnd

| | |
| --- | --- |
| **Description** | 現在のスライドが最後のスライドであるか否かを取得します。 |
| **Signature** | `isEnd() => Promise<boolean>` |


### length

| | |
| --- | --- |
| **Description** | スライドの総枚数を取得します。 |
| **Signature** | `length() => Promise<number>` |


### lockSwipeToNext

| | |
| --- | --- |
| **Description** | 次のスライドにスライドする機能をロックまたはアンロックします。 |
| **Signature** | `lockSwipeToNext(lock: boolean) => Promise<void>` |


### lockSwipeToPrev

| | |
| --- | --- |
| **Description** | 前のスライドにスライドする機能をロックまたはアンロックします。 |
| **Signature** | `lockSwipeToPrev(lock: boolean) => Promise<void>` |


### lockSwipes

| | |
| --- | --- |
| **Description** | 次のスライドや前のスライドにスライドする機能をロックまたはアンロックします。 |
| **Signature** | `lockSwipes(lock: boolean) => Promise<void>` |


### slideNext

| | |
| --- | --- |
| **Description** | 次のスライドに遷移します。 |
| **Signature** | `slideNext(speed?: number, runCallbacks?: boolean) => Promise<void>` |


### slidePrev

| | |
| --- | --- |
| **Description** | 前のスライドに遷移します。 |
| **Signature** | `slidePrev(speed?: number, runCallbacks?: boolean) => Promise<void>` |


### slideTo

| | |
| --- | --- |
| **Description** | 指定されたスライドに遷移します。 |
| **Signature** | `slideTo(index: number, speed?: number, runCallbacks?: boolean) => Promise<void>` |


### startAutoplay

| | |
| --- | --- |
| **Description** | オートプレイを開始します。 |
| **Signature** | `startAutoplay() => Promise<void>` |


### stopAutoplay

| | |
| --- | --- |
| **Description** | 自動再生を停止します。 |
| **Signature** | `stopAutoplay() => Promise<void>` |


### update

| | |
| --- | --- |
| **Description** | 基礎となるスライダーの実装を更新します。子スライダーを追加または削除した場合に呼び出します。 |
| **Signature** | `update() => Promise<void>` |


### updateAutoHeight

| | |
| --- | --- |
| **Description** | speed」パラメータに等しい時間、スイーパーの高さを強制的に更新する（autoHeightが有効な場合）。 |
| **Signature** | `updateAutoHeight(speed?: number) => Promise<void>` |



## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--bullet-background` | ページネーションの箇条書きの背景 |
| `--bullet-background-active` | アクティブなページネーションバレットの背景 |
| `--progress-bar-background` | ページネーションの進行バーの背景 |
| `--progress-bar-background-active` | アクティブなページネーションの進行バーの背景 |
| `--scroll-bar-background` | ページネーション用スクロールバーの背景 |
| `--scroll-bar-background-active` | アクティブなページネーションのスクロールバーの背景 |

