# Slides

We recommend <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a> if you need a modern touch slider component. It powers our `ion-slides` component, but we now recommend that developers use Swiper for Angular directly.

This guide will go over how to get Swiper for Angular set up in your Ionic Framework application. It will also go over any migration information you may need to move from `ion-slides` to the official Swiper Angular integration.

## Getting Started

First, update to the latest version of Ionic:

```shell
npm install @ionic/angular@latest
```

Once that is done, install the Swiper dependency in your project:

```shell
npm install swiper
```

Once that is done, we need to import the `SwiperModule` module. This should be done in your component's module file:

```typescript
// home.module.ts
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [..., SwiperModule]
});
...
```

## Swiping with Style

Next, we need to import the base Swiper styles. We are also going to import the styles that Ionic provides which will let us customize the Swiper styles using the same CSS Variables that we used with `ion-slides`.

You can import these files in `global.scss`:

```scss
// global.scss
@import '~swiper/scss';
@import '~@ionic/angular/css/ionic-swiper';
```

If you prefer to import these in the CSS file for your slides component, you will need to disable [ViewEncapsultion in Angular](https://angular.io/api/core/ViewEncapsulation), otherwise the styles will not apply:

```typescript
// home.page.ts
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {
  ...
}
```

```scss
// home.page.scss
@import '~swiper/scss';
@import '~@ionic/angular/css/ionic-swiper';
```

### Updating Selectors

Previously, we were able to target `ion-slides` and `ion-slide` to apply any custom styling. The contents of those style blocks remain the same, but we need to update the selectors. Below is a list of selector changes when going from `ion-slides` to Swiper Angular:

| ion-slides Selector | Swiper Selector |
| ------------------- | --------------- |
| `ion-slides`        | `.swiper`       |
| `ion-slide`         | `.swiper-slide` |

### Vanilla CSS (Optional)

For developers not using a CSS pre-processor, Swiper also provides the styles bundled together. It is important to note that this will import styles for all modules as well.

```javascript
// slides.component.css
@import 'swiper/css';
@import '@ionic/angular/css/ionic-swiper';
```

## Using Components

Swiper Angular exports a `Swiper` component which is the equivalent of `ion-slides`. It also exports a `swiperSlide` directive which can be used on an `<ng-template>` for each slide:

```html
<!-- home.page.html -->
<ion-content>
  <swiper>
    <ng-template swiperSlide>Slide 1</ng-template>
    <ng-template swiperSlide>Slide 3</ng-template>
    <ng-template swiperSlide>Slide 3</ng-template>
  </swiper>
</ion-content>
```

## Using Modules

By default, Swiper for Angular does not import any additional modules. To use modules such as Navigation or Pagination, you need to import them first.

`ion-slides` automatically included the Pagination, Scrollbar, Autoplay, Keyboard, and Zoom modules. This part of the guide will show you how to install these modules.

To begin, we need to import the modules and provide them to Swiper:

```typescript
// home.page.ts
import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  ...
}
```

Next, we need to import the stylesheets for each module:

```scss
// global.scss
@import '~swiper/scss';
@import '~swiper/scss/autoplay';
@import '~swiper/scss/keyboard';
@import '~swiper/scss/pagination';
@import '~swiper/scss/scrollbar';
@import '~swiper/scss/zoom';
@import '~@ionic/angular/css/ionic-swiper';
```

Finally, we can turn these features on by using the appropriate properties:

```html
<!-- home.page.html -->
<ion-content>
  <swiper [autoplay]="true" [keyboard]="true" [pagination]="true" [scrollbar]="true" [zoom]="true">
    <ng-template swiperSlide>Slide 1</ng-template>
    <ng-template swiperSlide>Slide 3</ng-template>
    <ng-template swiperSlide>Slide 3</ng-template>
  </swiper>
</ion-content>
```

:::note
See <a href="https://swiperjs.com/angular#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/angular#usage</a> for a full list of modules.
:::

## The IonicSlides Module

With `ion-slides`, Ionic automatically customized dozens of Swiper properties. This resulted in an experience that felt smooth when swiping on mobile devices. We recommend using the `IonicSlides` module to ensure that these properties are also set when using Swiper directly.

We can install the `IonicSlides` module by importing it from `@ionic/angular` and passing it in as the last item in the array provided in `SwiperCore.use`:

```javascript
// home.page.ts
import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  ...
}
```

:::note
The `IonicSlides` module must be the last module in the array. This will let it automatically customize the settings of modules such as Pagination, Scrollbar, Zoom, and more.
:::

## Properties

Swiper options can be provided as individual properties directly on the `<swiper>` component or via the `config` property.

Let's say in an app with `ion-slides` we had the `slidesPerView` and `loop` options set:

```html
<ion-slides [options]="{ slidesPerView: true, loop: true }">
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

To set these options as properties directly on `<swiper>` we would do the following:

```html
<swiper [slidesPerView]="3" [loop]="true">
  <ng-template swiperSlide>Slide 1</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
</swiper>
```

To set these options using the `config` object, we would do:

```html
<swiper [config]="{ slidesPerView: true, loop: true }">
  <ng-template swiperSlide>Slide 1</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
</swiper>
```

Below is a full list of property changes when going from `ion-slides` to Swiper Angular:

| Name      | Notes                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| options   | Use the `config` property instead or set each option as a property directly on the `<swiper>` component.              |
| mode      | For different styles based upon the mode, you can target the slides with `.ios .swiper` or `.md .swiper` in your CSS. |
| pager     | Use the `pagination` property instead. Requires installation of the Pagination module.                                |
| scrollbar | You can continue to use the `scrollbar` property, just be sure to install the Scrollbar module first.                 |

:::note
All properties available in Swiper Angular can be found at <a href="https://swiperjs.com/angular#swiper-component-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/angular#swiper-component-props</a>.
:::

## Events

Since the `Swiper` component is not provided by Ionic Framework, event names will not have an `ionSlide` prefix to them.

Let's say in an app with `ion-slides` we used the `ionSlideDidChange` event:

```html
<ion-slides (ionSlideDidChange)="onSlideChange()">
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

To migrate, we would change the name of the event to `slideChange`:

```html
<swiper (slideChange)="onSlideChange()">
  <ng-template swiperSlide>Slide 1</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
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

:::note
All events available in Swiper Angular can be found at <a href="https://swiperjs.com/angular#swiper-component-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/angular#swiper-component-events</a>.
:::

## Methods

Most methods have been removed in favor of accessing the `<swiper>` props directly.

Accessing these properties can be tricky as you want to access the properties on the Swiper instance itself, not your Angular component. To do this, we recommend getting a reference to the `Swiper` instance via `(swiper)`:

```html
<!-- slides.component.html -->

<swiper (swiper)="setSwiperInstance($event)">
  <ng-template swiperSlide>Slide 1</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
</swiper>
```

```javascript
// slides.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-slides-example',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.scss']
})
export class SlidesExample {
  private slides: any;

