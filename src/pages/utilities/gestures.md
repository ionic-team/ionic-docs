---
previousText: ''
previousUrl: ''
nextText: 'Platform'
nextUrl: '/docs/utilities/platform'
---

# Gestures

## Overview

Ionic Gestures is a utility that allows developers to build custom gestures and interactions for their application in a platform agnostic manner. Developers do not need to be using a particular framework such as React or Angular, nor do they even need to be building an Ionic app! As long as developers have access to `@ionic/core`, they will have access to all of Ionic Gestures.

Building complex gestures can be time consuming. Other libraries that provide custom gestures are often times too heavy handed and end up capturing mouse or touch events and not letting them propagate. This can result in other elements no longer being scrollable or clickable.

## Basic Gestures

### Usage

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

In this example, our app listens for gestures on the `.rectangle` element. When a gesture movement is detected, the `onMove` function is called, and our app logs the current gesture information.

<docs-codepen user="ionic" slug="xxKBYdL"></docs-codepen>

## Double Click Gesture

### Usage

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

In the example above, we want to be able to detect double clicks on an element. By setting our `threshold` to `0`, we can ensure our gesture object can detect clicks. Additionally, we define a click threshold so that only 2 clicks that occur in quick succession count as a double click.

<docs-codepen user="ionic" slug="oNvVEwE"></docs-codepen>

## Long Press Gesture

### Usage

```javascript
const square = document.querySelector('.square');
const TIMEOUT = 500;
const gesture = createGesture({
  el: square,
  threshold: 0,
  onStart: () => { onStart(); },
  onMove: (detail) => { onMove(detail); },
  onEnd: () => { clearGestureTimeout(); }
});

gesture.enable();

let timeout;

const onStart = () => {
  clearGestureTimeout();
  
  timeout = setTimeout(() => {
    classList.toggle('scale');
    timeout = undefined;
  }, TIMEOUT);
}

const onMove = (detail) => {
  // Allow a little bit of movement
  if (detail.deltaX <= 10 && detail.deltaY <= 10) {
     return;
  }

  clearGestureTimeout();
}

const clearGestureTimeout = () => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }
}
```

This example demonstrates a long press gesture. When the user touches the screen or clicks their mouse, the `onStart` function will create a timeout. If the timeout is interrupted by the user removing their finger or releasing the mouse button, the timeout is cleared. If the user moves their finger or mouse by more than the allowed amount we also clear the timeout. Once the timeout has completed, we add a class to the `.square` element to give a visual indication that the long press has succeeded.

<docs-codepen user="ionic" slug="BaBbYZE"></docs-codepen>

## Gesture Animations

See our guide on implementing gesture animations: [Gesture Animations with Ionic Animations](/docs/utilities/animations#gesture-animations)

## Browser Support

| Browser/Platform     | Supported Versions |
| -------------------- | ------------------ |
| **Chrome**           | 22+                |
| **Safari**           | 9+                 |   
| **Firefox**          | 32+                |     
| **IE/Edge**          | 11+                |    
| **Opera**            | 30+                |
| **iOS**              | 9+                 |
| **Android**          | 5+                 |      

## Types

| Name              | Value                                        |
| ------------------| -------------------------------------------- |
| `GestureCallback` | `(detail: GestureDetail) => boolean \| void` |

## Interfaces

### GestureConfig

| Property        | Type                                       | Default     | Description |
| --------------- | ------------------------------------------ | ----------- | ----------- |
| el              | `Node`                                     | `undefined` | The element to listen on for gestures. |
| disableScroll   | `boolean \| undefined`                     | `false`     | If true, scrolling will be disabled on `el` while the gesture is enabled. |
| direction       | `'x' \| 'y' \| undefined`                  | `'x'`       | Limit gesture detection to movements along a certain axis. |
| gestureName     | `string`                                   | `undefined` | The name of the gesture to create. |
| gesturePriority | `number \| undefined`                      | `0`         | Gestures with higher priorities will override gestures with lower priorities. Useful for ensuring the multiple gestures do not collide with one another. |
| passive         | `boolean \| undefined`                     | `true`      | If true, this will indicate that the gesture will never call `preventDefault()`. This can be used to improve scrolling performance. See [Passive Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners) for more information. |
| maxAngle        | `number \| undefined`                      | `40`        | The maximum angle to allow when detecting a gesture. |
| threshold       | `number \| undefined`                      | `10`        | Defines how much a pointer must move before the gesture kicks in. |
| canStart        | `GestureCallback \| undefined`             | `undefined` | A callback that returns true if a gesture is allowed to start. |
| onWillStart     | `(detail: GestureDetail) => Promise<void>` | `undefined` | A callback that is fires when a gesture is about to start. This is fired after `canStart` but before `onStart`. |
| onStart         | `GestureCallback \| undefined`             | `undefined` | A callback that fires when a gesture has started. |
| onMove          | `GestureCallback \| undefined`             | `undefined` | A callback that fires when a gesture movement was detected. |
| onEnd           | `GestureCallback \| undefined`             | `undefined` | A callback that fires when a gesture has ended. This is usually when a pointer has been released. |
| notCaptured     | `GestureCallback \| undefined`             | `undefined` | A callback that fires when a gesture has not been captured. This usually happens when there is a conflicting gesture with a higher priority. |

### GestureDetail

| Property       | Type               | Description |
| -------------- | ------------------ | ----------- |
| type           | `string`           | The type of gesture that was detected. |
| startX         | `number`           | The starting x coordinate of the gesture. |
| startY         | `number`           | The starting y coordinate of the gesture. |
| startTimeStamp | `number`           | The timestamp at which the gesture was started. |
| currentX       | `number`           | The current x coordinate of the gesture. |
| currentY       | `number`           | The current y coordinate of the gesture. |
| velocityX      | `number`           | How fast the gesture is currently moving on the x axis. |
| velocityY      | `number`           | How fast the gesture is currently moving on the y axis. |
| deltaX         | `number`           | How much the gesture has moved on the x axis since it started. |
| deltaY         | `number`           | How much the gesture has moved on the y axis since it started. |
| timeStamp      | `number`           | The current timestamp of the gesture. |
| event          | `UIEvent`          | The native event dispatched by the browser. See [UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) for more information. |
| data           | `any \| undefined` | Any data specified by the user. This can be set and read in any of the callbacks. |

## Methods 

#### `enable(enable: boolean = true) => void`

Enable or disable the gesture.

#### `destroy() => void`

Destroy the gesture instance and stop listening on the target element.
