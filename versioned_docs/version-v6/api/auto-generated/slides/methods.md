

### getActiveIndex

| | |
| --- | --- |
| **Description** | Get the index of the active slide. |
| **Signature** | `getActiveIndex() => Promise<number>` |


### getPreviousIndex

| | |
| --- | --- |
| **Description** | Get the index of the previous slide. |
| **Signature** | `getPreviousIndex() => Promise<number>` |


### getSwiper

| | |
| --- | --- |
| **Description** | Get the Swiper instance. Use this to access the full Swiper API. See https://swiperjs.com/swiper-api for all API options. |
| **Signature** | `getSwiper() => Promise<any>` |


### isBeginning

| | |
| --- | --- |
| **Description** | Get whether or not the current slide is the first slide. |
| **Signature** | `isBeginning() => Promise<boolean>` |


### isEnd

| | |
| --- | --- |
| **Description** | Get whether or not the current slide is the last slide. |
| **Signature** | `isEnd() => Promise<boolean>` |


### length

| | |
| --- | --- |
| **Description** | Get the total number of slides. |
| **Signature** | `length() => Promise<number>` |


### lockSwipeToNext

| | |
| --- | --- |
| **Description** | Lock or unlock the ability to slide to the next slide. |
| **Signature** | `lockSwipeToNext(lock: boolean) => Promise<void>` |


### lockSwipeToPrev

| | |
| --- | --- |
| **Description** | Lock or unlock the ability to slide to the previous slide. |
| **Signature** | `lockSwipeToPrev(lock: boolean) => Promise<void>` |


### lockSwipes

| | |
| --- | --- |
| **Description** | Lock or unlock the ability to slide to the next or previous slide. |
| **Signature** | `lockSwipes(lock: boolean) => Promise<void>` |


### slideNext

| | |
| --- | --- |
| **Description** | Transition to the next slide. |
| **Signature** | `slideNext(speed?: number, runCallbacks?: boolean) => Promise<void>` |


### slidePrev

| | |
| --- | --- |
| **Description** | Transition to the previous slide. |
| **Signature** | `slidePrev(speed?: number, runCallbacks?: boolean) => Promise<void>` |


### slideTo

| | |
| --- | --- |
| **Description** | Transition to the specified slide. |
| **Signature** | `slideTo(index: number, speed?: number, runCallbacks?: boolean) => Promise<void>` |


### startAutoplay

| | |
| --- | --- |
| **Description** | Start auto play. |
| **Signature** | `startAutoplay() => Promise<void>` |


### stopAutoplay

| | |
| --- | --- |
| **Description** | Stop auto play. |
| **Signature** | `stopAutoplay() => Promise<void>` |


### update

| | |
| --- | --- |
| **Description** | Update the underlying slider implementation. Call this if you've added or removed child slides. |
| **Signature** | `update() => Promise<void>` |


### updateAutoHeight

| | |
| --- | --- |
| **Description** | Force swiper to update its height (when autoHeight is enabled) for the duration equal to 'speed' parameter. |
| **Signature** | `updateAutoHeight(speed?: number) => Promise<void>` |


