---
title: 'ion-modal'
---

import Props from '@ionic-internal/component-api/v7/modal/props.md';
import Events from '@ionic-internal/component-api/v7/modal/events.md';
import Methods from '@ionic-internal/component-api/v7/modal/methods.md';
import Parts from '@ionic-internal/component-api/v7/modal/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/modal/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/modal/slots.md';

<head>
  <title>ion-modal: Ionic Mobile App Custom Modal API Component</title>
  <meta
    name="description"
    content="ion-modal is a dialog that appears on top of mobile app content, and must be dismissed before interaction resumes. Learn more about custom modal components."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.

## Inline Modals (Recommended)

`ion-modal` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the modal.

When using `ion-modal` with Angular, React, or Vue, the component you pass in will be destroyed when the modal is dismissed. As this functionality is provided by the JavaScript framework, using `ion-modal` without a JavaScript framework will not destroy the component you passed in. If this is a needed functionality, we recommend using the `modalController` instead.

import InlineModalTriggerExample from '@site/static/usage/v7/modal/inline/basic/index.md';

<InlineModalTriggerExample />

### Using `isOpen`

The `isOpen` property on `ion-modal` allows developers to control the presentation state of the modal from their application state. This means when `isOpen` is set to `true` the modal will be presented and when `isOpen` is set to `false` the modal will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the modal is dismissed. Developers should listen for the `ionModalDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-modal` from being tightly coupled with the state of the application. With a one way data binding, the modal only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the modal needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import InlineModalIsOpenExample from '@site/static/usage/v7/modal/inline/is-open/index.md';

<InlineModalIsOpenExample />

## Controller Modals

With the `modalController` developers can present an `ion-modal` programmatically. Developers will have complete control over when a modal is presented and dismissed.

import ControllerExample from '@site/static/usage/v7/modal/controller/index.md';

<ControllerExample />

## Preventing a Modal from Dismissing

When entering data into a modal, it is often desirable to have a way of preventing accidental data loss. The `canDismiss` property on `ion-modal` gives developers control over when a modal is allowed to dismiss.

There are two different ways of using the `canDismiss` property: setting a boolean value or setting a callback function.

:::note
Note: When using a sheet modal, `canDismiss` will not be checked on swipe if there is no `0` breakpoint set. However, it will still be checked when pressing `Esc` or the hardware back button.
:::

### Setting a boolean value

Developers can set `canDismiss` to a boolean value. If `canDismiss` is `true`, then the modal will close when users attempt to dismiss the modal. If `canDismiss` is `false`, then the modal will not close when users attempt to dismiss the modal.

Setting a boolean value should be used when you need to require a particular action to be taken prior to a modal being dismissed. For example, if developers want to require that a "Terms of Use" checkbox is checked prior to closing the modal, they could set `canDismiss` to `false` initially and update it to `true` when the checkbox is checked.

import CanDismissBooleanExample from '@site/static/usage/v7/modal/can-dismiss/boolean/index.md';

<CanDismissBooleanExample />

### Setting a callback function

Developers can set `canDismiss` to be a function. This function must return a `Promise` that resolves to either `true` or `false`. If the promise resolves to `true`, then the modal will dismiss. If the promise resolves to `false`, then the modal will not dismiss.

Setting a callback function should be used when you have complex dismissing criteria such as showing a confirmation dialog prior to dismissing the modal. The option that users select in this dialog can then be used to determine whether or not the modal should proceed with dismissing.

Note that setting a callback function will cause the swipe gesture to be interrupted when using a card or sheet modal. This is because Ionic does not know what your callback function will resolve to ahead of time.

import CanDismissFunctionExample from '@site/static/usage/v7/modal/can-dismiss/function/index.md';

<CanDismissFunctionExample />

### Prevent swipe to close

Developers may want to prevent users from swiping to close a card or sheet modal. This can be done by setting a callback function for `canDismiss` and checking if the `role` is not `gesture`.

import CanDismissPreventSwipeToCloseExample from '@site/static/usage/v7/modal/can-dismiss/prevent-swipe-to-close/index.md';

<CanDismissPreventSwipeToCloseExample />

### Modifying dismiss behavior in child components

