import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Animations

## Overview

Ionic Animations is a utility that allows developers to build complex animations in a platform agnostic manner. Developers do not need to be using a particular framework such as React or Angular, nor do they even need to be building an Ionic app. As long as developers have access to v5.0 or greater of Ionic Framework, they will have access to all of Ionic Animations.

Building efficient animations can be tricky. Developers are often limited by the libraries available to them as well as the hardware that their apps run on. On top of that, many animation libraries use a JavaScript-driven approach to running animations where they handle the calculation of your animation's values at every step in a `requestAnimationFrame` loop. This reduces the scalability of your animations as the library is constantly computing values and using up CPU time.

Ionic Animations uses the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) to build and run your animations. In doing this, we offload all work required to compute and run your animations to the browser. As a result, this allows the browser to make any optimizations it needs and ensures your animations run as smoothly as possible. While most browsers support a basic implementation of Web Animations, we fallback to [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) for browsers that do not support Web Animations. The performance difference in switching between these two should typically be negligible.

## Installation

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

Developers using Ionic Core and JavaScript should install the latest version of `@ionic/core`.

```javascript
import { createAnimation } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

...

const animation = createAnimation()
  .addElement(myElementRef)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
<TabItem value="typescript">

Developers using Ionic Core and TypeScript should install the latest version of `@ionic/core`.

```tsx
import { createAnimation, Animation } from '@ionic/core';

...

const animation: Animation = createAnimation('')
  .addElement(myElementRef)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}
```
</TabItem>
<TabItem value="angular">

Developers using Angular should install the latest version of `@ionic/angular`. Animations can be created via the `AnimationController` dependency injection.

```tsx

import { Animation, AnimationController } from '@ionic/angular';

...

constructor(private animationCtrl: AnimationController) {
  const animation: Animation = this.animationCtrl.create()
    .addElement(myElementRef)
    .duration(1000)
    .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
<TabItem value="react">

Developers using React should install the latest version of `@ionic/react`. React wrappers are in beta. Please report any issues on GitHub!

```tsx

import { CreateAnimation, Animation } from '@ionic/react';

...

<CreateAnimation
  duration={1000}
  fromTo={{
    property: 'opacity',
    fromValue: '1',
    toValue: '0.5'
  }}
>
...
</CreateAnimation>

```
</TabItem>
<TabItem value="vue">

Developers using Ionic Vue should install the latest version of `@ionic/vue`.

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const myElementRef = ref();

...

const animation = createAnimation()
  .addElement(myElementRef.value)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
</Tabs>
````

## Basic Animations

### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
createAnimation()
  .addElement(document.querySelector('.square'))
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');
```
</TabItem>
<TabItem value="angular">

```javascript
this.animationCtrl.create()
  .addElement(document.querySelector('.square'))
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');
```
</TabItem>
<TabItem value="react">

```tsx
<CreateAnimation
  duration={1500}
  iterations={Infinity}
  fromTo={[
    { property: 'transform', fromValue: 'translateX(0px)', toValue: 'translateX(100px)' },
    { property: 'opacity', fromValue: '1', toValue: '0.2' }
  ]}
>
  ...
</CreateAnimation>
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const elementRef = ref();

...

createAnimation()
  .addElement(elementRef.value)
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');
```
</TabItem>
</Tabs>
````

In the example above, an animation that changes the opacity on the `.square` element and moves it from left to right along the X axis has been created. This animation will run an infinite number of times, and each iteration of the animation will last 1500ms.

By default, all Ionic Animations are paused until the `play` method is called.

<Codepen user="ionic" slug="bGbMojP" />

## Keyframe Animations

Ionic Animations allows you to control the intermediate steps in an animation using keyframes. Any valid CSS property can be used here, and you can even use CSS Variables as values.

Hyphenated CSS properties should be written using camel case when writing keyframes. For example, `border-radius` should be written as `borderRadius`. This also applies to the `fromTo()`, `from(),` and `to()` methods.

### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
createAnimation()
  .addElement(document.querySelector('.square'))
  .duration(3000)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, background: 'red' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'green' }
  ]);
```
</TabItem>
<TabItem value="angular">

```javascript
this.animationCtrl.create()
  .addElement(this.square.nativeElement)
  .duration(3000)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, background: 'red' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'green' }
  ]);
```
</TabItem>
<TabItem value="react">

```tsx
<CreateAnimation
  duration={3000}
  iterations={Infinity}
  keyframes={[
    { offset: 0, background: 'red' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'green' }
  ]}
>
...
</CreateAnimation>
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareRef = ref();

...

createAnimation()
  .addElement(squareRef.value)
  .duration(3000)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, background: 'red' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'green' }
  ]);
```
</TabItem>
</Tabs>
````

In the example above, the `.square` element will transition from a red background color, to a background color defined by the `--background` variable, and then transition on to a green background color.

Each keyframe object contains an `offset` property. `offset` is a value between 0 and 1 that defines the keyframe step. Offset values must go in ascending order and cannot repeat.

<Codepen user="ionic" slug="YzKLEzR" />

## Grouped Animations

Multiple elements can be animated at the same time and controlled via a single parent animation object. Child animations inherit properties such as duration, easing, and iterations unless otherwise specified. A parent animation's `onFinish` callback will not be called until all child animations have completed.

### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
const squareA = createAnimation()
  .addElement(document.querySelector('.square-a'))
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(45deg)' }
  ]);

