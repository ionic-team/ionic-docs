---
sidebar_label: 'ion-item-options'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-item-options

The option buttons for an `ion-item-sliding`. These buttons can be placed either on the [start or end side](#side-description).
You can combine the `ionSwipe` event plus the `expandable` directive to create a full swipe action for the item.

## Side Description

| Side    | Position                                                        | Swipe Direction                                                   |
| ------- | --------------------------------------------------------------- | ----------------------------------------------------------------- |
| `start` | To the `left` of the content in LTR, and to the `right` in RTL. | From `left` to `right` in LTR, and from `right` to `left` in RTL. |
| `end`   | To the `right` of the content in LTR, and to the `left` in RTL. | From `right` to `left` in LTR, and from `left` to `right` in RTL. |

## Properties

### side

|                 |                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each. |
| **Attribute**   | `side`                                                                                                                                                      |
| **Type**        | `"end" \| "start"`                                                                                                                                          |
| **Default**     | `'end'`                                                                                                                                                     |

## Events

| Name       | Description                                  |
| ---------- | -------------------------------------------- |
| `ionSwipe` | Emitted when the item has been fully swiped. |
