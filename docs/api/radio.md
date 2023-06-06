---
title: "ion-radio"
---
import Props from '@ionic-internal/component-api/v7/radio/props.md';
import Events from '@ionic-internal/component-api/v7/radio/events.md';
import Methods from '@ionic-internal/component-api/v7/radio/methods.md';
import Parts from '@ionic-internal/component-api/v7/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/radio/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/radio/slots.md';

<head>
  <title>ion-radio Component: Radio Property for iOS and Android</title>
  <meta name="description" content="Radio components should be used inside of ion-radio-groups on iOS and Android devices. Read to learn more about radio property usage and installation." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Radios should be used inside of a [radio group](./radio-group). Pressing a radio will check it and uncheck the previously selected radio, if there is one. They can also be checked programmatically by setting the value property of the parent radio group to the value of the radio.

When radios are inside of a radio group, only one radio will be checked at any time. If more than one item should be selected, [checkboxes](./checkbox) should be used instead. Radios can be disabled within a group to prevent interaction with them.

## Basic Usage

import Basic from '@site/static/usage/v7/radio/basic/index.md';

<Basic />

## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/usage/v7/radio/label-placement/index.md';

<LabelPlacement />

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line.

import Justify from '@site/static/usage/v7/radio/justify/index.md';

<Justify />


:::note
`ion-item` is only used in the demos to emphasize how `justify` works. It is not needed in order for `justify` to function correctly.
:::

## Deselecting Radios

By default, once a radio is selected it cannot be deselected; pressing it again will keep it selected. This behavior can be modified by using the `allowEmptySelection` property on the parent radio group, which enables the radios to be deselected.

import EmptySelection from '@site/static/usage/v7/radio/empty-selection/index.md';

<EmptySelection />


## Theming

### Colors

import Colors from '@site/static/usage/v7/radio/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/radio/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/radio/theming/css-shadow-parts/index.md';

<CSSParts />

## Migrating from Legacy Radio Syntax

A simpler radio syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an radio, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one radio at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves removing the `ion-label` and passing the label directly inside of `ion-radio`. The placement of the label can be configured using the `labelPlacement` property on `ion-radio`. The way the label and the control are packed on a line can be controlled using the `justify` property on `ion-radio`.

import Migration from '@site/static/usage/v7/radio/migration/index.md';

<Migration />
  

:::note
In past versions of Ionic, `ion-item` was required for `ion-radio` to function properly. Starting in Ionic 7.0, `ion-radio` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-radio` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern radio syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-radio` to `true` to force that instance of the radio to use the legacy syntax.



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