const squareB = createAnimation()
  .addElement(document.querySelector('.square-b'))
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = createAnimation()
  .addElement(document.querySelector('.square-c'))
  .duration(5000)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

const parent = createAnimation()
  .duration(2000)
  .iterations(Infinity)
  .addAnimation([squareA, squareB, squareC]);
```

</TabItem>
<TabItem value="angular">

```javascript
const squareA = this.animationCtrl.create()
  .addElement(this.squareA.nativeElement)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(45deg)' }
  ]);

const squareB = this.animationCtrl.create()
  .addElement(this.squareB.nativeElement)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = this.animationCtrl.create()
  .addElement(this.squareC.nativeElement)
  .duration(5000)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

const parent = this.animationCtrl.create()
  .duration(2000)
  .iterations(Infinity)
  .addAnimation([squareA, squareB, squareC]);
```

</TabItem>
<TabItem value="react">

```tsx
private parentRef: React.RefObject<CreateAnimation> = React.createRef();
private squareARef: React.RefObject<CreateAnimation> = React.createRef();
private squareBRef: React.RefObject<CreateAnimation> = React.createRef();
private squareCRef: React.RefObject<CreateAnimation> = React.createRef();

...

componentDidMount() {
  const parent = this.parentRef.current!.animation;
  const squareA = this.squareARef.current!.animation;
  const squareB = this.squareBRef.current!.animation;
  const squareC = this.squareCRef.current!.animation;

  parent.addAnimation([squareA, squareB, squareC]);
}

