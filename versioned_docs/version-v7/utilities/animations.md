---
title: Animations
---

import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Animations: Web Animations API to Build and Run on Ionic Apps</title>
  <meta
    name="description"
    content="Ionic apps use Web Animations API to build and run animations. Learn how this utility lets developers build complex animations in a platform agnostic manner."
  />
</head>

## Overview

Ionic Animations is a tool that enables developers to create complex animations in a platform-agnostic manner, without requiring a specific framework or an Ionic app.

Creating efficient animations can be challenging, as developers are limited by the available libraries and hardware resources of the device. Moreover, many animation libraries use a JavaScript-driven approach, which can reduce the scalability of animations and use up CPU time.

Ionic Animations, on the other hand, uses the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), which offloads all the computation and running of animations to the browser. This approach allows the browser to optimize the animations and ensure their smooth execution. In cases where Web Animations are not supported, Ionic Animations will fall back to [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations), which should have a negligible difference in performance.

## Installation

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
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
<TabItem value="angular-standalone">

Developers using Angular should install the latest version of `@ionic/angular`. Animations can be created via the `AnimationController` dependency injection.

```tsx

import { Animation, AnimationController } from '@ionic/angular/standalone';

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

In the example below, an animation that changes the opacity on the `ion-card` element and moves it from left to right along the X axis has been created. This animation will run an infinite number of times, and each iteration of the animation will last 1500ms.

By default, all Ionic Animations are paused until the `play` method is called.

import Basic from '@site/static/usage/v7/animations/basic/index.md';

<Basic />

## Keyframe Animations

Ionic Animations allows you to control the intermediate steps in an animation using keyframes. Any valid CSS property can be used here, and you can even use CSS Variables as values.

Hyphenated CSS properties should be written using camel case when writing keyframes. For example, `border-radius` should be written as `borderRadius`. This also applies to the `fromTo()`, `from(),` and `to()` methods.

import Keyframes from '@site/static/usage/v7/animations/keyframes/index.md';

<Keyframes />

In the example above, the card element will transition from its initial width, to a width defined by the `--width` variable, and then transition on to the final width.

Each keyframe object contains an `offset` property. `offset` is a value between 0 and 1 that defines the keyframe step. Offset values must go in ascending order and cannot repeat.

## Grouped Animations

Multiple elements can be animated at the same time and controlled via a single parent animation object. Child animations inherit properties such as duration, easing, and iterations unless otherwise specified. A parent animation's `onFinish` callback will not be called until all child animations have completed.

This example shows 3 child animations controlled by a single parent animation. Animations `cardA` and `cardB` inherit the parent animation's duration of 2000ms, but animation `cardC` has a duration of 5000ms since it was explicitly set.

import Group from '@site/static/usage/v7/animations/group/index.md';

<Group />

## Before and After Hooks

Ionic Animations provides hooks that let you alter an element before an animation runs and after an animation completes. These hooks can be used to perform DOM reads and writes as well as add or remove classes and inline styles.

This example sets an inline filter which inverts the background color of the card by `75%` prior to the animation starting. Once the animation finishes, the box shadow on the element is set to `rgba(255, 0, 50, 0.4) 0px 4px 16px 6px`, a red glow, and the inline filter is cleared. The animation must be stopped in order to remove the box shadow and play it with the filter again.

See [Methods](#methods) for a complete list of hooks.

import BeforeAndAfterHooks from '@site/static/usage/v7/animations/before-and-after-hooks/index.md';

<BeforeAndAfterHooks />

## Chained Animations

Animations can be chained to run one after the other. The `play` method returns a Promise that resolves when the animation has completed.

import Chain from '@site/static/usage/v7/animations/chain/index.md';

<Chain />

## Gesture Animations

Ionic Animations gives developers the ability to create powerful gesture-based animations by integrating seamlessly with [Ionic Gestures](gestures.md).

In the following example we are creating a track along which we can drag the card element. Our `animation` object will take care of moving the card element either left or right, and our `gesture` object will instruct the `animation` object which direction to move in.

import Gesture from '@site/static/usage/v7/animations/gesture/index.md';

<Gesture />

## Preference-Based Animations

Developers can also tailor their animations to user preferences such as `prefers-reduced-motion` and `prefers-color-scheme` using CSS Variables.

This method works in all supported browsers when creating animations for the first time. Most browsers are also capable of dynamically updating keyframe animations as the CSS Variables change.

Safari does not currently support dynamically updating keyframe animations. For developers who need this kind of support in Safari, they can use [MediaQueryList.addListener()](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener).

import PreferenceBased from '@site/static/usage/v7/animations/preference-based/index.md';

<PreferenceBased />

## Overriding Ionic Component Animations

Certain Ionic components allow developers to provide custom animations. All animations are provided as either properties on the component or are set via a global config.

### Modals

import ModalOverride from '@site/static/usage/v7/animations/modal-override/index.md';

<ModalOverride />

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

## API

This section provides a list of all the methods and properties available on the `Animation` class.

### Interfaces

#### AnimationDirection

```tsx
type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
```

#### AnimationFill

```tsx
type AnimationFill = 'auto' | 'none' | 'forwards' | 'backwards' | 'both';
```

#### AnimationBuilder

```tsx
type AnimationBuilder = (baseEl: any, opts?: any) => Animation;
```

:::note

`opts` are additional options that are specific to the custom animation. For example, the sheet modal enter animation includes information for the current breakpoint.

:::

#### AnimationCallbackOptions

```tsx
interface AnimationCallbackOptions {
  /**
   * If true, the associated callback will only be fired once.
   */
  oneTimeCallback: boolean;
}
```

#### AnimationPlayOptions

```tsx
interface AnimationPlayOptions {
  /**
   * If true, the animation will play synchronously.
   * This is the equivalent of running the animation
   * with a duration of 0ms.
   */
  sync: boolean;
}
```

### Properties

| Name                           | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| `childAnimations: Animation[]` | All child animations of a given parent animation. |
| `elements: HTMLElement[]`      | All elements attached to an animation.            |
| `parentAnimation?: Animation`  | The parent animation of a given animation object. |

### Methods

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
