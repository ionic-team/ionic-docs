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


## Buttons

Buttons placed in a toolbar should be placed inside of the `<ion-buttons>` element. The `<ion-buttons>` element can be positioned inside of the toolbar using a named slot. The below chart has a description of each slot.

| Slot         | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `secondary`  | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode.  |
| `primary`    | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.      |
| `start`      | Positions to the `left` of the content in LTR, and to the `right` in RTL.                                |
| `end`        | Positions to the `right` of the content in LTR, and to the `left` in RTL.                                |


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
