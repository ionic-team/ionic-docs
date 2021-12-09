# ion-content

The content component provides an easy to use content area with some useful methods
to control the scrollable area. There should only be one content in a single
view.

Content, along with many other Ionic components, can be customized to modify its padding, margin, and more using the global styles provided in the [CSS Utilities](/docs/layout/css-utilities) or by individually styling it using CSS and the available [CSS Custom Properties](#css-custom-properties).


## Fixed Content

In order to place elements outside of the scrollable area, `slot="fixed"` can be added to the element. This will absolutely position the element placing it in the top left. In order to place the element in a different position, style it using [top, right, bottom, and left](https://developer.mozilla.org/en-US/docs/Web/CSS/position).

