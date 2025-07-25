---
title: "ion-select"
---
import Props from '@ionic-internal/component-api/v8/select/props.md';
import Events from '@ionic-internal/component-api/v8/select/events.md';
import Methods from '@ionic-internal/component-api/v8/select/methods.md';
import Parts from '@ionic-internal/component-api/v8/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/select/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/select/slots.md';

<head>
  <title>ion-select: Select One or Multiple Value Boxes or Placeholders</title>
  <meta name="description" content="ion-select is represented by selected value(s), or a placeholder, and dropdown icon. When you tap select, a dialog box appears with an easy to select list." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Selects are form controls to select an option, or options, from a set of options. When a user taps the select, a dialog appears with all of the options in a large, easy to select list.

A select should be used with child `<ion-select-option>` elements. If the child option is not given a `value` attribute then its text will be used as the value.

If `value` is set on the `<ion-select>`, the selected option will be chosen based on that value.

## Labels

Labels should be used to describe the select. They can be used visually, and they will also be read out by screen readers when the user is focused on the select. This makes it easy for the user to understand the intent of the select. Select has several ways to assign a label:

Select has several options for supplying a label for the component:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels
- `aria-label`: used to provide a label for screen readers but adds no visible label

### Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control. While the `label` property is used here, `labelPlacement` can also be used with the `label` slot.

import LabelPlacement from '@site/static/usage/v8/select/label-placement/index.md';

<LabelPlacement />

### Label Slot

While plaintext labels should be passed in via the `label` property, if custom HTML is needed, it can be passed through the `label` slot instead.

import LabelSlot from '@site/static/usage/v8/select/label-slot/index.md';

<LabelSlot />

### No Visible Label

If no visible label is needed, developers should still supply an `aria-label` so the select is accessible to screen readers.

import NoVisibleLabel from '@site/static/usage/v8/select/no-visible-label/index.md';

<NoVisibleLabel />

## Single Selection

By default, the select allows the user to select only one option. The alert interface presents users with a radio button styled list of options. The select component's value receives the value of the selected option's value.

