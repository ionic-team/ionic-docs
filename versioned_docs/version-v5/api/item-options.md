---
sidebar_label: 'ion-item-options'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/item-options/props.md';
import Events from '@ionic-internal/component-api/v5/item-options/events.md';
import Methods from '@ionic-internal/component-api/v5/item-options/methods.md';
import Parts from '@ionic-internal/component-api/v5/item-options/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/item-options/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/item-options/slots.md';

# ion-item-options

The option buttons for an `ion-item-sliding`. These buttons can be placed either on the [start or end side](#side-description).
You can combine the `ionSwipe` event plus the `expandable` directive to create a full swipe action for the item.

## Side Description

| Side    | Position                                                        | Swipe Direction                                                   |
| ------- | --------------------------------------------------------------- | ----------------------------------------------------------------- |
| `start` | To the `left` of the content in LTR, and to the `right` in RTL. | From `left` to `right` in LTR, and from `right` to `left` in RTL. |
| `end`   | To the `right` of the content in LTR, and to the `left` in RTL. | From `right` to `left` in LTR, and from `left` to `right` in RTL. |

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
