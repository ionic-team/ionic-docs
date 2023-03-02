---
title: 'ion-menu'
---

import Props from '@ionic-internal/component-api/v6/menu/props.md';
import Events from '@ionic-internal/component-api/v6/menu/events.md';
import Methods from '@ionic-internal/component-api/v6/menu/methods.md';
import Parts from '@ionic-internal/component-api/v6/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/menu/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/menu/slots.md';

<head>
  <title>ion-menu: API Framework Docs for Types of Menu Components</title>
  <meta
    name="description"
    content="ion-menu components are navigation drawers that slide in from the side of the current view. Read our framework docs for the available menu types on Ionic API."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Menu component is a navigation drawer that slides in from the side of the current view.
By default, it slides in from the left, but the side can be overridden.
The menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types.
The menu element should be a sibling to the root content element.
There can be any number of menus attached to the content.
These can be controlled from the templates, or programmatically using the MenuController.

## Basic Usage

import BasicUsage from '@site/static/usage/v6/menu/basic/index.md';

<BasicUsage />

## Menu Toggle

The [ion-menu-toggle](./menu-toggle) component can be used to create custom button that can open or close the menu.

import MenuToggle from '@site/static/usage/v6/menu/toggle/index.md';

<MenuToggle />

## Menu Types

The `type` property can be used to customize how menus display in your application.

import MenuType from '@site/static/usage/v6/menu/type/index.md';

<MenuType />

## Theming

### CSS Shadow Parts

import Theming from '@site/static/usage/v6/menu/theming/index.md';

<Theming />

## Interfaces

### MenuCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface MenuCustomEvent<T = any> extends CustomEvent {
  detail: T;
  target: HTMLIonMenuElement;
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
