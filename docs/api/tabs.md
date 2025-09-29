---
title: "ion-tabs"
---
import Props from '@ionic-internal/component-api/v8/tabs/props.md';
import Events from '@ionic-internal/component-api/v8/tabs/events.md';
import Methods from '@ionic-internal/component-api/v8/tabs/methods.md';
import Parts from '@ionic-internal/component-api/v8/tabs/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tabs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tabs/slots.md';

<head>
  <title>ion-tabs: Tab-Based Component for App Top-Level Navigation</title>
  <meta name="description" content="Tabs are top-level components to implement tab-based navigation. Ion-tabs have no styling & work as router outlets for navigation that behaves like native apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tabs are a top level navigation component to implement a tab-based navigation.
The component is a container of individual [Tab](tab.md) components.

The `ion-tabs` component does not have any styling and works as a router outlet in order to handle navigation. It does not provide any UI feedback or mechanism to switch between tabs. In order to do so, an `ion-tab-bar` should be provided as a direct child of `ion-tabs`.

Both `ion-tabs` and `ion-tab-bar` can be used as standalone elements. They don’t depend on each other to work, but they are usually used together in order to implement a tab-based navigation that behaves like a native app.

The `ion-tab-bar` needs a slot defined in order to be projected to the right place in an `ion-tabs` component.

## Basic Usage

Tabs can be used to display different content without the need to change the URL. This is useful when the tabs are not used for navigation, but rather to display different content.

import Basic from '@site/static/usage/v8/tabs/basic/index.md';

<Basic />

## Usage with Router

Tabs can be used with the Ionic router to implement tab-based navigation. The tab bar and active tab will automatically resolve based on the URL. This is the most common pattern for tabs navigation.

import Router from '@site/static/usage/v8/tabs/router/index.md';

<Router />

:::tip Best Practices

Ionic has guides on best practices for routing patterns with tabs. Check out the guides for [Angular](/angular/navigation#working-with-tabs), [React](/react/navigation#working-with-tabs), and [Vue](/vue/navigation#working-with-tabs) for additional information.

:::


## Interfaces

### TabsCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}
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
