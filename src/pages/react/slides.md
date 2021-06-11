---
title: 'Slides'
---

We recommend <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a> if you need a modern touch slider component. It powers our `IonSlides` component, but we now recommend that developers use Swiper for React directly.

This guide will go over how to get Swiper for React set up in your Ionic Framework application. It will also go over any migration information you may need to move from `IonSlides` to the official Swiper React integration.

## Getting Started

To get started, install the Swiper dependency in your project:

```shell
npm install swiper
```

## Swiping with Style

Next, we need to import the base Swiper styles. We recommend importing the styles in the component in which Swiper is being used. This ensures that the styles are only loaded when needed:

```javascript
import 'swiper/swiper-bundle.min.css';
```

Ionic Framework also provides some default styles, as well as the CSS Variables that were used inside of the old `IonSlides`. If you would like to continue to use those styles and CSS Variables, be sure to import the `ionic-swiper.css` file:

```javascript
import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';
```

### Pre-processors (optional)

For developers using SCSS or Less styles, Swiper also provides imports for those files. The difference here is that each Swiper module is broken out into its own file, so you may have to import multiple stylesheets if you are using modules such as transition effects, zoom, or pagination.

If you wanted to import the base Swiper styles and the pagination styles, you would do the following:

```javascript
import 'swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import '@ionic/react/css/ionic-swiper.css';
```

Swiper has a complete list of the stylesheets you can import here: <a href="https://swiperjs.com/react#styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#styles</a>.

## Using Components

Swiper exports two components: `Swiper` and `SwiperSlide`. The `Swiper` component is the equivalent of `IonSlides`, and `SwiperSlide` is the equivalent of `IonSlide`.

These components are imported from `swiper/react`:

```javascript
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## The IonicSwiper Module

There are a few edge cases in Ionic Framework where Swiper may not be able to compute the slider dimensions properly. As a result, we have created the `IonicSwiper` module to resolve some of these issues.

To install it, we first need to import the core Swiper library and the IonicSwiper module:

```javascript
import SwiperCore from 'swiper';
import { IonicSwiper } from '@ionic/react';
```

Then we can install the module:

```javascript
import React from 'react';
import { IonContent, IonPage, IonicSwiper } from '@ionic/react';
import SwiperCore from 'swiper';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

SwiperCore.use([IonicSwiper]);

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## Additional Modules

By default, Swiper for React uses the core version of Swiper and does not import any additional modules. To use modules such as Navigation or Pagination, you need to import them first.

`IonSlides` automatically included the Pagination, Scrollbar, Autoplay, Keyboard, and Zoom modules. If you used any of these features, be sure to import them in your application.

The following example shows how to install the Navigation and Pagination plugins:

```javascript
import React from 'react';
import { IonContent, IonPage, IonicSwiper } from '@ionic/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

Swiper.use([IonicSwiper, Navigation, Pagination]);

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper
          pagination={{
            clickable: true
          }}
          navigation
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

> Importing `swiper-bundle.min.css` imports styles for all modules. When using the SCSS or Less styles, you will need to import the styles for each module. See <a href="https://swiperjs.com/react#styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#styles</a> for a full list of stylesheets.

## Properties

Swiper options are provided as props directly on the `<Swiper>` component rather than via the `options` object in `IonSlides`.

Let's say in an app with `IonSlides` we had the `slidesPerView` and `loop` options set:

```javascript
<IonSlides
  options={{
    slidesPerView: 3,
    loop: true
  }}
  >
  <IonSlide>Slide 1</IonSlide>
  <IonSlide>Slide 2</IonSlide>
  <IonSlide>Slide 3</IonSlide>
</IonSlides>
```

To migrate, we would move these options out of the `options` object and onto the `<Swiper>` component directly as properties:

```javascript
<Swiper
  slidesPerView={3}
  loop={true}
  >
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
</Swiper>
```

Below is a full list of property changes when going from `IonSlides` to Swiper Rreact:

| Name      | Notes                                                        |
| --------- | ------------------------------------------------------------ |
| options   | Set each option as a property directly on the `<Swiper>` component. |
| mode      | For different styles based upon the mode, you can target the slides with `.ios .swiper-container` or `.md .swiper-container` |
| pager     | Use the `pagination` property instead. Requires installation of the Pagination module. |
| scrollbar | You can continue to use the `scrollbar` property, just be sure to install the Scrollbar module first. |

All properties available in Swiper React can be found at <a href="https://swiperjs.com/react#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#swiper-props</a>.

## Events

Since the `Swiper` component is not provided by Ionic Framework, event names will not have an `onIonSlide` prefix to them.

Let's say in an app with `IonSlides` we used the `onIonSlideDidChange` event:

```javascript
<IonSlides
  onIonSlideDidChange={() => onSlideChange()}
