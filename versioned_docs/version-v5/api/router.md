---
title: 'ion-router: Router Component to Coordinate URL Navigation'
description: 'ion-router is a URL coordinator for navigation outlets of ionic: ion-nav and ion-tabs. Router components handle routing inside vanilla and Stencil JavaScript.'
sidebar_label: 'ion-router'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-router

The router is a component for handling routing inside vanilla and Stencil JavaScript projects.

> Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use [`ion-router-outlet`](router-outlet.md) and the Angular router.

Apps should have a single `ion-router` component in the codebase.
This component controls all interactions with the browser history and it aggregates updates through an event system.

`ion-router` is just a URL coordinator for the navigation outlets of ionic: `ion-nav` and `ion-tabs`.

That means the `ion-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `ion-nav` and `ion-tabs` what and when to "show" based on the browser's URL.

In order to configure this relationship between components (to load/select) and URLs, `ion-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

## Usage

```html
<ion-router>
  <ion-route component="page-tabs">
    <ion-route url="/schedule" component="tab-schedule">
      <ion-route component="page-schedule"></ion-route>
      <ion-route url="/session/:sessionId" component="page-session"></ion-route>
    </ion-route>

    <ion-route url="/speakers" component="tab-speaker">
      <ion-route component="page-speaker-list"></ion-route>
      <ion-route url="/session/:sessionId" component="page-session"></ion-route>
      <ion-route url="/:speakerId" component="page-speaker-detail"></ion-route>
    </ion-route>

    <ion-route url="/map" component="page-map"></ion-route>
    <ion-route url="/about" component="page-about"></ion-route>
  </ion-route>

  <ion-route url="/tutorial" component="page-tutorial"></ion-route>
  <ion-route url="/login" component="page-login"></ion-route>
  <ion-route url="/account" component="page-account"></ion-route>
  <ion-route url="/signup" component="page-signup"></ion-route>
  <ion-route url="/support" component="page-support"></ion-route>
</ion-router>
```

## Properties

### root

|                 |                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------- |
| **Description** | By default `ion-router` will match the routes at the root path ("/").<br />That can be changed when |
| **Attribute**   | `root`                                                                                              |
| **Type**        | `string`                                                                                            |
| **Default**     | `'/'`                                                                                               |

### useHash

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The router can work in two "modes":<br />- With hash: `/index.html#/path/to/page`<br />- Without hash: `/path/to/page`<br /><br />Using one or another might depend in the requirements of your app and/or where it's deployed.<br /><br />Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might<br />requires additional server-side configuration in order to properly work.<br /><br />On the other side hash-navigation is much easier to deploy, it even works over the file protocol.<br /><br />By default, this property is `true`, change to `false` to allow hash-less URLs. |
| **Attribute**   | `use-hash`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Type**        | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Default**     | `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Events

| Name                 | Description                                     |
| -------------------- | ----------------------------------------------- |
| `ionRouteDidChange`  | Emitted when the route had changed              |
| `ionRouteWillChange` | Event emitted when the route is about to change |

## Methods

### back

|                 |                                                 |
| --------------- | ----------------------------------------------- |
| **Description** | Go back to previous page in the window.history. |
| **Signature**   | `back() => Promise<void>`                       |

### push

|                 |                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Description** | Navigate to the specified URL.                                                                                  |
| **Signature**   | `push(url: string, direction?: RouterDirection, animation?: AnimationBuilder \| undefined) => Promise<boolean>` |
