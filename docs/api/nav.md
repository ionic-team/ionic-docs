---
title: "ion-nav"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/nav/props.md';
import Events from '@site/static/auto-generated/nav/events.md';
import Methods from '@site/static/auto-generated/nav/methods.md';
import Parts from '@site/static/auto-generated/nav/parts.md';
import CustomProps from '@site/static/auto-generated/nav/custom-props.md';
import Slots from '@site/static/auto-generated/nav/slots.md';

<head>
  <title>ion-nav | Nav View Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-nav is a standalone for loading arbitrary, and pushing new, components on to the stack. Loading Nav view, and pushing others, won't affect overall routers." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import APITOCInline from '@components/page/api/APITOCInline';

<EncapsulationPill type="shadow" />

Nav is a standalone component for loading arbitrary components and pushing new components on to the stack.

Unlike Router Outlet, Nav is not tied to a particular router. This means that if we load a Nav component, and push other components to the stack, they will not affect the app's overall router. This fits use cases where you could have a modal, which needs its own sub-navigation, without making it tied to the apps URL.

## Using NavLink

NavLink is a simplified API when interacting with Nav. Developers can customize the component, pass along component properties, modify the direction of the route animation or define a custom animation when navigating. 

import NavLinkExample from '@site/static/usage/nav/nav-link/index.md';

<NavLinkExample />

## Navigation within a Modal

Modal can use Nav to offer a linear navigation that is independent of the URL.

:::note

The example below uses a reference to Nav and the public method APIs to push and pop views. It is recommended to use NavLink in implementations that do not require this level of granular access and control.

:::

import ModalNavigationExample from '@site/static/usage/nav/modal-navigation/index.md';

<ModalNavigationExample />

## Interfaces

### NavCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface NavCustomEvent extends CustomEvent {
  target: HTMLIonNavElement;
}
```



<Props />
<Events />
<Methods />
<Parts />
<CustomProps />
<Slots />