Keyboard interactions for single selection are described in the [Keyboard Interactions](#single-selection-1) section below.

import SingleSelectionExample from '@site/static/usage/v8/select/basic/single-selection/index.md';

<SingleSelectionExample />

## Multiple Selection

By adding the `multiple` attribute to select, users are able to select multiple options. When multiple options can be selected, the alert, popover, or modal overlay presents users with a checkbox styled list of options. The select component's value receives an array of all of the selected option values.

:::note

The `action-sheet` interface is not supported with multiple selection.

:::

Keyboard interactions for multiple selection are described in the [Keyboard Interactions](#multiple-selection-1) section below.

import MultipleSelectionExample from '@site/static/usage/v8/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## Interfaces

By default, select uses [ion-alert](alert.md) to open up the overlay of options in an alert. The interface can be changed to use [ion-action-sheet](action-sheet.md), [ion-popover](popover.md), or [ion-modal](modal.md) by passing `action-sheet`, `popover`, or `modal`, respectively, to the `interface` property. Read on to the other sections for the limitations of the different interfaces.

### Alert

import AlertExample from '@site/static/usage/v8/select/basic/single-selection/index.md';

<AlertExample />


### Action Sheet

import ActionSheetExample from '@site/static/usage/v8/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### Popover

import PopoverExample from '@site/static/usage/v8/select/interfaces/popover/index.md';

<PopoverExample />

### Modal

import ModalExample from '@site/static/usage/v8/select/interfaces/modal/index.md';

<ModalExample />

## Responding to Interaction

The main ways of handling user interaction with the select are the `ionChange`, `ionDismiss`, and `ionCancel` events. See [Events](#events) for more details on these and other events that select fires.

import RespondingToInteractionExample from '@site/static/usage/v8/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## Object Value References

When using objects for select values, it is possible for the identities of these objects to change if they are coming from a server or database, while the selected value's identity remains the same. For example, this can occur when an existing record with the desired object value is loaded into the select, but the newly retrieved select options now have different identities. This will result in the select appearing to have no value at all, even though the original selection in still intact.

By default, the select uses strict equality (`===`) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.

### Using compareWith

import UsingCompareWithExample from '@site/static/usage/v8/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### Object Values and Multiple Selection

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/v8/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line.

import JustifyExample from '@site/static/usage/v8/select/justify/index.md';

<JustifyExample />

## Filled Selects

Material Design offers filled styles for a select. The `fill` property on the select can be set to either `"solid"` or `"outline"`.

Filled selects can be used on iOS by setting the select's `mode` to `md`.

:::warning
Selects that use `fill` should not be used in an `ion-item` due to styling conflicts between the components.
:::

import FillExample from '@site/static/usage/v8/select/fill/index.md';

<FillExample />

## Select Buttons

The alert supports two buttons: `Cancel` and `OK`. Each button's text can be customized using the `cancelText` and `okText` properties.

The `action-sheet` and `popover` interfaces do not have an `OK` button, clicking on any of the options will automatically close the overlay and select that value. The `popover` interface does not have a `Cancel` button, clicking on the backdrop will close the overlay.

The `modal` interface has a single `Close` button in the header. This button is only responsible for dismissing the modal. Any selections made will persist
after clicking this button or if the modal is dismissed using an alternative method.

import ButtonTextExample from '@site/static/usage/v8/select/customization/button-text/index.md';

<ButtonTextExample />

## Interface Options

Since select uses the alert, action sheet, popover, and modal interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more.

See the [ion-alert docs](alert.md), [ion-action-sheet docs](action-sheet.md), [ion-popover docs](popover.md), and [ion-modal docs](modal.md)
for the properties that each interface accepts.

Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.

import InterfaceOptionsExample from '@site/static/usage/v8/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## Start and End Slots

The `start` and `end` slots can be used to place icons, buttons, or prefix/suffix text on either side of the select. If the slot content is clicked, the select will not open.

:::note
In most cases, [Icon](./icon.md) components placed in these slots should have `aria-hidden="true"`. See the [Icon accessibility docs](https://ionicframework.com/docs/api/icon#accessibility) for more information.

If slot content is meant to be interacted with, it should be wrapped in an interactive element such as a [Button](./button.md). This ensures that the content can be tabbed to.
:::

import StartEndSlots from '@site/static/usage/v8/select/start-end-slots/index.md';

<StartEndSlots />

## Customization

There are two units that make up the Select component and each need to be styled separately. The `ion-select` element is represented on the view by the selected value(s), or placeholder if there is none, and dropdown icon. The interface, which is defined in the [Interfaces](#interfaces) section above, is the dialog that opens when clicking on the `ion-select`. The interface contains all of the options defined by adding `ion-select-option` elements. The following sections will go over the differences between styling these.

### Styling Select Element

As mentioned, the `ion-select` element consists only of the value(s), or placeholder, and icon that is displayed on the view. To customize this, style using a combination of CSS and any of the [CSS custom properties](#css-custom-properties).

Alternatively, depending on the [browser support](https://caniuse.com/#feat=mdn-css_selectors_part) needed, CSS shadow parts can be used to style the select. Notice that by using `::part`, any CSS property on the element can be targeted.

import StylingSelectExample from '@site/static/usage/v8/select/customization/styling-select/index.md';

<StylingSelectExample />

### Styling Select Interface

Customizing the interface dialog should be done by following the styling sections (CSS shadow parts, CSS custom properties, and slots) in
that interface's documentation:

- [Alert](alert.md#css-shadow-parts)
- [Action Sheet](action-sheet.md#css-shadow-parts)
- [Popover](popover.md#css-shadow-parts)
- [Modal](modal.md#css-shadow-parts)

However, the Select Option does set a class for easier styling and allows for the ability to pass a class to the overlay option, see the [Select Options documentation](select-option.md) for usage examples of customizing options.

### Custom Toggle Icons

The icon that displays next to the select text can be set to any [Ionicon](https://ionic.io/ionicons) using the `toggleIcon` and/or `expandedIcon` properties.

import CustomToggleIconsExample from '@site/static/usage/v8/select/customization/custom-toggle-icons/index.md';

<CustomToggleIconsExample />

### Icon Flip Behavior

By default, when the select is open, the toggle icon will automatically rotate on `md` mode and remain static on `ios` mode. This behavior can be customized using CSS.

The below example also uses a [custom `toggleIcon`](#custom-toggle-icons) to better demonstrate the flip behavior on `ios`, since the default icon is vertically symmetrical.

import IconFlipBehaviorExample from '@site/static/usage/v8/select/customization/icon-flip-behavior/index.md';

<IconFlipBehaviorExample />

## Typeahead Component

Typeahead or autocomplete functionality can be built using existing Ionic components. We recommend using an `ion-modal` to make the best use of the available screen space.

import TypeaheadExample from '@site/static/usage/v8/select/typeahead/index.md';

<TypeaheadExample />

## Helper & Error Text

Helper and error text can be used inside of a select with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-select`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v8/select/helper-error/index.md';

<HelperError />

## Interfaces

### SelectChangeEventDetail

```typescript
interface SelectChangeEventDetail<T = any> {
  value: T;
}
```

### SelectCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLIonSelectElement;
}
```

## Accessibility

### Keyboard Interactions

Ionic's keyboard interactions follow the implementation patterns of the web instead of the native iOS select for a consistent experience across all platforms.

These keyboard interactions apply to all `ion-select` elements when the following conditions are met:
- The select is closed.
- The select is focused.
- The select is not disabled.

| Key                | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| <kbd>Enter</kbd>   | Opens the overlay and focuses on the first selected option. If there is no selected option, then it focuses on the first option. |
| <kbd>Space</kbd>   | Opens the overlay and focuses on the first selected option. If there is no selected option, then it focuses on the first option. |

#### Single Selection

Single selection keyboard interaction follows the [ARIA implementation patterns of a radio](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

These keyboard interactions apply to `ion-action-sheet`, `ion-alert`, `ion-popover`, and `ion-modal` elements when the overlay is presented and focused.

| Key                   | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| <kbd>ArrowDown</kbd>  | Focuses and selects the next option in the list. If there is no next option, selection will cycle to the first option. |
| <kbd>ArrowLeft</kbd>  | Focuses and selects the previous option in the list. If there is no previous option, selection will cycle to the last option. |
| <kbd>ArrowRight</kbd> | Focuses and selects the next option in the list. If there is no next option, selection will cycle to the first option. |
| <kbd>ArrowUp</kbd>    | Focuses and selects the previous option in the list. If there is no previous option, selection will cycle to the last option. |
| <kbd>Enter</kbd>      | If an option is focused, it will select the option. Overlays **without** an 'OK' button will commit the value immediately, dismiss the overlay and return focus to the `ion-select` element.<br /><br/>If the 'OK' button is focused, it will save the user's selection, dismiss the overlay and return focus to the `ion-select` element. |
| <kbd>Escape</kbd>     | Closes the overlay without changing the submitted option. Returns the focus back to the `ion-select` element. |
| <kbd>Space</kbd>      | If the focused radio button is not checked, unchecks the currently checked radio button and checks the focused radio button. Otherwise, does nothing. If the overlay does not have an 'OK' button, the value will be committed immediately and the overlay will dismiss. |
| <kbd>Tab</kbd>        | Moves focus to the next focusable element (cancel button, 'OK' button, or either the selection or the first option) on the overlay. If the next focusable element is an option, then it will focus on the selected option, otherwise it will focus the first option. |

#### Multiple Selection

Multiple selection keyboard interaction follows the [ARIA implementation patterns of a checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/).

These keyboard interactions apply to `ion-alert`, `ion-popover`, and `ion-modal` elements when the overlay is presented and multiple selection is enabled.

| Key                | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| <kbd>Enter</kbd>   | When the 'OK' button is focused, it will save the user's selection, dismiss the overlay, and return focus to the `ion-select` element. |
| <kbd>Escape</kbd>  | Closes the overlay without changing the submitted option(s). Returns the focus back to the `ion-select` element. |
| <kbd>Space</kbd>   | Selects or deselects the currently focused option. This does not deselect the other selected options. If the overlay does not have an 'OK' button, the value will be committed immediately. |
| <kbd>Tab</kbd>     | Move focus to the next focusable element (cancel button, 'OK' button, or any of the options) on the overlay. If the next focusable element is the options list, then it should iterate through each option. |

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
