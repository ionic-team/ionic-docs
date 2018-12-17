---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'Responsive Grid'
previousUrl: '/docs/layout/grid'
nextText: 'Theming'
nextUrl: '/docs/theming/basics'
---

<link rel="stylesheet" href="https://unpkg.com/@ionic/core/css/padding.css">
<link rel="stylesheet" href="https://unpkg.com/@ionic/core/css/float-elements.css">
<link rel="stylesheet" href="https://unpkg.com/@ionic/core/css/text-alignment.css">
<link rel="stylesheet" href="https://unpkg.com/@ionic/core/css/text-transformation.css">
<link rel="stylesheet" href="https://unpkg.com/@ionic/core/css/flex-utils.css">

# CSS Utilities

<p class="intro" markdown="1">
Ionic provides a set of utility attributes that can be used on any element in order to modify the text, element placement or adjust the padding and margin.
</p>


## Text Modification

### Text Alignment

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div text-start>
        <h3>text-start</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div text-end>
        <h3>text-end</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div text-center>
        <h3>text-center</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div text-justify>
        <h3>text-justify</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div text-wrap>
        <h3>text-wrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div text-nowrap>
        <h3>text-nowrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Attribute         | Style Rule             | Description                                                                                                                                                         |
|-------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `text-left`       | `text-align: left`     | The inline contents are aligned to the left edge of the line box.                                                                                                   |
| `text-right`      | `text-align: right`    | The inline contents are aligned to the right edge of the line box.                                                                                                  |
| `text-start`      | `text-align: start`    | The same as `text-left` if direction is left-to-right and `text-right` if direction is right-to-left.                                                                         |
| `text-end`        | `text-align: end`      | The same as `text-right` if direction is left-to-right and `text-left` if direction is right-to-left.                                                                         |
| `text-center`     | `text-align: center`   | The inline contents are centered within the line box.                                                                                                               |
| `text-justify`    | `text-align: justify`  | The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. |
| `text-wrap`       | `white-space: normal`  | Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.              |
| `text-nowrap`     | `white-space: nowrap`  | Collapses whitespace as for `normal`, but suppresses line breaks (text wrapping) within text.                                                                       |


### Text Transformation

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div text-uppercase>
        <h3>text-uppercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div text-lowercase>
        <h3>text-lowercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div text-capitalize>
        <h3>text-capitalize</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Attribute         | Style Rule                   | Description                                                         |
|-------------------|------------------------------|---------------------------------------------------------------------|
| `text-uppercase`  | `text-transform: uppercase`  | Forces all characters to be converted to uppercase.                 |
| `text-lowercase`  | `text-transform: lowercase`  | Forces all characters to be converted to lowercase.                 |
| `text-capitalize` | `text-transform: capitalize` | Forces the first letter of each word to be converted to uppercase.  |


### Responsive Text Attributes

All of the text attributes listed above have additional attributes to modify the text based on the screen size. Instead of `text-` in each attribute, use `text-{breakpoint}-` to only use the attribute on specific screen sizes, where `{breakpoint}` is one of the defined breakpoints in the `--screen-breakpoints` variable.

The table below shows the default behavior, where `{modifier}` is any of the following: `left`, `right`, `start`, `end`, `center`, `justify`, `wrap`, `nowrap`, `uppercase`, `lowercase`, or `capitalize`, as they are described above.

| Attribute             | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| `text-{modifier}`     | Applies the modifier to the element on all screen sizes.            |
| `text-sm-{modifier}`  | Applies the modifier to the element when `min-width: 576px`.        |
| `text-md-{modifier}`  | Applies the modifier to the element when `min-width: 768px`.        |
| `text-lg-{modifier}`  | Applies the modifier to the element when `min-width: 992px`.        |
| `text-xl-{modifier}`  | Applies the modifier to the element when `min-width: 1200px`.       |


## Element Placement

### Float Elements

The float CSS property specifies that an element should be placed along the left or right side of its container, where text and inline elements will wrap around it. This way, the element is taken from the normal flow of the web page, though still remaining a part of the flow, contrary to absolute positioning.

