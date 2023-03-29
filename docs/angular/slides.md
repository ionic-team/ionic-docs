---
title: Migrating from ion-slides to Swiper.js
---

<head>
  <title>Set Up Swiper.js for Angular Slides [Example] | Ionic</title>
  <meta
    name="description"
    content="Read this guide to learn how to get Swiper.js for Angular set up in your Ionic Framework application for a modern touch slider component."
  />
</head>

:::caution Looking for `ion-slides`?
`ion-slides` was deprecated in v6.0.0 and removed in v7.0.0. We recommend using the Swiper.js library directly. The migration process is detailed below.
:::

We recommend <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a> if you need a modern touch slider component. Swiper 9 introduced <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a> as a replacement for its Angular component, so this guide will go over how to get Swiper Element set up in your Ionic Framework application. It will also go over any migration information you may need to move from `ion-slides` to Swiper Element.

## Getting Started

First, update to the latest version of Ionic:

```shell
npm install @ionic/angular@latest
```

Once that is done, install the Swiper dependency in your project:

```shell
npm install swiper@latest
```

Next, we need to add the `CUSTOM_ELEMENTS_SCHEMA`, which tells Angular that we will be using custom elements. This can be done in either `app.module.ts`, or the module file for the component where you will be using Swiper.

```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [..., CUSTOM_ELEMENTS_SCHEMA]
});
...
```

Finally, we need to call Swiper's `register` function to globally register Swiper's custom elements. This should only be done once, so place it in `app.component.ts`.

```typescript
import { register } from 'swiper/element/bundle';

register();

@Component({
  ...
})
...
```

From there, we just have to replace `ion-slides` elements with `swiper-container` and `ion-slide` elements with `swiper-slide`. Note that these custom elements do not need to be imported, as calling `register` tells Angular about them on its own.

```html
<swiper-container>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

## Bundled vs. Core Versions

By default, make sure you import the `register` function from `swiper/element/bundle`. This uses the bundled version of Swiper, which automatically includes all modules and stylesheets needed to run Swiper's various features.

If you would like to use the Core version instead, which does not include additional modules automatically, see <a href="https://swiperjs.com/element#core-version-and-modules" target="_blank" rel="noopener noreferrer">https://swiperjs.com/element#core-version-and-modules</a>. The rest of this migration guide will assume you are using the bundled version.

## Swiping with Style

To migrate over your CSS, first update your selectors to target the new custom elements instead:

| ion-slides Selector | Swiper Selector    |
| ------------------- | ------------------ | 
| `ion-slides`        | `swiper-container` |
| `ion-slide`         | `swiper-slide`     |

If you were using the CSS custom properties found on `ion-slides`, below is a list of corresponding properties used in Swiper.

| `ion-slides` CSS property          | `swiper-container` CSS property             |
| ---------------------------------- | ------------------------------------------- |
| `--bullet-background`              | `--swiper-pagination-bullet-inactive-color` |
| `--bullet-background-active`       | `--swiper-pagination-color`                 |
| `--progress-bar-background`        | `--swiper-pagination-progressbar-bg-color`  |
| `--progress-bar-background-active` | `--swiper-pagination-color`                 |
| `--scroll-bar-background`          | `--swiper-scrollbar-bg-color`               |
| `--scroll-bar-background-active`   | `--swiper-scrollbar-drag-bg-color`          |

For additional custom CSS, because Swiper Element uses Shadow DOM encapsulation, styles will need to be injected into the Shadow DOM scope. See <a href="https://swiperjs.com/element#injecting-styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/element#injecting-styles</a> for instructions.

### Additional `ion-slides` Styles

The `ion-slides` component had additional styling that helped create a native look and feel. These styles are **not** required to use Swiper.js with Ionic, but if you would like to maintain the look of `ion-slides` as closely as possible, add the following CSS to your `global.scss`:

```css
swiper-container {
  --swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);
  --swiper-pagination-color: var(--ion-color-primary, #3880ff);
  --swiper-pagination-progressbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);
  --swiper-scrollbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);
}

swiper-slide {
  display: flex;
  position: relative;

  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 18px;

  text-align: center;
  box-sizing: border-box;
}

swiper-slide img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
}
```

## The IonicSlides Module

With `ion-slides`, Ionic automatically customized dozens of Swiper properties. This resulted in an experience that felt smooth when swiping on mobile devices. We recommend using the `IonicSlides` module to ensure that these properties are also set when using Swiper directly. However, using this module is **not** required to use Swiper.js in Ionic.

We can install the `IonicSlides` module by importing it from `@ionic/angular` and passing it to the `modules` property of `swiper-container` as an array:

```typescript
// home.page.ts

import { IonicSlides } from '@ionic/angular';

@Component({
  ...
})
export class HomePage {
  swiperModules = [IonicSlides];
}
```

```html
<!-- home.page.html -->

<swiper-container [modules]="swiperModules">
  ...
</swiper-container>
```

:::note
If you are using the Core version of Swiper and have installed additional modules, ensure that `IonicSlides` is the last module in the array. This will let it automatically customize the settings of modules such as Pagination, Scrollbar, Zoom, and more.
:::

## Properties

Swiper options should be provided as individual properties directly on the `<swiper-container>` component.

Let's say in an app with `ion-slides` we had the `slidesPerView` and `loop` options set:

```html
<ion-slides [options]="{ slidesPerView: true, loop: true }">
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

