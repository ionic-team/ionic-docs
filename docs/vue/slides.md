---
title: Slides
---

<head>
  <title>Vue Slides Guide: How to Get Swiper for Vue on Ionic Apps</title>
  <meta
    name="description"
    content="Our Slides guide teaches how to get Swiper for Vue set up in Ionic apps. It has any info needed to move from ion-slides to the official Swiper Vue integration."
  />
</head>

We recommend <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a> if you need a modern touch slider component. It powers our `ion-slides` component, but we now recommend that developers use Swiper for Vue directly.

This guide will go over how to get Swiper for Vue set up in your Ionic Framework application. It will also go over any migration information you may need to move from `ion-slides` to the official Swiper Vue integration.

## Getting Started

First, update to the latest version of Ionic:

```shell
npm install @ionic/vue@latest @ionic/vue-router@latest
```

We recommend upgrading to Vue CLI 5 for better compatibility with Swiper:

```shell
vue upgrade --next
```

Once that is done, install the Swiper dependency in your project:

```shell
npm install swiper
```

## Swiping with Style

Next, we need to import the base Swiper styles. We are also going to import the styles that Ionic provides which will let us customize the Swiper styles using the same CSS Variables that we used with `ion-slides`.

We recommend importing the styles in the component in which Swiper is being used. This ensures that the styles are only loaded when needed:

```html
<script>
  import { defineComponent } from 'vue';

  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    ...
  });
</script>
```

### Updating Selectors

Previously, we were able to target `ion-slides` and `ion-slide` to apply any custom styling. The contents of those style blocks remain the same, but we need to update the selectors. Below is a list of selector changes when going from `ion-slides` to Swiper Vue:

| ion-slides Selector | Swiper Selector |
| ------------------- | --------------- |
| `ion-slides`        | `.swiper`       |
| `ion-slide`         | `.swiper-slide` |

### Pre-processors (optional)

For developers using SCSS or Less styles, Swiper also provides imports for those files.

For Less styles, replace `css` with `less` in the Swiper import path:

```js
import 'swiper/less';
import '@ionic/vue/css/ionic-swiper.css';
```

For SCSS styles replace `css` with `scss` in the Swiper import path:

```js
import 'swiper/scss';
import '@ionic/vue/css/ionic-swiper.css';
```

## Using Components

Swiper exports two components: `Swiper` and `SwiperSlide`. The `Swiper` component is the equivalent of `IonSlides`, and `SwiperSlide` is the equivalent of `IonSlide`.

These components are imported from `swiper/vue` and provided to your Vue component:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
      IonContent,
      IonPage,
    },
  });
</script>
```

## Using Modules

By default, Swiper for Vue does not import any additional modules. To use modules such as Navigation or Pagination, you need to import them first.

`ion-slides` automatically included the Pagination, Scrollbar, Autoplay, Keyboard, and Zoom modules. This part of the guide will show you how to install these modules.

To begin, we need to import the modules and their corresponding CSS files from the `swiper` package:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
  });
</script>
```

From here, we need to provide these modules to Swiper by using the `modules` property on the `swiper` component:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
      };
    },
  });
</script>
```

Finally, we can turn these features on by using the appropriate properties:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
      };
    },
  });
</script>
```

:::note
See <a href="https://swiperjs.com/vue#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#usage</a> for a full list of modules.
:::

## The IonicSlides Module

With `ion-slides`, Ionic automatically customized dozens of Swiper properties. This resulted in an experience that felt smooth when swiping on mobile devices. We recommend using the `IonicSlides` module to ensure that these properties are also set when using Swiper directly.

We can install the `IonicSlides` module by importing it from `@ionic/vue` and passing it in as the last item in the `modules` array:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides],
      };
    },
  });
</script>
```

:::note
The `IonicSlides` module must be the last module in the array. This will let it automatically customize the settings of modules such as Pagination, Scrollbar, Zoom, and more.
:::

## Properties

Swiper options are provided as props directly on the `<swiper>` component rather than via the `options` object in `ion-slides`.

Let's say in an app with `ion-slides` we had the `slidesPerView` and `loop` options set:

```html
<template>
  <ion-slides :options="{ slidesPerView: true, loop: true }">
    <ion-slide>Slide 1</ion-slide>
    <ion-slide>Slide 3</ion-slide>
    <ion-slide>Slide 3</ion-slide>
  </ion-slides>
</template>
```

To migrate, we would move these options out of the `options` object and onto the `<swiper>` component directly as properties:

```html
<template>
  <swiper :slides-per-view="3" :loop="true">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>
