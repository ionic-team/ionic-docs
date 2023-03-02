---
title: "ion-grid"
---
import Props from '@ionic-internal/component-api/v7/grid/props.md';
import Events from '@ionic-internal/component-api/v7/grid/events.md';
import Methods from '@ionic-internal/component-api/v7/grid/methods.md';
import Parts from '@ionic-internal/component-api/v7/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/grid/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/grid/slots.md';

<head>
  <title>Ion-Grid: Display Grids to Build Mobile-First Custom App Layout</title>
  <meta name="description" content="Ion-Grid is a mobile-first flexbox system to build custom application display layouts with a 12 column layout and different breakpoints based on screen size." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The grid is a powerful mobile-first flexbox system for building custom layouts. It is composed of three units — a grid, [row(s)](row.md) and [column(s)](col.md). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

## Overview

- Grids act as a container for all rows and columns. Grids take up the full width of their container,
  but adding the `fixed` property will set the width based on the screen size, see [Fixed Grid](#fixed-grid) below.
- Rows are horizontal groups of columns that line the columns up properly.
- Content should be placed within columns, and only columns may be immediate children of rows.
- The `size` property indicates the number of columns to use out of the default 12 per row.
  So, `size="4"` can be added to a column in order to take up 1/3 of the grid, or 4 of the 12 columns.
- Columns without a value for size will automatically have equal widths. For example, four columns will each automatically be 25% wide.
- Column widths are set as a percentage, so they’re always fluid and sized relative to their parent element.
- There is padding between individual columns. However, the padding can be removed from the grid and
  columns by adding the `ion-no-padding` class to the grid. See the [CSS Utilities](../layout/css-utilities) for more styles that can be applied to the grid.
- There are five grid tiers, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
- Grid tiers are based on minimum widths, meaning they apply to their tier and all those larger than them
  (e.g., `size-sm="4"` applies to small, medium, large, and extra large devices).
- Grids can be customized via CSS variables. See [Customizing the Grid](#customizing-the-grid).

## Default Breakpoints

The default breakpoints for the grid and the corresponding properties are defined in the table below. Breakpoint values can not be customized at this time. For more information on why they can't be customized, see [Variables in Media Queries](../theming/advanced#variables-in-media-queries).

| Name | Value  | Width Property | Offset Property | Push Property | Pull Property | Description                          |
| ---- | ------ | -------------- | --------------- | ------------- | ------------- | ------------------------------------ |
| xs   | 0      | `size`         | `offset`        | `push`        | `pull`        | Set columns when (min-width: 0)      |
| sm   | 576px  | `sizeSm`       | `offsetSm`      | `pushSm`      | `pullSm`      | Set columns when (min-width: 576px)  |
| md   | 768px  | `sizeMd`       | `offsetMd`      | `pushMd`      | `pullMd`      | Set columns when (min-width: 768px)  |
| lg   | 992px  | `sizeLg`       | `offsetLg`      | `pushLg`      | `pullLg`      | Set columns when (min-width: 992px)  |
| xl   | 1200px | `sizeXl`       | `offsetXl`      | `pushXl`      | `pullXl`      | Set columns when (min-width: 1200px) |


## Basic Usage

By default, columns will take up equal width inside of a row for all devices and screen sizes.

import Basic from '@site/static/usage/v7/grid/basic/index.md';

<Basic />


## Fixed Grid

Grids take up 100% width of their container. By adding the `fixed` property to the grid, the width will be set based on the screen size. The width of the grid for each breakpoint is listed in the table below, but it can be customized. For more information, see [Customizing the Grid](#customizing-the-grid). Open the below example in StackBlitz and resize the screen to see the grid width change.

| Name | Value  | Description                                       |
| ---- | ------ | ------------------------------------------------- |
| xs   | 100%   | Width is 100% for xs screens                      |
| sm   | 540px  | Set grid width to 540px when (min-width: 576px)   |
| md   | 720px  | Set grid width to 720px when (min-width: 768px)   |
| lg   | 960px  | Set grid width to 960px when (min-width: 992px)   |
| xl   | 1140px | Set grid width to 1140px when (min-width: 1200px) |

import Fixed from '@site/static/usage/v7/grid/fixed/index.md';

<Fixed />


## Column Size

Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content. The default number of columns is 12, but this can be customized. See the [Number of Columns](#number-of-columns) section below for more information.

### Content-based size

By setting the `size` to `"auto"` the column can size itself based on the natural width of its content. This is necessary when setting a column to an absolute width, such as a specific number of pixels. The columns next to the auto-width column will resize to fill the row.

import SizeAuto from '@site/static/usage/v7/grid/size-auto/index.md';

<SizeAuto />


### Specified size

Set the `size` of a column and the others will automatically resize around it. If a size is specified on all of the columns and it doesn't add up to the total number of columns, there will be empty space after the columns.

import Size from '@site/static/usage/v7/grid/size/index.md';

<Size />

### Responsive size

The `size` property will change the column width for all [breakpoints](#default-breakpoints). Column also provides several size properties with the breakpoint name appended to the end of "size". These properties can be used to change the width of the column based on the screen size. Open the below example in StackBlitz and resize the screen to see the column widths change.

import SizeResponsive from '@site/static/usage/v7/grid/size-responsive/index.md';

<SizeResponsive />


## Column Offset

Columns can be offset to shift to the right by a certain number of columns out of the total number of columns.

### Specified offset

Columns can be moved to the right by using the `offset` property. This property increases the left margin of the column by the number of specified columns. It also shifts the columns to the right of it, if any exist.

import Offset from '@site/static/usage/v7/grid/offset/index.md';

<Offset />

### Responsive offset

The `offset` property will change the column's left margin for all [breakpoints](#default-breakpoints). Column also provides several offset properties with the breakpoint name appended to the end of "offset". These properties can be used to change the offset of the column based on the screen size. Open the below example in StackBlitz and resize the screen to see the column offsets change.

import OffsetResponsive from '@site/static/usage/v7/grid/offset-responsive/index.md';

<OffsetResponsive />


## Column Push & Pull

Columns can be pushed to to the right or pulled to the left by a certain number of columns out of the total number of columns.

### Specified push & pull

Reorder the columns by adding the `push` and `pull` properties. These properties adjust the `left` and `right` of the columns by the specified number of columns making it easy to reorder columns. This will cause columns to overlap if they are shifted to where another column is positioned.

import PushPull from '@site/static/usage/v7/grid/push-pull/index.md';

<PushPull />

### Responsive push & pull

The `push` and `pull` properties will change the column's position for all [breakpoints](#default-breakpoints). Column also provides several `push` and `pull` properties with the breakpoint name appended to the end of "push" / "pull". These properties can be used to change the position of the column based on the screen size. Open the below example in StackBlitz and resize the screen to see the column positions change.

import PushPullResponsive from '@site/static/usage/v7/grid/push-pull-responsive/index.md';

<PushPullResponsive />

## Alignment

### Vertical Alignment

All columns can be vertically aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](/layout/css-utilities#flex-container-properties).

import VerticalAlignment from '@site/static/usage/v7/grid/vertical-alignment/index.md';

<VerticalAlignment />


### Horizontal Alignment

All columns can be horizontally aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](/layout/css-utilities.md#flex-container-properties).

import HorizontalAlignment from '@site/static/usage/v7/grid/horizontal-alignment/index.md';

<HorizontalAlignment />

## Customizing the Grid

Using our built-in CSS variables, it’s possible to customize the predefined grid attributes. Change the values of the padding, the number of columns, and more.

### Fixed Width

The width of a fixed grid can be set for all breakpoints with the `--ion-grid-width` CSS variable. To override individual breakpoints, use the `--ion-grid-width-{breakpoint}` CSS variables. The default value for each of the breakpoints can be found in the [Fixed Grid](#fixed-grid) section. Open the below example in StackBlitz and resize the screen to see the grid width change.

import Width from '@site/static/usage/v7/grid/customizing/width/index.md';

<Width />

### Number of Columns

The number of grid columns can be modified with the `--ion-grid-columns` CSS variable. By default there are 12 grid columns, but this can be changed to any positive integer and be used to calculate the width of each individual column.

import ColumnNumber from '@site/static/usage/v7/grid/customizing/column-number/index.md';

<ColumnNumber />

### Padding

The padding on the grid container can be set for all breakpoints with the `--ion-grid-padding` CSS variable. To override individual breakpoints, use the `--ion-grid-padding-{breakpoint}` CSS variables.

The padding on the columns can be set for all breakpoints with the `--ion-grid-column-padding` CSS variable. To override individual breakpoints, use the `--ion-grid-column-padding-{breakpoint}` CSS variables.

import Padding from '@site/static/usage/v7/grid/customizing/padding/index.md';

<Padding />

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