>
  <IonSlide>Slide 1</IonSlide>
  <IonSlide>Slide 2</IonSlide>
  <IonSlide>Slide 3</IonSlide>
</IonSlides>
```

To migrate, we would change the name of the event to `onSlideChange`:

```javascript
<Swiper
  onSlideChange={() => onSlideChange()}
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
</Swiper>
```

Below is a full list of event name changes when going from `IonSlides` to Swiper React:

| IonSlides Event         | Swiper Event               |
| ----------------------- | -------------------------- |
| onIonSlideWillChange      | onSlideChangeTransitionStart |
| onIonSlideDidChange       | onSlideChangeTransitionEnd   |
| onIonSlideDoubleTap       | onDoubleTap                  |
| onIonSlideDrag            | onSliderMove                 |
| onIonSlideNextStart       | onSlideNextTransitionStart   |
| onIonSlideNextEnd         | onSlideNextTransitionEnd     |
| onIonSlidePrevStart       | onSlidePrevTransitionStart   |
| onIonSlidePrevEnd         | onSlidePrevTransitionEnd     |
| onIonSlideReachStart      | onReachBeginning             |
| onIonSlideReachEnd        | onReachEnd                   |
| onIonSlideTap             | onTap                        |
| onIonSlideTouchStart      | onTouchStart                 |
| onIonSlideTouchEnd        | onTouchEnd                   |
| onIonSlideTransitionStart | onTransitionStart            |
| onIonSlideTransitionEnd   | onTransitionEnd              |
| onIonSlidesDidLoad        | onInit                       |

All events available in Swiper React can be found at <a href="https://swiperjs.com/react#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#swiper-events</a>.

## Methods

Most methods have been removed in favor of accessing the `Swiper` props directly.

Accessing these properties can be tricky as you want to access the properties on the Swiper instance itself, not your React component. To do this, we recommend getting a reference to the `Swiper` instance via `onSwiper`:

```javascript
import React, { useState } from 'react';

...

const Home: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState();
  return (
    ...
    <Swiper
      onSwiper={(swiper) => setSwiperInstance(swiper)}
    >
      ...
    </Swiper>
  )
};

export default Home;
```

From here, if you wanted to access a property on the Swiper instance you would access `swiperInstance`. For example, if you wanted to check the `isBeginning` property, you could do: `swiperInstance.isBeginning`. Make sure `swiperInstance` is defined first though!

Below is a full list of method changes when going from `IonSlides` to Swiper React:

| Name               | Notes                                                        |
| ------------------ | ------------------------------------------------------------ |
| getActiveIndex()   | Use the `activeIndex` property instead.                      |
| getPreviousIndex() | Use the `previousIndex` property instead.                    |
| getSwiper()        | Get a reference to the Swiper instance using `onSwiper`. See example above. |
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

```javascript
import React from 'react';
import { IonContent, IonPage, IonicSwiper } from '@ionic/react';
import SwiperCore, { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

Swiper.use([IonicSwiper, EffectFade]);

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper effect="fade">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

For more information on effects in Swiper, please see <a href="https://swiperjs.com/react#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#effects</a>.

## Wrap Up

Now that you have Swiper installed, there is a whole set of new Swiper features for you to enjoy. We recommend starting with the <a href="https://swiperjs.com/react" target="_blank" rel="noopener noreferrer">Swiper React Introduction</a> and then referencing <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">the Swiper API docs</a>.

### Where do I file issues?

Before opening an issue, please consider creating a post on the <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper Discussion Board</a> or the <a href="https://forum.ionicframework.com" target="_blank">Ionic Forum</a> to see if your issue can be resolved by the community.

If you are running into problems with the Swiper library, new bugs should be filed on the Swiper repo: <a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

If you are running into problems with the `IonicSwiper` module, new bugs should be filed on the Ionic Framework repo: <a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>