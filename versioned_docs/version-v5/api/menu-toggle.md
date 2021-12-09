---
sidebar_label: 'ion-menu-toggle'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-menu-toggle

The MenuToggle component can be used to toggle a menu open or closed.

By default, it's only visible when the selected menu is active. A menu is active when it can be opened/closed. If the menu is disabled or it's being presented as a split-pane, the menu is marked as non-active and ion-menu-toggle hides itself.

In case it's desired to keep `ion-menu-toggle` always visible, the `autoHide` property can be set to `false`.

## Properties

### autoHide

|                 |                                                                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Automatically hides the content when the corresponding menu is not active.<br /><br />By default, it's `true`. Change it to `false` in order to<br />keep `ion-menu-toggle` always visible regardless the state of the menu. |
| **Attribute**   | `auto-hide`                                                                                                                                                                                                                  |
| **Type**        | `boolean`                                                                                                                                                                                                                    |
| **Default**     | `true`                                                                                                                                                                                                                       |

### menu

|                 |                                                                                                                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Optional property that maps to a Menu's `menuId` prop.<br />Can also be `start` or `end` for the menu side.<br />This is used to find the correct menu to toggle.<br /><br />If this property is not used, `ion-menu-toggle` will toggle the<br />first menu that is active. |
| **Attribute**   | `menu`                                                                                                                                                                                                                                                                       |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                        |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                  |
