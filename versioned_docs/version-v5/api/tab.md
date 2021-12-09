---
sidebar_label: 'ion-tab'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-tab

The tab component is a child component of [tabs](tabs.md). Each tab can contain a top level navigation stack for an app or a single view. An app can have many tabs, all with their own independent navigation.

> Note: This component should only be used with vanilla or Stencil JavaScript projects. For Angular, React, and Vue apps you do not need to use `ion-tab` to declare your tab components.

See the [tabs documentation](tabs.md) for more details on configuring tabs.

## Properties

### component

|                 |                                                          |
| --------------- | -------------------------------------------------------- |
| **Description** | The component to display inside of the tab.              |
| **Attribute**   | `component`                                              |
| **Type**        | `Function \| HTMLElement \| null \| string \| undefined` |
| **Default**     | `undefined`                                              |

### tab

|                 |                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A tab id must be provided for each `ion-tab`. It's used internally to reference<br />the selected tab or by the router to switch between them. |
| **Attribute**   | `tab`                                                                                                                                          |
| **Type**        | `string`                                                                                                                                       |
| **Default**     | `undefined`                                                                                                                                    |

## Methods

### setActive

|                 |                                      |
| --------------- | ------------------------------------ |
| **Description** | Set the active component for the tab |
| **Signature**   | `setActive() => Promise<void>`       |
