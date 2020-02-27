---
previousText: 'Running on Android'
previousUrl: '/docs/building/android'
nextText: 'Testing'
nextUrl: '/docs/building/testing'
---

# Hardware Back Button

## Overview

By default, when a user presses the Android hardware back button, the current view will be popped off the navigation stack. If there are no views to pop, nothing will happen. This guide will show you how to customize this behavior.

> The hardware back button refers to the physical back button found on most Android devices and should not be confused with either the browser back button or `ion-back-button`. The information in this guide only applies to Android devices and is not relevant for iOS devices.

## Intro

When running in a Capacitor or Cordova application, Ionic Framework will emit an `ionBackButton` event whenever a user presses the hardware back button. Please note that this event will not be emitted when running an app in a web browser.

When listening for the `ionBackButton` event, you can register a handler to be fired. This handler can perform actions such as quitting the app or opening a confirmation dialog. Each handler must be assigned a priority. By default, only one handler is fired per hardware back button press. The priority value is used to determine which callback should be called. This is useful because if you have a modal open, you likely would not want the modal to close _and_ the app to navigate backwards when pressing the hardware back button. Only running one handler at a time allows the modal to close but still requires another press of the hardware back button to navigate backwards.

There are situations where you might want to have multiple handlers fired. Each handler callback passes in a function as a parameter that can be used to tell the framework to call the next handler.

## Basic Usage

<docs-tabs>
<docs-tab tab="javascript">

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});

```
</docs-tab>
<docs-tab tab="angular">

```typescript
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
  });
}

```
</docs-tab>
<docs-tab tab="react">

```typescript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});
```
</docs-tab>
</docs-tabs>

In this example, we are registering a handler to be called when the hardware back button is pressed. We have set the priority to be 10, and we have not indicated to the framework that we want the next handler to be called. As a result, any handlers with a priority less than 10 will not be called. A handler that has a priority greater than 10 will be called first.

In the event that there are handlers with the same priority value, the handler that was registered _last_ will be called. See [Handlers with the Same Priorities](#handlers-with-the-same-priorities) for more information.

## Calling Multiple Handlers

<docs-tabs>
<docs-tab tab="javascript">

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');
    
    processNextHandler();
  });
});

```
</docs-tab>
<docs-tab tab="angular">

```typescript
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('Handler was called!');
    
    processNextHandler();
  });
}

```
</docs-tab>
<docs-tab tab="react">

```typescript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');
    
    processNextHandler();
  });
});
```
</docs-tab>
</docs-tabs>

This example shows how to indicate to Ionic Framework that you want the next handler to be fired. All callbacks are provided with a `processNextHandler` function as a parameter. Calling this will cause the next handler, if any exists, to be fired.

## Handlers with the Same Priorities

Internally, Ionic Framework uses something similar to a priority queue to manage hardware back button handlers. The handler with the largest priority value will be called first. In the event that there are multiple handlers with the same priority value, the _last_ handler added to this queue will be the first handler to be called.

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler A was called!');
    
    processNextHandler();
  });
  
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler B was called!');
    
    processNextHandler();
  });
});
```

In the example above, both handlers A and B have a priority of 10. Since handler B was registered last, Ionic Framework will call handler B before it calls handler A.


## Exiting the App

In some scenarios, it may be desirable to quit the app when pressing the hardware back button. This can be achieved through the use of the `ionBackButton` event and methods that Capacitor/Cordova provide.

<docs-tabs>
<docs-tab tab="javascript">

```javascript
TODO
```
</docs-tab>
<docs-tab tab="angular">

```typescript
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

...

constructor(
  private platform: Platform,
  private routerOutlet: IonRouterOutlet
) {
  this.platform.backButton.subscribeWithPriority(0, () => {
    if (!this.routerOutlet.canGoBack()) {
      App.exitApp();
    }
  });
}

```
</docs-tab>
<docs-tab tab="react">

```typescript
TODO
```
</docs-tab>
</docs-tabs>

This examples shows the application exiting when the user presses the hardware back button and there is nothing left in the navigation stack. It is also possible to display an quit confirmation dialog before quitting the app.

## Internal Framework Handlers

This table lists all of the internal hardware back button event handlers that Ionic Framework users. The `Propagates` column notes whether or not that particular handler tells Ionic Framework to call the next back button handler.

| Handler    | Priority | Propagates | Description |
| ---------- | -------- | ------------------ | ----------- |
| Overlays   | 100      | No                 | Applies to overlay components `ion-action-sheet`, `ion-alert`, `ion-loading`, `ion-modal`, `ion-popover`, `ion-picker`, and `ion-toast`. |
| Menu       | 99       | No                 | Applies to `ion-menu`. |
| Navigation | 0        | Yes                | Applies to routing navigation (i.e. Angular Routing). |