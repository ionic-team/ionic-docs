---
title: 'Slides'
---

We recommend <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a> if you need a modern touch slider component. It powers our `ion-slides` component, but we now recommend that developers use Swiper for Angular directly.

This guide will go over how to get Swiper for Angular set up in your Ionic Framework application. It will also go over any migration information you may need to move from `ion-slides` to the official Swiper Angular integration.

## Getting Started

To get started, install the Swiper dependency in your project:

```shell
npm install swiper
```

## Swiping with Style

Next, we need to import the base Swiper styles. We recommend importing the styles in the component in which Swiper is being used. This ensures that the styles are only loaded when needed:

```javascript
// slides.component.scss

@import '~swiper/swiper';
```

Ionic Framework also provides some default styles, as well as the CSS Variables that were used inside of the old `ion-slides`. If you would like to continue to use those styles and CSS Variables, be sure to import the `ionic-swiper.css` file:

```javascript
// slides.component.scss

@import '~swiper/swiper';
@import '~@ionic/angular/css/ionic-swiper';
```

You should also update any selectors to target the correct Swiper classes. If you were targeting `ion-slides`, you should target `.swiper-container`. If you were targeting `ion-slide`, you should target `.swiper-slide`.


### Vanilla CSS (Optional)

For developers not using a CSS pre-processor, Swiper also provides the styles bundled together. It is important to note that this will import styles for all modules as well.

```javascript
// slides.component.css

@import '~swiper/swiper-bundle.min';
@import '~@ionic/angular/css/ionic-swiper';
```

## Using Components

Swiper exports two components: `Swiper` and `SwiperSlide`. The `Swiper` component is the equivalent of `IonSlides`, and `SwiperSlide` is the equivalent of `IonSlide`.

These components are registered by adding `SwiperModule` to the module of the component you wish to use Swiper in.

```javascript
// app.module.ts

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [SwiperModule],
})
export class AppModule {}
```

```html
<!-- swiper.component.html -->

<swiper>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper>
```

## The IonicSwiper Module

There are a few edge cases in Ionic Framework where Swiper may not be able to compute the slider dimensions properly. As a result, we have created the `IonicSwiper` module to resolve some of these issues.

To install it, we first need to import the core Swiper library and the IonicSwiper module:


```javascript
// slides.component.ts

import SwiperCore from 'swiper';
import { IonicSwiper } from '@ionic/angular';
```

Then we can install the module:

```javascript
// slides.component.ts

import { Component } from '@angular/core';

import SwiperCore from 'swiper';
import { IonicSwiper } from '@ionic/angular';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-slides-example',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.scss']
})
export class SlidesExample {
  ...
}
```

## Additional Modules

By default, Swiper for Angular uses the core version of Swiper and does not import any additional modules. To use modules such as Navigation or Pagination, you need to import them first.

`ion-slides` automatically included the Pagination, Scrollbar, Autoplay, Keyboard, and Zoom modules. If you used any of these features, be sure to import them in your application.

The following example shows how to install the Navigation and Pagination plugins:

```javascript
// slides.component.ts

import { Component } from '@angular/core';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { IonicSwiper } from '@ionic/angular';

SwiperCore.use([IonicSwiper, Navigation, Pagination]);

@Component({
  selector: 'app-slides-example',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.scss']
})
export class SlidesExample {
  ...
}
```

```html
<!-- swiper.component.html -->
<swiper
  [pagination]="{ clickable: true }"
  navigation
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper>
```

> Importing `swiper-bundle.min.css` imports styles for all modules. When using the SCSS or Less styles, you will need to import the styles for each module. See <a href="https://swiperjs.com/angular#styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/angular#styles</a> for a full list of stylesheets.

## Properties

Swiper options are provided as props directly on the `<swiper>` component rather than via the `options` object in `ion-slides`.

Let's say in an app with `ion-slides` we had the `slidesPerView` and `loop` options set:

```html
<ion-slides
  [options]="{ slidesPerView: true, loop: true }"
>
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

To migrate, we would move these options out of the `options` object and onto the `<swiper>` component directly as properties:

```html
<swiper
  [slidesPerView]="3"
  [loop]="true"
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper>
```

Below is a full list of property changes when going from `ion-slides` to Swiper Angular:

| Name      | Notes                                                        |
| --------- | ------------------------------------------------------------ |
| options   | Set each option as a property directly on the `<swiper>` component. |
| mode      | For different styles based upon the mode, you can target the slides with `.ios .swiper-container` or `.md .swiper-container` |
| pager     | Use the `pagination` property instead. Requires installation of the Pagination module. |
| scrollbar | You can continue to use the `scrollbar` property, just be sure to install the Scrollbar module first. |

All properties available in Swiper Angular can be found at <a href="https://swiperjs.com/angular#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/angular#swiper-props</a>.

## Events

Since the `Swiper` component is not provided by Ionic Framework, event names will not have an `ionSlide` prefix to them.

Let's say in an app with `ion-slides` we used the `ionSlideDidChange` event:

```html
<ion-slides
  (ionSlideDidChange)="onSlideChange()"
