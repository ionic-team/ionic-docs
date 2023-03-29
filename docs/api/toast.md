---
title: "ion-toast"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v7/toast/props.md';
import Events from '@ionic-internal/component-api/v7/toast/events.md';
import Methods from '@ionic-internal/component-api/v7/toast/methods.md';
import Parts from '@ionic-internal/component-api/v7/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toast/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/toast/slots.md';

<head>
  <title>ion-toast Component: A Dismissible App Notification Alert</title>
  <meta name="description" content="ion-toast component is an app notification displaying system messages or feedback. Toast alerts appear above content and are dismissed to resume interaction." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.

## Inline Toasts (Recommended)

`ion-toast` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the toast.

import InlineToastTriggerExample from '@site/static/usage/v7/toast/inline/basic/index.md';

<InlineToastTriggerExample />

### Using `isOpen​`

The `isOpen` property on `ion-toast` allows developers to control the presentation state of the toast from their application state. This means when `isOpen` is set to `true` the toast will be presented and when `isOpen` is set to `false` the toast will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the toast is dismissed. Developers should listen for the `ionToastDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-toast` from being tightly coupled with the state of the application. With a one way data binding, the toast only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the toast needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import InlineToastIsOpenExample from '@site/static/usage/v7/toast/inline/is-open/index.md';

<InlineToastIsOpenExample />

## Controller Toasts

import ControllerExample from '@site/static/usage/v7/toast/presenting/controller/index.md';

<ControllerExample />

## Dismissing

Toasts are intended to be subtle notifications and should not interrupt the user. As a result, user interaction should not be required to dismiss the toast.

The toast can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the toast options. If a button with a role of `"cancel"` is added, then that button will dismiss the toast. To dismiss the toast after creation, call the `dismiss()` method on the instance.

Pressing the hardware back button does not dismiss toasts since they are not supposed to interrupt the user.

The following example demonstrates how to use the `buttons` property to add a button that automatically dismisses the toast when clicked, as well as how to collect the `role` of the dismiss event.

import ButtonsPlayground from '@site/static/usage/v7/toast/buttons/index.md';

<ButtonsPlayground />

## Positioning

Toasts can be positioned at the top, bottom or middle of the viewport. The position can be passed upon creation. The possible values are `top`, `bottom` and `middle`. If the position is not specified, the toast will be displayed at the bottom of the viewport.

## Layout

Button containers within the toast can be displayed either on the same line as the message or stacked on separate lines using the `layout` property. The stacked layout should be used with buttons that have long text values. Additionally, buttons in a stacked toast layout can use a `side` value of either `start` or `end`, but not both.

import StackedPlayground from '@site/static/usage/v7/toast/layout/index.md';

<StackedPlayground />

## Icons

An icon can be added next to the content inside of the toast. In general, icons in toasts should be used to add additional style or context, not to grab the user's attention or elevate the priority of the toast. If you wish to convey a higher priority message to the user or guarantee a response, we recommend using an [Alert](alert.md) instead.

import IconPlayground from '@site/static/usage/v7/toast/icon/index.md';

<IconPlayground />

## Theming

import ThemingPlayground from '@site/static/usage/v7/toast/theming/index.md';

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