In certain scenarios, developers may need to customize the behavior of the `canDismiss` callback based on the state of a presented modal. This customization can be particularly useful, for instance, when developers want to prevent the modal from being dismissed if a form within it is invalid.

To achieve this customization, child components can employ various techniques such as function callbacks, event emission, or other reactivity mechanisms to communicate with the parent component and update the conditions governing the `canDismiss` callback.

Here's a simplified example illustrating how a child component can interact with a parent component to modify the `canDismiss` callback:

import CanDismissChildStateExample from '@site/static/usage/v7/modal/can-dismiss/child-state/index.md';

<CanDismissChildStateExample />

## Types of modals

### Card Modal

Developers can create a card modal effect where the modal appears as a card stacked on top of your app's main content. To create a card modal, developers need to set the `presentingElement` property on `ion-modal`.

The `presentingElement` property accepts a reference to the element that should display under your modal. This is typically a reference to `ion-router-outlet`.

The `canDismiss` property can be used to control whether or not the card modal can be swiped to close.

:::note
The card display style is only available on iOS.
:::

import CardExample from '@site/static/usage/v7/modal/card/basic/index.md';

<CardExample />

### Sheet Modal

:::info
[Content](./content) must be used inside of the sheet modal otherwise your modal content will not be scrollable.
:::

Developers can create a sheet modal effect similar to the drawer components available in maps applications. To create a sheet modal, developers need to set the `breakpoints` and `initialBreakpoint` properties on `ion-modal`.

The `breakpoints` property accepts an array which states each breakpoint that the sheet can snap to when swiped. A `breakpoints` property of `[0, 0.5, 1]` would indicate that the sheet can be swiped to show 0% of the modal, 50% of the modal, and 100% of the modal. When the modal is swiped to 0%, the modal will be automatically dismissed. Note that the modal cannot be dismissed on swipe if no `0` breakpoint is included, but it can still be dismissed by pressing `Esc` or the hardware back button.

The `initialBreakpoint` property is required so that the sheet modal knows which breakpoint to start at when presenting. The `initialBreakpoint` value must also exist in the `breakpoints` array. Given a `breakpoints` value of `[0, 0.5, 1]`, an `initialBreakpoint` value of `0.5` would be valid as `0.5` is in the `breakpoints` array. An `initialBreakpoint` value of `0.25` would not be valid as `0.25` does not exist in the `breakpoints` array.

The `backdropBreakpoint` property can be used to customize the point at which the `ion-backdrop` will begin to fade in. This is useful when creating interfaces that have content underneath the sheet that should remain interactive. A common use case is a sheet modal that overlays a map where the map is interactive until the sheet is fully expanded.

import SheetExample from '@site/static/usage/v7/modal/sheet/basic/index.md';

<SheetExample />

#### Interacting with background content

import SheetBackgroundContentExample from '@site/static/usage/v7/modal/sheet/background-content/index.md';

<SheetBackgroundContentExample />

#### Auto Height Sheet

import SheetAutoHeightExample from '@site/static/usage/v7/modal/sheet/auto-height/index.md';

<SheetAutoHeightExample />

#### Handle Behavior

Sheet modals can optionally render a handle indicator used for dragging the sheet between breakpoints. The `handleBehavior` property can be used to configure the behavior of when the handle is activated by the user.

import SheetHandleBehaviorExample from '@site/static/usage/v7/modal/sheet/handle-behavior/index.md';

<SheetHandleBehaviorExample />

## Styling

Modals are presented at the root of your application so they overlay your entire app. This behavior applies to both inline modals and modals presented from a controller. As a result, custom modal styles can not be scoped to a particular component as they will not apply to the modal. Instead, styles must be applied globally. For most developers, placing the custom styles in `global.css` is sufficient.

:::note
If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.
:::

:::note
`ion-modal` works under the assumption that stacked modals are the same size. As a result, each subsequent modal will have no box shadow and a backdrop opacity of `0`. This is to avoid the effect of shadows and backdrops getting darker with each added modal. This can be changed by setting the `--box-shadow` and `--backdrop-opacity` CSS variables:
:::

