---
title: 'ion-input'
---

import Props from '@ionic-internal/component-api/v7/input/props.md';
import Events from '@ionic-internal/component-api/v7/input/events.md';
import Methods from '@ionic-internal/component-api/v7/input/methods.md';
import Parts from '@ionic-internal/component-api/v7/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/input/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/input/slots.md';

<head>
  <title>ion-input: Custom Input With Styling and CSS Properties</title>
  <meta
    name="description"
    content="ion-input is a wrapper to the HTML input element, with custom value type styling and functionality. It works on desktops and integrates with mobile keyboards."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.

## Basic Usage

import Basic from '@site/static/usage/v7/input/basic/index.md';

<Basic />

## Types

The input component is meant for text type inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including `keyup`, `keydown`, `keypress`, and more. The default `type` is `"text"`.

import Types from '@site/static/usage/v7/input/types/index.md';

<Types />

## Labels

Labels should be used to describe the input. They can be used visually, and they will also be read out by screen readers when the user is focused on the input. This makes it easy for the user to understand the intent of the input. Input has several ways to assign a label:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels (experimental)
- `aria-label`: used to provide a label for screen readers but adds no visible label

### Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/usage/v7/input/label-placement/index.md';

<LabelPlacement />

### Label Slot (experimental)

While plaintext labels should be passed in via the `label` property, if custom HTML is needed, it can be passed through the `label` slot instead.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

import LabelSlot from '@site/static/usage/v7/input/label-slot/index.md';

<LabelSlot />

### No Visible Label

If no visible label is needed, developers should still supply an `aria-label` so the input is accessible to screen readers.

import NoVisibleLabel from '@site/static/usage/v7/input/no-visible-label/index.md';

<NoVisibleLabel />

## Clear Options

Inputs offer two options for clearing the input based on how you interact with it. The first way is by adding the `clearInput` property which will show a clear button when the input has a `value`. The second way is the `clearOnEdit` property which will clear the input after it has been blurred and then typed in again. Inputs with a `type` set to `"password"` will have `clearOnEdit` enabled by default.

import Clear from '@site/static/usage/v7/input/clear/index.md';

<Clear />

## Filled Inputs

Material Design offers filled styles for an input. The `fill` property on the input can be set to either `"solid"` or `"outline"`.

Since the `fill` styles visually defines the input container, inputs that use `fill` should not be used in `ion-item`.

Filled inputs can be used on iOS by setting Input's `mode` to `md`.

import Fill from '@site/static/usage/v7/input/fill/index.md';

<Fill />

## Helper & Error Text

Helper and error text can be used inside of an input with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-input`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v7/input/helper-error/index.md';

<HelperError />

## Input Counter

The input counter is text that displays under an input to notify the user of how many characters have been entered out of the total that the input will accept. When adding counter, the default behavior is to format the value that gets displayed as `inputLength` / `maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property.

The `counter` and `counterFormatter` properties on `ion-item` were [deprecated in Ionic 7](/docs/api/input#using-the-modern-syntax) and should be used directly on `ion-input` instead.

import Counter from '@site/static/usage/v7/input/counter/index.md';

<Counter />

Inputs with a counter add a border between the input and the counter, therefore they should not be placed inside of an `ion-item` which adds an additional border under the item. The `ion-padding-start` class can be added to align the counter inputs with inputs inside of items.

import CounterAlignment from '@site/static/usage/v7/input/counter-alignment/index.md';

<CounterAlignment />

## Filtering User Input

Developers can use the `ionInput` event to update the input value in response to user input such as a `keypress`. This is useful for filtering out invalid or unwanted characters.

When storing the value in a state variable, we recommend updating both the state variable and the `ion-input` component value. This ensures that the state variable and the `ion-input` component value remain in sync.

import FilteringData from '@site/static/usage/v7/input/filtering/index.md';

<FilteringData />

## Input Masking

Input masks are expressions that constrain input to support valid input values. Ionic recommends using [Maskito](https://maskito.dev) for input masking. Maskito is a lightweight, dependency-free library for masking input fields. It supports a wide range of masks, including phone numbers, credit cards, dates, and more.

To get started with Maskito, install the library:

```bash
npm install @maskito/core @maskito/{angular,react,vue}
```

import Masking from '@site/static/usage/v7/input/mask/index.md';

<Masking />

:::note

Please submit bug reports with Maskito to the [Maskito Github repository](https://github.com/taiga-family/maskito/issues). For technical support, please use the [Ionic Forum](https://forum.ionicframework.com/) or [Ionic Discord](http://chat.ionicframework.com/).

:::

## Start and End Slots (experimental)

The `start` and `end` slots can be used to place icons, buttons, or prefix/suffix text on either side of the input.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

:::note
In most cases, [Icon](./icon.md) components placed in these slots should have `aria-hidden="true"`. See the [Icon accessibility docs](https://ionicframework.com/docs/api/icon#accessibility) for more information.

If slot content is meant to be interacted with, it should be wrapped in an interactive element such as a [Button](./button.md). This ensures that the content can be tabbed to.
:::

import StartEndSlots from '@site/static/usage/v7/input/start-end-slots/index.md';

<StartEndSlots />

## Theming

### Colors

Setting the `color` property changes the color palette for each input. On `ios` mode, this property changes the caret color. On `md` mode, this property changes the caret color and the highlight/underline color.

:::note
The `color` property does _not_ change the text color of the input. For that, use the [`--color` CSS property](#css-custom-properties-1).
:::

import Colors from '@site/static/usage/v7/input/theming/colors/index.md';

<Colors />

### CSS Custom Properties

Input uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector. Targeting the `ion-input` for customization will not work; therefore we recommend adding a class and customizing it that way.

import CSSProps from '@site/static/usage/v7/input/theming/css-properties/index.md';

<CSSProps />

## Migrating from Legacy Input Syntax

A simpler input syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an input, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one input at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves three steps:

1. Remove `ion-label` and use the `label` property on `ion-input` instead. The placement of the label can be configured using the `labelPlacement` property on `ion-input`.
2. Move input-specific properties from `ion-item` on to `ion-input`. This includes the `counter`, `counterFormatter`, `fill`, and `shape` properties.
3. Remove usages of the `helper` and `error` slots on `ion-item` and use the `helperText` and `errorText` properties on `ion-input` instead.

import Migration from '@site/static/usage/v7/input/migration/index.md';

<Migration />

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern input syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-input` to `true` to force that instance of the input to use the legacy syntax.

## Interfaces

### InputChangeEventDetail

```typescript
interface InputChangeEventDetail {
  value: string | undefined | null;
}
```

### InputCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface InputCustomEvent extends CustomEvent {
  detail: InputChangeEventDetail;
  target: HTMLIonInputElement;
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
