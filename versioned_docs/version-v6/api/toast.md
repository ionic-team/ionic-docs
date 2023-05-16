---
title: 'ion-toast'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/toast/props.md';
import Events from '@ionic-internal/component-api/v6/toast/events.md';
import Methods from '@ionic-internal/component-api/v6/toast/methods.md';
import Parts from '@ionic-internal/component-api/v6/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/toast/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/toast/slots.md';

<head>
  <title>ion-toast Component: A Dismissible App Notification Alert</title>
  <meta
    name="description"
    content="ion-toast component is an app notification displaying system messages or feedback. Toast alerts appear above content and are dismissed to resume interaction."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.

## Presenting

### Positioning

Toasts can be positioned at the top, bottom or middle of the viewport. The position can be passed upon creation. The possible values are `top`, `bottom` and `middle`. If the position is not specified, the toast will be displayed at the bottom of the viewport.

### Controller

import ControllerExample from '@site/static/usage/v6/toast/presenting/controller/index.md';

<ControllerExample />

### Inline

When using Ionic with React or Vue, `ion-toast` can also be placed directly in the template through use of the `isOpen` property. Note that `isOpen` must be set to `false` manually when the toast is dismissed; it will not be updated automatically.

<Tabs defaultValue="react" values={[{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <IonButton onClick={() => setShowToast(true)}>Show Toast</IonButton>
      <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message="Hello World!" duration={1500} />
    </>
  );
}
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-button @click="setOpen(true)">Show Toast</ion-button>
  <ion-toast :is-open="isOpenRef" @didDismiss="setOpen(false)" message="Hello World!" :duration="1500"></ion-toast>
</template>

<script lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonToast },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);

      return { isOpenRef, setOpen };
    },
  });
</script>
```

</TabItem>
</Tabs>

## Dismissing

Toasts are intended to be subtle notifications and should not interrupt the user. As a result, user interaction should not be required to dismiss the toast.

The toast can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the toast options. If a button with a role of `"cancel"` is added, then that button will dismiss the toast. To dismiss the toast after creation, call the `dismiss()` method on the instance.

Pressing the hardware back button does not dismiss toasts since they are not supposed to interrupt the user.

The following example demonstrates how to use the `buttons` property to add a button that automatically dismisses the toast when clicked, as well as how to collect the `role` of the dismiss event.

import ButtonsPlayground from '@site/static/usage/v6/toast/buttons/index.md';

<ButtonsPlayground />

## Layout

Button containers within the toast can be displayed either on the same line as the message or stacked on separate lines using the `layout` property. The stacked layout should be used with buttons that have long text values. Additionally, buttons in a stacked toast layout can use a `side` value of either `start` or `end`, but not both.

import StackedPlayground from '@site/static/usage/v6/toast/layout/index.md';

<StackedPlayground />

## Icons

An icon can be added next to the content inside of the toast. In general, icons in toasts should be used to add additional style or context, not to grab the user's attention or elevate the priority of the toast. If you wish to convey a higher priority message to the user or guarantee a response, we recommend using an [Alert](alert.md) instead.

import IconPlayground from '@site/static/usage/v6/toast/icon/index.md';

<IconPlayground />

## Theming

import ThemingPlayground from '@site/static/usage/v6/toast/theming/index.md';

<ThemingPlayground />

## Interfaces

### ToastButton

```typescript
interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
}
```

### ToastOptions

```typescript
interface ToastOptions {
  header?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  duration?: number;
  buttons?: (ToastButton | string)[];
  position?: 'top' | 'bottom' | 'middle';
  translucent?: boolean;
  animated?: boolean;
  icon?: string;
  htmlAttributes?: { [key: string]: any };

  color?: Color;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

## Accessibility

### Focus Management

Toasts are intended to be subtle notifications and are not intended to interrupt the user. User interaction should not be required to dismiss the toast. As a result, focus is not automatically moved to a toast when one is presented.

### Screen Readers

`ion-toast` has `aria-live="polite"` and `aria-atomic="true"` set by default.

`aria-live` causes screen readers to announce the content of the toast when it is updated. However, since the attribute is set to `'polite'`, screen readers generally do not interrupt the current task. Developers can customize this behavior by using the `htmlAttributes` property to set `aria-live` to `'assertive'`. This will cause screen readers to immediately notify the user when a toast is updated, potentially interrupting any previous updates.

`aria-atomic="true"` is set to ensure that the entire toast is announced as a single unit. This is useful when dynamically updating the content of the toast as it prevents screen readers from announcing only the content that has changed.

### Tips

While this is not a complete list, here are some guidelines to follow when using toasts.

- Do not require user interaction to dismiss toasts. For example, having a "Dismiss" button in the toast is fine, but the toast should also automatically dismiss on its own after a timeout period. If you need user interaction for a notification, consider using [ion-alert](./alert) instead.

- Avoid opening multiple toasts in quick succession. If `aria-live` is set to `'assertive'`, screen readers may interrupt the reading of the current task to announce the new toast, causing the context of the previous toast to be lost.

- For toasts with long messages, consider adjusting the `duration` property to allow users enough time to read the content of the toast.

## Properties

<Props />

## Events

<Events />

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
