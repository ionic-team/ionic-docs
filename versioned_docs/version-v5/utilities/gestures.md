import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Gestures

## Overview

Ionic Gestures is a utility that allows developers to build custom gestures and interactions for their application in a platform agnostic manner. Developers do not need to be using a particular framework such as React or Angular, nor do they even need to be building an Ionic app! As long as developers have access to v5.0 or greater of Ionic Framework, they will have access to all of Ionic Animations.

Building complex gestures can be time consuming. Other libraries that provide custom gestures are often times too heavy handed and end up capturing mouse or touch events and not letting them propagate. This can result in other elements no longer being scrollable or clickable.

## Installation

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

Developers using Ionic Core and JavaScript should install the latest version of `@ionic/core`.

```javascript
import { createGesture } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

...

const gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: ev => onMoveHandler(ev)
});

```
</TabItem>
<TabItem value="typescript">

Developers using Ionic Core and TypeScript should install the latest version of `@ionic/core`.

```tsx
import { createGesture, Gesture } from '@ionic/core';

...

const gesture: Gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: ev => onMoveHandler(ev)
});
```
</TabItem>
<TabItem value="angular">

Developers using Angular should install the latest version of `@ionic/angular`. Animations can be created via the `AnimationController` dependency injection.

By default, gesture callbacks do not run inside of NgZone. Developers can either set the `runInsideAngularZone` parameter to `true` when creating a gesture,
or they can wrap their callbacks in an `NgZone.run()` call.

```tsx
import { Gesture, GestureController } from '@ionic/angular';

...

constructor(private gestureCtrl: GestureController) {
  const gesture: Gesture = this.gestureCtrl.create({
    el: this.element.nativeElement,
    threshold: 15,
    gestureName: 'my-gesture',
    onMove: ev => this.onMoveHandler(ev)
  }, true);
  // The `true` above ensures that callbacks run inside NgZone.
}

```
</TabItem>
<TabItem value="react">

Developers using React should install the latest version of `@ionic/react`. Full React wrappers are coming soon!

```tsx
import { createGesture, Gesture } from '@ionic/react';

...

const gesture: Gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: ev => onMoveHandler(ev)
});
```
</TabItem>
<TabItem value="vue">

Developers using Ionic Vue should install the latest version of `@ionic/vue`.

```javascript
import { createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

const elementRef = ref();

...

const gesture = createGesture({
  el: elementRef.value,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: ev => onMoveHandler(ev)
});

```
</TabItem>
</Tabs>
````

## Basic Gestures

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
let p = document.querySelector('p');
const gesture = createGesture({
  el: document.querySelector('.rectangle'),
  onMove: (detail) => { onMove(detail); }
})

gesture.enable();

const onMove = (detail) => {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;

  p.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}
```
</TabItem>
<TabItem value="angular">

```javascript
@ViewChild('paragraph') p: ElementRef;

ngOnInit() {
  const gesture = this.gestureCtrl.create({
    el: this.rectangle.nativeElement,
    onMove: (detail) => { this.onMove(detail); }
  })

  gesture.enable();
}

private onMove(detail) {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;

  this.p.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}
```
</TabItem>
<TabItem value="react">

```javascript
let p = document.querySelector('p');
const gesture = createGesture({
  el: document.querySelector('.rectangle'),
  onMove: (detail) => { onMove(detail); }
})

gesture.enable();

const onMove = (detail) => {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;

  p.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}
