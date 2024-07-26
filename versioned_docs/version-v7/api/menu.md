---
title: 'ion-menu'
---

import Props from '@ionic-internal/component-api/v7/menu/props.md';
import Events from '@ionic-internal/component-api/v7/menu/events.md';
import Methods from '@ionic-internal/component-api/v7/menu/methods.md';
import Parts from '@ionic-internal/component-api/v7/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/menu/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/menu/slots.md';

<head>
  <title>ion-menu: API Framework Docs for Types of Menu Components</title>
  <meta
    name="description"
    content="ion-menu components are navigation drawers that slide in from the side of the current view. Read our framework docs for the available menu types on Ionic API."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The menu component is a navigation drawer that slides in from the side of the current view. By default, it uses the start side, making it slide in from the left for LTR and right for RTL, but the side can be overridden. The menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types.

The menu element should be a sibling to the root content element. There can be any number of menus attached to the content. These can be controlled from the templates, or programmatically using the `MenuController`.

## Basic Usage

import Basic from '@site/static/usage/v7/menu/basic/index.md';

<Basic />

## Menu Toggle

The [menu toggle](./menu-toggle) component can be used to create custom button that can open or close the menu.

import MenuToggle from '@site/static/usage/v7/menu/toggle/index.md';

<MenuToggle />

## Menu Types

The `type` property can be used to customize how menus display in your application.

import MenuType from '@site/static/usage/v7/menu/type/index.md';

<MenuType />

## Menu Sides

Menus are displayed on the `"start"` side by default. In apps that use left-to-right direction, this is the left side, and in right-to-left apps, this will be the right side. Menus can also be set to display on the `"end"` side, which is the opposite of `"start"`.

If menus on both sides are needed in an app, the menu can be opened by passing the `side` value to the `open` method on `MenuController`. If a side is not provided, the menu on the `"start"` side will be opened. See the [multiple menus](#multiple-menus) section below for an example using `MenuController`.

import Sides from '@site/static/usage/v7/menu/sides/index.md';

<Sides />

## Multiple Menus

When multiple menus exist on the same side, we need refer to them by ID instead of side. Otherwise, the wrong menu may be activated.

import Multiple from '@site/static/usage/v7/menu/multiple/index.md';

<Multiple />

## Theming

### CSS Shadow Parts

import Theming from '@site/static/usage/v7/menu/theming/index.md';

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
