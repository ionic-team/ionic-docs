---
previousText: ''
previousUrl: ''
nextText: 'Config'
nextUrl: '/docs/utilities/config'
---

# Animations

## Overview

Ionic Animations is a utility that allows developers to build complex animations in a platform agnostic manner. Developers do not need to be using a particular framework such as React or Angular, nor do they even need to be building an Ionic app. As long as developers have access to v5.0 or greater of Ionic Framework, they will have access to all of Ionic Animations.

Building efficient animations can be tricky. Developers are often limited by the libraries available to them as well as the hardware that their apps run on. On top of that, many animation libraries use a JavaScript-driven approach to running animations where they handle the calculation of your animation's values at every step in a `requestAnimationFrame` loop. This reduces the scalability of your animations as the library is constantly computing values and using up CPU time.

Ionic Animations uses the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) to build and run your animations. In doing this, we offload all work required to compute and run your animations to the browser. As a result, this allows the browser to make any optimizations it needs and ensures your animations run as smoothly as possible. While most browsers support a basic implementation of Web Animations, we fallback to [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) for browsers that do not support Web Animations. The performance difference in switching between these two should typically be negligible.

## Installation

### Angular

Developers using Angular should install the latest version of `@ionic/angular`.

```typescript

import { IonicAnimation, Animation } from '@ionic/angular';

...

constructor(private animation: IonicAnimation) {
  const animation: Animation = this.animation.create()
    .addElement(myElementRef)
    .duration(1000)
    .fromTo('opacity', '1', '0.5');
}

```

### React

Developers using React should install the latest version of `@ionic/react`. Full React wrappers are coming soon!

```typescript

import { createAnimation, Animation } from '@ionic/react';

...

const animation: Animation = createAnimation()
  .addElement(myElementRef)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}

```

### Ionic Core (TypeScript)

Developers using Ionic Core and TypeScript should install the latest version of `@ionic/core`.

```typescript

import { createAnimation, Animation } from '@ionic/core';

...

const animation: Animation = createAnimation()
  .addElement(myElementRef)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}

```

### Ionic Core (JavaScript)

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

## Basic Animations

### Usage

```javascript
createAnimation()
  .addElement(document.querySelector('.square'))
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', 1, 0.2);
```

In the example above, an animation that changes the opacity on the `.square` element and moves it from left to right along the X axis has been created. This animation will run an infinite number of times, and each iteration of the animation will last 1500ms.

<docs-codepen user="ionic" slug="bGbMojP"></docs-codepen>

## Keyframe Animations

Ionic Animations allows you to control the intermediate steps in an animation using keyframes. Any valid CSS property can be used here, and you can even use CSS Variables as values.

### Usage

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

In the example above, the `.square` element will transition from a red background color, to a background color defined by the `--background` variable, and then transition on to a green background color.

Each keyframe object contains an `offset` property. `offset` is a value between 0 and 1 that defines the keyframe step. Offset values must go in ascending order and cannot repeat.

<docs-codepen user="ionic" slug="YzKLEzR"></docs-codepen>

## Grouped Animations

Multiple elements can be animated at the same time and controlled via a single parent animation object. Child animations inherit properties such as duration, easing, and iterations unless otherwise specified. A parent animation's `onFinish` callback will not be called until all child animations have completed.

### Usage

```javascript
const squareA = createAnimation()
  .addElement(document.querySelector('.square-a'))
  .fill('none')
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(45deg) '}
  ]);
  
const squareB = createAnimation()
  .addElement(document.querySelector('.square-b'))
  .fill('none')
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: 1 },
    { offset: 0.5, transform: 'scale(1.2)', opacity: 0.3 },
    { offset: 1, transform: 'scale(1)', opacity: 1 }
  ]);
  
const squareC = createAnimation()
  .addElement(document.querySelector('.square-c'))
  .fill('none')
  .duration(5000)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: 0.5 },
    { offset: 0.5, transform: 'scale(0.8)', opacity: 1 },
    { offset: 1, transform: 'scale(1)', opacity: 0.5 }
  ]);

const parent = createAnimation()
  .duration(2000)
  .iterations(Infinity)
  .addAnimation([squareA, squareB, squareC]);
```

This example shows 3 child animations controlled by a single parent animation. Animations `squareA` and `squareB` inherit the parent animation's duration of 2000ms, but animation `squareC` has a duration of 5000ms since it was explicitly set.

