---
disableHtmlPreviews: true
---

# Responsive Grid

<p class="intro" markdown="1">
The grid is a powerful mobile-first flexbox system for building custom layouts.
It is heavily influenced by [Bootstrap's grid system](http://v4-alpha.getbootstrap.com/layout/grid/).

The grid is composed of three units — a grid, row(s) and column(s). Columns will expand to fill their
row, and will resize to fit additional columns. It is based on a 12 column layout with different
breakpoints based on the screen size. The number of columns and breakpoints can be fully customized
using CSS.
</p>


## How it works

<ion-grid>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col>
      2 of 3
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col>
      2 of 3
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>
```

The grid is a mobile-first system made up of any number of rows and columns.
It is built with flexbox making it extremely responsive.

Here's how it works:

- Grids act as a container for all rows and columns. Grids take up the full width of their container,
but adding the `fixed` attribute will specify the width per screen size, see [grid size](#grid-size) below.
- Rows are horizontal groups of columns that line the columns up properly.
- Content should be placed within columns, and only columns may be immediate children of rows.
- Grid columns without a specified width will automatically have equal widths.
For example, four instances of `col-sm` will each automatically be 25% wide for small breakpoints.
- Column attributes indicate the number of columns to use out of the default 12 per row.
So, `col-4` can be added in order to have three equal-width columns.
- Column widths are set as a percentage, so they’re always fluid and sized relative to their parent element.
- Columns have padding between individual columns, however, the padding can be removed from the grid and
columns by adding `no-padding` on the grid.
- There are five grid tiers by default, one for each responsive breakpoint: all breakpoints (extra small),
small, medium, large, and extra large.
- Grid tiers are based on minimum widths, meaning they apply to their tier and all those larger than it
(e.g., `col-sm-4` applies to small, medium, large, and extra large devices).
- Grids can easily be customized via CSS variables. See [customizing the grid](#customizing-the-grid).

There are some [known bugs with flexbox](https://github.com/philipwalton/flexbugs) that
should be checked prior to creating issues with Ionic.

## Grid size

By default, the grid will take up 100% width. To set a maximum width based on the screen
size add the `fixed` attribute. The maximum width of the grid for each breakpoint is defined
in the `--grid-max-widths` CSS variable. For more information, see
[customizing the grid](#customizing-the-grid).

| Name     | Value    | Description                                         |
|----------|----------|-----------------------------------------------------|
| xs       | auto     | Don't set the grid width for xs screens             |
| sm       | 540px    | Set grid width to 540px when (min-width: 576px)     |
| md       | 720px    | Set grid width to 720px when (min-width: 768px)     |
| lg       | 960px    | Set grid width to 960px when (min-width: 992px)     |
| xl       | 1140px   | Set grid width to 1140px when (min-width: 1200px)   |


## Grid attributes

The grid takes up full width and has padding added to it based on the screen size. There are two
attributes that can be used to adjust this behavior.

| Property        | Description                                                                      |
|-----------------|----------------------------------------------------------------------------------|
| no-padding      | Removes padding from the grid and immediate children columns.                    |
| fixed           | Set a max width based on the screen size.                                        |


## Row attributes

Rows are horizontal components of the [grid](../Grid) system and contain varying numbers of
[columns](../Col). They ensure the columns are positioned properly.

By default, columns will stretch to fill the entire height of the row and wrap when necessary.
There are several attributes that can be added to a row to customize this behavior.

| Property                    | Description                                                                                                                                      |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| nowrap                      | Adds `flex-wrap: nowrap`. Forces the columns to a single row.                                                                                    |
| wrap-reverse                | Adds `flex-wrap: wrap-reverse`. The columns will wrap in reverse.                                                                                |
| align-items-start           | Adds `align-items: flex-start`. All columns will be vertically aligned at the top, unless they specify their own alignment.                      |
| align-items-center          | Adds `align-items: center`. All columns will be vertically aligned in the center, unless they specify their own alignment.                       |
| align-items-end             | Adds `align-items: flex-end`. All columns will be vertically aligned at the bottom, unless they specify their own alignment.                     |
| align-items-stretch         | Adds `align-items: stretch`. All columns will be stretched to take up the entire height of the row, unless they specify their own alignment.     |
| align-items-baseline        | Adds `align-items: baseline`. All columns will be vertically aligned at their baselines, unless they specify their own alignment.                |
| justify-content-start       | Adds `justify-content: start`. All columns will be horizontally aligned at the start.                                                            |
| justify-content-center      | Adds `justify-content: center`. All columns will be horizontally aligned at the center.                                                          |
| justify-content-end         | Adds `justify-content: end`. All columns will be horizontally aligned at the end.                                                                |
| justify-content-around      | Adds `justify-content: space-around`. All columns will be horizontally aligned with equal space around them.                                     |
| justify-content-between     | Adds `justify-content: space-between`. All columns will be horizontally aligned with a half-size space on either end.                            |


## Column attributes

Columns are cellular components of the [grid](../Grid) system and go inside of a [row](../Row).
They will expand to fill their row. All content within a grid should go inside of a column.

By default, columns will stretch to fill the entire height of the row.
There are several attributes that can be added to a column to customize this behavior.

| Property              | Description                                                                                                 |
|-----------------------|-------------------------------------------------------------------------------------------------------------|
| align-self-start      | Adds `align-self: flex-start`. The column will be vertically aligned at the top.                            |
| align-self-center     | Adds `align-self: center`. The column will be vertically aligned in the center.                             |
| align-self-end        | Adds `align-self: flex-end`. The column will be vertically aligned at the bottom.                           |
| align-self-stretch    | Adds `align-self: stretch`. The column will be stretched to take up the entire height of the row.           |
| align-self-baseline   | Adds `align-self: baseline`. The column will be vertically aligned at its baseline.                         |


## Default breakpoints

The default breakpoints are defined by the `--grid-breakpoints` CSS variable. It can be
customized to use different values for the breakpoint, rename and add/remove breakpoints.
For more information, see [customizing the grid](#customizing-the-grid).

| Name     | Value    | Width Prefix | Offset Prefix | Push Prefix  | Pull Prefix | Description                                       |
|----------|----------|--------------|---------------|--------------|-------------|---------------------------------------------------|
| xs       | 0        | `col-`       | `offset-`     | `push-`      | `pull-`     | Set columns when (min-width: 0)                   |
| sm       | 576px    | `col-sm-`    | `offset-sm-`  | `push-sm-`   | `pull-sm-`  | Set columns when (min-width: 576px)               |
| md       | 768px    | `col-md-`    | `offset-md-`  | `push-md-`   | `pull-md-`  | Set columns when (min-width: 768px)               |
| lg       | 992px    | `col-lg-`    | `offset-lg-`  | `push-lg-`   | `pull-lg-`  | Set columns when (min-width: 992px)               |
| xl       | 1200px   | `col-xl-`    | `offset-xl-`  | `push-xl-`   | `pull-xl-`  | Set columns when (min-width: 1200px)              |

_Note: the first breakpoint must have the value set to 0 and all breakpoint values must be in
ascending order._

## Auto-layout columns

### Equal-width

By default, columns will take up equal width inside of a row for all devices and screen sizes.

<ion-grid>
  <ion-row>
    <ion-col>
      1 of 2
    </ion-col>
    <ion-col>
      2 of 2
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col>
      2 of 3
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col>
      1 of 2
    </ion-col>
    <ion-col>
      2 of 2
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col>
      2 of 3
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>
```

### Setting one column width

Set the width of one column and the others will automatically resize around it.
This can be done using our predefined grid attributes. In the example below,
the other columns will resize no matter the width of the center column.

<ion-grid>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col col-8>
      2 of 3 (wider)
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col col-6>
      2 of 3 (wider)
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col col-8>
      2 of 3 (wider)
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col col-6>
      2 of 3 (wider)
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>
```

### Variable-width

Using the `col-{breakpoint}-auto` attributes, the column can size itself based on the
natural width of its content. This is extremely useful for setting a column width
using pixels. The columns next to the variable-width column will resize to fill the row.

<ion-grid>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col col-auto>
      Variable width content
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      1 of 4
    </ion-col>
    <ion-col>
      2 of 4
    </ion-col>
    <ion-col col-auto>
      <input placeholder="Variable width input"/>
    </ion-col>
    <ion-col>
      4 of 4
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col>
      1 of 3
    </ion-col>
    <ion-col col-auto>
      Variable width content
    </ion-col>
    <ion-col>
      3 of 3
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      1 of 4
    </ion-col>
    <ion-col>
      2 of 4
    </ion-col>
    <ion-col col-auto>
      <ion-input placeholder="Variable width input"></ion-input>
    </ion-col>
    <ion-col>
      4 of 4
    </ion-col>
  </ion-row>
</ion-grid>
```


## Responsive attributes

### All breakpoints

To customize a column's width for all devices and screens, add the `col-*`
attribute. These attributes tell the column to take up `*` columns out
of the available columns.

<ion-grid>
  <ion-row>
    <ion-col col-4>
      1 of 4
    </ion-col>
    <ion-col col-2>
      2 of 4
    </ion-col>
    <ion-col col-2>
      3 of 4
    </ion-col>
    <ion-col col-4>
      4 of 4
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col col-4>
      1 of 4
    </ion-col>
    <ion-col col-2>
      2 of 4
    </ion-col>
    <ion-col col-2>
      3 of 4
    </ion-col>
    <ion-col col-4>
      4 of 4
    </ion-col>
  </ion-row>
</ion-grid>
```

###  Stacked to horizontal

Use a combination of width and breakpoint attributes to create a grid that starts out stacked
on extra small screens before becoming horizontal on small screens.

<ion-grid>
  <ion-row>
    <ion-col col-12 col-sm>
      1 of 4
    </ion-col>
    <ion-col col-12 col-sm>
      2 of 4
    </ion-col>
    <ion-col col-12 col-sm>
      3 of 4
    </ion-col>
    <ion-col col-12 col-sm>
      4 of 4
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col col-12 col-sm>
      1 of 4
    </ion-col>
    <ion-col col-12 col-sm>
      2 of 4
    </ion-col>
    <ion-col col-12 col-sm>
      3 of 4
    </ion-col>
    <ion-col col-12 col-sm>
      4 of 4
    </ion-col>
  </ion-row>
</ion-grid>
```


## Reordering

### Offsetting columns

Move columns to the right by adding the `offset-*` attributes. These attributes
increase the margin left of the column by `*` columns. For example, in the following
grid the last column will be offset by 3 columns and take up 3 columns:

<ion-grid>
  <ion-row>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3 offset-3>
      2 of 2
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3 offset-3>
      2 of 2
    </ion-col>
  </ion-row>
</ion-grid>
```

Offsets can also be added based on screen breakpoints. Here's an example of a
grid where the last column will be offset by 3 columns for `md` screens and up:

<ion-grid>
  <ion-row>
    <ion-col col-md-3>
      1 of 3
    </ion-col>
    <ion-col col-md-3>
      2 of 3
    </ion-col>
    <ion-col col-md-3 offset-md-3>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col col-md-3>
      1 of 3
    </ion-col>
    <ion-col col-md-3>
      2 of 3
    </ion-col>
    <ion-col col-md-3 offset-md-3>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>
```

### Push and pull

Reorder the columns by adding the `push-*` and `pull-*` attributes. These attributes
adjust the `left` and `right` of the columns by `*` columns making it easy to reorder
columns. For example, in the following grid the column with the `1st col` description
will actually be the last column and the `2nd col` will be the first column.

<ion-grid>
  <ion-row>
    <ion-col col-9 push-3>
      1 of 2
    </ion-col>
    <ion-col col-3 pull-9>
      2 of 2
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col col-9 push-3>
      1 of 2
    </ion-col>
    <ion-col col-3 pull-9>
      2 of 2
    </ion-col>
  </ion-row>
</ion-grid>
```

Push and pull can also be added based on screen breakpoints. In the following example,
the column with the `3rd` column description will actually be the first column for
`md` screens and up:

<ion-grid>
  <ion-row>
    <ion-col col-md-6 push-md-3>
      1 of 3
    </ion-col>
    <ion-col col-md-3 push-md-3>
      2 of 3
    </ion-col>
    <ion-col col-md-3 pull-md-9>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col col-md-6 push-md-3>
      1 of 3
    </ion-col>
    <ion-col col-md-3 push-md-3>
      2 of 3
    </ion-col>
    <ion-col col-md-3 pull-md-9>
      3 of 3
    </ion-col>
  </ion-row>
</ion-grid>
```


## Alignment

### Vertical alignment

All columns can be vertically aligned inside of a row by adding different
attributes to the row. For a list of available attributes, see
[row attributes](../Row#row-attributes).

<ion-grid>
  <ion-row align-items-start>
    <ion-col>
      1 of 4
    </ion-col>
    <ion-col>
      2 of 4
    </ion-col>
    <ion-col>
      3 of 4
    </ion-col>
    <ion-col>
      4 of 4 <br>#<br>#<br>#
    </ion-col>
  </ion-row>

  <ion-row align-items-center>
    <ion-col>
      1 of 4
    </ion-col>
    <ion-col>
      2 of 4
    </ion-col>
    <ion-col>
      3 of 4
    </ion-col>
    <ion-col>
      4 of 4 <br>#<br>#<br>#
    </ion-col>
  </ion-row>

  <ion-row align-items-end>
    <ion-col>
      1 of 4
    </ion-col>
    <ion-col>
      2 of 4
    </ion-col>
    <ion-col>
      3 of 4
    </ion-col>
    <ion-col>
      4 of 4 <br>#<br>#<br>#
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row align-items-start>
    <ion-col>
      1 of 4
    </ion-col>
    <ion-col>
      2 of 4
    </ion-col>
    <ion-col>
      3 of 4
    </ion-col>
    <ion-col>
      4 of 4 <br>#<br>#<br>#
    </ion-col>
  </ion-row>

  <ion-row align-items-center>
    <ion-col>
      1 of 4
    </ion-col>
    <ion-col>
      2 of 4
    </ion-col>
    <ion-col>
      3 of 4
    </ion-col>
    <ion-col>
      4 of 4 <br>#<br>#<br>#
    </ion-col>
  </ion-row>

  <ion-row align-items-end>
    <ion-col>
      1 of 4
    </ion-col>
    <ion-col>
      2 of 4
    </ion-col>
    <ion-col>
      3 of 4
    </ion-col>
    <ion-col>
      4 of 4 <br>#<br>#<br>#
    </ion-col>
  </ion-row>
</ion-grid>
```

Columns can also align themselves differently than other columns by
adding the alignment attribute directly to the column. For a list of available
attributes, see [column attributes](#column-attributes).

<ion-grid>
  <ion-row>
    <ion-col align-self-start>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col align-self-center>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col align-self-end>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>#<br>#<br>#
      </div>
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row>
    <ion-col align-self-start>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col align-self-center>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col align-self-end>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>#<br>#<br>#
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

### Horizontal alignment

All columns can be horizontally aligned inside of a row by adding different
attributes to the row. For a list of available attributes, see
[row attributes](#row-attributes).

<ion-grid>
  <ion-row justify-content-start>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>

  <ion-row justify-content-center>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>

  <ion-row justify-content-end>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>

  <ion-row justify-content-around>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>

  <ion-row justify-content-between>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>
</ion-grid>

```html
<ion-grid>
  <ion-row justify-content-start>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>

  <ion-row justify-content-center>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>

  <ion-row justify-content-end>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>

  <ion-row justify-content-around>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>

  <ion-row justify-content-between>
    <ion-col col-3>
      1 of 2
    </ion-col>
    <ion-col col-3>
      2 of 2
    </ion-col>
  </ion-row>
</ion-grid>
```


## Customizing the grid

Using our built-in grid CSS variables, it’s possible to completely customize the predefined grid attributes. Change the value of the breakpoints, the media query values, the number of columns, and more.

### Number of columns and padding

The number of grid columns and their padding can be modified via CSS variables. The `--grid-columns` variable is used to generate the widths (in percent) of each individual column. The `--grid-padding-width` variable is used for the padding on the grid, while `--grid-padding-width-{breakpoint}` allows breakpoint-specific widths that are divided evenly across the `padding` of the grid and columns.

```css
--grid-columns:               12;

--grid-padding-width:         10px;

--grid-padding-width-xs:      10px;
--grid-padding-width-sm:      10px;
--grid-padding-width-md:      10px;
--grid-padding-width-lg:      10px;
--grid-padding-width-xl:      10px;
```

### Grid tiers

To customize the breakpoint values, override the values of `--grid-breakpoint-{breakpoint}` for each breakpoint:

```css
--grid-breakpoint-xs: 0;
--grid-breakpoint-sm: 576px;
--grid-breakpoint-md: 768px;
--grid-breakpoint-lg: 992px;
--grid-breakpoint-xl: 1200px;
```

To customize the max width values of the grid based on the screen size, override the values of `--grid-max-width-{breakpoint}` for each breakpoint:

```css
--grid-max-width-sm: 540px;
--grid-max-width-md: 720px;
--grid-max-width-lg: 960px;
--grid-max-width-xl: 1140px;
```