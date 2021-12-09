# ion-ripple-effect

The ripple effect component adds the [Material Design ink ripple interaction effect](https://material.io/develop/web/components/ripples/). This component can only be used inside of an `<ion-app>` and can be added to any component.

It's important to note that the parent should have [relative positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position) because the ripple effect is absolutely positioned and will cover the closest parent with relative positioning. The parent element should also be given the `ion-activatable` class, which tells the ripple effect that the element is clickable.

The default type, `"bounded"`, will expand the ripple effect from the click position outwards. To add a ripple effect that always starts in the center of the element and expands in a circle, add an `"unbounded"` type. It's recommended to add `overflow: hidden` to the parent element to avoid the ripple overflowing its container, especially with an unbounded ripple.
