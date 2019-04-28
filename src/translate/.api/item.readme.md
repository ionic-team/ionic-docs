# ion-item

Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Generally they are placed in a list with other items. Items can be swiped, deleted, reordered, edited, and more.

## Clickable Items

An item is considered "clickable" if it has an `href` or `button` property set. Clickable items have a few visual differences that indicate they can be interacted with. For example, a clickable item receives the ripple effect upon activation in `md` mode, has a highlight when activated in `ios` mode, and has a [detail arrow](/#detail-arrows) by default in `ios` mode.

## Detail Arrows

By default [clickable items](/#clickable-items) will display a right arrow icon on `ios` mode. To hide the right arrow icon on clickable elements, set the `detail` property to `false`. To show the right arrow icon on an item that doesn't display it naturally, set the `detail` property to `true`.

<!--

TODO add this functionality back as a css variable

This feature is not enabled by default on clickable items for the `md` mode, but it can be enabled by setting the following CSS variable:

```css
--item-detail-push-show: true;
```

See the [theming documentation](/docs/theming/css-variables) for more information.

-->


## Item Placement

Item uses named [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) in order to position content. This logic makes it possible to write a complex item with simple, understandable markup without having to worry about styling and positioning the elements.

The below chart details the item slots and where it will place the element inside of the item:

| Slot    | Description                                                                 |
|---------|-----------------------------------------------------------------------------|
| `start` | Placed to the left of all other content in LTR, and to the `right` in RTL.  |
| `end`   | Placed to the right of all other content in LTR, and to the `left` in RTL.  |
| none    | Placed inside of the input wrapper.                                         |


### Text Alignment

Items left align text and add an ellipsis when the text is wider than the item. See the [Utility Attributes Documentation](/docs/layout/css-utilities) for attributes that can be added to `<ion-item>` to transform the text.


## Input Highlight

### Highlight Height

Items containing an input will highlight the bottom border of the input with a different color when focused, valid, or invalid. By default, `md` items have a highlight with a height set to `2px` and `ios` has no highlight (technically the height is set to `0`). The height can be changed using the `--highlight-height` CSS property. To turn off the highlight, set this variable to `0`. For more information on setting CSS properties, see the [theming documentation](/docs/theming/css-variables).

### Highlight Color

The highlight color changes based on the item state, but all of the states use Ionic colors by default. When focused, the input highlight will use the `primary` color. If the input is valid it will use the `success` color, and invalid inputs will use the `danger` color. See the [CSS Custom Properties](#css-custom-properties) section below for the highlight color variables.

