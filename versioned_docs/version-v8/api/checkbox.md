---
title: "ion-checkbox"
---

import Props from '@ionic-internal/component-api/v8/checkbox/props.md';
import Events from '@ionic-internal/component-api/v8/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v8/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v8/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/checkbox/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/checkbox/slots.md';

<head>
  <title>ion-checkbox: Ionic App Checkbox to Select Multiple Options</title>
  <meta name="description" content="ion-checkboxes allow selection of multiple options from a set and appear as checked (ticked) when activated. Learn about the checkbox component for Ionic apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the `checked` property. They can also be checked programmatically by setting the `checked` property.

## Basic Usage

import Basic from '@site/static/usage/v8/checkbox/basic/index.md';

<Basic />

## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control. This property mirrors the flexbox `flex-direction` property.

import LabelPlacement from '@site/static/usage/v8/checkbox/label-placement/index.md';

<LabelPlacement />

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

:::note
Stacked checkboxes can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.
:::

import Alignment from '@site/static/usage/v8/checkbox/alignment/index.md';

<Alignment />

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line. This property mirrors the flexbox `justify-content` property.

import Justify from '@site/static/usage/v8/checkbox/justify/index.md';

<Justify />


:::note
`ion-item` is only used in the demos to emphasize how `justify` works. It is not needed in order for `justify` to function correctly.
:::

## Indeterminate Checkboxes

import Indeterminate from '@site/static/usage/v8/checkbox/indeterminate/index.md';

<Indeterminate />

## Links inside of Labels

Checkbox labels can sometimes be accompanied with links. These links can provide more information related to the checkbox. However, clicking the link should not check the checkbox. To achieve this, we can use [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) to prevent the click event from bubbling. When using this approach, the rest of the label still remains clickable.

import LabelLink from '@site/static/usage/v8/checkbox/label-link/index.md';

<LabelLink />

## Helper & Error Text

Helper and error text can be used inside of a checkbox with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-checkbox`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v8/checkbox/helper-error/index.md';

<HelperError />

## Theming

### CSS Custom Properties

import CSSProps from '@site/static/usage/v8/checkbox/theming/css-properties/index.md';

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
