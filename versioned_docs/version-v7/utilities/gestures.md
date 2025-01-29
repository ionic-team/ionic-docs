---
title: Gestures
---

import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Gestures | Ionic App Utility for Custom Gestures and Interactions</title>
  <meta
    name="description"
    content="Ionic Gestures is a utility that allows developers to build custom gestures and interactions for their app in a platform agnostic manner. Read to learn more."
  />
</head>

## Overview

Ionic Gestures is a utility that allows developers to build custom gestures and interactions for their application in a platform agnostic manner. Developers do not need to be using a particular framework such as React or Angular, nor do they even need to be building an Ionic app! As long as developers have access to v5.0 or greater of Ionic Framework, they will have access to all of Ionic Gestures.

Building complex gestures can be time consuming. Other libraries that provide custom gestures are often times too heavy handed and end up capturing mouse or touch events and not letting them propagate. This can result in other elements no longer being scrollable or clickable.

## Installation

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
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
  onMove: event => onMoveHandler(event)
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
  onMove: event => onMoveHandler(event)
});
```
</TabItem>
<TabItem value="angular">

Developers using Angular should install the latest version of `@ionic/angular`. Gestures can be created via the `GestureController` dependency injection.

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
    onMove: event => this.onMoveHandler(event)
  }, true);
  // The `true` above ensures that callbacks run inside NgZone.
}

```
</TabItem>
<TabItem value="angular-standalone">

Developers using Angular should install the latest version of `@ionic/angular`. Gestures can be created via the `GestureController` dependency injection.

By default, gesture callbacks do not run inside of NgZone. Developers can either set the `runInsideAngularZone` parameter to `true` when creating a gesture,
or they can wrap their callbacks in an `NgZone.run()` call.

```tsx
import { Gesture, GestureController } from '@ionic/angular/standalone';

...

constructor(private gestureCtrl: GestureController) {
  const gesture: Gesture = this.gestureCtrl.create({
    el: this.element.nativeElement,
    threshold: 15,
    gestureName: 'my-gesture',
    onMove: event => this.onMoveHandler(event)
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
  onMove: event => onMoveHandler(event)
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
  onMove: event => onMoveHandler(event)
});

```
</TabItem>
</Tabs>
````

## Basic Gestures

import Basic from '@site/static/usage/v7/gestures/basic/index.md';

In this example, our app listens for gestures on the `ion-content` element. When a gesture movement has started, the `onStart` function is called and a class is added to our `ion-card` to add a colored box shadow. When a gesture movement was detected, the `onMove` function is called and our app prints the current gesture information within the `ion-card`. Finally, when a gesture movement has ended, the `onEnd` function is called and the custom class is removed from our `ion-card`.

<Basic />

## Double Click Gesture

import DoubleClick from '@site/static/usage/v7/gestures/double-click/index.md';

In the example below, we want to be able to detect double clicks on an element. By setting our `threshold` to `0`, we can ensure our gesture object can detect clicks. Additionally, we define a click threshold so that only 2 clicks that occur in quick succession count as a double click.

<DoubleClick />

## Gesture Animations

See our guide on implementing gesture animations: [Gesture Animations with Ionic Animations](animations.md#gesture-animations)

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
