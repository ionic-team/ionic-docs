---
title: 'ion-router'
---

import Props from '@ionic-internal/component-api/v10/router/props.mdx';
import Events from '@ionic-internal/component-api/v10/router/events.mdx';
import Methods from '@ionic-internal/component-api/v10/router/methods.mdx';
import Parts from '@ionic-internal/component-api/v10/router/parts.mdx';
import CustomProps from '@ionic-internal/component-api/v10/router/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v10/router/slots.mdx';

<head>
  <title>ion-router: Router Component to Coordinate URL Navigation</title>
  <meta
    name="description"
    content="ion-router is a URL coordinator for navigation outlets of ionic: ion-tabs and ion-router-outlet. Router components handle routing inside vanilla and Stencil JavaScript."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

The router is a component for handling routing inside vanilla and Stencil JavaScript projects.

:::note

Note: This component should only be used with vanilla and Stencil JavaScript projects. See the routing guides for [Angular](../angular/navigation), [React](../react/navigation), and [Vue](../vue/navigation) for framework-specific routing solutions.

:::

Apps should have a single `ion-router` component in the codebase.
This component controls all interactions with the browser history and it aggregates updates through an event system.

`ion-router` is just a URL coordinator for the navigation outlets of ionic: `ion-tabs` and `ion-router-outlet`.

That means the `ion-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `ion-tabs` and `ion-router-outlet` what and when to "show" based on the browser's URL.

To configure this relationship between components (to load/select) and URLs, `ion-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

## Basic Usage

import BasicExample from '@site/static/usage/v10/router/basic/index.mdx';

<BasicExample />

## Using ion-nav within a Routed Page

`ion-router` and [`ion-nav`](./nav.md) are separate systems. `ion-router` coordinates URL-based navigation through `ion-router-outlet`, while `ion-nav` manages a local stack that is independent of the URL. `ion-nav` does not integrate with `ion-router`: placing an `ion-nav` inside an `ion-router` does not turn it into a routed outlet, and pushing or popping views on an `ion-nav` never changes the URL.

The two can still be composed. A routed page rendered by `ion-router-outlet` can host its own `ion-nav` for local, URL-less navigation within that page. In the example below, navigating to `/details` updates the URL, but stepping through the `ion-nav` inside that page does not.

import NavWithinPageExample from '@site/static/usage/v10/router/nav-within-page/index.mdx';

<NavWithinPageExample />

## Interfaces

### RouterEventDetail

```typescript
interface RouterEventDetail {
  from: string | null;
  redirectedFrom: string | null;
  to: string;
}
```

### RouterCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLIonRouterElement;
}
```

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
