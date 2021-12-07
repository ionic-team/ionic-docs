---
sidebar_label: 'ion-item-option'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-item-option

The option button for an `ion-item-sliding`. Must be placed inside of an `<ion-item-options>`.
You can combine the `ionSwipe` event and the `expandable` directive to create a full swipe
action for the item.

## Properties

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### disabled

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the item option. |
| **Attribute**   | `disabled`                                                |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### download

|                 |                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This attribute instructs browsers to download a URL instead of navigating to<br />it, so the user will be prompted to save it as a local file. If the attribute<br />has a value, it is used as the pre-filled file name in the Save prompt<br />(the user can still change the file name if they want). |
| **Attribute**   | `download`                                                                                                                                                                                                                                                                                               |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                                    |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                              |

### expandable

|                 |                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the option will expand to take up the available width and cover any other options. |
| **Attribute**   | `expandable`                                                                                  |
| **Type**        | `boolean`                                                                                     |
| **Default**     | `false`                                                                                       |

### href

|                 |                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to.<br />If this property is set, an anchor tag will be rendered. |
| **Attribute**   | `href`                                                                                                                       |
| **Type**        | `string \| undefined`                                                                                                        |
| **Default**     | `undefined`                                                                                                                  |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### rel

|                 |                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies the relationship of the target object to the link object.<br />The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). |
| **Attribute**   | `rel`                                                                                                                                                                                       |
| **Type**        | `string \| undefined`                                                                                                                                                                       |
| **Default**     | `undefined`                                                                                                                                                                                 |

### target

|                 |                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL.<br />Only applies when an `href` is provided.<br />Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                                      |
| **Type**        | `string \| undefined`                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                   |

### type

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | The type of the button.           |
| **Attribute**   | `type`                            |
| **Type**        | `"button" \| "reset" \| "submit"` |
| **Default**     | `'button'`                        |

## CSS Shadow Parts

| Name     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `native` | The native HTML button or anchor element that wraps all child elements. |

## CSS Custom Properties

| Name           | Description                   |
| -------------- | ----------------------------- |
| `--background` | Background of the item option |
| `--color`      | Color of the item option      |

## Slots

| Name        | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| ``          | Content is placed between the named slots if provided without a slot.             |
| `bottom`    | Content is placed below the option text.                                          |
| `end`       | Content is placed to the right of the option text in LTR, and to the left in RTL. |
| `icon-only` | Should be used on an icon in an option that has no text.                          |
| `start`     | Content is placed to the left of the option text in LTR, and to the right in RTL. |
| `top`       | Content is placed above the option text.                                          |
