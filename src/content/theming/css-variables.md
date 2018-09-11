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

CSS variables can be set globally in an application in the `:root` selector. They can also be applied only for a specific mode. For a full list of Ionic's global variables, see [Ionic Variables](#ionic-variables).

```css
/* Set variables for all modes */
:root {
  /* Set the background of the entire app */
  --ion-background-color: #ff3700;

  /* Set the font family of the entire app */
  --ion-font-family: 'Comic Sans MS', cursive;
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

To set a CSS variable for a specific component, add the variable inside of the selector. For a list of the custom properties a component accepts, view the `Custom Properties` section of its [API reference](../api). For example, see the [Button Custom Properties](../api/button#css-custom-properties).

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

Ionic provides variables that exist at the component level, such as `--background` and `--color`. For a list of the custom properties a component accepts, view the `Custom Properties` section of its [API reference](../api). For example, see the [Button Custom Properties](../api/button#css-custom-properties).


### Global Variables

<!-- TODO - this should be https://ionicframework.com/docs/theming/overriding-ionic-variables/ but global css variables -->

There are several global variables that Ionic provides in order to make theming an entire application easier.

#### Utility Variables

| Name                                     | Description                                        |
| ---------------------------------------- | -------------------------------------------------- |
| `--ion-font-family`                      | Font family of the app                             |
| `--ion-statusbar-padding`                | Statusbar padding top of the app                   |
| `--ion-safe-area-top`                    | Adjust the safe area inset top of the app          |
| `--ion-safe-area-right`                  | Adjust the safe area inset right of the app        |
| `--ion-safe-area-bottom`                 | Adjust the safe area inset bottom of the app       |
| `--ion-safe-area-left`                   | Adjust the safe area inset left of the app         |


#### Grid Variables

| Name                                     | Description                                        |
| ---------------------------------------- | -------------------------------------------------- |
| `--ion-grid-columns`                     | Number of columns in the grid                      |
| `--ion-grid-padding-xs`                  | Padding of the grid for xs breakpoints             |
| `--ion-grid-padding-sm`                  | Padding of the grid for sm breakpoints             |
| `--ion-grid-padding-md`                  | Padding of the grid for md breakpoints             |
| `--ion-grid-padding-lg`                  | Padding of the grid for lg breakpoints             |
| `--ion-grid-padding-xl`                  | Padding of the grid for xl breakpoints             |
| `--ion-grid-column-padding-xs`           | Padding of the grid columns for xs breakpoints     |
| `--ion-grid-column-padding-sm`           | Padding of the grid columns for sm breakpoints     |
| `--ion-grid-column-padding-md`           | Padding of the grid columns for md breakpoints     |
| `--ion-grid-column-padding-lg`           | Padding of the grid columns for lg breakpoints     |
| `--ion-grid-column-padding-xl`           | Padding of the grid columns for xl breakpoints     |


#### Theme Variables

| Name                                     | Description                                         |
| ---------------------------------------- | --------------------------------------------------- |
| `--ion-backdrop-color`                   | Color the backdrop component                        |
| `--ion-overlay-background-color`         | Background color of the overlays                    |
| `--ion-background-color`                 | Background color of entire app                      |
| `--ion-background-color-rgb`             | Background color of entire app, rgb format          |
| `--ion-background-color-step-50`         | Background color mixed with text color by 5%        |
| `--ion-background-color-step-100`        | Background color mixed with text color by 10%       |
| `--ion-background-color-step-150`        | Background color mixed with text color by 15%       |
| `--ion-background-color-step-200`        | Background color mixed with text color by 20%       |
| `--ion-background-color-step-250`        | Background color mixed with text color by 25%       |
| `--ion-background-color-step-300`        | Background color mixed with text color by 30%       |
| `--ion-background-color-step-350`        | Background color mixed with text color by 35%       |
| `--ion-background-color-step-400`        | Background color mixed with text color by 40%       |
| `--ion-background-color-step-450`        | Background color mixed with text color by 45%       |
| `--ion-background-color-step-500`        | Background color mixed with text color by 50%       |
| `--ion-background-color-step-550`        | Background color mixed with text color by 55%       |
| `--ion-background-color-step-600`        | Background color mixed with text color by 60%       |
| `--ion-background-color-step-650`        | Background color mixed with text color by 65%       |
| `--ion-background-color-step-700`        | Background color mixed with text color by 70%       |
| `--ion-background-color-step-750`        | Background color mixed with text color by 75%       |
| `--ion-background-color-step-800`        | Background color mixed with text color by 80%       |
| `--ion-background-color-step-850`        | Background color mixed with text color by 85%       |
| `--ion-background-color-step-900`        | Background color mixed with text color by 90%       |
| `--ion-background-color-step-950`        | Background color mixed with text color by 95%       |
| `--ion-background-color-step-1000`       | Background color mixed with text color by 100%      |
| `--ion-border-color`                     | Border color                                        |
| `--ion-box-shadow-color`                 | Box shadow color                                    |
| `--ion-text-color`                       | Text color of entire app                            |
| `--ion-text-color-rgb`                   | Text color of entire app, rgb format                |
| `--ion-text-color-step-50`               | Text color mixed with background color by 5%        |
| `--ion-text-color-step-100`              | Text color mixed with background color by 10%       |
| `--ion-text-color-step-150`              | Text color mixed with background color by 15%       |
| `--ion-text-color-step-200`              | Text color mixed with background color by 20%       |
| `--ion-text-color-step-250`              | Text color mixed with background color by 25%       |
| `--ion-text-color-step-300`              | Text color mixed with background color by 30%       |
| `--ion-text-color-step-350`              | Text color mixed with background color by 35%       |
| `--ion-text-color-step-400`              | Text color mixed with background color by 40%       |
| `--ion-text-color-step-450`              | Text color mixed with background color by 45%       |
| `--ion-text-color-step-500`              | Text color mixed with background color by 50%       |
| `--ion-text-color-step-550`              | Text color mixed with background color by 55%       |
| `--ion-text-color-step-600`              | Text color mixed with background color by 60%       |
| `--ion-text-color-step-650`              | Text color mixed with background color by 65%       |
| `--ion-text-color-step-700`              | Text color mixed with background color by 70%       |
| `--ion-text-color-step-750`              | Text color mixed with background color by 75%       |
| `--ion-text-color-step-800`              | Text color mixed with background color by 80%       |
| `--ion-text-color-step-850`              | Text color mixed with background color by 85%       |
| `--ion-text-color-step-900`              | Text color mixed with background color by 90%       |
| `--ion-text-color-step-950`              | Text color mixed with background color by 95%       |
| `--ion-text-color-step-1000`             | Text color mixed with background color by 100%      |
| `--ion-tabbar-background-color`          | Background color of the tabbar                      |
| `--ion-tabbar-background-color-focused`  | Background color of the focused tabbar              |
| `--ion-tabbar-border-color`              | Border color of the tabbar                          |
| `--ion-tabbar-text-color`                | Text color of the tabbar                            |
| `--ion-tabbar-text-color-active`         | Text color of the active tab                        |
| `--ion-toolbar-background-color`         | Background color of the toolbar                     |
| `--ion-toolbar-border-color`             | Border color of the toolbar                         |
| `--ion-toolbar-color-inactive`           | Color color of the toolbar                          |
| `--ion-toolbar-color-active`             | Color color of the active toolbar                   |
| `--ion-toolbar-text-color`               | Text color of the toolbar                           |
| `--ion-item-background-color`            | Background color of the item                        |
| `--ion-item-background-color-active`     | Background color of the active item                 |
| `--ion-item-border-color`                | Border color of the item                            |
| `--ion-item-text-color`                  | Text color of the item                              |
| `--ion-placeholder-text-color`           | Text color of the item placeholder                  |


#### Color Variables

| Name                                   | Description                                         |
| ---------------------------------------| --------------------------------------------------- |
| `--ion-color-primary`                  | Base of the primary color                           |
| `--ion-color-primary-rgb`              | Base of the primary color, rgb format               |
| `--ion-color-primary-contrast`         | Contrast of the primary color                       |
| `--ion-color-primary-contrast-rgb`     | Contrast of the primary color, rgb format           |
| `--ion-color-primary-shade`            | Shade of the primary color                          |
| `--ion-color-primary-tint`             | Tint of the primary color                           |
| `--ion-color-secondary`                | Base of the secondary color                         |
| `--ion-color-secondary-rgb`            | Base of the secondary color, rgb format             |
| `--ion-color-secondary-contrast`       | Contrast of the secondary color                     |
| `--ion-color-secondary-contrast-rgb`   | Contrast of the secondary color, rgb format         |
| `--ion-color-secondary-shade`          | Shade of the secondary color                        |
| `--ion-color-secondary-tint`           | of the secondary color                              |
| `--ion-color-tertiary`                 | Base of the tertiary color                          |
| `--ion-color-tertiary-rgb`             | Base of the tertiary color, rgb format              |
| `--ion-color-tertiary-contrast`        | Contrast of the tertiary color                      |
| `--ion-color-tertiary-contrast-rgb`    | Contrast of the tertiary color, rgb format          |
| `--ion-color-tertiary-shade`           | Shade of the tertiary color                         |
| `--ion-color-tertiary-tint`            | Tint of the tertiary color                          |
| `--ion-color-success`                  | Base of the success color                           |
| `--ion-color-success-rgb`              | Base of the success color, rgb format               |
| `--ion-color-success-contrast`         | Contrast of the success color                       |
| `--ion-color-success-contrast-rgb`     | Contrast of the success color, rgb format           |
| `--ion-color-success-shade`            | Shade of the success color                          |
| `--ion-color-success-tint`             | Tint of the success color                           |
| `--ion-color-warning`                  | Base of the warning color                           |
| `--ion-color-warning-rgb`              | Base of the warning color, rgb format               |
| `--ion-color-warning-contrast`         | Contrast of the warning color                       |
| `--ion-color-warning-contrast-rgb`     | Contrast of the warning color, rgb format           |
| `--ion-color-warning-shade`            | Shade of the warning color                          |
| `--ion-color-warning-tint`             | Tint of the warning color                           |
| `--ion-color-danger`                   | Base of the danger color                            |
| `--ion-color-danger-rgb`               | Base of the danger color, rgb format                |
| `--ion-color-danger-contrast`          | Contrast of the danger color                        |
| `--ion-color-danger-contrast-rgb`      | Contrast of the danger color, rgb format            |
| `--ion-color-danger-shade`             | Shade of the danger color                           |
| `--ion-color-danger-tint`              | Tint of the danger color                            |
| `--ion-color-light`                    | Base of the light color                             |
| `--ion-color-light-rgb`                | Base of the light color, rgb format                 |
| `--ion-color-light-contrast`           | Contrast of the light color                         |
| `--ion-color-light-contrast-rgb`       | Contrast of the light color, rgb format             |
| `--ion-color-light-shade`              | Shade of the light color                            |
| `--ion-color-light-tint`               | Tint of the light color                             |
| `--ion-color-medium`                   | Base of the medium color                            |
| `--ion-color-medium-rgb`               | Base of the medium color, rgb format                |
| `--ion-color-medium-contrast`          | Contrast of the medium color                        |
| `--ion-color-medium-contrast-rgb`      | Contrast of the medium color, rgb format            |
| `--ion-color-medium-shade`             | Shade of the medium color                           |
| `--ion-color-medium-tint`              | Tint of the medium color                            |
| `--ion-color-dark`                     | Base of the dark color                              |
| `--ion-color-dark-rgb`                 | Base of the dark color, rgb format                  |
| `--ion-color-dark-contrast`            | Contrast of the dark color                          |
| `--ion-color-dark-contrast-rgb`        | Contrast of the dark color, rgb format              |
| `--ion-color-dark-shade`               | Shade of the dark color                             |
| `--ion-color-dark-tint`                | Tint of the dark color                              |