```

Below is a full list of property changes when going from `ion-slides` to Swiper Vue:

| Name      | Notes                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| options   | Set each option as a property directly on the `<swiper>` component.                                                   |
| mode      | For different styles based upon the mode, you can target the slides with `.ios .swiper` or `.md .swiper` in your CSS. |
| pager     | Use the `pagination` property instead. Requires installation of the Pagination module.                                |
| scrollbar | You can continue to use the `scrollbar` property, just be sure to install the Scrollbar module first.                 |

:::note
All properties available in Swiper Vue can be found at <a href="https://swiperjs.com/vue#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-props</a>.
:::

## Events

Since the `Swiper` component is not provided by Ionic Framework, event names will not have an `ionSlide` prefix to them.

Let's say in an app with `ion-slides` we used the `ionSlideDidChange` event:

```html
<template>
  <ion-slides @ionSlideDidChange="onSlideChange">
    <ion-slide>Slide 1</ion-slide>
    <ion-slide>Slide 3</ion-slide>
    <ion-slide>Slide 3</ion-slide>
  </ion-slides>
</template>
```

To migrate, we would change the name of the event to `slideChange`:

```html
<template>
  <swiper @slideChange="onSlideChange">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>
```

Below is a full list of event name changes when going from `ion-slides` to Swiper Vue:

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
All events available in Swiper Vue can be found at <a href="https://swiperjs.com/vue#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-events</a>.
:::

## Methods

Most methods have been removed in favor of accessing the `<swiper>` props directly. Additionally, you no longer need to access `$el` first when calling methods.

Accessing these properties can be tricky as you want to access the properties on the Swiper instance itself, not your Vue component. To do this, we recommend getting a reference to the Swiper instance via the `@swiper` event handler:

```html
<template>
  <swiper @swiper="setSwiperInstance"> ... </swiper>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    ...,
    setup() {
      const slides = ref();
      const setSwiperInstance = (swiper: any) => {
        slides.value = swiper;
      }
      return { setSwiperInstance };
    }
  });
</script>
```

From here, if you wanted to access a property on the Swiper instance you would access `slides.value`. For example, if you wanted to check the `isBeginning` property, you could do: `slides.value.isBeginning`. Make sure `slides.value` is defined first though!

Below is a full list of method changes when going from `ion-slides` to Swiper Vue:

| ion-slides Method  | Notes                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ |
| getActiveIndex()   | Use the `activeIndex` property instead.                                              |
| getPreviousIndex() | Use the `previousIndex` property instead.                                            |
| getSwiper()        | Get a reference to the Swiper instance using `@swiper`. See example above.           |
| isBeginning()      | Use the `isBeginning` property instead.                                              |
| isEnd()            | Use the `isEnd` property instead.                                                    |
| length()           | Use the `slides` property instead. (i.e swiperRef.slides.length)                     |
| lockSwipeToNext()  | Use the `allowSlidesNext` property instead.                                          |
| lockSwipeToPrev()  | Use the `allowSlidePrev` property instead.                                           |
| lockSwipes()       | Use the `allowSlideNext`, `allowSlidePrev`, and `allowTouchMove` properties instead. |
| startAutoplay()    | Use the `autoplay` property instead.                                                 |
| stopAutoplay()     | Use the `autoplay` property instead.                                                 |

## Effects

If you are using effects such as Cube or Fade, you can install them just like we did with the other modules. In this example, we will use the fade effect. To start, we will import `EffectFade` from `swiper` and provide it in the `modules` array:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import { EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [EffectFade, IonicSlides],
      };
    },
  });
</script>
```

Next, we need to import the stylesheet associated with the effect:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import { EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [EffectFade, IonicSlides],
      };
    },
  });
</script>
```

After that, we can activate it by setting the `effect` property on `swiper` to `"fade"`:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" effect="fade">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import { EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [EffectFade, IonicSlides],
      };
    },
  });
</script>
```

:::note
For more information on effects in Swiper, please see <a href="https://swiperjs.com/vue#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#effects</a>.
:::

## Wrap Up

Now that you have Swiper installed, there is a whole set of new Swiper features for you to enjoy. We recommend starting with the <a href="https://swiperjs.com/vue" target="_blank" rel="noopener noreferrer">Swiper Vue Introduction</a> and then referencing <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">the Swiper API docs</a>.

## FAQ

### Where can I find an example of this migration?

You can find a sample app with `ion-slides` and the equivalent Swiper usage at https://github.com/ionic-team/slides-migration-samples.

### Where can I get help with this migration?

If you are running into issues with the migration, please create a post on the [Ionic Forum](https://forum.ionicframework.com/).

### Where do I file bug reports?

Before opening an issue, please consider creating a post on the <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper Discussion Board</a> or the <a href="https://forum.ionicframework.com" target="_blank">Ionic Forum</a> to see if your issue can be resolved by the community.

If you are running into problems with the Swiper library, new bugs should be filed on the Swiper repo: <a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

If you are running into problems with the `IonicSlides` module, new bugs should be filed on the Ionic Framework repo: <a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>