```
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

import ThemeExample from '@site/static/usage/v7/modal/styling/theming/index.md';

<ThemeExample />

### Animations

The enter and leave animations can be customized by using our animation builder and assigning animations to `enterAnimation` and `leaveAnimation`.

import AnimationsExample from '@site/static/usage/v7/modal/styling/animations/index.md';

<AnimationsExample />

## Custom Dialogs

While `ion-modal` is most often used for full-page views, cards, or sheets, it is also possible to use it for custom dialogs. This is useful if developers need an interface that is more complex than what components such as [ion-alert](./alert) or [ion-loading](./loading) provide.

import CustomDialogs from '@site/static/usage/v7/modal/custom-dialogs/index.md';

<CustomDialogs />

A few things to keep in mind when creating custom dialogs:

- `ion-content` is intended to be used in full-page modals, cards, and sheets. If your custom dialog has a dynamic or unknown size, `ion-content` should not be used.
- Creating custom dialogs provides a way of ejecting from the default modal experience. As a result, custom dialogs should not be used with card or sheet modals.

## Interfaces

### ModalOptions

Below you will find all of the options available to you when using the `modalController`. These options should be supplied when calling `modalController.create()`.

```typescript
interface ModalOptions {
  component: any;
  componentProps?: { [key: string]: any };
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  canDismiss?: boolean | ((data?: any, role?: string) => Promise<boolean>);

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  breakpoints?: number[];
  initialBreakpoint?: number;
  backdropBreakpoint?: number;
  handle?: boolean;
}
```

### ModalCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ModalCustomEvent extends CustomEvent {
  target: HTMLIonModalElement;
}
```

## Accessibility

### Keyboard Navigation

| Key   | Function            |
| ----- | ------------------- |
| `Esc` | Dismisses the modal |

### Labels

Modals have a [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) role. As a result, developers **must** properly label their modals. If the modal is using `ion-title`, the text inside can be used to label the modal itself by setting [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) on `ion-modal`. If the modal contains additional descriptive text, this text can be associated with the modal by using [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

### Screen Readers

Modals have the `aria-modal` attribute applied. This attribute can cause assistive technologies to limit navigation to the modal element's contents. As a result, using gestures that move to the next or previous items may not focus elements outside of the modal. This applies even when the backdrop is disabled in sheet modals using the `backdropBreakpoint` property.

Assistive technologies will not limit navigation to the modal element's contents if developers manually move focus. However, manually moving focus outside of a modal is not supported in Ionic for modals that have focus trapping enabled.

See https://w3c.github.io/aria/#aria-modal for more information.

### Focus Trapping

When a modal is presented, focus will be trapped inside of the presented modal. Users can focus other interactive elements inside the modal but will never be able to focus interactive elements outside the modal while the modal is presented. For applications that present multiple stacked modals, focus will be trapped on the modal that was presented last.

Sheet modals that have had their backdrop disabled by the `backdropBreakpoint` property are not subject to focus trapping.

### Sheet Modals

Sheet modals allow users to interact with content behind the modal when the `backdropBreakpoint` property is used. The backdrop will be disabled up to and including the specified `backdropBreakpoint` and will be enabled after it.

When the backdrop is disabled, users will be able to interact with elements outside the sheet modal using a pointer or keyboard. Assistive technologies may not focus outside the sheet modal by default due to the usage of `aria-modal`. We recommend avoiding features such as autofocus here as it can cause assistive technologies to jump between two interactive contexts without warning the user.

## Performance

### Mounting Inner Contents

The content of an inline `ion-modal` is unmounted when closed. If this content is expensive to render, developers can use the `keepContentsMounted` property to mount the content as soon as the modal is mounted. This can help optimize the responsiveness of your application as the inner contents will have already been mounted when the modal opens.

import Mount from '@site/static/usage/v7/modal/performance/mount/index.md';

<Mount />

Developers should keep the following in mind when using `keepContentsMounted`:

- This feature should be used as a last resort in order to deal with existing performance problems. Try to identify and resolve performance bottlenecks before using this feature. Additionally, do not use this to anticipate performance problems.

- This feature is only needed when using a JavaScript Framework. Developers not using a framework can pass the contents to be rendered into the modal, and the contents will be rendered automatically.

- This feature only works with inline modals. Modals created with the `modalController` are not created ahead of time, so the inner contents are not created either.

- Any JavaScript Framework lifecycle hooks on the inner component will run as soon as the modal is mounted, not when the modal is presented.

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
