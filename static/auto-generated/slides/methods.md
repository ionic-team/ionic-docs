

### getActiveIndex

| | |
| --- | --- |
| **Description** | Get the index of the active slide.<br /><br />自動翻訳: アクティブなスライドのインデックスを取得します。 |
| **Signature** | `getActiveIndex() => Promise<number>` |


### getPreviousIndex

| | |
| --- | --- |
| **Description** | Get the index of the previous slide.<br /><br />自動翻訳: 前のスライドのインデックスを取得します。 |
| **Signature** | `getPreviousIndex() => Promise<number>` |


### getSwiper

| | |
| --- | --- |
| **Description** | Get the Swiper instance. Use this to access the full Swiper API. See https://swiperjs.com/swiper-api for all API options.<br /><br />自動翻訳: Swiperのインスタンスを取得します。これを使用して、SwiperのフルAPIにアクセスします。すべてのAPIオプションについては、https://swiperjs.com/swiper-api を参照してください。 |
| **Signature** | `getSwiper() => Promise<any>` |


### isBeginning

| | |
| --- | --- |
| **Description** | Get whether or not the current slide is the first slide.<br /><br />自動翻訳: 現在のスライドが最初のスライドであるか否かを取得する。 |
| **Signature** | `isBeginning() => Promise<boolean>` |


### isEnd

| | |
| --- | --- |
| **Description** | Get whether or not the current slide is the last slide.<br /><br />自動翻訳: 現在のスライドが最後のスライドであるか否かを取得する。 |
| **Signature** | `isEnd() => Promise<boolean>` |


### length

| | |
| --- | --- |
| **Description** | Get the total number of slides.<br /><br />自動翻訳: スライドの総枚数を取得する。 |
| **Signature** | `length() => Promise<number>` |


### lockSwipeToNext

| | |
| --- | --- |
| **Description** | Lock or unlock the ability to slide to the next slide.<br /><br />自動翻訳: 次のスライドにスライドする機能をロックまたはアンロックする。 |
| **Signature** | `lockSwipeToNext(lock: boolean) => Promise<void>` |


### lockSwipeToPrev

| | |
| --- | --- |
| **Description** | Lock or unlock the ability to slide to the previous slide.<br /><br />自動翻訳: 前のスライドにスライドする機能をロックまたはアンロックします。 |
| **Signature** | `lockSwipeToPrev(lock: boolean) => Promise<void>` |


### lockSwipes

| | |
| --- | --- |
| **Description** | Lock or unlock the ability to slide to the next or previous slide.<br /><br />自動翻訳: 次のスライドや前のスライドにスライドする機能をロックまたはアンロックします。 |
| **Signature** | `lockSwipes(lock: boolean) => Promise<void>` |


### slideNext

| | |
| --- | --- |
| **Description** | Transition to the next slide.<br /><br />自動翻訳: 次のスライドに遷移します。 |
| **Signature** | `slideNext(speed?: number, runCallbacks?: boolean) => Promise<void>` |


### slidePrev

| | |
| --- | --- |
| **Description** | Transition to the previous slide.<br /><br />自動翻訳: 前のスライドに遷移します。 |
| **Signature** | `slidePrev(speed?: number, runCallbacks?: boolean) => Promise<void>` |


### slideTo

| | |
| --- | --- |
| **Description** | Transition to the specified slide.<br /><br />自動翻訳: 指定されたスライドに遷移する。 |
| **Signature** | `slideTo(index: number, speed?: number, runCallbacks?: boolean) => Promise<void>` |


### startAutoplay

| | |
| --- | --- |
| **Description** | Start auto play.<br /><br />自動翻訳: オートプレイを開始する。 |
| **Signature** | `startAutoplay() => Promise<void>` |


### stopAutoplay

| | |
| --- | --- |
| **Description** | Stop auto play.<br /><br />自動翻訳: 自動再生を停止する。 |
| **Signature** | `stopAutoplay() => Promise<void>` |


### update

| | |
| --- | --- |
| **Description** | Update the underlying slider implementation. Call this if you've added or removed child slides.<br /><br />自動翻訳: 基礎となるスライダーの実装を更新します。子スライダーを追加または削除した場合に呼び出します。 |
| **Signature** | `update() => Promise<void>` |


### updateAutoHeight

| | |
| --- | --- |
| **Description** | Force swiper to update its height (when autoHeight is enabled) for the duration equal to 'speed' parameter.<br /><br />自動翻訳: speed」パラメータに等しい時間、スイーパーの高さを強制的に更新する（autoHeightが有効な場合）。 |
| **Signature** | `updateAutoHeight(speed?: number) => Promise<void>` |


