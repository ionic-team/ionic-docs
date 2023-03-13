---
title: "ion-toggle"
---
import Props from '@ionic-internal/component-api/v7/toggle/props.md';
import Events from '@ionic-internal/component-api/v7/toggle/events.md';
import Methods from '@ionic-internal/component-api/v7/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v7/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toggle/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/toggle/slots.md';

<head>
  <title>Toggle | ion-toggle: Custom Toggle Button for Ionic Applications</title>
  <meta name="description" content="Toggle changes the state of a single option. Use ion-toggle to create customizable toggle buttons that can be switched on or off for your applications." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Toggles are switches that change the state of a single option. They can be switched on or off by pressing or swiping them. Toggles can also be checked programmatically by setting the `checked` property.

## Basic Usage

import Basic from '@site/static/usage/v7/toggle/basic/index.md';

<Basic />


## On / Off Labels

Toggles can enable on/off labels by setting the `enableOnOffLabels` property. This is important for accessibility as it makes it easier to differentiate between a checked and unchecked toggle.

import OnOff from '@site/static/usage/v7/toggle/on-off/index.md';

<OnOff />


## Toggles in a List

Toggles can also be used in a list view by using the [Item](./item) and [List](./list) components.

import List from '@site/static/usage/v7/toggle/list/index.md';

<List />


## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/usage/v7/toggle/label-placement/index.md';

<LabelPlacement />


## Justification

Developers can use the `justify` property to control how the label and control are packed on a line.

import Justify from '@site/static/usage/v7/toggle/justify/index.md';

<Justify />


## Theming

### Colors

import Colors from '@site/static/usage/v7/toggle/theming/colors/index.md';

<Colors />

### CSS Custom Properties

CSS custom properties can be combined with standard CSS to target different parts of a toggle. We can modify the `width` and `height` of the toggle directly to change the size of the track, while using the `--handle-width` and `--handle-height` custom properties to customize the handle size.

import CSSProps from '@site/static/usage/v7/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

We can further customize toggle by targeting specific shadow parts that are exposed. Any CSS property on these parts can be styled and they can also be combined with CSS custom properties.

import CSSParts from '@site/static/usage/v7/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

## Migrating from Legacy Toggle Syntax

A simpler toggle syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an toggle, resolves accessibility issues, and improves the developer experience.

While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves removing the `ion-label` and passing the label directly inside of `ion-toggle`. The placement of the label can be configured using the `labelPlacement` property on `ion-toggle`. The way the label and the control are packed on a line can be controlled using the `justify` property on `ion-toggle`.

import Migration from '@site/static/usage/v7/toggle/migration/index.md';

<Migration />
  

:::note
In past versions of Ionic, `ion-item` was required for `ion-toggle` to function properly. Starting in Ionic 7.0, `ion-toggle` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-toggle` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern toggle syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-toggle` to `true` to force that instance of the toggle to use the legacy syntax.

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
