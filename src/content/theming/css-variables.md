---
previousText: 'Platform Styles'
previousUrl: '/docs/theming/platform-styles'
nextText: 'Color Generator'
nextUrl: '/docs/theming/color-generator'
---

# CSS Variables

<p class="intro" markdown="1">
Ionic components are built with [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for easy customization of an application. CSS variables allow a value to be stored in one place, then referenced in multiple other places. They also make it possible to change CSS dynamically at runtime, which has required a CSS preprocessor in the past. CSS variables make it easier than ever to override Ionic components to match a brand or theme.
</p>

## Setting Values

### Global Variables

CSS variables can be set globally in an application in the `:root` selector:

```css
:root {
  --ion-color-primary: #00ff00;
}
```

### Selector Variables

To set a CSS variable for a specific selector or component, add the variable inside of that selector:

```css
.my-fancy-button {
  --ion-color-primary: #00ff00;
}
```

### Variables set via JavaScript

CSS variables can also be changed via JavaScript using [setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty):

```js
const el = document.querySelector('.my-fancy-button');
el.style.setProperty('--ion-color-primary', '#ff0000');
```

## Getting Values

### Using CSS

The [var() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/var) can be used to get the value of a CSS variable, along with any number of fallback values, if desired. In the below example, the `background-color` will be set to the value of the `--ion-color-primary` variable, if defined, and if not it will use `#00ff00`.

```css
.my-fancy-button {
  background-color: var(--ion-color-primary, #00ff00);
}
```

### Using JavaScript

The value of a CSS variable can be read in JavaScript using [getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue):

```js
const el = document.querySelector('.my-fancy-button');
const color = el.style.getPropertyValue('--ion-color-primary');
```

<!-- ## Overriding Ionic Variables -->

<!-- TODO - this should be https://ionicframework.com/docs/theming/overriding-ionic-variables/ but css variables -->
