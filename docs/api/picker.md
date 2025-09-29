---
title: "ion-picker"
---
import Props from '@ionic-internal/component-api/v8/picker/props.md';
import Events from '@ionic-internal/component-api/v8/picker/events.md';
import Methods from '@ionic-internal/component-api/v8/picker/methods.md';
import Parts from '@ionic-internal/component-api/v8/picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/picker/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/picker/slots.md';

<head>
  <title>ion-picker: Display a list of options in columns</title>
  <meta name="description" content="A Picker displays one or more columns with options for users to choose from." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A Picker displays one or more columns with options for users to choose from.

import Basic from '@site/static/usage/v8/picker/basic/index.md';

<Basic />

## Prefix & Suffix Content

Use the `prefix` and `suffix` slots to add additional content to the picker.

import PrefixSuffix from '@site/static/usage/v8/picker/prefix-suffix/index.md';

<PrefixSuffix />

## Theming

### CSS Variables

The picker highlight and fade can be customized using CSS variables on `ion-picker`. Developers can customize the individual appearance of `ion-picker-column-options` by targeting them directly and using host level styling.

import CSSProps from '@site/static/usage/v8/picker/theming/css-properties/index.md';

<CSSProps />

## Picker in Modal

Pickers can be displayed inside of overlays, such as `ion-modal` to create a picker experience with confirmation or cancellation buttons.

import ModalExample from '@site/static/usage/v8/picker/modal/index.md';

<ModalExample />

## Accessibility

### Screen Readers

Picker supports navigation using a screen reader by implementing the [`slider` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role) on each [Picker Column](./picker-column). The following gestures can be used to navigate the Picker.

| Gesture | Function |
| - | - |
| Swipe Left | Move focus to the previous Picker Column. |
| Swipe Right | Move focus to the next Picker Column. |
| Swipe Up | Select the next option in the Picker Column. |
| Swipe Down | Select the previous option in the Picker Column. |
| Double Tap and Slide Up/Down | Adjust the selected option in the Picker Column. Can be used as an alternative to swiping up and down. |

:::caution
The Swipe Up and Swipe Down gestures rely on the correct key events being synthesized as noted on the [`slider` documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role). [Chromium-based browsers do not synthesize keyboard events correctly](https://issues.chromium.org/issues/40816094), but the "Double Tap and Slide Up/Down" gesture can be used as an alternative until this has been implemented in Chromium-based browsers.
:::

### Keyboard Interactions

Each [Picker Column](./picker-column) can be navigated using the keyboard when focused.

| Key                  | Description                          |
| -------------------- | ------------------------------------ |
| <kbd>ArrowUp</kbd>   | Scroll to the previous option.       |
| <kbd>ArrowDown</kbd> | Scroll to the next option.           |
| <kbd>PageUp</kbd>    | Scroll up by more than one option.   |
| <kbd>PageDown</kbd>  | Scroll down by more than one option. |
| <kbd>Home</kbd>      | Scroll to the first option.          |
| <kbd>End</kbd>       | Scroll to the last option.           |

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
