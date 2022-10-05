---
title: "ion-grid"
---
import Props from '@site/static/auto-generated/grid/props.md';
import Events from '@site/static/auto-generated/grid/events.md';
import Methods from '@site/static/auto-generated/grid/methods.md';
import Parts from '@site/static/auto-generated/grid/parts.md';
import CustomProps from '@site/static/auto-generated/grid/custom-props.md';
import Slots from '@site/static/auto-generated/grid/slots.md';

<head>
  <title>Ion-Grid: Display Grids to Build Mobile-First Custom App Layout</title>
  <meta name="description" content="Ion-Grid is a mobile-first flexbox system to build custom application display layouts with a 12 column layout and different breakpoints based on screen size." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The grid is a powerful mobile-first flexbox system for building custom layouts. It is composed of three units — a grid, [row(s)](row.md) and [column(s)](col.md). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.


## Default Breakpoints

The default breakpoints for the grid are defined in the table below. Breakpoints can not be customized at this time. For more information on why they can't be customized, see [Variables in Media Queries](../theming/advanced.md#variables-in-media-queries).

| Name | Value  | Width Property | Offset Property | Push Property | Pull Property | Description                          |
| ---- | ------ | -------------- | --------------- | ------------- | ------------- | ------------------------------------ |
| xs   | 0      | `size`         | `offset`        | `push`        | `pull`        | Set columns when (min-width: 0)      |
| sm   | 576px  | `sizeSm`       | `offsetSm`      | `pushSm`      | `pullSm`      | Set columns when (min-width: 576px)  |
| md   | 768px  | `sizeMd`       | `offsetMd`      | `pushMd`      | `pullMd`      | Set columns when (min-width: 768px)  |
| lg   | 992px  | `sizeLg`       | `offsetLg`      | `pushLg`      | `pullLg`      | Set columns when (min-width: 992px)  |
| xl   | 1200px | `sizeXl`       | `offsetXl`      | `pushXl`      | `pullXl`      | Set columns when (min-width: 1200px) |


## Basic Usage

By default, columns will take up equal width inside of a row for all devices and screen sizes.

import Basic from '@site/static/usage/grid/basic/index.md';

<Basic />

## Column Size

Columns can be set to specific sizes to take up a certain number out of the total number of columns, or to resize their width based on the content.

### Content-based size

By setting the `size` to `"auto"` the column can size itself based on the natural width of its content. This is necessary when setting a column to an absolute width, such as a specific number of pixels. The columns next to the auto-width column will resize to fill the row.

import SizeAuto from '@site/static/usage/grid/size-auto/index.md';

<SizeAuto />


### Specified size

Set the `size` of one column and the others will automatically resize around it. If a size is specified on all of the columns, no columns will resize to fill the remaining space.

import Size from '@site/static/usage/grid/size/index.md';

<Size />

### Responsive size

The `size` property will change the column width for all [breakpoints](#default-breakpoints). Column also provides several size properties with the breakpoint name appended to the end of "size". These properties can be used to change the width of the column based on the screen size. Open the below example in StackBlitz and resize the screen to see the column widths change.

import SizeResponsive from '@site/static/usage/grid/size-responsive/index.md';

<SizeResponsive />


## Column Offset

Columns can be offset to shift to the right by a certain number of columns out of the total number of columns.

### Specified offset

Columns can be moved to the right by using the `offset` property. This property increases the left margin of the column by the number of specified columns. It also shifts the columns to the right of it, if any exist.

import Offset from '@site/static/usage/grid/offset/index.md';

<Offset />

### Responsive offset

The `offset` property will change the column's left margin for all [breakpoints](#default-breakpoints). Column also provides several offset properties with the breakpoint name appended to the end of "offset". These properties can be used to change the offset of the column based on the screen size. Open the below example in StackBlitz and resize the screen to see the column offsets change.

import OffsetResponsive from '@site/static/usage/grid/offset-responsive/index.md';

<OffsetResponsive />


## Column Push & Pull

Columns can be pushed to to the right or pulled to the left by a certain number of columns out of the total number of columns.

### Specified push & pull

Reorder the columns by adding the `push` and `pull` properties. These properties adjust the `left` and `right` of the columns by the specified number of columns making it easy to reorder columns. This will cause columns to overlap if they are shifted to where another column is positioned.

import PushPull from '@site/static/usage/grid/push-pull/index.md';

<PushPull />

### Responsive push & pull

The `push` and `pull` properties will change the column's position for all [breakpoints](#default-breakpoints). Column also provides several `push` and `pull` properties with the breakpoint name appended to the end of "push" / "pull". These properties can be used to change the position of the column based on the screen size. Open the below example in StackBlitz and resize the screen to see the column positions change.

import PushPullResponsive from '@site/static/usage/grid/push-pull-responsive/index.md';

<PushPullResponsive />

## Alignment

### Vertical Alignment

All columns can be vertically aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](/layout/css-utilities#flex-container-properties).

import VerticalAlignment from '@site/static/usage/grid/vertical-alignment/index.md';

<VerticalAlignment />


### Horizontal Alignment

All columns can be horizontally aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](/layout/css-utilities.md#flex-container-properties).

import HorizontalAlignment from '@site/static/usage/grid/horizontal-alignment/index.md';

<HorizontalAlignment />


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
