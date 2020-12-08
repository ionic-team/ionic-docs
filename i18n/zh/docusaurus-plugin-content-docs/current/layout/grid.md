---
initialTab: '预览'
inlineHtmlPreviews: true
previousText: '构造'
previousUrl: '/docs/layout/structure'
nextText: '全局样式'
nextUrl: '/docs/layout/global-stylesheets'
contributors:
  - brandyscarney
---

# 响应式网格

网格是一个强大的移动端优先的弹性盒子系统，用于构建自定义布局。 它由三个单位组成：一个 [格子](/docs/api/grid), [行](/docs/api/row) 和 [列(s)](/docs/api/col)。 列将展开以填充它们的行，并将调整大小以适应额外的列。 它基于12列布局，基于屏幕大小不同的断点。 可以使用 CSS 自定义列数。

## 如何运行

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>
        1 of 3
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 3
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 3
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

- 网格作为所有行和列的容器。 网格占用容器的全宽， 但添加 ` fixed ` 属性将指定每个屏幕大小的宽度，请参阅下面的 [网格大小](#grid-size)。
- 行是列正确上行的水平组列。
- 内容应该放在列中，只有列可能是行的子项。
- ` size-{breakpoint}` 属性表示每行默认的12列数。 所以, `size="4"` 可以添加到列中, 以便占用格子的1/3, 或 12 列中的4。
- 没有大小值的列将自动具有相同的宽度。 例如，对于小断点和小断点来说， `size-sm` 的四个实例都会自动宽度为 25%。
- 列宽度以百分比设置，因此它们总是相对于其父元素是流动的和变换大小的。
- Columns have padding between individual columns, however, the padding can be removed from the grid and columns by adding the `ion-no-padding` class to the grid. See the [CSS Utilities](/docs/layout/css-utilities) for more styles that can be applied to the grid.
- There are five grid tiers, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
- Grid tiers are based on minimum widths, meaning they apply to their tier and all those larger than them (e.g., `size-sm="4"` applies to small, medium, large, and extra large devices).
- Grids can easily be customized via CSS variables. See [customizing the grid](#customizing-the-grid).

### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-basic-grid) and for React [here](https://stackblitz.com/edit/ionic-react-basic-grid).

## 网格大小

By default, the grid will take up 100% width. To set a specific width based on the screen size, add the `fixed` attribute. The width of the grid for each breakpoint is defined in the `--ion-grid-width-{breakpoint}` CSS variables. For more information, see [customizing the grid](#customizing-the-grid).

| 名称 | 值      | 说明                              |
| -- | ------ | ------------------------------- |
| xs | 100%   | 不设置Xs屏幕的网格宽度                    |
| sm | 540px  | 当(最小宽度：576px) 时，网格宽度设置为 540px   |
| md | 720px  | 当(最小宽度：768px) 时，网格宽度设置为 720px   |
| lg | 960px  | 当(最小宽度：992px) 时，网格宽度设置为 960px   |
| xl | 1140px | 当(最小宽度：1200px) 时，网格宽度设置为 1140px |


### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-fixed-width-grid) and for React [here](https://stackblitz.com/edit/ionic-react-fixed-width-grid).

## 网格属性

The grid takes up the entire width of the screen by default. This can be modified using the attribute below.

| 属性    | 说明                                                |
| ----- | ------------------------------------------------- |
| fixed | Set a max width based on the current screen size. |


## 默认断点

The default breakpoints are defined in the table below. Breakpoints can not be customized at this time. For more information on why they can't be customized, see [Variables in Media Queries](/docs/theming/advanced#variables-in-media-queries).

| 名称 | 值      | 宽度前缀       | Offset Prefix | Push Prefix | 下拉前缀       | 说明                                   |
| -- | ------ | ---------- | ------------- | ----------- | ---------- | ------------------------------------ |
| xs | 0      | `size-`    | `offset-`     | `push-`     | `pull-`    | Set columns when (min-width: 0)      |
| sm | 576px  | `size-sm-` | `offset-sm-`  | `push-sm-`  | `pull-sm-` | Set columns when (min-width: 576px)  |
| md | 768px  | `size-md-` | `offset-md-`  | `push-md-`  | `pull-md-` | Set columns when (min-width: 768px)  |
| lg | 992px  | `size-lg-` | `offset-lg-`  | `push-lg-`  | `pull-lg-` | Set columns when (min-width: 992px)  |
| xl | 1200px | `size-xl-` | `offset-xl-`  | `push-xl-`  | `pull-xl-` | Set columns when (min-width: 1200px) |


## 自动布局列

### Equal-width

By default, columns will take up equal width inside of a row for all devices and screen sizes.

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>
        1 of 3
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 3
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 3
      </div>
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
      <div>
        1 of 3
      </div>
    </ion-col>
    <ion-col size="8">
      <div>
        2 of 3 (wider)
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 3
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>
        1 of 3
      </div>
    </ion-col>
    <ion-col size="6">
      <div>
        2 of 3 (wider)
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 3
      </div>
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
      <div>
        1 of 3
      </div>
    </ion-col>
    <ion-col size="auto">
      <div>
        Variable width content
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 3
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col size="auto">
      <div>
        <ion-input placeholder="Variable width input"></ion-input>
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-var-width-col) and for React [here](https://stackblitz.com/edit/ionic-react-var-width-col).

## 响应属性

### All breakpoints

To customize a column's width for all devices and screens, set the `size` property. The value of this property determines how many columns this column should take up out of the total available columns.

```html
<ion-grid>
  <ion-row>
    <ion-col size="4">
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col size="2">
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col size="2">
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col size="4">
      <div>
        4 of 4
      </div>
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
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>
        4 of 4
      </div>
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
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3" offset="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

Offsets can also be added based on screen breakpoints. Here's an example of a grid where the last column will be offset by 3 columns for `md` screens and up:

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="3">
      <div>
        1 of 3
      </div>
    </ion-col>
    <ion-col size-md="3">
      <div>
        2 of 3
      </div>
    </ion-col>
    <ion-col size-md="3" offset-md="3">
      <div>
        3 of 3
      </div>
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
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3" pull="9">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

Push and pull can also be added based on screen breakpoints. In the following example, the column with the `3 of 3` column description will actually be the first column for `md` screens and up:

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="6" push-md="3">
      <div>
        1 of 3
      </div>
    </ion-col>
    <ion-col size-md="3" push-md="3">
      <div>
        2 of 3
      </div>
    </ion-col>
    <ion-col size-md="3" pull-md="9">
      <div>
        3 of 3
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-grid-push-pull) and for React [here](https://stackblitz.com/edit/ionic-react-grid-push-pull).

## Alignment

### Vertical alignment

All columns can be vertically aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](/docs/layout/css-utilities#flex-container-properties).

```html
<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

Columns can also align themselves differently than other columns by adding the alignment class directly to the column. For a list of available classes, see [css utilities](/docs/layout/css-utilities#flex-item-properties).

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-align-self-start">
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col class="ion-align-self-center">
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col class="ion-align-self-end">
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### Live Example

You can view a live example of this in Angular [here](https://stackblitz.com/edit/ionic-ng-grid-vertical-align) and for React [here](https://stackblitz.com/edit/ionic-react-grid-vertical-align).

### Horizontal alignment

All columns can be horizontally aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](/docs/layout/css-utilities#flex-container-properties).

```html
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-end">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-around">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-between">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
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
--ion-grid-columns:               12;
```

### Grid Padding

The padding on the grid container can be set for all breakpoints with the `--ion-grid-padding` CSS variable. To override individual breakpoints, use the `--ion-grid-padding-{breakpoint}` CSS variables.

```css
--ion-grid-padding:               5px;

--ion-grid-padding-xs:            5px;
--ion-grid-padding-sm:            5px;
--ion-grid-padding-md:            5px;
--ion-grid-padding-lg:            5px;
--ion-grid-padding-xl:            5px;
```

### Grid width

To customize the width values of the fixed grid based on the screen size, override the values of `--ion-grid-width-{breakpoint}` for each breakpoint.

```css
--ion-grid-width-xs:              100%;
--ion-grid-width-sm:              540px;
--ion-grid-width-md:              720px;
--ion-grid-width-lg:              960px;
--ion-grid-width-xl:              1140px;
```

### Column Padding

The padding on the columns can be set for all breakpoints with the `--ion-grid-column-padding` CSS variable. To override individual breakpoints, use the `--ion-grid-column-padding-{breakpoint}` CSS variables.

```css
--ion-grid-column-padding:        5px;

--ion-grid-column-padding-xs:     5px;
--ion-grid-column-padding-sm:     5px;
--ion-grid-column-padding-md:     5px;
--ion-grid-column-padding-lg:     5px;
--ion-grid-column-padding-xl:     5px;
```