<docs-codepen user="ionic" slug="oNvdogM" height="460"></docs-codepen>

## Before and After Hooks

Ionic Animations provides hooks that let you alter an element before an animation runs and after an animation completes. These hooks can be used to perform DOM reads and writes as well as add or remove classes and inline styles.

### Usage

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

In this example, an inline opacity of 0.2 is set on the `.square` element prior to the animation starting. Once the animation finishes, the background color of the element is set to `rgba(0, 255, 0, 0.5)`, and the inline opacity is cleared.

See [Methods](#methods) for a complete list of hooks.

<docs-codepen user="ionic" slug="BaBxmwo"></docs-codepen>

## Chained Animations

Animations can be chained to run one after the other. The `play` method returns a Promise that resolves when the animation has completed.

### Usage

```javascript
const squareA = createAnimation()
  .addElement(document.querySelector('.square-a'))
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(0) '}
  ]);
  
const squareB = createAnimation()
  .addElement(document.querySelector('.square-b'))
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: 1 },
    { offset: 0.5, transform: 'scale(1.2)', opacity: 0.3 },
    { offset: 1, transform: 'scale(1)', opacity: 1 }
  ]);
  
const squareC = createAnimation()
  .addElement(document.querySelector('.square-c'))
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: 0.5 },
    { offset: 0.5, transform: 'scale(0.8)', opacity: 1 },
    { offset: 1, transform: 'scale(1)', opacity: 0.5 }
  ]);

await squareA.play();
await squareB.play();
await squareC.play();
```

<docs-codepen user="ionic" slug="MWgGrwX" height="460"></docs-codepen>

## Gesture Animations

Ionic Animations gives developers the ability to create powerful gesture-based animations by integrating seamlessly with [Ionic Gestures](/docs/utilities/gestures).

### Usage

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
  onMove: ev: onMove(ev),
  onEnd: ev: onEnd(ev)
})

gesture.setDisabled(false);

const onMove = (ev): {
  if (!started) {
    animation.progressStart();
    started = true;
  }
  
  animation.progressStep(getStep(ev));
}

