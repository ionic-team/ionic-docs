---
sidebar_label: 'ion-menu-button'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-menu-button

Menu Button is component that automatically creates the icon and functionality to open a menu on a page.

## Properties

### autoHide

|                 |                                                                               |
| --------------- | ----------------------------------------------------------------------------- |
| **Description** | Automatically hides the menu button when the corresponding menu is not active |
| **Attribute**   | `auto-hide`                                                                   |
| **Type**        | `boolean`                                                                     |
| **Default**     | `true`                                                                        |

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
| **Description** | If `true`, the user cannot interact with the menu button. |
| **Attribute**   | `disabled`                                                |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### menu

|                 |                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | Optional property that maps to a Menu's `menuId` prop. Can also be `start` or `end` for the menu side. This is used to find the correct menu to toggle |
| **Attribute**   | `menu`                                                                                                                                                 |
| **Type**        | `string \| undefined`                                                                                                                                  |
| **Default**     | `undefined`                                                                                                                                            |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### type

|                 |                                   |
| --------------- | --------------------------------- |
| **Description** | The type of the button.           |
| **Attribute**   | `type`                            |
| **Type**        | `"button" \| "reset" \| "submit"` |
| **Default**     | `'button'`                        |

## CSS Shadow Parts

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| `icon`   | The menu button icon (uses ion-icon).                         |
| `native` | The native HTML button element that wraps all child elements. |

## CSS Custom Properties

| Name                           | Description                                                                                               |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `--background`                 | Background of the menu button                                                                             |
| `--background-focused`         | Background of the menu button when focused with the tab key                                               |
| `--background-focused-opacity` | Opacity of the menu button background when focused with the tab key                                       |
| `--background-hover`           | Background of the menu button on hover                                                                    |
| `--background-hover-opacity`   | Opacity of the background on hover                                                                        |
| `--border-radius`              | Border radius of the menu button                                                                          |
| `--color`                      | Color of the menu button                                                                                  |
| `--color-focused`              | Color of the menu button when focused with the tab key                                                    |
| `--color-hover`                | Color of the menu button on hover                                                                         |
| `--padding-bottom`             | Bottom padding of the button                                                                              |
| `--padding-end`                | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button |
| `--padding-start`              | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button |
| `--padding-top`                | Top padding of the button                                                                                 |
