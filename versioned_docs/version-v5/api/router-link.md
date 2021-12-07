---
title: 'Router Link | Navigating The ion-router-link Component'
description: 'Use the ion-router-link component to navigate to a specified link. The router link can accept an href for location and a direction for the transition animation.'
sidebar_label: 'ion-router-link'
demoUrl: '/docs/demos/api/router-link/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/router-link/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-router-link

The router link component is used for navigating to a specified link. Similar to the browser's anchor tag, it can accept a href for the location, and a direction for the transition animation.

> Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use an `<a>` and `routerLink` with the Angular router.

## Properties

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### href

|                 |                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Contains a URL or a URL fragment that the hyperlink points to.<br />If this property is set, an anchor tag will be rendered. |
| **Attribute**   | `href`                                                                                                                       |
| **Type**        | `string \| undefined`                                                                                                        |
| **Default**     | `undefined`                                                                                                                  |

### rel

|                 |                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies the relationship of the target object to the link object.<br />The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). |
| **Attribute**   | `rel`                                                                                                                                                                                       |
| **Type**        | `string \| undefined`                                                                                                                                                                       |
| **Default**     | `undefined`                                                                                                                                                                                 |

### routerAnimation

|                 |                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition animation when navigating to<br />another page using `href`. |
| **Attribute**   | `undefined`                                                                                                   |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined`                                                       |
| **Default**     | `undefined`                                                                                                   |

### routerDirection

|                 |                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Description** | When using a router, it specifies the transition direction when navigating to<br />another page using `href`. |
| **Attribute**   | `router-direction`                                                                                            |
| **Type**        | `"back" \| "forward" \| "root"`                                                                               |
| **Default**     | `'forward'`                                                                                                   |

### target

|                 |                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Specifies where to display the linked URL.<br />Only applies when an `href` is provided.<br />Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. |
| **Attribute**   | `target`                                                                                                                                                      |
| **Type**        | `string \| undefined`                                                                                                                                         |
| **Default**     | `undefined`                                                                                                                                                   |

## CSS Custom Properties

| Name           | Description                   |
| -------------- | ----------------------------- |
| `--background` | Background of the router link |
| `--color`      | Text color of the router link |