To set these options as properties directly on `<swiper-container>` we would do the following:

```html
<swiper-container [slidesPerView]="3" [loop]="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

Below is a full list of property changes when going from `ion-slides` to Swiper Element:

| Name      | Notes                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| options   | Set each option as a property directly on the `<swiper-container>` component.                                                           |
| mode      | For different styles based upon the mode, you can target the slides with `.ios swiper-container` or `.md swiper-container` in your CSS. |
| pager     | Use the `pagination` property instead.                                                                                                  |

:::note
All properties available in Swiper Element can be found at <a href="https://swiperjs.com/swiper-api#parameters" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#parameters</a>.
:::

## Events

Since the `swiper-container` component is not provided by Ionic Framework, event names will not have an `ionSlide` prefix to them. Additionally, all event names should be lowercase instead of camelCase.

Let's say in an app with `ion-slides` we used the `ionSlideDidChange` event:

```html
<ion-slides (ionSlideDidChange)="onSlideChange()">
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

To migrate, we would change the name of the event to `slidechange`:

```html
<swiper-container (slidechange)="onSlideChange()">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

Below is a full list of event name changes when going from `ion-slides` to Swiper Angular:

| ion-slides Event        | Swiper Event               |
| ----------------------- | -------------------------- |
| ionSlideWillChange      | slidechangetransitionstart |
| ionSlideDidChange       | slidechangetransitionend   |
| ionSlideDoubleTap       | doubletap                  |
| ionSlideDrag            | slidermove                 |
| ionSlideNextStart       | slidenexttransitionstart   |
| ionSlideNextEnd         | slidenexttransitionend     |
| ionSlidePrevStart       | slideprevtransitionstart   |
| ionSlidePrevEnd         | slideprevtransitionend     |
| ionSlideReachStart      | reachbeginning             |
| ionSlideReachEnd        | reachend                   |
| ionSlideTap             | tap                        |
| ionSlideTouchStart      | touchstart                 |
| ionSlideTouchEnd        | touchend                   |
| ionSlideTransitionStart | transitionstart            |
| ionSlideTransitionEnd   | transitionend              |
| ionSlidesDidLoad        | init                       |

:::note
All events available in Swiper Element can be found at <a href="https://swiperjs.com/swiper-api#events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#events</a>.
:::

## Methods

Most methods have been removed in favor of directly accessing the properties of the Swiper instance. To access the Swiper instance, first get a reference to the `<swiper-container>` element (such as through `ViewChild`), then access its `swiper` prop:

```html
<!-- slides.component.html -->

<swiper-container #swiper>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

```typescript
// slides.component.ts

import { ..., ElementRef, ViewChild } from '@angular/core';

@Component({
  ...
})
export class SlidesExample {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  logActiveIndex() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }
}
```

Below is a full list of method changes when going from `ion-slides` to Swiper Element:

| ion-slides Method  | Notes                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ |
| getActiveIndex()   | Use the `activeIndex` property instead.                                              |
| getPreviousIndex() | Use the `previousIndex` property instead.                                            |
| getSwiper()        | Get a reference to the Swiper instance using the `swiper` prop. See example above.   |
| isBeginning()      | Use the `isBeginning` property instead.                                              |
| isEnd()            | Use the `isEnd` property instead.                                                    |
| length()           | Use the `slides` property instead. (i.e swiper.slides.length)                        |
| lockSwipeToNext()  | Use the `allowSlidesNext` property instead.                                          |
| lockSwipeToPrev()  | Use the `allowSlidePrev` property instead.                                           |
| lockSwipes()       | Use the `allowSlideNext`, `allowSlidePrev`, and `allowTouchMove` properties instead. |
| startAutoplay()    | Use the `autoplay` property instead.                                                 |
| stopAutoplay()     | Use the `autoplay` property instead.                                                 |

:::note
All methods and properties available on the Swiper instance can be found at <a href="https://swiperjs.com/swiper-api#methods-and-properties" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#methods-and-properties</a>.
:::

## Effects

Effects such as Cube or Fade can be used in Swiper Element with no additional imports, as long as you are using the bundled version of Swiper. For example, the below code will cause the slides to have a flip transition effect:

```html
<swiper-container effect="flip">
  ...
</swiper-container>
```

:::note
For more information on effects in Swiper, please see <a href="https://swiperjs.com/swiper-api#fade-effect" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#fade-effect</a>.
:::

## Wrap Up

Now that you have Swiper installed, there is a whole set of new Swiper features for you to enjoy. We recommend starting with the <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element documentation</a> and then referencing <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">the Swiper API docs</a>.

## FAQ

### Where can I find an example of this migration?

You can find a sample app with `ion-slides` and the equivalent Swiper usage at https://github.com/ionic-team/slides-migration-samples.

### Where can I get help with this migration?

If you are running into issues with the migration, please create a post on the [Ionic Forum](https://forum.ionicframework.com/).

### Where do I file bug reports?

Before opening an issue, please consider creating a post on the <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper Discussion Board</a> or the <a href="https://forum.ionicframework.com" target="_blank">Ionic Forum</a> to see if your issue can be resolved by the community.

If you are running into problems with the Swiper library, new bugs should be filed on the Swiper repo: <a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

If you are running into problems with the `IonicSlides` module, new bugs should be filed on the Ionic Framework repo: <a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>
