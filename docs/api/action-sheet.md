---
title: "ion-action-sheet"
---
import Props from '@ionic-internal/component-api/v7/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v7/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v7/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v7/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/action-sheet/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/action-sheet/slots.md';

<head>
  <title>ion-action-sheet | Action Sheet Dialog for iOS and Android Apps</title>
  <meta name="description" content="Action Sheets are dialogs that display a set of options above app content and must be manually dismissed. Read to learn about use on iOS and Android devices." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in `ios` mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.

## Inline Action Sheets (Recommended)

`ion-action-sheet` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the Action Sheet.

import Trigger from '@site/static/usage/v7/action-sheet/inline/trigger/index.md';

<Trigger />

### Using `isOpen`

The `isOpen` property on `ion-action-sheet` allows developers to control the presentation state of the Action Sheet from their application state. This means when `isOpen` is set to `true` the Action Sheet will be presented, and when `isOpen` is set to `false` the Action Sheet will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the Action Sheet is dismissed. Developers should listen for the `ionActionSheetDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-action-sheet` from being tightly coupled with the state of the application. With a one way data binding, the Action Sheet only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the Action Sheet needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import IsOpen from '@site/static/usage/v7/action-sheet/inline/isOpen/index.md';

<IsOpen />

## Controller Action Sheets

The `actionSheetController` can be used in situations where more control is needed over when the Action Sheet is presented and dismissed.

import Controller from '@site/static/usage/v7/action-sheet/controller/index.md';

<Controller />

## Buttons

A button's `role` property can either be `destructive` or `cancel`. Buttons without a role property will have the default look for the platform. Buttons with the `cancel` role will always load as the bottom button, no matter where they are in the array. All other buttons will be displayed in the order they have been added to the `buttons` array. Note: We recommend that `destructive` buttons are always the first button in the array, making them the top button. Additionally, if the action sheet is dismissed by tapping the backdrop, then it will fire the handler from the button with the cancel role.

A button can also be passed data via the `data` property on `ActionSheetButton`. This will populate the `data` field in the return value of the `onDidDismiss` method.

## Collecting Role Information on Dismiss

When the `didDismiss` event is fired, the `data` and `role` fields of the event detail can be used to gather information about how the Action Sheet was dismissed.

import RoleInfo from '@site/static/usage/v7/action-sheet/role-info-on-dismiss/index.md';

<RoleInfo />

## Theming

Action Sheet uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

### Styling

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces.

```css
/* DOES NOT WORK - not specific enough */
.action-sheet-group {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

import Styling from '@site/static/usage/v7/action-sheet/theming/styling/index.md';

<Styling />

### CSS Custom Properties

Any of the defined [CSS Custom Properties](#css-custom-properties-1) can be used to style the Action Sheet without needing to target individual elements.

import CssCustomProperties from '@site/static/usage/v7/action-sheet/theming/css-properties/index.md';

<CssCustomProperties />

## Accessibility

Action Sheets are given a `role` of [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role). In order to align with the ARIA spec, either the `aria-label` or `aria-labelledby` attribute must be set.

It is strongly recommended that every Action Sheet have the `header` property defined, as Ionic will automatically set `aria-labelledby` to point to the header element. However, if you choose not to include a `header`, an alternative is to use the `htmlAttributes` property to provide a descriptive `aria-label` or set a custom `aria-labelledby` value.

## Interfaces

### ActionSheetButton

```typescript
interface ActionSheetButton<T = any> {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
  data?: T;
}
```

### ActionSheetOptions

```typescript
interface ActionSheetOptions {
  header?: string;
  subHeader?: string;
  cssClass?: string | string[];
  buttons: (ActionSheetButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

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