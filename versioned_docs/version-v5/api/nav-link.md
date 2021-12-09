---
sidebar_label: 'ion-nav-link'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-nav-link

A navigation link is used to navigate to a specified component. The component can be navigated to by going `forward`, `back` or as a `root` component.

It is the element form of calling the `push()`, `pop()`, and `setRoot()` methods on the navigation controller.

## Properties

### component

|                 |                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Description** | Component to navigate to. Only used if the `routerDirection` is `"forward"` or `"root"`. |
| **Attribute**   | `component`                                                                              |
| **Type**        | `Function \| HTMLElement \| ViewController \| null \| string \| undefined`               |
| **Default**     | `undefined`                                                                              |

### componentProps

|                 |                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Description** | Data you want to pass to the component as props. Only used if the `"routerDirection"` is `"forward"` or `"root"`. |
| **Attribute**   | `undefined`                                                                                                       |
| **Type**        | `undefined \| { [key: string]: any; }`                                                                            |
| **Default**     | `undefined`                                                                                                       |

### routerAnimation

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | The transition animation when navigating to another page. |
| **Attribute**   | `undefined`                                               |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`   |
| **Default**     | `undefined`                                               |

### routerDirection

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | The transition direction when navigating to another page. |
| **Attribute**   | `router-direction`                                        |
| **Type**        | `"back" \| "forward" \| "root"`                           |
| **Default**     | `'forward'`                                               |