render() {
  return (
    <>
      <CreateAnimation
        ref={this.parentRef}
        duration={2000}
        iterations={Infinity}
      ></CreateAnimation>

      <CreateAnimation
        ref={this.squareARef}
        keyframes={[
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
          { offset: 1, transform: 'scale(1) rotate(0deg)' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>

      <CreateAnimation
        ref={this.squareBRef}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>

      <CreateAnimation
        ref={this.squareCRef}
        duration={5000}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '0.5' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '0.5' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>
    </>
  )
}
```

</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareARef = ref();
const squareBRef = ref();
const squareCRef = ref();

...

const squareA = createAnimation()
  .addElement(squareARef.value)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(45deg)' }
  ]);

const squareB = createAnimation()
  .addElement(squareBRef.value)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = createAnimation()
  .addElement(squareCRef.value)
  .duration(5000)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

const parent = createAnimation()
  .duration(2000)
  .iterations(Infinity)
  .addAnimation([squareA, squareB, squareC]);
```

</TabItem>
</Tabs>
````

This example shows 3 child animations controlled by a single parent animation. Animations `squareA` and `squareB` inherit the parent animation's duration of 2000ms, but animation `squareC` has a duration of 5000ms since it was explicitly set.

<Codepen user="ionic" slug="oNvdogM" height="460" />

## Before and After Hooks

Ionic Animations provides hooks that let you alter an element before an animation runs and after an animation completes. These hooks can be used to perform DOM reads and writes as well as add or remove classes and inline styles.

### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
createAnimation()
  .addElement(document.querySelector('.square'))
  .duration(2000)
  .beforeStyles({
    opacity: 0.2
  })
  .afterStyles({
    background: 'rgba(0, 255, 0, 0.5)'
  })
  .afterClearStyles(['opacity'])
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ])
```
</TabItem>
<TabItem value="angular">

```javascript
this.animationCtrl.create()
  .addElement(this.square.nativeElement)
  .duration(2000)
  .beforeStyles({
    opacity: 0.2
  })
  .afterStyles({
    background: 'rgba(0, 255, 0, 0.5)'
  })
  .afterClearStyles(['opacity'])
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ])
```
</TabItem>
<TabItem value="react">

```tsx
<CreateAnimation
  duration={2000}
  beforeStyles={{
    opacity: 0.2
  }}
  afterStyles={{
    background: 'rgba(0, 255, 0, 0.5)'
  }}
  afterClearStyles={['opacity']}
  keyframes={[
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ]}
>
  ...
</CreateAnimation>
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareRef = ref();

...

createAnimation()
  .addElement(squareRef.value)
  .duration(2000)
  .beforeStyles({
    opacity: 0.2
  })
  .afterStyles({
    background: 'rgba(0, 255, 0, 0.5)'
  })
  .afterClearStyles(['opacity'])
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ])
```
</TabItem>
</Tabs>
````

In this example, an inline opacity of 0.2 is set on the `.square` element prior to the animation starting. Once the animation finishes, the background color of the element is set to `rgba(0, 255, 0, 0.5)`, and the inline opacity is cleared.

See [Methods](#methods) for a complete list of hooks.

<Codepen user="ionic" slug="BaBxmwo" />

## Chained Animations

Animations can be chained to run one after the other. The `play` method returns a Promise that resolves when the animation has completed.

### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
const squareA = createAnimation()
  .addElement(document.querySelector('.square-a'))
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(0)' }
  ]);

const squareB = createAnimation()
  .addElement(document.querySelector('.square-b'))
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = createAnimation()
  .addElement(document.querySelector('.square-c'))
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

await squareA.play();
await squareB.play();
await squareC.play();
```
</TabItem>
<TabItem value="angular">

```javascript
const squareA = this.animationCtrl.create()
  .addElement(this.squareA.nativeElement)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(0)' }
  ]);

const squareB = this.animationCtrl.create()
  .addElement(this.squareB.nativeElement)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = this.animationCtrl.create()
  .addElement(this.squareC.nativeElement)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

await squareA.play();
await squareB.play();
await squareC.play();
```
</TabItem>
<TabItem value="react">

