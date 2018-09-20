---
previousText: 'Color Generator'
previousUrl: '/docs/layout/color-generator'
nextText: 'Publishing an app'
nextUrl: '/docs/publishing/app-store'
---

# Advanced Theming

<p class="intro" markdown="1">
CSS-based theming enables apps to customize the colors quickly by loading a CSS file or changing a few CSS property values.
</p>

## Colors

Ionic has nine default colors that can be used to change the color of many components. Each color is actually a collection of multiple properties, including a `shade` and `tint`, used throughout Ionic.

A color can be applied to an Ionic component via the `color` attribute. Notice in the example below that the button with the `color` set to `light` has a different background and text color.

```html
<ion-button>Default</ion-button>
<ion-button color="light">Light</ion-button>
```

### Layered Colors

Each color consists of the following properties: a `base`, `contrast`, `shade`, and `tint`. The `base` and `contrast` colors also require a `rgb` property which is the same color, just in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](#the-alpha-problem) for an explanation of why the `rgb` property is also needed. Select from the dropdown below to see all of the default colors Ionic provides and their variations.

<color-block></color-block>

To change the default values of a color, all of the listed variations for that color should be set. For example, to change the secondary color to `#006600` (green), set the following CSS properties:

```css
:root {
  --ion-color-secondary: #006600;
  --ion-color-secondary-rgb: 0,102,0;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #005a00;
  --ion-color-secondary-tint: #1a751a;
}
```

When `secondary` is applied to a button, not only is the base color (`#006600`) used, but the contrast color (`#ffffff`) is used for the text, along with shade (`#005a00`) and tint (`1a751a`) colors for the different states of the button.

<blockquote>
  Not sure how to get the variation colors from the base color? Try out our [Color Generator](/docs/theming/color-generator) that calculates out all of the variations and provides code to copy/paste into an app!
</blockquote>

See the [CSS Variables documentation](/docs/theming/css-variables#setting-values) for more information on how to set CSS variables.


## Themes

Ionic provides several global variables that are used throughout components to change the default theme of an entire application. The following sections separate the different theme variables by usage: [Application Colors](#application-colors), [Stepped Colors](#stepped-colors).

### Application Colors

The application colors are used in multiple places in Ionic. These are useful for easily creating dark themes or themes that match a brand.

| Name                                     | Description                                         |
| ---------------------------------------- | --------------------------------------------------- |
| `--ion-backdrop-color`                   | Color the backdrop component                        |
| `--ion-overlay-background-color`         | Background color of the overlays                    |
| `--ion-border-color`                     | Border color                                        |
| `--ion-box-shadow-color`                 | Box shadow color                                    |
| `--ion-tabbar-background-color`          | Background color of the tabbar                      |
| `--ion-tabbar-background-color-focused`  | Background color of the focused tabbar              |
| `--ion-tabbar-border-color`              | Border color of the tabbar                          |
| `--ion-tabbar-text-color`                | Text color of the tabbar                            |
| `--ion-tabbar-text-color-active`         | Text color of the active tab                        |
| `--ion-toolbar-background-color`         | Background color of the toolbar                     |
| `--ion-toolbar-border-color`             | Border color of the toolbar                         |
| `--ion-toolbar-color-inactive`           | Color of the toolbar                                |
| `--ion-toolbar-color-active`             | Color of the active toolbar                         |
| `--ion-toolbar-text-color`               | Text color of the toolbar                           |
| `--ion-item-background-color`            | Background color of the item                        |
| `--ion-item-background-color-active`     | Background color of the active item                 |
| `--ion-item-border-color`                | Border color of the item                            |
| `--ion-item-text-color`                  | Text color of the item                              |
| `--ion-placeholder-text-color`           | Text color of the item placeholder                  |


### Stepped Colors

After exploring many applications and themes, we found that most designs are never one background color. There are always subtle variations used to imply importance and depth throughout the design. In order to accommodate this pattern, we created stepped colors.

There are only two variables that have stepped colors: `--ion-text-color` and `--ion-background-color`.

Stepped colors allow for some finer color control over the look of your application. A color step is a subtle variation of a color moving toward another color. For example, the color steps for `--ion-text-color` are moving toward `--ion-background-color`. Stepped colors also require a property to be set in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](#the-alpha-problem) for an explanation of why the `rgb` property is also needed.


| Name                                     | Description                                         | Default Value    |
| ---------------------------------------- | --------------------------------------------------- | ---------------- |
| `--ion-background-color`                 | Background color of entire app                      | `#ffffff`        |
| `--ion-background-color-rgb`             | Background color of entire app, rgb format          | `255,255,255`    |
| `--ion-background-color-step-50`         | Background color mixed with text color by 5%        | `#f2f2f2`        |
| `--ion-background-color-step-100`        | Background color mixed with text color by 10%       | `#e6e6e6`        |
| `--ion-background-color-step-150`        | Background color mixed with text color by 15%       | `#d9d9d9`        |
| `--ion-background-color-step-200`        | Background color mixed with text color by 20%       | `#cccccc`        |
| `--ion-background-color-step-250`        | Background color mixed with text color by 25%       | `#bfbfbf`        |
| `--ion-background-color-step-300`        | Background color mixed with text color by 30%       | `#b3b3b3`        |
| `--ion-background-color-step-350`        | Background color mixed with text color by 35%       | `#a6a6a6`        |
| `--ion-background-color-step-400`        | Background color mixed with text color by 40%       | `#999999`        |
| `--ion-background-color-step-450`        | Background color mixed with text color by 45%       | `#8c8c8c`        |
| `--ion-background-color-step-500`        | Background color mixed with text color by 50%       | `#808080`        |
| `--ion-background-color-step-550`        | Background color mixed with text color by 55%       | `#737373`        |
| `--ion-background-color-step-600`        | Background color mixed with text color by 60%       | `#666666`        |
| `--ion-background-color-step-650`        | Background color mixed with text color by 65%       | `#595959`        |
| `--ion-background-color-step-700`        | Background color mixed with text color by 70%       | `#4d4d4d`        |
| `--ion-background-color-step-750`        | Background color mixed with text color by 75%       | `#404040`        |
| `--ion-background-color-step-800`        | Background color mixed with text color by 80%       | `#333333`        |
| `--ion-background-color-step-850`        | Background color mixed with text color by 85%       | `#262626`        |
| `--ion-background-color-step-900`        | Background color mixed with text color by 90%       | `#191919`        |
| `--ion-background-color-step-950`        | Background color mixed with text color by 95%       | `#0d0d0d`        |
| `--ion-background-color-step-1000`       | Background color mixed with text color by 100%      | `#000000`        |
| `--ion-text-color`                       | Text color of entire app                            | `#000000`        |
| `--ion-text-color-rgb`                   | Text color of entire app, rgb format                | `0,0,0`          |
| `--ion-text-color-step-50`               | Text color mixed with background color by 5%        | `#0d0d0d`        |
| `--ion-text-color-step-100`              | Text color mixed with background color by 10%       | `#1a1a1a`        |
| `--ion-text-color-step-150`              | Text color mixed with background color by 15%       | `#262626`        |
| `--ion-text-color-step-200`              | Text color mixed with background color by 20%       | `#333333`        |
| `--ion-text-color-step-250`              | Text color mixed with background color by 25%       | `#404040`        |
| `--ion-text-color-step-300`              | Text color mixed with background color by 30%       | `#4d4d4d`        |
| `--ion-text-color-step-350`              | Text color mixed with background color by 35%       | `#595959`        |
| `--ion-text-color-step-400`              | Text color mixed with background color by 40%       | `#666666`        |
| `--ion-text-color-step-450`              | Text color mixed with background color by 45%       | `#737373`        |
| `--ion-text-color-step-500`              | Text color mixed with background color by 50%       | `#808080`        |
| `--ion-text-color-step-550`              | Text color mixed with background color by 55%       | `#8c8c8c`        |
| `--ion-text-color-step-600`              | Text color mixed with background color by 60%       | `#999999`        |
| `--ion-text-color-step-650`              | Text color mixed with background color by 65%       | `#a6a6a6`        |
| `--ion-text-color-step-700`              | Text color mixed with background color by 70%       | `#b3b3b3`        |
| `--ion-text-color-step-750`              | Text color mixed with background color by 75%       | `#bfbfbf`        |
| `--ion-text-color-step-800`              | Text color mixed with background color by 80%       | `#cccccc`        |
| `--ion-text-color-step-850`              | Text color mixed with background color by 85%       | `#d9d9d9`        |
| `--ion-text-color-step-900`              | Text color mixed with background color by 90%       | `#e6e6e6`        |
| `--ion-text-color-step-950`              | Text color mixed with background color by 95%       | `#f2f2f2`        |
| `--ion-text-color-step-1000`             | Text color mixed with background color by 100%      | `#ffffff`        |

Generally, color steps are a mirror image of each other. For example, `--ion-text-color-step-750` will equal `ion-background-color-step-250`. However, steps are provided for both background and text colors to allow designers to customize a specific step, if need be. For example, maybe a design calls for `ion-text-color-step-250` to be `pink` instead of the normal progression.

## Globals

While the previously mentioned variables are useful for changing the colors of an application, often times there is a need for variables used in multiple components. The following variables are shared across components to change global padding settings and more.

### Application Variables

| Name                                     | Description                                        |
| ---------------------------------------- | -------------------------------------------------- |
| `--ion-font-family`                      | Font family of the app                             |
| `--ion-statusbar-padding`                | Statusbar padding top of the app                   |
| `--ion-safe-area-top`                    | Adjust the safe area inset top of the app          |
| `--ion-safe-area-right`                  | Adjust the safe area inset right of the app        |
| `--ion-safe-area-bottom`                 | Adjust the safe area inset bottom of the app       |
| `--ion-safe-area-left`                   | Adjust the safe area inset left of the app         |

### Grid Variables

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


## The Alpha Problem

There is not yet full <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility" target="_blank">browser support</a> for alpha use of a hex color. The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()" target="_blank">rgba()</a> function only accepts a value in `R, G, B, A` (Red, Green, Blue, Alpha) format. The following code shows examples of correct and incorrect values passed to `rgba()`.

```css
/* These examples use the same color: blueviolet. */
.broken {
  --violet: #8a2be2;

  /* rgba(#8a2be2, .5) */
  color: rgba(var(--violet), .5) /* ERROR! Doesn't support hex. */
}

.working {
  --violet-rgb: 138, 43, 226;

  /* rgba(138, 43, 226, .5) */
  color: rgba(var(--violet-rgb), .5) /* WORKS! */
}
```

<blockquote>
  See the [CSS Variables](/docs/theming/css-variables) section for more information on how to get and set CSS variables.
</blockquote>

Ionic uses colors with an opacity (alpha) in several components. In order for this to work, those properties must be provided in RGB format. When changing any of the properties that have a variation ending in `-rgb`, it is important they are also provided in a comma separated format **without parentheses**. Below are some examples for changing text and background color.

```css
:root {
  /* These examples use the same color: sienna. */
  --ion-text-color:             #a0522d;
  --ion-text-color-rgb:         160, 82, 45;

  /* These examples use the same color: lightsteelblue. */
  --ion-background-color:       #b0c4de;
  --ion-background-color-rgb:   176, 196, 222;
}
```

Note that the RGB formatted colors are the exact same color as the hex properties, but can now be used with `rbga()`. For example, `--ion-text-color-rgb` can now be used in the following way

```css
body {
  color: rgba(var(--ion-text-color-rgb), 0.25);
}
```
