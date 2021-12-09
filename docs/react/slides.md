# Slides

We recommend <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a> if you need a modern touch slider component. It powers our `IonSlides` component, but we now recommend that developers use Swiper for React directly.

This guide will go over how to get Swiper for React set up in your Ionic Framework application. It will also go over any migration information you may need to move from `IonSlides` to the official Swiper React integration.

## Getting Started

First, update to the latest version of Ionic:

```shell
npm install @ionic/react@latest @ionic/react-router@latest
```

Once that is done, install the Swiper dependency in your project:

```shell
npm install swiper
```

:::note
Create React App does not support pure ESM packages yet. Developers can still use Swiper, but they will need to use Swiper 7.2.0+ and use direct file imports. This guide assumes you are using Create React App and will show you how to use these direct imports.
:::

## Swiping with Style

Next, we need to import the base Swiper styles. We are also going to import the styles that Ionic provides which will let us customize the Swiper styles using the same CSS Variables that we used with `ion-slides`.

We recommend importing the styles in the component in which Swiper is being used. This ensures that the styles are only loaded when needed:

```javascript
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    ...
  );
};
export default Home;
```

:::note

Not using Create React App? You can import the Swiper CSS from `swiper/css` instead.

:::

### Updating Selectors

Previously, we were able to target `ion-slides` and `ion-slide` to apply any custom styling. The contents of those style blocks remain the same, but we need to update the selectors. Below is a list of selector changes when going from `ion-slides` to Swiper React:

| ion-slides Selector | Swiper Selector |
| ------------------- | --------------- |
| `ion-slides`        | `.swiper`       |
| `ion-slide`         | `.swiper-slide` |

### Pre-processors (optional)

For developers using SCSS or Less styles, Swiper also provides imports for those files.

For Less styles, replace `css` with `less` in the Swiper import path:

```javascript
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.less';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    ...
  );
};
export default Home;
```

For SCSS styles replace `css` with `scss` in the Swiper import path:

```javascript
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    ...
  );
};
export default Home;
```

## Using Components

Swiper exports two components: `Swiper` and `SwiperSlide`. The `Swiper` component is the equivalent of `IonSlides`, and `SwiperSlide` is the equivalent of `IonSlide`.

These components are imported from `swiper/react/swiper-react.js`:

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
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

:::note

Not using Create React App? You can import the Swiper components from `swiper/react` instead.

:::

## Using Modules

By default, Swiper for React does not import any additional modules. To use modules such as Navigation or Pagination, you need to import them first.

`ion-slides` automatically included the Pagination, Scrollbar, Autoplay, Keyboard, and Zoom modules. This part of the guide will show you how to install these modules.

To begin, we need to import the modules and their corresponding CSS files from the `swiper` package:

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
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

:::note

Not using Create React App? You can import these modules from `swiper/css/[MODULE NAME]` instead (i.e. `swiper/css/autoplay`).

:::

From here, we need to provide these modules to Swiper by using the `modules` property on the `Swiper` component:

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}>
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

Finally, we can turn these features on by using the appropriate properties:

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
          autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}
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

:::note
See <a href="https://swiperjs.com/react#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#usage</a> for a full list of modules.
:::

## The IonicSlides Module

With `ion-slides`, Ionic automatically customized dozens of Swiper properties. This resulted in an experience that felt smooth when swiping on mobile devices. We recommend using the `IonicSlides` module to ensure that these properties are also set when using Swiper directly.

We can install the `IonicSlides` module by importing it from `@ionic/react` and passing it in as the last item in the `modules` array:

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]}
          autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}
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

:::note
The `IonicSlides` module must be the last module in the array. This will let it automatically customize the settings of modules such as Pagination, Scrollbar, Zoom, and more.
:::

## Properties

Swiper options are provided as props directly on the `<Swiper>` component rather than via the `options` object in `IonSlides`.

Let's say in an app with `IonSlides` we had the `slidesPerView` and `loop` options set:

```tsx
const MyComponent: React.FC = () => {
  return (
    <IonSlides
      options={{
        slidesPerView: 3,
        loop: true,
      }}
    >
      <IonSlide>Slide 1</IonSlide>
      <IonSlide>Slide 2</IonSlide>
      <IonSlide>Slide 3</IonSlide>
    </IonSlides>
  );
};
```

