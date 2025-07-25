---
title: "ion-toggle"
---
import Props from '@ionic-internal/component-api/v8/toggle/props.md';
import Events from '@ionic-internal/component-api/v8/toggle/events.md';
import Methods from '@ionic-internal/component-api/v8/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v8/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/toggle/slots.md';

<head>
  <title>ion-toggle: Custom Toggle Button for Ionic Applications</title>
  <meta name="description" content="Toggle changes the state of a single option. Use ion-toggle to create customizable toggle buttons that can be switched on or off for your applications." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Toggles are switches that change the state of a single option. They can be switched on or off by pressing or swiping them. Toggles can also be checked programmatically by setting the `checked` property.

## Basic Usage

import Basic from '@site/static/usage/v8/toggle/basic/index.md';

<Basic />


## On / Off Labels

Toggles can enable on/off labels by setting the `enableOnOffLabels` property. This is important for accessibility as it makes it easier to differentiate between a checked and unchecked toggle.

import OnOff from '@site/static/usage/v8/toggle/on-off/index.md';

<OnOff />


## Toggles in a List

Toggles can also be used in a list view by using the [Item](./item) and [List](./list) components.

import List from '@site/static/usage/v8/toggle/list/index.md';

<List />


## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/usage/v8/toggle/label-placement/index.md';

<LabelPlacement />

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

:::note
Stacked toggles can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.
:::

import Alignment from '@site/static/usage/v8/toggle/alignment/index.md';

<Alignment />

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line.

import Justify from '@site/static/usage/v8/toggle/justify/index.md';

<Justify />

## Helper & Error Text

Helper and error text can be used inside of a toggle with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-toggle`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v8/toggle/helper-error/index.md';

<HelperError />

## Theming

### Colors

import Colors from '@site/static/usage/v8/toggle/theming/colors/index.md';

<Colors />

### CSS Custom Properties

CSS custom properties can be combined with standard CSS to target different parts of a toggle. We can modify the `width` and `height` of the toggle directly to change the size of the track, while using the `--handle-width` and `--handle-height` custom properties to customize the handle size.

import CSSProps from '@site/static/usage/v8/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

We can further customize toggle by targeting specific shadow parts that are exposed. Any CSS property on these parts can be styled and they can also be combined with CSS custom properties.

import CSSParts from '@site/static/usage/v8/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

## Interfaces

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLIonToggleElement;
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