```
</TabItem>
<TabItem value="vue">

```javascript
import { createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

let pRef = ref();
const rectangleRef = ref();
const gesture = createGesture({
  el: rectangleRef.value,
  onMove: (detail) => { onMove(detail); }
})

gesture.enable();

const onMove = (detail) => {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;

  pRef.value.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}
```
</TabItem>
</Tabs>
````

In this example, our app listens for gestures on the `.rectangle` element. When a gesture movement is detected, the `onMove` function is called, and our app logs the current gesture information.

<Codepen user="ionic" slug="xxKBYdL" />

## Double Click Gesture

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
const backgrounds = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
const DOUBLE_CLICK_THRESHOLD = 500;
const rectangle = document.querySelector('.rectangle');
const gesture = createGesture({
  el: rectangle,
  threshold: 0,
  onStart: () => { onStart(); }
});

gesture.enable();

let lastOnStart = 0;
let currentColor = 'rgba(0, 0, 255, 0.5)';

const onStart = () => {
  const now = Date.now();

  if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
    rectangle.style.setProperty('background', getRandomBackground());
    lastOnStart = 0;
  } else {
    lastOnStart = now;
  }
}

const getRandomBackground = () => {
  const options = backgrounds.filter(bg => bg !== currentColor);
  currentColor = options[Math.floor(Math.random() * options.length)];

  return currentColor;
}
```
</TabItem>
<TabItem value="angular">

```tsx
@ViewChild('rectangle') rectangle: ElementRef;

private backgrounds: string[] = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
private currentColor: string = 'rgba(0, 0, 255, 0.5)';
private lastOnStart: number = 0;
private DOUBLE_CLICK_THRESHOLD: number = 500;

ngOnInit() {
  const gesture = this.gestureCtrl.create({
    el: this.rectangle.nativeElement,
    threshold: 0,
    onStart: () => { this.onStart(); }
  });

  gesture.enable();
}

private onStart() {
  const now = Date.now();

  if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
    this.rectangle.nativeElement.style.setProperty('background', this.getRandomBackground());
    this.lastOnStart = 0;
  } else {
    this.lastOnStart = now;
  }
}

private getRandomBackground() {
  const options = this.backgrounds.filter(bg => bg !== this.currentColor);
  this.currentColor = options[Math.floor(Math.random() * options.length)];

  return this.currentColor;
}
```
</TabItem>
<TabItem value="react">

```javascript
const backgrounds = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
const DOUBLE_CLICK_THRESHOLD = 500;
const rectangle = document.querySelector('.rectangle');
const gesture = createGesture({
  el: rectangle,
  threshold: 0,
  onStart: () => { onStart(); }
});

gesture.enable();

let lastOnStart = 0;
let currentColor = 'rgba(0, 0, 255, 0.5)';

const onStart = () => {
  const now = Date.now();

  if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
    rectangle.style.setProperty('background', getRandomBackground());
    lastOnStart = 0;
  } else {
    lastOnStart = now;
  }
}

const getRandomBackground = () => {
  const options = backgrounds.filter(bg => bg !== currentColor);
  currentColor = options[Math.floor(Math.random() * options.length)];

  return currentColor;
}
```
</TabItem>
<TabItem value="vue">

```javascript
import { createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

const backgrounds = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
const DOUBLE_CLICK_THRESHOLD = 500;
const rectangleRef = ref();
const gesture = createGesture({
  el: rectangleRef.value,
  threshold: 0,
  onStart: () => { onStart(); }
});

gesture.enable();

let lastOnStart = 0;
let currentColor = 'rgba(0, 0, 255, 0.5)';

const onStart = () => {
  const now = Date.now();

  if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
    rectangleRef.value.style.setProperty('background', getRandomBackground());
    lastOnStart = 0;
  } else {
    lastOnStart = now;
  }
}

const getRandomBackground = () => {
  const options = backgrounds.filter(bg => bg !== currentColor);
  currentColor = options[Math.floor(Math.random() * options.length)];

  return currentColor;
}
```
</TabItem>
</Tabs>
````

In the example above, we want to be able to detect double clicks on an element. By setting our `threshold` to `0`, we can ensure our gesture object can detect clicks. Additionally, we define a click threshold so that only 2 clicks that occur in quick succession count as a double click.

<Codepen user="ionic" slug="oNvVEwE" />

## Gesture Animations

See our guide on implementing gesture animations: [Gesture Animations with Ionic Animations](animations.md#gesture-animations)

## Browser Support

| Browser/Platform | Supported Versions |
| ---------------- | ------------------ |
| **Chrome**       | 22+                |
| **Safari**       | 9+                 |
| **Firefox**      | 32+                |
| **IE/Edge**      | 11+                |
| **Opera**        | 30+                |
| **iOS**          | 9+                 |
| **Android**      | 5+                 |

## Types

| Name              | Value                                        |
| ----------------- | -------------------------------------------- |
| `GestureCallback` | `(detail: GestureDetail) => boolean \| void` |

## Interfaces

### GestureConfig

| Property        | Type                                       | Default     | Description                                                                                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| el              | `Node`                                     | `undefined` | The element to listen on for gestures.                                                                                                                                                                                                                                                                                  |
| disableScroll   | `boolean \| undefined`                     | `false`     | If true, scrolling will be disabled on `el` while the gesture is enabled.                                                                                                                                                                                                                                               |
| direction       | `'x' \| 'y' \| undefined`                  | `'x'`       | Limit gesture detection to movements along a certain axis.                                                                                                                                                                                                                                                              |
| gestureName     | `string`                                   | `undefined` | The name of the gesture to create.                                                                                                                                                                                                                                                                                      |
| gesturePriority | `number \| undefined`                      | `0`         | Gestures with higher priorities will override gestures with lower priorities. Useful for ensuring the multiple gestures do not collide with one another.                                                                                                                                                                |
| passive         | `boolean \| undefined`                     | `true`      | If true, this will indicate that the gesture will never call `preventDefault()`. This can be used to improve scrolling performance. See [Passive Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners) for more information. |
| maxAngle        | `number \| undefined`                      | `40`        | The maximum angle to allow when detecting a gesture.                                                                                                                                                                                                                                                                    |
| threshold       | `number \| undefined`                      | `10`        | Defines how much a pointer must move before the gesture starts.                                                                                                                                                                                                                                                         |
| blurOnStart     | `boolean \| undefined`                     | `undefined` | If true, the gesture will blur any active selectable element such as an input or a textarea before firing the `onStart` callback.                                                                                                                                                                                       |
| canStart        | `GestureCallback \| undefined`             | `undefined` | A callback that returns true if a gesture is allowed to start.                                                                                                                                                                                                                                                          |
| onWillStart     | `(detail: GestureDetail) => Promise<void>` | `undefined` | A callback that fires when a gesture is about to start. This is fired after `canStart` but before `onStart`.                                                                                                                                                                                                            |
| onStart         | `GestureCallback \| undefined`             | `undefined` | A callback that fires when a gesture has started.                                                                                                                                                                                                                                                                       |
| onMove          | `GestureCallback \| undefined`             | `undefined` | A callback that fires when a gesture movement was detected.                                                                                                                                                                                                                                                             |
| onEnd           | `GestureCallback \| undefined`             | `undefined` | A callback that fires when a gesture has ended. This is usually when a pointer has been released.                                                                                                                                                                                                                       |
| notCaptured     | `GestureCallback \| undefined`             | `undefined` | A callback that fires when a gesture has not been captured. This usually happens when there is a conflicting gesture with a higher priority.                                                                                                                                                                            |

### GestureDetail

| Property       | Type               | Description                                                                                                                               |
| -------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| type           | `string`           | The type of gesture that was detected.                                                                                                    |
| startX         | `number`           | The starting x coordinate of the gesture.                                                                                                 |
| startY         | `number`           | The starting y coordinate of the gesture.                                                                                                 |
| startTimeStamp | `number`           | The timestamp at which the gesture was started.                                                                                           |
| currentX       | `number`           | The current x coordinate of the gesture.                                                                                                  |
| currentY       | `number`           | The current y coordinate of the gesture.                                                                                                  |
| velocityX      | `number`           | How fast the gesture is currently moving on the x axis.                                                                                   |
| velocityY      | `number`           | How fast the gesture is currently moving on the y axis.                                                                                   |
| deltaX         | `number`           | How much the gesture has moved on the x axis since it started.                                                                            |
| deltaY         | `number`           | How much the gesture has moved on the y axis since it started.                                                                            |
| timeStamp      | `number`           | The current timestamp of the gesture.                                                                                                     |
| event          | `UIEvent`          | The native event dispatched by the browser. See [UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) for more information. |
| data           | `any \| undefined` | Any data specified by the user. This can be set and read in any of the callbacks.                                                         |

## Methods

#### `enable(enable: boolean = true) => void`

Enable or disable the gesture.

#### `destroy() => void`

Destroy the gesture instance and stop listening on the target element.