```tsx
private squareARef: React.RefObject<CreateAnimation> = React.createRef();
private squareBRef: React.RefObject<CreateAnimation> = React.createRef();
private squareCRef: React.RefObject<CreateAnimation> = React.createRef();

...

async componentDidMount() {
  const squareA = this.squareARef.current!.animation;
  const squareB = this.squareBRef.current!.animation;
  const squareC = this.squareCRef.current!.animation;

  await squareA.play();
  await squareB.play();
  await squareC.play();
}

render() {
  return (
    <>
      <CreateAnimation
        ref={this.squareARef}
        fill="none"
        duration={1000}
        keyframes={[
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
          { offset: 1, transform: 'scale(1) rotate(0deg)' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>

      <CreateAnimation
        ref={this.squareBRef}
        fill="none"
        duration={1000}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>

      <CreateAnimation
        ref={this.squareCRef}
        fill="none"
        duration={1000}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '0.5' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '0.5' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>
    </>
  )
}
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareARef = ref();
const squareBRef = ref();
const squareCRef = ref();

...

const squareA = createAnimation()
  .addElement(squareARef.value)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(0)' }
  ]);

const squareB = createAnimation()
  .addElement(squareBRef.value)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = createAnimation()
  .addElement(squareCRef.value)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

await squareA.play();
await squareB.play();
await squareC.play();
```
</TabItem>
</Tabs>
````

<Codepen user="ionic" slug="MWgGrwX" height="460" />

## Gesture Animations

Ionic Animations gives developers the ability to create powerful gesture-based animations by integrating seamlessly with [Ionic Gestures](gestures.md).

### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
let initialStep = 0;
let started = false;

const square = document.querySelector('.square');
const MAX_TRANSLATE = 400;

const animation = createAnimation()
  .addElement(square)
  .duration(1000)
  .fromTo('transform', 'translateX(0)', `translateX(${MAX_TRANSLATE}px)`);

const gesture = createGesture({
  el: square,
  threshold: 0,
  gestureName: 'square-drag',
  onMove: ev => onMove(ev),
  onEnd: ev => onEnd(ev)
})

gesture.enable(true);

const onMove = (ev): {
  if (!started) {
    animation.progressStart();
    started = true;
  }

  animation.progressStep(getStep(ev));
}

const onEnd = (ev): {
  if (!started) { return; }

  gesture.enable(false);

  const step = getStep(ev);
  const shouldComplete = step > 0.5;

  animation
    .progressEnd((shouldComplete) ? 1 : 0, step)
    .onFinish((): { gesture.enable(true); });

  initialStep = (shouldComplete) ? MAX_TRANSLATE : 0;
  started = false;
}

const clamp = (min, n, max): {
  return Math.max(min, Math.min(n, max));
};

const getStep = (ev): {
  const delta = initialStep + ev.deltaX;
  return clamp(0, delta / MAX_TRANSLATE, 1);
}
```
</TabItem>
<TabItem value="angular">

```tsx
private animation?: Animation;
private gesture?: Gesture;

private started: boolean = false;
private initialStep: number = 0;
private MAX_TRANSLATE: number = 400;