const onEnd = (ev): {
  if (!started) { return; }
  
  gesture.setDisabled(true);
  
  const step = getStep(ev);
  const shouldComplete = step > 0.5;

  animation
    .progressEnd((shouldComplete) ? 1 : 0, step)
    .onFinish((): { gesture.setDisabled(false); });  
  
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

In this example we are creating a track along which we can drag the `.square` element. Our `animation` object will take care of moving the `.square` element either left or right, and our `gesture` object will instruct the `animation` object which direction to move in.

<docs-codepen user="ionic" slug="jONxzRL"></docs-codepen>

## Preference-Based Animations

Developers can also tailor their animations to user preferences such as `prefers-reduced-motion` and `prefers-color-scheme` using CSS Variables:

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

```javascript
createAnimation()
   .addElement(document.querySelector('.square'))
   .duration(1500)
   .iterations(Infinity)
   .direction('alternate')
   .fromTo('background', 'blue', 'var(--background)');
```

This method works in all supported browsers when creating animations for the first time. Most browsers are also capable of dynamically updating keyframe animations as the CSS Variables change.

Safari does not currently support dynamically updating keyframe animations. For developers who need this kind of support in Safari, they can use [MediaQueryList.addListener()](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener).

<docs-codepen user="ionic" slug="JjjYVKj"></docs-codepen>


## Performance Considerations

CSS and Web Animations are usually handled on the compositor thread. This is different than the main thread where layout, painting, styling, and your JavaScript is executed. It is recommended that you prefer using properties that can be handled on the compositor thread for optimal animation performance.

Animating properties such as `height` and `width` cause additional layouts and paints which can cause jank and degrade animation performance. On the other hand, animating properties such as `transform` and `opacity` are highly optimizable by the browser and typically do not cause much jank.

For information on which CSS properties cause layouts or paints to occur, see [CSS Triggers](https://csstriggers.com/).

## Browser Support

| Browser/Platform     | Supported Versions |
| -------------------- | ------------------ |
| **Chrome**           | 43+                |
| **Safari**           | 9+                 |   
| **Firefox**          | 32+                |     
| **IE/Edge**          | 11+                |    
| **Opera**            | 30+                |
| **iOS**              | 9+                 |
| **Android**          | 5+                 |      

> Due to a bug in Safari versions 9-11, stepping through animations via `progressStep` is not supported. This is supported on Safari 12+.

## Types

| Name                 | Value                                                         |
| ---------------------| ------------------------------------------------------------- |
| `AnimationDirection` | `'normal' \| 'reverse' \| 'alternate' \| 'alternate-reverse'` |
| `AnimationFill`      | `'auto' \| 'none' \| 'forwards' \| 'backwards' \| 'both'`     |  

## Interfaces

```typescript
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

| Name                                      | Description                                       |
| ------------------------------------------| ------------------------------------------------- |
| `childAnimations: Animation[]`            | All child animations of a given parent animation. |
| `elements: HTMLElement[]`                 | All elements attached to an animation.            |                                                       
| `parentAnimation?: Animation` | The parent animation of a given animation object. |

## Methods

| Name                                      | Description                                       |
| ------------------------------------------| ------------------------------------------------- |
| `addAnimation(animationToAdd: Animation \| Animation[]): Animation`            | Group one or more animations together to be controlled by a parent animation. |
| `addElement(el: Element \| Element[] \| Node \| Node[] \| NodeList): Animation`                 | Add one or more elements to the animation.            |                                                       
| `afterAddClass(className: string \| string[]): Animation` | Add a class or array of classes to be added to all elements in an animation after the animation ends. |
| `afterAddRead(readFn: (): void): Animation` | Add a function that performs a DOM read to be run after the animation ends. |
| `afterAddWrite(writeFn: (): void): Animation` | Add a function that performs a DOM write to be run after the animation ends. |
| `afterClearStyles(propertyNames: string[]): Animation` | Add an array of property names to be cleared from the inline styles on all elements in an animation after the animation ends. |
| `afterRemoveClass(className: string \| string[]): Animation` | Add a class or an array of classes to be removed from all elements in an animation after the animation ends. |
| `afterStyles(styles: { [property: string]: any }): Animation` | Add an object of styles to be applied to all elements in an animation after the animation ends. |
| `beforeAddClass(className: string \| string[]): Animation` |Add a class or array of classes to be added to all elements in an animation before the animation starts. |
| `beforeAddRead(readFn: (): void): Animation` | Add a function that performs a DOM read to be run before the animation starts. |
| `beforeAddWrite(writeFn: (): void): Animation` | Add a function that performs a DOM write to be run before the animation starts. |
| `beforeClearStyles(propertyNames: string[]): Animation` | Add an array of property names to be cleared from the inline styles on all elements in an animation before the animation starts. |
| `beforeRemoveClass(className: string \| string[]): Animation` | Add a class or an array of classes to be removed from all elements in an animation before the animation starts. |
| `beforeStyles(styles: { [property: string]: any }): Animation` | Add an object of styles to be applied to all elements in an animation before the animation starts. |
| `direction(direction?: AnimationDirection): Animation` | Set the direction the animation should play in.
| `delay(delay?: number): Animation` | Set the delay for the start of the animation in milliseconds. |
| `destroy(): Animation` | Destroy the animation and clear all elements, child animations, and keyframes. |
| `duration(duration?: number): Animation` | Set the duration of the animation in milliseconds. |
| `easing(easing?: string): Animation` | Set the easing of the animation in milliseconds. See [Easing Effects](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing#Value) for a list of accepted easing values. |
| `from(property: string, value: any): Animation` | Set the start styles of the animation. |
| `fromTo(property: string, fromValue: any, toValue: any): Animation` | Set the start and end styles of the animation. |
| `fill(fill?: AnimationFill): Animation` | Set how the animation applies styles to its elements before and after the animation's execution. |
| `iterations(iterations: number): Animation` | Set the number of times the animation cycle should be played before stopping. |
| `keyframes(keyframes: any[]): Animation` | Set the keyframes for an animation. |
| `onFinish(callback: (didComplete: boolean, animation: Animation): void, opts?: AnimationCallbackOptions): Animation` | Add a callback to be run upon the animation ending. |
| `pause(): Animation` | Pause the animation. |
| `play(opts?: AnimationPlayOptions): Promise<void>` | Play the animation. |
| `progressEnd(playTo?: 0 \| 1, step: number, dur?: number): Animation` | Stop seeking through an animation. |
| `progressStart(forceLinearEasing: boolean): Animation` | Begin seeking through an animation. |
| `progressStep(step: number): Animation` | Seek through an animation. |
| `stop(): Animation` | Stop the animation and reset all elements to their initial state. |
| `to(property: string, value: any): Animation` | Set the end styles of the animation. |