```html
<ion-grid>
  <ion-row>
    <ion-col float-left>
      <div>
        <h3>float-left</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col float-right>
      <div>
        <h3>float-right</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Attribute     | Style Rule                      | Description                                                                                               |
|---------------|---------------------------------|-----------------------------------------------------------------------------------------------------------|
| `float-left`  | `float: left`                   | The element will float on the left side of its containing block.                                          |
| `float-right` | `float: right`                  | The element will float on the right side of its containing block.                                         |
| `float-start` | `float: left` / `float: right`  | The same as `float-left` if direction is left-to-right and `float-right` if direction is right-to-left.   |
| `float-end`   | `float: left` / `float: right`  | The same as `float-right` if direction is left-to-right and `float-left` if direction is right-to-left.   |


### Responsive Float Attributes

All of the float attributes listed above have additional attributes to modify the float based on the screen size. Instead of `float-` in each attribute, use `float-{breakpoint}-` to only use the attribute on specific screen sizes, where `{breakpoint}` is one of the defined breakpoints in the `--screen-breakpoints` variable.
The table below shows the default behavior, where `{modifier}` is any of the following: `left`, `right`, `start`, or `end`, as they are described above.

| Attribute              | Description                                                         |
|------------------------|---------------------------------------------------------------------|
| `float-{modifier}`     | Applies the modifier to the element on all screen sizes.            |
| `float-sm-{modifier}`  | Applies the modifier to the element when `min-width: 576px`.        |
| `float-md-{modifier}`  | Applies the modifier to the element when `min-width: 768px`.        |
| `float-lg-{modifier}`  | Applies the modifier to the element when `min-width: 992px`.        |
| `float-xl-{modifier}`  | Applies the modifier to the element when `min-width: 1200px`.       |


## Content Space

### Element Padding

The padding attribute sets the padding area of an element. The padding area is the space between the content of the element and its border.

The default amount of `padding` to be applied is `16px` and is set by the `--ion-padding` variable. See the [CSS Variables](/docs/theming/css-variables) section for more information on how to change these values.

```html
<ion-grid>
  <ion-row>
    <ion-col padding>
      <div>
        padding
      </div>
    </ion-col>
    <ion-col padding-top>
      <div>
        padding-top
      </div>
    </ion-col>
    <ion-col padding-start>
      <div>
        padding-start
      </div>
    </ion-col>
    <ion-col padding-end>
      <div>
        padding-end
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col padding-bottom>
      <div>
        padding-bottom
      </div>
    </ion-col>
    <ion-col padding-vertical>
      <div>
        padding-vertical
      </div>
    </ion-col>
    <ion-col padding-horizontal>
      <div>
        padding-horizontal
      </div>
    </ion-col>
    <ion-col no-padding>
      <div>
        no-padding
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Attribute            | Style Rule               | Description                             |
|----------------------|--------------------------|-----------------------------------------|
| `padding`            | `padding: 16px`          | Applies padding to all sides.           |
| `padding-top`        | `padding-top: 16px`      | Applies padding to the top.             |
| `padding-start`      | `padding-start: 16px`    | Applies padding to the start.           |
| `padding-end`        | `padding-end: 16px`      | Applies padding to the end.             |
| `padding-bottom`     | `padding-bottom: 16px`   | Applies padding to the bottom.          |
| `padding-vertical`   | `padding: 16px 0`        | Applies padding to the top and bottom.  |
| `padding-horizontal` | `padding: 0 16px`        | Applies padding to the left and right.  |
| `no-padding`         | `padding: 0`             | Applies no padding to all sides.        |


### Element Margin

The margin area extends the border area with an empty area used to separate the element from its neighbors.

The default amount of `margin` to be applied is `16px` and is set by the `--ion-margin` variable. See the [CSS Variables](/docs/theming/css-variables) section for more information on how to change these values.