ngOnInit() {
  this.animation = this.animationCtrl.create()
    .addElement(this.square.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateX(0)', `translateX(${this.MAX_TRANSLATE}px)`);

  this.gesture = this.gestureCtrl.create({
    el: this.square.nativeElement,
    threshold: 0,
    gestureName: 'square-drag',
    onMove: ev => this.onMove(ev),
    onEnd: ev => this.onEnd(ev)
  })

  this.gesture.enable(true);
}

private onMove(ev) {
  if (!started) {
    this.animation.progressStart();
    this.started = true;
  }

  this.animation.progressStep(this.getStep(ev));
}

private onEnd(ev) {
  if (!this.started) { return; }

  this.gesture.enable(false);

  const step = this.getStep(ev);
  const shouldComplete = step > 0.5;

  this.animation
    .progressEnd((shouldComplete) ? 1 : 0, step)
    .onFinish((): { this.gesture.enable(true); });

  this.initialStep = (shouldComplete) ? this.MAX_TRANSLATE : 0;
  this.started = false;
}

private clamp(min, n, max) {
  return Math.max(min, Math.min(n, max));
}

private getStep(ev) {
  const delta = this.initialStep + ev.deltaX;
  return this.clamp(0, delta / this.MAX_TRANSLATE, 1);
}
```
</TabItem>
<TabItem value="react">

```javascript
import { createGesture, CreateAnimation, Gesture, GestureDetail } from '@ionic/react';
import React from 'react';

const MAX_TRANSLATE = 400;

class MyComponent extends React.Component<{}, any> {
  private animation: React.RefObject<CreateAnimation> = React.createRef();
  private gesture?: Gesture;
  private started: boolean = false;
  private initialStep: number = 0;

  constructor(props: any) {
    super(props);

    this.state = {
      progressStart: undefined,
      progressStep: undefined,
      progressEnd: undefined,
      onFinish: undefined
    };
  }

  componentDidMount() {
    const square = Array.from(this.animation.current!.nodes.values())[0];

    this.gesture = createGesture({
      el: square,
      gestureName: 'square-drag',
      threshold: 0,
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev)
    });

    this.gesture.enable(true);
  }

  private onMove(ev: GestureDetail) {
    if (!this.started) {
      this.setState({
        ...this.state,
        progressStart: { forceLinearEasing: true }
      });
      this.started = true;
    }

    this.setState({
      ...this.state,
      progressStep: { step: this.getStep(ev) }
    });
  }

  private onEnd(ev: GestureDetail) {
    if (!this.started) { return; }

    this.gesture!.enable(false);

    const step = this.getStep(ev);
    const shouldComplete = step > 0.5;

    this.setState({
      ...this.state,
      progressEnd: { playTo: (shouldComplete) ? 1 : 0, step },
      onFinish: { callback: () => {
        this.gesture!.enable(true);
        this.setState({
          progressStart: undefined,
          progressStep: undefined,
          progressEnd: undefined
        })
      }, opts: { oneTimeCallback: true }}
    });

    this.initialStep = (shouldComplete) ? MAX_TRANSLATE : 0;
    this.started = false;
  }

  private getStep(ev: GestureDetail) {
    const delta = this.initialStep + ev.deltaX;
    return this.clamp(0, delta / MAX_TRANSLATE, 1);
  }

  private clamp(min: number, n: number, max: number) {
    return Math.max(min, Math.min(n, max));
  }

  render() {
    return (
      <>
        <div className="track">
          <CreateAnimation
            ref={this.animation}
            duration={1000}
            progressStart={this.state.progressStart}
            progressStep={this.state.progressStep}
            progressEnd={this.state.progressEnd}
            onFinish={this.state.onFinish}
            fromTo={{
              property: 'transform',
              fromValue: 'translateX(0)',
              toValue: `translateX(${MAX_TRANSLATE}px)`
          }}>
            <div className="square"></div>
          </CreateAnimation>
        </div>
      </>
    );
  }
}
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation, createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

let initialStep = 0;
let started = false;

const squareRef = ref();
const MAX_TRANSLATE = 400;

const animation = createAnimation()
  .addElement(squareRef.value)
  .duration(1000)
  .fromTo('transform', 'translateX(0)', `translateX(${MAX_TRANSLATE}px)`);

const gesture = createGesture({
  el: squareRef.value,
  threshold: 0,
  gestureName: 'square-drag',
  onMove: ev => onMove(ev),
  onEnd: ev => onEnd(ev)
})

gesture.enable(true);

const onMove = (ev): {
  if (!started) {
    animation.progressStart();
    started = true;
  }

  animation.progressStep(getStep(ev));
}

const onEnd = (ev): {
  if (!started) { return; }

  gesture.enable(false);

  const step = getStep(ev);
  const shouldComplete = step > 0.5;

  animation
    .progressEnd((shouldComplete) ? 1 : 0, step)
    .onFinish((): { gesture.enable(true); });

  initialStep = (shouldComplete) ? MAX_TRANSLATE : 0;
  started = false;
}

const clamp = (min, n, max): {
  return Math.max(min, Math.min(n, max));
};

