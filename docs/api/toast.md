---
title: "ion-toast"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/toast/props.md';
import Events from '@site/static/auto-generated/toast/events.md';
import Methods from '@site/static/auto-generated/toast/methods.md';
import Parts from '@site/static/auto-generated/toast/parts.md';
import CustomProps from '@site/static/auto-generated/toast/custom-props.md';
import Slots from '@site/static/auto-generated/toast/slots.md';

<head>
  <title>ion-toast Component: A Dismissible App Notification Alert</title>
  <meta name="description" content="ion-toast component is an app notification displaying system messages or feedback. Toast alerts appear above content and are dismissed to resume interaction." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.

## Positioning

Toasts can be positioned at the top, bottom or middle of the viewport. The position can be passed upon creation. The possible values are `top`, `bottom` and `middle`. If the position is not specified, the toast will be displayed at the bottom of the viewport.

## Dismissing

The toast can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the toast options. If a button with a role of `"cancel"` is added, then that button will dismiss the toast. To dismiss the toast after creation, call the `dismiss()` method on the instance.

## Icons

An icon can be added next to the content inside of the toast. In general, icons in toasts should be used to add additional style or context, not to grab the user's attention or elevate the priority of the toast. If you wish to convey a higher priority message to the user or guarantee a response, we recommend using an [Alert](alert.md) instead.

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

`aria-live` causes screen readers to announce the content of the toast when it is presented. However, since the attribute is set to `'polite'`, screen readers generally do not interrupt the current task. Developers can customize this behavior by using the `htmlAttributes` property to set `aria-live` to `'assertive'`. This will cause screen readers to immediately notify the user when a toast is presented, potentially interrupting any previous updates.

`aria-atomic="true"` is set to ensure that the entire toast is announced as a single unit. This is useful when dynamically updating the content of the toast as it prevents screen readers from announcing only the content that has changed. 

### Tips

While this is not a complete list, here are some guidelines to follow when using toasts.

* Do not require user interaction to dismiss toasts. For example, having a "Dismiss" button in the toast is fine, but the toast should also automatically dismiss on its own after a timeout period. If you need user interaction for a notification, consider using [ion-alert](./alert) instead.

* Avoid opening multiple toasts in quick succession. If `aria-live` is set to `'assertive'`, screen readers may interrupt the reading of the current task to announce the new toast, causing the context of the previous toast to be lost.

* For toasts with long messages, consider adjusting the `duration` property to allow users enough time to read the content of the toast.

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