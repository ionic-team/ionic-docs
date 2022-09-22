---
title: "ion-toolbar"
---
import Props from '@site/static/auto-generated/toolbar/props.md';
import Events from '@site/static/auto-generated/toolbar/events.md';
import Methods from '@site/static/auto-generated/toolbar/methods.md';
import Parts from '@site/static/auto-generated/toolbar/parts.md';
import CustomProps from '@site/static/auto-generated/toolbar/custom-props.md';
import Slots from '@site/static/auto-generated/toolbar/slots.md';

<head>
  <title>Toolbar | Customize App Menu Toolbar Buttons and Icons</title>
  <meta name="description" content="Ion-toolbar component lets you customize toolbar buttons on your app menu. Add fixed toolbars above or below content or use full screen to scroll with content." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

Toolbars are generally positioned above or below content and provide content and actions for the current screen. It is recommended to put a toolbar inside of a [header](./header) or [footer](./footer) for proper positioning. When a toolbar is placed in a header it will appear fixed at the top of the content. When it is placed in a footer it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. When placed within the [content](./content), toolbars will scroll with the content.

## Basic Usage

import Basic from '@site/static/usage/toolbar/basic/index.md';

<Basic />


## Buttons in Toolbars

Buttons placed in a toolbar should be placed inside of the [buttons](./buttons) component. The buttons component can be positioned inside of the toolbar using a named [slot](#slots). The `"primary"` and `"secondary"` slots behave differently in `ios` and `md` mode. The buttons component can wrap a standard [button](./button), [back button](./back-button), or a [menu button](./menu-button). A button in a toolbar is styled to be clear by default, but this can be changed using the [`fill`](./button#fill) property on the button. Back buttons are linked to the app's navigation and will only show up when there is a previous page in the navigation stack, but we can bypass this by setting the `defaultHref` property. The menu button is set to only show when a linked menu is active, but this can be overridden by setting the `autoHide` to `false`.

import Buttons from '@site/static/usage/toolbar/buttons/index.md';

<Buttons />


## Searchbars in Toolbars

import Searchbars from '@site/static/usage/toolbar/searchbars/index.md';

<Searchbars />


## Segments in Toolbars

import Segments from '@site/static/usage/toolbar/segments/index.md';

<Segments />


## Progress Bars in Toolbars

import ProgressBars from '@site/static/usage/toolbar/progress-bars/index.md';

<ProgressBars />


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
