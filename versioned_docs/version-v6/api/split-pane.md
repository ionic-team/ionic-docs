---
title: 'ion-split-pane'
---

import Props from '@ionic-internal/component-api/v6/split-pane/props.md';
import Events from '@ionic-internal/component-api/v6/split-pane/events.md';
import Methods from '@ionic-internal/component-api/v6/split-pane/methods.md';
import Parts from '@ionic-internal/component-api/v6/split-pane/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/split-pane/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/split-pane/slots.md';

<head>
  <title>ion-split-pane: Split Plane View for Menus and Multi-View Layouts</title>
  <meta
    name="description"
    content="ion-split-pane is useful when creating multi-view app layouts. It allows UI elements, like menus, to be displayed as the viewport width increases."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A split pane is useful when creating multi-view layouts. It allows UI elements, like menus, to be
displayed as the viewport width increases.

If the device's screen width is below a certain size, the split pane will collapse and the menu will be hidden. This is ideal for creating an app that will be served in a browser and deployed through the app store to phones and tablets.

## Basic Usage

:::note
This demo sets the `when` property to `'xs'` so the split pane always shows up. Your Ionic application does not need this if you want the split pane to collapse on smaller viewports. See [Setting Breakpoints](#setting-breakpoints) for more information.
:::

import Basic from '@site/static/usage/v6/split-pane/basic/index.md';

<Basic />

## Setting Breakpoints

By default, the split pane will expand when the screen is larger than 992px. To customize this, pass a breakpoint in the `when` property. The `when` property can accept a boolean value, any valid media query, or one of Ionic's predefined sizes.

```html
<!-- can be "xs", "sm", "md", "lg", or "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- can be any valid media query https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```

| Size | Value                 | Description                                                           |
| ---- | --------------------- | --------------------------------------------------------------------- |
| `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |
| `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |
| `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px                       |
| `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px (default break point) |
| `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |

## Theming

### CSS Custom Properties

import CSSProperties from '@site/static/usage/v6/split-pane/theming/css-properties/index.md';

<CSSProperties />

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