>
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

To migrate, we would change the name of the event to `slideChange`:

```html
<swiper
  (slideChange)="onSlideChange()"
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper>
```

Below is a full list of event name changes when going from `ion-slides` to Swiper Angular:

| ion-slides Event        | Swiper Event               |
| ----------------------- | -------------------------- |
| ionSlideWillChange      | slideChangeTransitionStart |
| ionSlideDidChange       | slideChangeTransitionEnd   |
| ionSlideDoubleTap       | doubleTap                  |
| ionSlideDrag            | sliderMove                 |
| ionSlideNextStart       | slideNextTransitionStart   |
| ionSlideNextEnd         | slideNextTransitionEnd     |
| ionSlidePrevStart       | slidePrevTransitionStart   |
| ionSlidePrevEnd         | slidePrevTransitionEnd     |
| ionSlideReachStart      | reachBeginning             |
| ionSlideReachEnd        | reachEnd                   |
| ionSlideTap             | tap                        |
| ionSlideTouchStart      | touchStart                 |
| ionSlideTouchEnd        | touchEnd                   |
| ionSlideTransitionStart | transitionStart            |
| ionSlideTransitionEnd   | transitionEnd              |
| ionSlidesDidLoad        | init                       |


All events available in Swiper Angular can be found at <a href="https://swiperjs.com/angular#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/angular#swiper-events</a>.


## Methods

Most methods have been removed in favor of accessing the `<swiper>` props directly.

Accessing these properties can be tricky as you want to access the properties on the Swiper instance itself, not your Angular component. To do this, we recommend getting a reference to the `Swiper` instance via `(swiper)`:

```html
<!-- slides.component.html -->

<swiper
  (swiper)="setSwiperInstance($event)"
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper>
```

```javascript
// slides.component.ts

import { Component } from '@angular/core';

import SwiperCore from 'swiper';
import { IonicSwiper } from '@ionic/angular';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-slides-example',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.scss']
})
export class SlidesExample {
  private slides;

  constructor() {}

  setSwiperInstance(ev) {
    this.slides = ev;
  }
}
```

From here, if you wanted to access a property on the Swiper instance you would access `this.slides`. For example, if you wanted to check the `isBeginning` property, you could do: `this.slides.isBeginning`. Make sure `this.slides` is defined first though!

Below is a full list of method changes when going from `ion-slides` to Swiper Angular:

| Name               | Notes                                                        |
| ------------------ | ------------------------------------------------------------ |
| getActiveIndex()   | Use the `activeIndex` property instead.                      |
| getPreviousIndex() | Use the `previousIndex` property instead.                    |
| getSwiper()        | Get a reference to the Swiper instance using `(swiper)`. See example above. |
| isBeginning()      | Use the `isBeginning` property instead.                      |
| isEnd()            | Use the `isEnd` property instead.                            |
| length()           | Use the `slides` property instead. (i.e swiperRef.slides.length) |
| lockSwipeToNext()  | Use the `allowSlidesNext` property instead.                  |
| lockSwipeToPrev()  | Use the `allowSlidePrev` property instead.                   |
| lockSwipes()       | Use the `allowSlideNext`, `allowSlidePrev`, and `allowTouchMove` properties instead. |
| startAutoplay()    | Use the `autoplay` property instead.                         |
| stopAutoplay()     | Use the `autoplay` property instead.                         |

## Effects

If you are using effects such as Cube or Fade, you can install them similar to how you installed the other modules:

```html
<!-- slides.component.html -->

<swiper
  effect="fade"
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper>
```

```javascript
// slides.component.ts

import { Component } from '@angular/core';

import SwiperCore, { EffectFade } from 'swiper';
import { IonicSwiper } from '@ionic/angular';

SwiperCore.use([IonicSwiper, EffectFade]);

@Component({
  selector: 'app-slides-example',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.scss']
})
export class SlidesExample {
  private slides;

  constructor() {}

  setSwiperInstance(ev) {
    this.slides = ev;
  }
}
```

For more information on effects in Swiper, please see <a href="https://swiperjs.com/angular#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/angular#effects</a>.

## Wrap Up

Now that you have Swiper installed, there is a whole set of new Swiper features for you to enjoy. We recommend starting with the <a href="https://swiperjs.com/angular" target="_blank" rel="noopener noreferrer">Swiper Angular Introduction</a> and then referencing <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">the Swiper API docs</a>.

### Where do I file issues?

Before opening an issue, please consider creating a post on the <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper Discussion Board</a> or the <a href="https://forum.ionicframework.com" target="_blank">Ionic Forum</a>) to see if your issue can be resolved by the community.

If you are running into problems with the Swiper library, new bugs should be filed on the Swiper repo: <a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

If you are running into problems with the `IonicSwiper` module, new bugs should be filed on the Ionic Framework repo: <a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>