To migrate, we would move these options out of the `options` object and onto the `<Swiper>` component directly as properties:

```tsx
const MyComponent: React.FC = () => {
  return (
    <Swiper slidesPerView={3} loop={true}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};
```

Below is a full list of property changes when going from `IonSlides` to Swiper React:

| Name      | Notes                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| options   | Set each option as a property directly on the `<Swiper>` component.                                                   |
| mode      | For different styles based upon the mode, you can target the slides with `.ios .swiper` or `.md .swiper` in your CSS. |
| pager     | Use the `pagination` property instead. Requires installation of the Pagination module.                                |
| scrollbar | You can continue to use the `scrollbar` property, just be sure to install the Scrollbar module first.                 |

:::note
All properties available in Swiper React can be found at <a href="https://swiperjs.com/react#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#swiper-props</a>.
:::

## Events

Since the `Swiper` component is not provided by Ionic Framework, event names will not have an `onIonSlide` prefix to them.

Let's say in an app with `IonSlides` we used the `onIonSlideDidChange` event:

```tsx
const MyComponent: React.FC = () => {
  return (
    <IonSlides onIonSlideDidChange={() => onSlideChange()}>
      <IonSlide>Slide 1</IonSlide>
      <IonSlide>Slide 2</IonSlide>
      <IonSlide>Slide 3</IonSlide>
    </IonSlides>
  );
};
```

To migrate, we would change the name of the event to `onSlideChange`:

```tsx
const MyComponent: React.FC = () => {
  return (
    <Swiper onSlideChange={() => onSlideChange()}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};
```

Below is a full list of event name changes when going from `IonSlides` to Swiper React:

| IonSlides Event           | Swiper Event                 |
| ------------------------- | ---------------------------- |
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

:::note
All events available in Swiper React can be found at <a href="https://swiperjs.com/react#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#swiper-events</a>.
:::

## Methods

Most methods have been removed in favor of accessing the `Swiper` props directly.

Accessing these properties can be tricky as you want to access the properties on the Swiper instance itself, not your React component. To do this, we recommend getting a reference to the `Swiper` instance via `onSwiper`:

```tsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Swiper as SwiperInterface } from 'swiper';
...
const Home: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();
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

| ion-slides Method  | Notes                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ |
| getActiveIndex()   | Use the `activeIndex` property instead.                                              |
| getPreviousIndex() | Use the `previousIndex` property instead.                                            |
| getSwiper()        | Get a reference to the Swiper instance using `onSwiper`. See example above.          |
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

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[EffectFact, IonicSlides]}>
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

Next, we need to import the stylesheet associated with the effect:

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
import 'swiper/modules/effect-fade/effect-fade.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[EffectFact, IonicSlides]}>
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

:::note

Not using Create React App? You can import these effects from `swiper/css/[EFFECT NAME]` instead (i.e. `swiper/css/effect-fade`).

:::

After that, we can activate it by setting the `effect` property on `swiper` to `"fade"`:

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
import 'swiper/modules/effect-fade/effect-fade.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[EffectFact, IonicSlides]} swiper="fade">
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

:::note
For more information on effects in Swiper, please see <a href="https://swiperjs.com/react#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#effects</a>.
:::

## Wrap Up

Now that you have Swiper installed, there is a whole set of new Swiper features for you to enjoy. We recommend starting with the <a href="https://swiperjs.com/react" target="_blank" rel="noopener noreferrer">Swiper React Introduction</a> and then referencing <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">the Swiper API docs</a>.

## FAQ

### Where can I find an example of this migration?

You can find a sample app with `ion-slides` and the equivalent Swiper usage at https://github.com/ionic-team/slides-migration-samples.

### Where can I get help with this migration?

If you are running into issues with the migration, please create a post on the [Ionic Forum](https://forum.ionicframework.com/).

### Where do I file bug reports?

Before opening an issue, please consider creating a post on the <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper Discussion Board</a> or the <a href="https://forum.ionicframework.com" target="_blank">Ionic Forum</a> to see if your issue can be resolved by the community.

If you are running into problems with the Swiper library, new bugs should be filed on the Swiper repo: <a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

If you are running into problems with the `IonicSlides` module, new bugs should be filed on the Ionic Framework repo: <a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>