const getStep = (ev): {
  const delta = initialStep + ev.deltaX;
  return clamp(0, delta / MAX_TRANSLATE, 1);
}
```
</TabItem>
</Tabs>
````

In this example we are creating a track along which we can drag the `.square` element. Our `animation` object will take care of moving the `.square` element either left or right, and our `gesture` object will instruct the `animation` object which direction to move in.

<Codepen user="ionic" slug="jONxzRL" />

## Preference-Based Animations

Developers can also tailor their animations to user preferences such as `prefers-reduced-motion` and `prefers-color-scheme` using CSS Variables.

### Usage

```css
.square {
  width: 100px;
  height: 100px;
  opacity: 0.5;
  background: blue;
  margin: 10px;

  --background: red;
}

@media (prefers-color-scheme: dark) {
  .square {
    --background: green;
  }
}
```

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
createAnimation()
   .addElement(document.querySelector('.square'))
   .duration(1500)
   .iterations(Infinity)
   .direction('alternate')
   .fromTo('background', 'blue', 'var(--background)');
```
</TabItem>
<TabItem value="angular">

```javascript
this.animationCtrl.create()
   .addElement(this.square.nativeElement)
   .duration(1500)
   .iterations(Infinity)
   .direction('alternate')
   .fromTo('background', 'blue', 'var(--background)');
```
</TabItem>
<TabItem value="react">

```tsx
<CreateAnimation
  duration={1500}
  iterations={Infinity}
  direction='alternate'
  fromTo={{
    property: 'background',
    fromValue: 'blue',
    toValue: 'var(--background)'
  }}
>
  <div className="square"></div>
</CreateAnimation>
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareRef = ref();

...

createAnimation()
   .addElement(squareRef.value)
   .duration(1500)
   .iterations(Infinity)
   .direction('alternate')
   .fromTo('background', 'blue', 'var(--background)');
```
</TabItem>
</Tabs>
````

This method works in all supported browsers when creating animations for the first time. Most browsers are also capable of dynamically updating keyframe animations as the CSS Variables change.

Safari does not currently support dynamically updating keyframe animations. For developers who need this kind of support in Safari, they can use [MediaQueryList.addListener()](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener).

<Codepen user="ionic" slug="JjjYVKj" />

## Overriding Ionic Component Animations

Certain Ionic components allow developers to provide custom animations. All animations are provided as either properties on the component or are set via a global config.

### Modals

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal Header</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        Modal Content
      </ion-content>
    `;
  }
});

function presentModal() {
  const enterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' }
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  }

  const leaveAnimation = (baseEl: any) => {
    return enterAnimation(baseEl).direction('reverse');
  }

  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';
  modalElement.enterAnimation = enterAnimation;
  modalElement.leaveAnimation = leaveAnimation;

  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}
```
</TabItem>
<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { ModalController, AnimationController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.html',
  styleUrls: ['./modal-example.css']
})
export class ModalExample {
  constructor(public modalController: ModalController,
              public animationCtrl: AnimationController) { }

  async presentModal() {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    const modal = await this.modalController.create({
      component: ModalPage,
      enterAnimation,
      leaveAnimation
    });
    return await modal.present();
  }
}
```
</TabItem>
<TabItem value="react">

```javascript
import React, { useState } from 'react';
import { CreateAnimation, IonModal, IonButton, IonContent } from '@ionic/react';

