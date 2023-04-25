---
title: "ion-input"
---
import Props from '@ionic-internal/component-api/v7/input/props.md';
import Events from '@ionic-internal/component-api/v7/input/events.md';
import Methods from '@ionic-internal/component-api/v7/input/methods.md';
import Parts from '@ionic-internal/component-api/v7/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/input/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/input/slots.md';

<head>
  <title>ion-input: Custom Input Value Type Styling and CSS Properties</title>
  <meta name="description" content="ion-input is a wrapper to the HTML input element, with custom value type styling and functionality. It works on desktops and integrates with mobile keyboards." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.


## Basic Usage

import Basic from '@site/static/usage/v7/input/basic/index.md';

<Basic />


## Types

The input component is meant for text type inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including keyup, keydown, keypress, and more. The default `type` is `"text"`.

import Types from '@site/static/usage/v7/input/types/index.md';

<Types />


## Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/usage/v7/input/label-placement/index.md';

<LabelPlacement />


## Clear Options

Inputs offer two options for clearing the input based on how you interact with it. The first way is by adding the `clearInput` property which will show a clear button when the input has a `value`. The second way is the `clearOnEdit` property which will clear the input after it has been blurred and then typed in again. Inputs with a `type` set to `"password"` will have `clearOnEdit` enabled by default.

import Clear from '@site/static/usage/v7/input/clear/index.md';

<Clear />


## Filled Inputs

Material Design offers filled styles for an input. The `fill` property on the input can be set to either `"solid"` or `"outline"`.

Since the `fill` styles visually defines the input container, inputs that use `fill` should not be used in `ion-item`.

import Fill from '@site/static/usage/v7/input/fill/index.md';

<Fill />


## Helper & Error Text

Helper and error text can be used inside of an input with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-input`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v7/input/helper-error/index.md';

<HelperError />

## Input Counter

The input counter is text that displays under an input to notify the user of how many characters have been entered out of the total that the input will accept. When adding counter, the default behavior is to format the value that gets displayed as `inputLength` / `maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property.

import Counter from '@site/static/usage/v7/input/counter/index.md';

<Counter />

## Filtering User Input

Developers can use the `ionInput` event to update the input value in response to user input such as a keypress. This is useful for filtering out invalid or unwanted characters.

When storing the value in a state variable, we recommend updating both the state variable and the `ion-input` component value. This ensures that the state variable and the `ion-input` component value remain in sync.

import FilteringData from '@site/static/usage/v7/input/filtering/index.md';

<FilteringData />

## Theming

### Colors

Setting the `color` property changes the color palette for each input. On `ios` mode, this property changes the caret color. On `md` mode, this property changes the caret color and the highlight/underline color.

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
