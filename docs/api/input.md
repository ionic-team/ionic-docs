---
title: "ion-input"
---
import Props from '@site/static/auto-generated/input/props.md';
import Events from '@site/static/auto-generated/input/events.md';
import Methods from '@site/static/auto-generated/input/methods.md';
import Parts from '@site/static/auto-generated/input/parts.md';
import CustomProps from '@site/static/auto-generated/input/custom-props.md';
import Slots from '@site/static/auto-generated/input/slots.md';

<head>
  <title>ion-input: Custom Input Value Type Styling and CSS Properties</title>
  <meta name="description" content="ion-input is a wrapper to the HTML input element, with custom value type styling and functionality. It works on desktops and integrates with mobile keyboards." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.


## Basic Usage

import Basic from '@site/static/usage/input/basic/index.md';

<Basic />


## Types

The input component is meant for text type inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including keyup, keydown, keypress, and more. The default `type` is `"text"`.

import Types from '@site/static/usage/input/types/index.md';

<Types />


## Label Positioning

Labels will take up the width of their content by default. This positioning can be changed to be a fixed width, stacked, or floating label.

import Labels from '@site/static/usage/input/labels/index.md';

<Labels />


## Clear Options

Inputs offer two options for clearing the input based on how you interact with it. The first way is by adding the `clearInput` property which will show a clear button when the input has a `value`. The second way is the `clearOnEdit` property which will clear the input after it has been blurred and then typed in again. Inputs with a `type` set to `"password"` will have `clearOnEdit` enabled by default.

import Clear from '@site/static/usage/input/clear/index.md';

<Clear />


## Filled Inputs

Material Design offers filled styles for an input when it is inside of an item. The `fill` property on the item can be set to either `"solid"` or `"outline"`.

import Fill from '@site/static/usage/input/fill/index.md';

<Fill />


## Helper & Error Text

Helper & error text can be used inside of an item with an input by slotting a note in the `"helper"` and `"error"` slots. The error slot will not be displayed unless the `ion-invalid` class is added to the `ion-item`. In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

<!-- Reuse the playground from the Item directory -->
import HelperError from '@site/static/usage/item/helper-error/index.md';

<HelperError />

## Item Counter

The item counter is helper text that displays under an input to notify the user of how many characters have been entered out of the total that the input will accept. When adding counter, the default behavior is to format the value that gets displayed as `inputLength` / `maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property.

<!-- Reuse the playground from the Item directory -->
import Counter from '@site/static/usage/item/counter/index.md';

<Counter />


## Theming

### Colors

import Colors from '@site/static/usage/input/theming/colors/index.md';

<Colors />

### CSS Custom Properties

Input uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector. Targeting the `ion-input` for customization will not work; therefore we recommend adding a class and customizing it that way.

import CSSProps from '@site/static/usage/input/theming/css-properties/index.md';

<CSSProps />


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