export const ModalExample: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const enterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' }
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  }

  const leaveAnimation = (baseEl: any) => {
    return enterAnimation(baseEl).direction('reverse');
  }

  return (
    <IonContent>
      <IonModal isOpen={showModal} enterAnimation={enterAnimation} leaveAnimation={leaveAnimation}>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonContent>
  );
};
```
</TabItem>
<TabItem value="vue">

```javascript
<template>
  <ion-page>
    <ion-content>
      <ion-modal
        :is-open="isModalOpen"
        :enter-animation="enterAnimation"
        :leave-animation="leaveAnimation"
        @didDismiss="setModalOpen(false)"
      >
        Modal content goes here.
      </ion-modal>

      <ion-button @click="setModalOpen(true)">Show Modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { createAnimation, IonButton, IonContent, IonModal, IonPage } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonButton, IonContent, IonModal, IonPage },
  setup() {
    const isModalOpen = ref(false);
    const setModalOpen = (state) => isModalOpen.value = state;

    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return createAnimation()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    return { isModalOpen, setModalOpen, enterAnimation, leaveAnimation }
  }
})
</script>
```
</TabItem>
</Tabs>
````

<Codepen user="ionic" slug="ExapZBZ" />

## Performance Considerations

CSS and Web Animations are usually handled on the compositor thread. This is different than the main thread where layout, painting, styling, and your JavaScript is executed. It is recommended that you prefer using properties that can be handled on the compositor thread for optimal animation performance.

Animating properties such as `height` and `width` cause additional layouts and paints which can cause jank and degrade animation performance. On the other hand, animating properties such as `transform` and `opacity` are highly optimizable by the browser and typically do not cause much jank.

For information on which CSS properties cause layouts or paints to occur, see [CSS Triggers](https://csstriggers.com/).

## Debugging

For debugging animations in Chrome, there is a great blog post about inspecting animations using the Chrome DevTools: https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations.

It is also recommended to assign unique identifiers to your animations. These identifiers will show up in the Animations inspector in Chrome and should make it easier to debug:

```javascript
/**
 * The animation for the .square element should
 * show "my-animation-identifier" in Chrome DevTools.
 */
const animation = createAnimation('my-animation-identifier')
  .addElement(document.querySelector('.square'))
  .duration(1000)
  .fromTo('opacity', '1', '0');
```

## Browser Support

| Browser/Platform | Supported Versions |
| ---------------- | ------------------ |
| **Chrome**       | 43+                |
| **Safari**       | 9+                 |
| **Firefox**      | 32+                |
| **IE/Edge**      | 11+                |
| **Opera**        | 30+                |
| **iOS**          | 9+                 |
| **Android**      | 5+                 |

:::note
Due to a bug in Safari versions 9-11, stepping through animations via `progressStep` is not supported. This is supported on Safari 12+.
:::

## Types

| Name                 | Value                                                         |
| -------------------- | ------------------------------------------------------------- |
| `AnimationDirection` | `'normal' \| 'reverse' \| 'alternate' \| 'alternate-reverse'` |
| `AnimationFill`      | `'auto' \| 'none' \| 'forwards' \| 'backwards' \| 'both'`     |

## Interfaces

```tsx
interface AnimationCallbackOptions {
  /**
   * If true, the associated callback will only be fired once.
   */
  oneTimeCallback: boolean;
}

