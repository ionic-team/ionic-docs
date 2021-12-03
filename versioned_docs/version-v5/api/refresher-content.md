---
sidebar_label: 'ion-refresher-content'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-refresher-content

The refresher content contains the text, icon and spinner to display during a pull-to-refresh. Ionic provides the pulling icon and refreshing spinner based on the platform. However, the default icon, spinner, and text can be customized based on the state of the refresher.

## Properties

### pullingIcon

|                 |                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A static icon or a spinner to display when you begin to pull down.<br />A spinner name can be provided to gradually show tick marks<br />when pulling down on iOS devices. |
| **Attribute**   | `pulling-icon`                                                                                                                                                             |
| **Type**        | `null \| string \| undefined`                                                                                                                                              |
| **Default**     | `undefined`                                                                                                                                                                |

### pullingText

|                 |                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The text you want to display when you begin to pull down.<br />`pullingText` can accept either plaintext or HTML as a string.<br />To display characters normally reserved for HTML, they<br />must be escaped. For example `<Ionic>` would become<br />`&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security) |
| **Attribute**   | `pulling-text`                                                                                                                                                                                                                                                                                                                                                                  |
| **Type**        | `IonicSafeString \| string \| undefined`                                                                                                                                                                                                                                                                                                                                        |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                     |

### refreshingSpinner

|                 |                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Description** | An animated SVG spinner that shows when refreshing begins                                                       |
| **Attribute**   | `refreshing-spinner`                                                                                            |
| **Type**        | `"bubbles" \| "circles" \| "circular" \| "crescent" \| "dots" \| "lines" \| "lines-small" \| null \| undefined` |
| **Default**     | `undefined`                                                                                                     |

### refreshingText

|                 |                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The text you want to display when performing a refresh.<br />`refreshingText` can accept either plaintext or HTML as a string.<br />To display characters normally reserved for HTML, they<br />must be escaped. For example `<Ionic>` would become<br />`&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security) |
| **Attribute**   | `refreshing-text`                                                                                                                                                                                                                                                                                                                                                                |
| **Type**        | `IonicSafeString \| string \| undefined`                                                                                                                                                                                                                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                      |
