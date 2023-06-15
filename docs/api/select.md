---
title: "ion-select"
---
import Props from '@ionic-internal/component-api/v7/select/props.md';
import Events from '@ionic-internal/component-api/v7/select/events.md';
import Methods from '@ionic-internal/component-api/v7/select/methods.md';
import Parts from '@ionic-internal/component-api/v7/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/select/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/select/slots.md';

<head>
  <title>ion-select: Select One or Multiple Value Boxes or Placeholders</title>
  <meta name="description" content="ion-select is represented by selected value(s), or a placeholder, and dropdown icon. When you tap select, a dialog box appears with an easy to select list." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Selects are form controls to select an option, or options, from a set of options, similar to a native `<select>` element. When a user taps the select, a dialog appears with all of the options in a large, easy to select list.

A select should be used with child `<ion-select-option>` elements. If the child option is not given a `value` attribute then its text will be used as the value.

If `value` is set on the `<ion-select>`, the selected option will be chosen based on that value.

## Single Selection

By default, the select allows the user to select only one option. The alert interface presents users with a radio button styled list of options. The select component's value receives the value of the selected option's value.

import SingleSelectionExample from '@site/static/usage/v7/select/basic/single-selection/index.md';

<SingleSelectionExample />

## Interfaces

By default, select uses [ion-alert](alert.md) to open up the overlay of options in an alert. The interface can be changed to use [ion-action-sheet](action-sheet.md) or [ion-popover](popover.md) by passing `action-sheet` or `popover`, respectively, to the `interface` property. Read on to the other sections for the limitations of the different interfaces.

### Action Sheet

import ActionSheetExample from '@site/static/usage/v7/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### Popover

import PopoverExample from '@site/static/usage/v7/select/interfaces/popover/index.md';

<PopoverExample />

## Multiple Selection

By adding the `multiple` attribute to select, users are able to select multiple options. When multiple options can be selected, the alert or popover overlay presents users with a checkbox styled list of options. The select component's value receives an array of all of the selected option values.

Note: the `action-sheet` interface will not work with multiple selection.

import MultipleSelectionExample from '@site/static/usage/v7/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## Responding to Interaction

The main ways of handling user interaction with the select are the `ionChange`, `ionDismiss`, and `ionCancel` events. See [Events](#events) for more details on these and other events that select fires.

import RespondingToInteractionExample from '@site/static/usage/v7/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## Object Value References

When using objects for select values, it is possible for the identities of these objects to change if they are coming from a server or database, while the selected value's identity remains the same. For example, this can occur when an existing record with the desired object value is loaded into the select, but the newly retrieved select options now have different identities. This will result in the select appearing to have no value at all, even though the original selection in still intact.

By default, the select uses object equality (`===`) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.

### Using compareWith

import UsingCompareWithExample from '@site/static/usage/v7/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### Object Values and Multiple Selection

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/v7/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />
  

## Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/usage/v7/select/label-placement/index.md';

<LabelPlacement />

## Justification
  
Developers can use the `justify` property to control how the label and control are packed on a line.

import JustifyExample from '@site/static/usage/v7/select/justify/index.md';

<JustifyExample />

## Filled Selects

Material Design offers filled styles for a select. The `fill` property on the select can be set to either `"solid"` or `"outline"`.

Since the `fill` styles visually defines the select container, selects that use `fill` should not be used in `ion-item`.

import FillExample from '@site/static/usage/v7/select/fill/index.md';

<FillExample />

## Select Buttons

The alert supports two buttons: `Cancel` and `OK`. Each button's text can be customized using the `cancelText` and `okText` properties.

The `action-sheet` and `popover` interfaces do not have an `OK` button, clicking on any of the options will automatically close the overlay and select that value. The `popover` interface does not have a `Cancel` button, clicking on the backdrop will close the overlay.

import ButtonTextExample from '@site/static/usage/v7/select/customization/button-text/index.md';

<ButtonTextExample />

## Interface Options

Since select uses the alert, action sheet and popover interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more.

See the [ion-alert docs](alert.md), [ion-action-sheet docs](action-sheet.md), and [ion-popover docs](popover.md) for the properties that each interface accepts.

Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.

import InterfaceOptionsExample from '@site/static/usage/v7/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## Customization

There are two units that make up the Select component and each need to be styled separately. The `ion-select` element is represented on the view by the selected value(s), or placeholder if there is none, and dropdown icon. The interface, which is defined in the [Interfaces](#interfaces) section above, is the dialog that opens when clicking on the `ion-select`. The interface contains all of the options defined by adding `ion-select-option` elements. The following sections will go over the differences between styling these.

### Styling Select Element

As mentioned, the `ion-select` element consists only of the value(s), or placeholder, and icon that is displayed on the view. To customize this, style using a combination of CSS and any of the [CSS custom properties](#css-custom-properties).

Alternatively, depending on the [browser support](https://caniuse.com/#feat=mdn-css_selectors_part) needed, CSS shadow parts can be used to style the select. Notice that by using `::part`, any CSS property on the element can be targeted.

import StylingSelectExample from '@site/static/usage/v7/select/customization/styling-select/index.md';

<StylingSelectExample />

### Styling Select Interface

Customizing the interface dialog should be done by following the Customization section in that interface's documentation:

- [Alert Customization](alert.md#customization)
- [Action Sheet Customization](action-sheet.md#customization)
- [Popover Customization](popover.md#customization)

However, the Select Option does set a class for easier styling and allows for the ability to pass a class to the overlay option, see the [Select Options documentation](select-option.md) for usage examples of customizing options.

## Typeahead Component

Typeahead or autocomplete functionality can be built using existing Ionic components. We recommend using an `ion-modal` to make the best use of the available screen space.

import TypeaheadExample from '@site/static/usage/v7/select/typeahead/index.md';

<TypeaheadExample />

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

## Migrating from Legacy Select Syntax

A simpler select syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an select, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one select at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.


### Using the Modern Syntax

Using the modern syntax involves two steps:

1. Remove `ion-label` and use the `label` property on `ion-select` instead. The placement of the label can be configured using the `labelPlacement` property on `ion-select`.
2. Move any usage of `fill` and `shape` from `ion-item` on to `ion-select`.

import Migration from '@site/static/usage/v7/select/migration/index.md';

<Migration />

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern select syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-select` to `true` to force that instance of the input to use the legacy syntax.

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