interface AnimationPlayOptions {
  /**
   * If true, the animation will play synchronously.
   * This is the equivalent of running the animation
   * with a duration of 0ms.
   */
  sync: boolean;
}
```

## Properties

| Name                           | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| `childAnimations: Animation[]` | All child animations of a given parent animation. |
| `elements: HTMLElement[]`      | All elements attached to an animation.            |
| `parentAnimation?: Animation`  | The parent animation of a given animation object. |

## Methods

| Name                                                                                                                 | Description                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addAnimation(animationToAdd: Animation \| Animation[]): Animation`                                                  | Group one or more animations together to be controlled by a parent animation.                                                                                                           |
| `addElement(el: Element \| Element[] \| Node \| Node[] \| NodeList): Animation`                                      | Add one or more elements to the animation.                                                                                                                                              |
| `afterAddClass(className: string \| string[]): Animation`                                                            | Add a class or array of classes to be added to all elements in an animation after the animation ends.                                                                                   |
| `afterAddRead(readFn: (): void): Animation`                                                                          | Add a function that performs a DOM read to be run after the animation ends.                                                                                                             |
| `afterAddWrite(writeFn: (): void): Animation`                                                                        | Add a function that performs a DOM write to be run after the animation ends.                                                                                                            |
| `afterClearStyles(propertyNames: string[]): Animation`                                                               | Add an array of property names to be cleared from the inline styles on all elements in an animation after the animation ends.                                                           |
| `afterRemoveClass(className: string \| string[]): Animation`                                                         | Add a class or an array of classes to be removed from all elements in an animation after the animation ends.                                                                            |
| `afterStyles(styles: { [property: string]: any }): Animation`                                                        | Add an object of styles to be applied to all elements in an animation after the animation ends.                                                                                         |
| `beforeAddClass(className: string \| string[]): Animation`                                                           | Add a class or array of classes to be added to all elements in an animation before the animation starts.                                                                                |
| `beforeAddRead(readFn: (): void): Animation`                                                                         | Add a function that performs a DOM read to be run before the animation starts.                                                                                                          |
| `beforeAddWrite(writeFn: (): void): Animation`                                                                       | Add a function that performs a DOM write to be run before the animation starts.                                                                                                         |
| `beforeClearStyles(propertyNames: string[]): Animation`                                                              | Add an array of property names to be cleared from the inline styles on all elements in an animation before the animation starts.                                                        |
| `beforeRemoveClass(className: string \| string[]): Animation`                                                        | Add a class or an array of classes to be removed from all elements in an animation before the animation starts.                                                                         |
| `beforeStyles(styles: { [property: string]: any }): Animation`                                                       | Add an object of styles to be applied to all elements in an animation before the animation starts.                                                                                      |
| `direction(direction?: AnimationDirection): Animation`                                                               | Set the direction the animation should play in.                                                                                                                                         |
| `delay(delay?: number): Animation`                                                                                   | Set the delay for the start of the animation in milliseconds.                                                                                                                           |
| `destroy(clearStyleSheets?: boolean): Animation`                                                                     | Destroy the animation and clear all elements, child animations, and keyframes.                                                                                                          |
| `duration(duration?: number): Animation`                                                                             | Set the duration of the animation in milliseconds.                                                                                                                                      |
| `easing(easing?: string): Animation`                                                                                 | Set the easing of the animation in milliseconds. See [Easing Effects](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing#Value) for a list of accepted easing values. |
| `from(property: string, value: any): Animation`                                                                      | Set the start styles of the animation.                                                                                                                                                  |
| `fromTo(property: string, fromValue: any, toValue: any): Animation`                                                  | Set the start and end styles of the animation.                                                                                                                                          |
| `fill(fill?: AnimationFill): Animation`                                                                              | Set how the animation applies styles to its elements before and after the animation's execution.                                                                                        |
| `iterations(iterations: number): Animation`                                                                          | Set the number of times the animation cycle should be played before stopping.                                                                                                           |
| `keyframes(keyframes: any[]): Animation`                                                                             | Set the keyframes for an animation.                                                                                                                                                     |
| `onFinish(callback: (didComplete: boolean, animation: Animation): void, opts?: AnimationCallbackOptions): Animation` | Add a callback to be run upon the animation ending.                                                                                                                                     |
| `pause(): Animation`                                                                                                 | Pause the animation.                                                                                                                                                                    |
| `play(opts?: AnimationPlayOptions): Promise<void>`                                                                   | Play the animation.                                                                                                                                                                     |
| `progressEnd(playTo?: 0 \| 1, step: number, dur?: number): Animation`                                                | Stop seeking through an animation.                                                                                                                                                      |
| `progressStart(forceLinearEasing?: boolean, step?: number): Animation`                                               | Begin seeking through an animation.                                                                                                                                                     |
| `progressStep(step: number): Animation`                                                                              | Seek through an animation.                                                                                                                                                              |
| `stop(): Animation`                                                                                                  | Stop the animation and reset all elements to their initial state.                                                                                                                       |
| `to(property: string, value: any): Animation`                                                                        | Set the end styles of the animation.                                                                                                                                                    |
