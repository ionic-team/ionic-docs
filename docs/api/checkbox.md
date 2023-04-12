---
title: "ion-checkbox"
---

import Props from '@ionic-internal/component-api/v7/checkbox/props.md';
import Events from '@ionic-internal/component-api/v7/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v7/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v7/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/checkbox/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/checkbox/slots.md';

<head>
  <title>ion-checkboxes: Ionic App Component to Select Multiple Options</title>
  <meta name="description" content="ion-checkboxes allow selection of multiple options from a set and appear as checked (ticked) when activated. Learn about the checkbox component for Ionic apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the `checked` property. They can also be checked programmatically by setting the `checked` property.

## Basic Usage

import Basic from '@site/static/usage/v7/checkbox/basic/index.md';

<Basic />

## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/usage/v7/checkbox/label-placement/index.md';

<LabelPlacement />

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line.

import Justify from '@site/static/usage/v7/checkbox/justify/index.md';

<Justify />


:::note
`ion-item` is only used in the demos to emphasize how `justify` works. It is not needed in order for `justify` to function correctly.
:::

## Indeterminate Checkboxes

import Indeterminate from '@site/static/usage/v7/checkbox/indeterminate/index.md';

<Indeterminate />

## Theming

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/checkbox/theming/css-properties/index.md';

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

## Migrating from Legacy Checkbox Syntax

A simpler checkbox syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup a checkbox, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one checkbox at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves removing the `ion-label` and passing the label directly inside of `ion-checkbox`. The placement of the label can be configured using the `labelPlacement` property on `ion-checkbox`. The way the label and the control are packed on a line can be controlled using the `justify` property on `ion-checkbox`.

import Migration from '@site/static/usage/v7/checkbox/migration/index.md';

<Migration />
  

:::note
In past versions of Ionic, `ion-item` was required for `ion-checkbox` to function properly. Starting in Ionic 7.0, `ion-checkbox` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-checkbox` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern checkbox syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-checkbox` to `true` to force that instance of the checkbox to use the legacy syntax.


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
