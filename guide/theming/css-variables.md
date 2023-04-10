---
title: CSS Variables
---

<head>
  <title>CSS Variables | CSS Custom Properties for Variables & Components</title>
  <meta
    name="description"
    content="Ionic components are built with CSS Variables for easy custom app properties. They allow a value to be stored in one place, then referenced in multiple places."
  />
</head>

Ionic components are built with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS Variables</a> for easy customization of an application. CSS variables allow a value to be stored in one place, then referenced in multiple other places. They also make it possible to change CSS dynamically at runtime (which previously required a CSS preprocessor). CSS variables make it easier than ever to override Ionic components to match a brand or theme.

## Setting Values

### Global Variables

CSS variables can be set globally in an application in the `:root` selector. They can also be applied only for a specific mode. See [Ionic Variables](#ionic-variables) for more information on the global variables Ionic provides.

When using the Ionic CLI to start an Angular project, the `src/theme/variables.scss` file is created where you can override the default Ionic Variables.

```css
/* Set variables for all modes */
:root {
  /* Set the background of the entire app */
  --ion-background-color: #ff3700;

  /* Set the font family of the entire app */
  --ion-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', sans-serif;
}

/* Set text color of the entire app for iOS only */
.ios {
  --ion-text-color: #000;
}

/* Set text color of the entire app for Material Design only */
.md {
  --ion-text-color: #222;
}
```

### Component Variables

To set a CSS variable for a specific component, add the variable inside of its selector. See [Ionic Variables](#ionic-variables) for more information on the component-level variables Ionic provides.

```css
/* Set the color on all ion-button elements */
ion-button {
  --color: #222;
}

/* Set the background on an ion-button with the .fancy-button class */
.fancy-button {
  --background: #00ff00;
}
```

### Variables set via JavaScript

CSS variables can also be changed via JavaScript using [setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty):

```js
const el = document.querySelector('.fancy-button');
el.style.setProperty('--background', '#36454f');
```

## Getting Values

### Using CSS

The [var() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/var) can be used to get the value of a CSS variable, along with any number of fallback values, if desired. In the below example, the `--background` property will be set to the value of the `--charcoal` variable, if defined, and if not it will use `#36454f`.

```css
.fancy-button {
  --background: var(--charcoal, #36454f);
}
```

### Using JavaScript

The value of a CSS variable can be read in JavaScript using [getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue):

```js
const el = document.querySelector('.fancy-button');
const color = el.style.getPropertyValue('--charcoal');
```

## Ionic Variables

### Component Variables

Ionic provides variables that exist at the component level, such as `--background` and `--color`. For a list of the custom properties a component accepts, view the `CSS Custom Properties` section of its [API reference](../api.md). For example, see the [Button CSS Custom Properties](../api/button.md#css-custom-properties).

### Global Variables

There are several global variables that Ionic provides in order to make theming an entire application easier. For more information, see [Colors](colors.md), [Themes](themes.md) and [Advanced Theming](advanced.md).
