---
title: "ion-toolbar"
---
import Props from '@ionic-internal/component-api/v7/toolbar/props.md';
import Events from '@ionic-internal/component-api/v7/toolbar/events.md';
import Methods from '@ionic-internal/component-api/v7/toolbar/methods.md';
import Parts from '@ionic-internal/component-api/v7/toolbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toolbar/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/toolbar/slots.md';

<head>
  <title>Toolbar | Customize App Menu Toolbar Buttons and Icons</title>
  <meta name="description" content="Ion-toolbar component lets you customize toolbar buttons on your app menu. Add fixed toolbars above or below content or use full screen to scroll with content." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Toolbars are generally positioned above or below content and provide content and actions for the current screen. When placed within the [content](./content), toolbars will scroll with the content.

Toolbars can contain several different components including titles, buttons, icons, back buttons, menu buttons, searchbars, segments, progress bars, and more.


## Basic Usage

It is recommended to put a toolbar inside of a [header](./header) or [footer](./footer) for proper positioning. When a toolbar is placed in a header it will appear fixed at the top of the content. When it is placed in a footer it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. A [title](./title) component can be used to display text inside of the toolbar.

import Basic from '@site/static/usage/v7/toolbar/basic/index.md';

<Basic />


## Buttons in Toolbars

Buttons placed in a toolbar should be placed inside of the [buttons](./buttons) component. The buttons component can be positioned inside of the toolbar using a named [slot](#slots). The `"primary"` and `"secondary"` slots behave differently in `ios` and `md` mode.

The buttons component can wrap a standard [button](./button), [back button](./back-button), [menu button](./menu-button), or several of any of them. A button in a toolbar is styled to be clear by default, but this can be changed using the [`fill`](./button#fill) property on the button. The properties included on back button and menu button in this example are for display purposes; see their respective documentation for proper usage.

import Buttons from '@site/static/usage/v7/toolbar/buttons/index.md';

<Buttons />


## Searchbars in Toolbars

A [searchbar](./searchbar) can be placed inside of a toolbar to search through the content. It should be the only child component of the toolbar, and will take up the full width and height.

import Searchbars from '@site/static/usage/v7/toolbar/searchbars/index.md';

<Searchbars />


## Segments in Toolbars

[Segments](./segment) are generally used in toolbars to toggle between two different content views on the same page. They can be placed in a toolbar with other components, such as buttons, but should not be placed alongside a title.

import Segments from '@site/static/usage/v7/toolbar/segments/index.md';

<Segments />


## Progress Bars in Toolbars

A [progress bar](./progress-bar) is used as a loading indicator to show an ongoing process in an app. Progress bars can be placed with any other components inside of a toolbar as they will align with the bottom of the toolbar.

import ProgressBars from '@site/static/usage/v7/toolbar/progress-bars/index.md';

<ProgressBars />


## Theming

### Colors

import Colors from '@site/static/usage/v7/toolbar/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/toolbar/theming/css-properties/index.md';

<CSSProps />


## Borders

In `md` mode, the `<ion-header>` will receive a box-shadow on the bottom, and the `<ion-footer>` will receive a box-shadow on the top.  In `ios` mode, the `<ion-header>` will receive a border on the bottom, and the `<ion-footer>` will receive a border on the top.


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