  constructor() {}
  setSwiperInstance(swiper: any) {
    this.slides = swiper;
  }
}
```

From here, if you wanted to access a property on the Swiper instance you would access `this.slides`. For example, if you wanted to check the `isBeginning` property, you could do: `this.slides.isBeginning`. Make sure `this.slides` is defined first though!

Below is a full list of method changes when going from `ion-slides` to Swiper Angular:

| ion-slides Method  | Notes                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ |
| getActiveIndex()   | Use the `activeIndex` property instead.                                              |
| getPreviousIndex() | Use the `previousIndex` property instead.                                            |
| getSwiper()        | Get a reference to the Swiper instance using `(swiper)`. See example above.          |
| isBeginning()      | Use the `isBeginning` property instead.                                              |
| isEnd()            | Use the `isEnd` property instead.                                                    |
| length()           | Use the `slides` property instead. (i.e swiperRef.slides.length)                     |
| lockSwipeToNext()  | Use the `allowSlidesNext` property instead.                                          |
| lockSwipeToPrev()  | Use the `allowSlidePrev` property instead.                                           |
| lockSwipes()       | Use the `allowSlideNext`, `allowSlidePrev`, and `allowTouchMove` properties instead. |
| startAutoplay()    | Use the `autoplay` property instead.                                                 |
| stopAutoplay()     | Use the `autoplay` property instead.                                                 |

## Effects

If you are using effects such as Cube or Fade, you can install them just like we did with the other modules. In this example, we will use the fade effect. To start, we will import the `EffectFade` module and register it using `SwiperCore.use`:

```html
<!-- slides.component.html -->

<swiper>
  <ng-template swiperSlide>Slide 1</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
</swiper>
```

```javascript
// slides.component.ts
import { Component } from '@angular/core';
import SwiperCore, { EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([EffectFade, IonicSlides]);

@Component({
  selector: 'app-slides-example',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.scss'],
})
export class SlidesExample {
  constructor() {}
}
```

Next, we need to import the stylesheet associated with the effect:

```scss
// global.scss
@import '~swiper/scss/effect-fade';
```

After that, we can activate it by setting the `effect` property on `swiper` to `"fade"`:

```html
<!-- slides.component.html -->

<swiper effect="fade">
  <ng-template swiperSlide>Slide 1</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
  <ng-template swiperSlide>Slide 3</ng-template>
</swiper>
```

```javascript
// slides.component.ts
import { Component } from '@angular/core';
import SwiperCore, { EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([EffectFade, IonicSlides]);

@Component({
  selector: 'app-slides-example',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.scss'],
})
export class SlidesExample {
  constructor() {}
}
```

:::note
For more information on effects in Swiper, please see <a href="https://swiperjs.com/angular#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/angular#effects</a>.
:::

## Wrap Up

Now that you have Swiper installed, there is a whole set of new Swiper features for you to enjoy. We recommend starting with the <a href="https://swiperjs.com/angular" target="_blank" rel="noopener noreferrer">Swiper Angular Introduction</a> and then referencing <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">the Swiper API docs</a>.

## FAQ

### Where can I find an example of this migration?

You can find a sample app with `ion-slides` and the equivalent Swiper usage at https://github.com/ionic-team/slides-migration-samples.

### Where can I get help with this migration?

If you are running into issues with the migration, please create a post on the [Ionic Forum](https://forum.ionicframework.com/).

### Where do I file bug reports?

Before opening an issue, please consider creating a post on the <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper Discussion Board</a> or the <a href="https://forum.ionicframework.com" target="_blank">Ionic Forum</a> to see if your issue can be resolved by the community.

If you are running into problems with the Swiper library, new bugs should be filed on the Swiper repo: <a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

If you are running into problems with the `IonicSlides` module, new bugs should be filed on the Ionic Framework repo: <a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>
