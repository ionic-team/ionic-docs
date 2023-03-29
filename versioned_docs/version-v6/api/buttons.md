---
title: 'ion-buttons'
---

import Props from '@ionic-internal/component-api/v6/buttons/props.md';
import Events from '@ionic-internal/component-api/v6/buttons/events.md';
import Methods from '@ionic-internal/component-api/v6/buttons/methods.md';
import Parts from '@ionic-internal/component-api/v6/buttons/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/buttons/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/buttons/slots.md';

<head>
  <title>ion-buttons: Toolbar Element with Named Slots for Buttons</title>
  <meta
    name="description"
    content="The Buttons component is a container element. Buttons placed in a toolbar should be inside the ion-buttons element and can be positioned using named slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The Buttons component is a container element. It should be used inside of a [toolbar](./toolbar) and can contain several types of buttons, including standard [buttons](./button), [menu buttons](./menu-button), and [back buttons](./back-button).

## Basic Usage

import Basic from '@site/static/usage/v6/buttons/basic/index.md';

<Basic />

## Buttons Placement

Buttons can be positioned inside of the toolbar using a named slot. The below chart has a description of each slot.

| Slot        | Description                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `start`     | Positions to the `left` of the content in LTR, and to the `right` in RTL.                               |
| `end`       | Positions to the `right` of the content in LTR, and to the `left` in RTL.                               |
| `secondary` | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode. |
| `primary`   | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.     |

import Placement from '@site/static/usage/v6/buttons/placement/index.md';

<Placement />

## Types of Buttons

A button in a toolbar is styled to be clear by default, but this can be changed using the [`fill`](./button#fill) property on the button. The properties included on [back button](./back-button) and [menu button](./menu-button) in this example are for display purposes; see their respective documentation for proper usage.

import Types from '@site/static/usage/v6/buttons/types/index.md';

<Types />

## Collapsible Buttons

The `collapse` property can be set on the buttons to collapse them when the header collapses. This is typically used with [collapsible large titles](./title#collapsible-large-titles).

:::info

This feature is only available for iOS.

:::

<!-- Reuse the playground from the Title directory -->

import CollapsibleLargeTitleButtons from '@site/static/usage/v6/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

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
