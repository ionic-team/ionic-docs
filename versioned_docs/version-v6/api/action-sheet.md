---
title: 'ion-action-sheet'
---

import Props from '@ionic-internal/component-api/v6/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v6/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v6/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v6/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/action-sheet/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/action-sheet/slots.md';

<head>
  <title>ion-action-sheet | Action Sheet Dialog for iOS and Android Apps</title>
  <meta
    name="description"
    content="Action Sheets are dialogs that display a set of options above app content and must be manually dismissed. Read to learn about use on iOS and Android devices."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in `ios` mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.

import Basic from '@site/static/usage/v6/action-sheet/basic/index.md';

<Basic />

## Buttons

A button's `role` property can either be `destructive` or `cancel`. Buttons without a role property will have the default look for the platform. Buttons with the `cancel` role will always load as the bottom button, no matter where they are in the array. All other buttons will be displayed in the order they have been added to the `buttons` array. Note: We recommend that `destructive` buttons are always the first button in the array, making them the top button. Additionally, if the action sheet is dismissed by tapping the backdrop, then it will fire the handler from the button with the cancel role.

A button can also be passed data via the `data` property on `ActionSheetButton`. This will populate the `data` field in the return value of the `onDidDismiss` method.

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

import Styling from '@site/static/usage/v6/action-sheet/theming/styling/index.md';

<Styling />

### CSS Custom Properties

Any of the defined [CSS Custom Properties](#css-custom-properties-1) can be used to style the Action Sheet without needing to target individual elements.

import CssCustomProperties from '@site/static/usage/v6/action-sheet/theming/css-properties/index.md';

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
