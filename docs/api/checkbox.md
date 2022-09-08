---
title: "ion-checkbox"
---

import Props from '@site/static/auto-generated/checkbox/props.md';
import Events from '@site/static/auto-generated/checkbox/events.md';
import Methods from '@site/static/auto-generated/checkbox/methods.md';
import Parts from '@site/static/auto-generated/checkbox/parts.md';
import CustomProps from '@site/static/auto-generated/checkbox/custom-props.md';
import Slots from '@site/static/auto-generated/checkbox/slots.md';

<head>
  <title>ion-checkboxes: Ionic App Component to Select Multiple Options</title>
  <meta name="description" content="ion-checkboxes allow selection of multiple options from a set and appear as checked (ticked) when activated. Learn about the checkbox component for Ionic apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the `checked` property. They can also be checked programmatically by setting the `checked` property.

## Basic Usage

import Basic from '@site/static/usage/checkbox/basic/index.md';

<Basic />

## Indeterminate Checkboxes

import Indeterminate from '@site/static/usage/checkbox/indeterminate/index.md';

<Indeterminate />

## Theming

### CSS Custom Properties

import CSSProps from '@site/static/usage/checkbox/theming/css-properties/index.md';

<CSSProps />

## Interfaces

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### CheckboxCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
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