```html
<ion-grid>
  <ion-row>
    <ion-col margin>
      <div>
        margin
      </div>
    </ion-col>
    <ion-col margin-top>
      <div>
        margin-top
      </div>
    </ion-col>
    <ion-col margin-start>
      <div>
        margin-start
      </div>
    </ion-col>
    <ion-col margin-end>
      <div>
        margin-end
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col margin-bottom>
      <div>
        margin-bottom
      </div>
    </ion-col>
    <ion-col margin-vertical>
      <div>
        margin-vertical
      </div>
    </ion-col>
    <ion-col margin-horizontal>
      <div>
        margin-horizontal
      </div>
    </ion-col>
    <ion-col no-margin>
      <div>
        no-margin
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Attribute            | Style Rule               | Description                             |
|----------------------|--------------------------|-----------------------------------------|
| `margin`             | `margin: 16px`           | Applies margin to all sides.            |
| `margin-top`         | `margin-top: 16px`       | Applies margin to the top.              |
| `margin-start`       | `margin-start: 16px`     | Applies margin to the left.             |
| `margin-end`         | `margin-end: 16px`       | Applies margin to the right.            |
| `margin-bottom`      | `margin-bottom: 16px`    | Applies margin to the bottom.           |
| `margin-vertical`    | `margin: 16px 0`         | Applies margin to the top and bottom.   |
| `margin-horizontal`  | `margin: 0 16px`         | Applies margin to the left and right.   |
| `no-margin`          | `margin: 0`              | Applies no margin to all sides.         |


## Flex Properties

<img src="/docs/assets/img/layout/diagram-flex-attributes.png"/>

### Flex Container Properties


```html
<ion-grid>
  <ion-row justify-content-start>
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

  <ion-row justify-content-center>
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

  <ion-row justify-content-end>
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

  <ion-row justify-content-around>
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

  <ion-row justify-content-between>
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

  <ion-row justify-content-evenly>
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

<ion-grid>
  <ion-row align-items-start>
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

  <ion-row align-items-end>
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

  <ion-row align-items-center>
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

  <ion-row align-items-baseline>
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

  <ion-row align-items-stretch>
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

| Attribute                 | Style Rule                       | Description                                                                 |
|---------------------------|----------------------------------|-----------------------------------------------------------------------------|
| `justify-content-start`   | `justify-content: flex-start`    | Items are packed toward the start on the main axis.                         |
| `justify-content-end`     | `justify-content: flex-end`      | Items are packed toward the end on the main axis.                           |
| `justify-content-center`  | `justify-content: center`        | Items are centered along the main axis.                                     |
| `justify-content-around`  | `justify-content: space-around`  | Items are evenly distributed on the main axis with equal space around them. |
| `justify-content-between` | `justify-content: space-between` | Items are evenly distributed on the main axis.                              |
| `justify-content-evenly`  | `justify-content: space-evenly`  | Items are distributed so that the spacing between any two items is equal.   |
| `align-items-start`       | `align-items: flex-start`        | Items are packed toward the start on the cross axis.                        |
| `align-items-end`         | `align-items: flex-end`          | Items are packed toward the end on the cross axis.                          |
| `align-items-center`      | `align-items: center`            | Items are centered along the cross axis.                                    |
| `align-items-baseline`    | `align-items: baseline`          | Items are aligned so that their baselines align.                            |
| `align-items-stretch`     | `align-items: stretch`           | Items are stretched to fill the container.                                  |
| `nowrap`                  | `flex-wrap: nowrap`              | Items will all be on one line.                                              |
| `wrap`                    | `flex-wrap: wrap`                | Items will wrap onto multiple lines, from top to bottom.                    |
| `wrap-reverse`            | `flex-wrap: wrap-reverse`        | Items will wrap onto multiple lines, from bottom to top.                    |


### Flex Item Properties

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
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```


| Attribute                 | Style Rule               | Description                                                                         |
|---------------------------|--------------------------|-------------------------------------------------------------------------------------|
| `align-self-start`        | `align-self: flex-start` | Item is packed toward the start on the cross axis.                                  |
| `align-self-end`          | `align-self: flex-end`   | Item is packed toward the end on the cross axis.                                    |
| `align-self-center`       | `align-self: center`     | Item is centered along the cross axis.                                              |
| `align-self-baseline`     | `align-self: baseline`   | Item is aligned so that its baseline aligns with other item baselines.              |
| `align-self-stretch`      | `align-self: stretch`    | Item is stretched to fill the container.                                            |
| `align-self-auto`         | `align-self: auto`       | Item is positioned according to the parent's `align-items` value.                   |
