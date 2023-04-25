---
title: 'Ion-Grid: Display Grids to Build Mobile-First Custom App Layout'
description: 'Ion-Grid is a mobile-first flexbox system to build custom application display layouts with a 12 column layout and different breakpoints based on screen size.'
sidebar_label: 'ion-grid'
demoUrl: '/docs/demos/api/grid/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/grid/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/grid/props.md';
import Events from '@ionic-internal/component-api/v5/grid/events.md';
import Methods from '@ionic-internal/component-api/v5/grid/methods.md';
import Parts from '@ionic-internal/component-api/v5/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/grid/custom-props.md';
import Slots from '@ionic-internal/component-api/v5/grid/slots.md';

# ion-grid

The grid is a powerful mobile-first flexbox system for building custom layouts.

It is composed of three units — a grid, [row(s)](row.md) and [column(s)](col.md). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

## How it works

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col>
      <div>2 of 3</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

- Grids act as a container for all rows and columns. Grids take up the full width of their container,
  but adding the `fixed` attribute will specify the width per screen size, see [grid size](#grid-size) below.
- Rows are horizontal groups of columns that line the columns up properly.
- Content should be placed within columns, and only columns may be immediate children of rows.
- The `size-{breakpoint}` attributes indicate the number of columns to use out of the default 12 per row.
  So, `size="4"` can be added to a column in order to take up 1/3 of the grid, or 4 of the 12 columns.
- Columns without a value for size will automatically have equal widths. For example, four instances of `size-sm` will each automatically be 25% wide for the small breakpoint and up.
- Column widths are set as a percentage, so they’re always fluid and sized relative to their parent element.
- Columns have padding between individual columns, however, the padding can be removed from the grid and
  columns by adding the `ion-no-padding` class to the grid. See the [CSS Utilities](/docs/guide/layout/css-utilities) for more styles that can be applied to the grid.
- There are five grid tiers, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
- Grid tiers are based on minimum widths, meaning they apply to their tier and all those larger than them
  (e.g., `size-sm="4"` applies to small, medium, large, and extra large devices).
- Grids can easily be customized via CSS variables. See [customizing the grid](#customizing-the-grid).

### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-basic-grid) and for React [here](https://stackblitz.com/edit/ionic-react-basic-grid).

## Grid size

By default, the grid will take up 100% width. To set a specific width based on the screen size, add the `fixed` attribute. The width of the grid for each breakpoint is defined in the `--ion-grid-width-{breakpoint}` CSS variables. For more information, see [customizing the grid](#customizing-the-grid).

| Name | Value  | Description                                       |
| ---- | ------ | ------------------------------------------------- |
| xs   | 100%   | Don't set the grid width for xs screens           |
| sm   | 540px  | Set grid width to 540px when (min-width: 576px)   |
| md   | 720px  | Set grid width to 720px when (min-width: 768px)   |
| lg   | 960px  | Set grid width to 960px when (min-width: 992px)   |
| xl   | 1140px | Set grid width to 1140px when (min-width: 1200px) |

### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-fixed-width-grid) and for React [here](https://stackblitz.com/edit/ionic-react-fixed-width-grid).

## Grid attributes

The grid takes up the entire width of the screen by default. This can be modified using the attribute below.

| Property | Description                                       |
| -------- | ------------------------------------------------- |
| fixed    | Set a max width based on the current screen size. |

## Default breakpoints

The default breakpoints are defined in the table below. Breakpoints can not be customized at this time. For more information on why they can't be customized, see [Variables in Media Queries](/docs/guide/theming/advanced#variables-in-media-queries).

| Name | Value  | Width Prefix | Offset Prefix | Push Prefix | Pull Prefix | Description                          |
| ---- | ------ | ------------ | ------------- | ----------- | ----------- | ------------------------------------ |
| xs   | 0      | `size-`      | `offset-`     | `push-`     | `pull-`     | Set columns when (min-width: 0)      |
| sm   | 576px  | `size-sm-`   | `offset-sm-`  | `push-sm-`  | `pull-sm-`  | Set columns when (min-width: 576px)  |
| md   | 768px  | `size-md-`   | `offset-md-`  | `push-md-`  | `pull-md-`  | Set columns when (min-width: 768px)  |
| lg   | 992px  | `size-lg-`   | `offset-lg-`  | `push-lg-`  | `pull-lg-`  | Set columns when (min-width: 992px)  |
| xl   | 1200px | `size-xl-`   | `offset-xl-`  | `push-xl-`  | `pull-xl-`  | Set columns when (min-width: 1200px) |

## Auto-layout columns

### Equal-width

By default, columns will take up equal width inside of a row for all devices and screen sizes.

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 2</div>
    </ion-col>
    <ion-col>
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col>
      <div>2 of 3</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

### Setting one column width

Set the width of one column and the others will automatically resize around it. This can be done using our predefined grid attributes. In the example below, the other columns will resize no matter the width of the center column.

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="8">
      <div>2 of 3 (wider)</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="6">
      <div>2 of 3 (wider)</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-set-width-col) and for React [here](https://stackblitz.com/edit/ionic-react-set-width-col).

### Variable-width

By setting the `size-{breakpoint}` properties to `"auto"` the column can size itself based on the natural width of its content. This is extremely useful for setting a column width using pixels. The columns next to the variable-width column will resize to fill the row.

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="auto">
      <div>Variable width content</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="auto">
      <div>
        <ion-input placeholder="Variable width input"></ion-input>
      </div>
    </ion-col>
    <ion-col>
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-var-width-col) and for React [here](https://stackblitz.com/edit/ionic-react-var-width-col).

## Responsive attributes

### All breakpoints

To customize a column's width for all devices and screens, set the `size` property. The value of this property determines how many columns this column should take up out of the total available columns.

```html
<ion-grid>
  <ion-row>
    <ion-col size="4">
      <div>1 of 4</div>
    </ion-col>
    <ion-col size="2">
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="2">
      <div>3 of 4</div>
    </ion-col>
    <ion-col size="4">
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

### Stacked to horizontal

Use a combination of width and breakpoint attributes to create a grid that starts out stacked on extra small screens before becoming horizontal on small screens.

```html
<ion-grid>
  <ion-row>
    <ion-col size="12" size-sm>
      <div>1 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>3 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-stacked-horizontal-grid) and for React [here](https://stackblitz.com/edit/ionic-react-stacked-horizontal-grid).

## Reordering

### Offsetting columns

Move columns to the right by adding the `offset` property. This property increases the margin left of the column by the number of specified columns. For example, in the following grid the last column will be offset by 3 columns and take up 3 columns:

```html
<ion-grid>
  <ion-row>
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3" offset="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

Offsets can also be added based on screen breakpoints. Here's an example of a grid where the last column will be offset by 3 columns for `md` screens and up:

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="3">
      <div>1 of 3</div>
    </ion-col>
    <ion-col size-md="3">
      <div>2 of 3</div>
    </ion-col>
    <ion-col size-md="3" offset-md="3">
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-offset-grid-cols) and for React [here](https://stackblitz.com/edit/ionic-react-offset-grid-cols).

### Push and pull

Reorder the columns by adding the `push` and `pull` properties. These properties adjust the `left` and `right` of the columns by the specified number of columns making it easy to reorder columns. For example, in the following grid the column with the `1 of 2` description will actually be the last column and the `2 of 2` will be the first column.

```html
<ion-grid>
  <ion-row>
    <ion-col size="9" push="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3" pull="9">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

Push and pull can also be added based on screen breakpoints. In the following example, the column with the `3 of 3` column description will actually be the first column for `md` screens and up:

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="6" push-md="3">
      <div>1 of 3</div>
    </ion-col>
    <ion-col size-md="3" push-md="3">
      <div>2 of 3</div>
    </ion-col>
    <ion-col size-md="3" pull-md="9">
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-grid-push-pull) and for React [here](https://stackblitz.com/edit/ionic-react-grid-push-pull).

## Alignment

### Vertical alignment

All columns can be vertically aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](/docs/guide/layout/css-utilities#flex-container-properties).

```html
<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

Columns can also align themselves differently than other columns by adding the alignment class directly to the column. For a list of available classes, see [css utilities](/docs/guide/layout/css-utilities#flex-item-properties).

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-align-self-start">
      <div>1 of 4</div>
    </ion-col>
    <ion-col class="ion-align-self-center">
      <div>2 of 4</div>
    </ion-col>
    <ion-col class="ion-align-self-end">
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-grid-vertical-align) and for React [here](https://stackblitz.com/edit/ionic-react-grid-vertical-align).

### Horizontal alignment

All columns can be horizontally aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](/docs/guide/layout/css-utilities#flex-container-properties).

```html
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-end">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-around">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-between">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-grid-horizontal-align) and for React [here](https://stackblitz.com/edit/ionic-react-grid-horizontal-align).

## Customizing the grid

Using our built-in CSS variables, it’s possible to customize the predefined grid attributes. Change the values of the padding, the number of columns, and more.

### Number of columns

The number of grid columns can be modified with the `--ion-grid-columns` CSS variable. By default there are 12 grid columns, but this can be changed to any positive integer and be used to calculate the width of each individual column.

```css
--ion-grid-columns: 12;
```

### Grid Padding

The padding on the grid container can be set for all breakpoints with the `--ion-grid-padding` CSS variable. To override individual breakpoints, use the `--ion-grid-padding-{breakpoint}` CSS variables.

```css
--ion-grid-padding: 5px;

--ion-grid-padding-xs: 5px;
--ion-grid-padding-sm: 5px;
--ion-grid-padding-md: 5px;
--ion-grid-padding-lg: 5px;
--ion-grid-padding-xl: 5px;
```

### Grid width

To customize the width values of the fixed grid based on the screen size, override the values of `--ion-grid-width-{breakpoint}` for each breakpoint.

```css
--ion-grid-width-xs: 100%;
--ion-grid-width-sm: 540px;
--ion-grid-width-md: 720px;
--ion-grid-width-lg: 960px;
--ion-grid-width-xl: 1140px;
```

### Column Padding

The padding on the columns can be set for all breakpoints with the `--ion-grid-column-padding` CSS variable. To override individual breakpoints, use the `--ion-grid-column-padding-{breakpoint}` CSS variables.

```css
--ion-grid-column-padding: 5px;

--ion-grid-column-padding-xs: 5px;
--ion-grid-column-padding-sm: 5px;
--ion-grid-column-padding-md: 5px;
--ion-grid-column-padding-lg: 5px;
--ion-grid-column-padding-xl: 5px;
```

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-grid>
  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6"> ion-col [size="6"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col>
      ion-col
      <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
    <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
    <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-start">
    <ion-col> [start] ion-col </ion-col>
    <ion-col> [start] ion-col </ion-col>
    <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col> [end] ion-col </ion-col>
    <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
    <ion-col> [end] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
    <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
  </ion-row>
</ion-grid>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-grid>
  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6"> ion-col [size="6"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col> ion-col </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col> ion-col </ion-col>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="3"> ion-col [size="3"] </ion-col>
    <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col> ion-col </ion-col>
    <ion-col>
      ion-col
      <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
    <ion-col>
      ion-col
      <br /># <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
    <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
    <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-start">
    <ion-col> [start] ion-col </ion-col>
    <ion-col> [start] ion-col </ion-col>
    <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col> [center] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col> [end] ion-col </ion-col>
    <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
    <ion-col> [end] ion-col </ion-col>
    <ion-col>
      ion-col
      <br /># <br />#
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
    <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
  </ion-row>
</ion-grid>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

export const GridExample: React.FC = () => (
  <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6">ion-col size="6"</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">ion-col size="3"</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol size="3">ion-col size="3"</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">ion-col size="3"</IonCol>
        <IonCol size="3" offset="3">
          ion-col size="3" offset="3"
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
        </IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol className="ion-align-self-start">ion-col start</IonCol>
        <IonCol className="ion-align-self-center">ion-col center</IonCol>
        <IonCol className="ion-align-self-end">ion-col end</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-start">
        <IonCol>start ion-col</IonCol>
        <IonCol>start ion-col</IonCol>
        <IonCol className="ion-align-self-end">start ion-col end</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-center">
        <IonCol>center ion-col</IonCol>
        <IonCol>center ion-col</IonCol>
        <IonCol>center ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-end">
        <IonCol>end ion-col</IonCol>
        <IonCol className="ion-align-self-start">end ion-col start</IonCol>
        <IonCol>end ion-col</IonCol>
        <IonCol>
          ion-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          ion-col size="12" size-sm
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          ion-col size="12" size-md
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6" size-lg offset="3">
          ion-col size="6" size-lg offset="3"
        </IonCol>
        <IonCol size="3" size-lg>
          ion-col size="3" size-lg
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'grid-example',
  styleUrl: 'grid-example.css',
})
export class GridExample {
  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">ion-col [size="6"]</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col>ion-col</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">ion-col [size="3"]</ion-col>
          <ion-col>ion-col</ion-col>
          <ion-col size="3">ion-col [size="3"]</ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">ion-col [size="3"]</ion-col>
          <ion-col size="3" offset="3">
            ion-col [size="3"] [offset="3"]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
          </ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-align-self-start">ion-col [start]</ion-col>
          <ion-col class="ion-align-self-center">ion-col [center]</ion-col>
          <ion-col class="ion-align-self-end">ion-col [end]</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-start">
          <ion-col>[start] ion-col</ion-col>
          <ion-col>[start] ion-col</ion-col>
          <ion-col class="ion-align-self-end">[start] ion-col [end]</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center">
          <ion-col>[center] ion-col</ion-col>
          <ion-col>[center] ion-col</ion-col>
          <ion-col>[center] ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-end">
          <ion-col>[end] ion-col</ion-col>
          <ion-col class="ion-align-self-start">[end] ion-col [start]</ion-col>
          <ion-col>[end] ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
          <ion-col size="12" sizeSm="">
            ion-col [size="12"] [sizeSm]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
          <ion-col size="12" sizeMd="">
            ion-col [size="12"] [sizeMd]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6" sizeLg="" offset="3">
            ion-col [size="6"] [sizeLg] [offset="3"]
          </ion-col>
          <ion-col size="3" sizeLg="">
            ion-col [size="3"] [sizeLg]
          </ion-col>
        </ion-row>
      </ion-grid>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-grid>
    <ion-row>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6"> ion-col [size="6"] </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col> ion-col </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
      <ion-col> ion-col </ion-col>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="3"> ion-col [size="3"] </ion-col>
      <ion-col size="3" offset="3"> ion-col [size="3"] [offset="3"] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col> ion-col </ion-col>
      <ion-col>
        ion-col
        <br />#
      </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
      <ion-col>
        ion-col
        <br /># <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col class="ion-align-self-start"> ion-col [start] </ion-col>
      <ion-col class="ion-align-self-center"> ion-col [center] </ion-col>
      <ion-col class="ion-align-self-end"> ion-col [end] </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-start">
      <ion-col> [start] ion-col </ion-col>
      <ion-col> [start] ion-col </ion-col>
      <ion-col class="ion-align-self-end"> [start] ion-col [end] </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-center">
      <ion-col> [center] ion-col </ion-col>
      <ion-col> [center] ion-col </ion-col>
      <ion-col> [center] ion-col </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row class="ion-align-items-end">
      <ion-col> [end] ion-col </ion-col>
      <ion-col class="ion-align-self-start"> [end] ion-col [start] </ion-col>
      <ion-col> [end] ion-col </ion-col>
      <ion-col>
        ion-col
        <br /># <br />#
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
      <ion-col size="12" size-sm> ion-col [size="12"] [size-sm] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
      <ion-col size="12" size-md> ion-col [size="12"] [size-md] </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6" size-lg offset="3"> ion-col [size="6"] [size-lg] [offset="3"] </ion-col>
      <ion-col size="3" size-lg> ion-col [size="3"] [size-lg] </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
  });
</script>
```

</TabItem>

</Tabs>

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
