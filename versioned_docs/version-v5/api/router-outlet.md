---
sidebar_label: 'ion-router-outlet'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v5/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v5/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v5/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/router-outlet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/router-outlet/slots.md';

# ion-router-outlet

Router outlet is a component used in routing within an Angular or Vue app. It behaves in a similar way to Angular's built-in router outlet component and Vue's router view component, but contains the logic for providing a stacked navigation, and animating views in and out.

> Note: this component should only be used with Angular and Vue projects. For vanilla or Stencil JavaScript projects, use [`ion-router`](router.md) and [`ion-route`](route.md).

Although router outlet has methods for navigating around, it's recommended to use the navigation methods in your framework's router.

## Life Cycle Hooks

Routes rendered in a Router Outlet have access to specific Ionic events that are wired up to animations

| Event Name         | Trigger                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `ionViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `ionViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `ionViewWillLeave` | Fired when the component routing from is about to animate.         |
| `ionViewDidLeave`  | Fired when the component routing to has finished animating.        |

These event tie into Ionic's animation system and can be used to coordinate parts of your app when a Components is done with its animation. These events are not a replacement for your framework's own event system, but an addition.

For handling Router Guards, the older `ionViewCanEnter` and `ionViewCanLeave` have been replaced with their framework specific equivalent. For Angular, there are [Router Guards](https://angular.io/guide/router#milestone-5-route-guards).

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
