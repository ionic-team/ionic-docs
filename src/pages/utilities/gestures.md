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

gesture.setDisabled(false);

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

gesture.setDisabled(false);

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

gesture.setDisabled(false);

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

## Types

## Browser Support

| Browser/Platform     | Supported Versions |
| -------------------- | ------------------ |
| **Chrome**           | 22+  |
| **Safari**           | 9+   |   
| **Firefox**          | 32+  |     
| **IE/Edge**          | 11+  |    
| **Opera**            | 30+  |
| **iOS**              | 9+   |
| **Android**          | 5.0+ |      