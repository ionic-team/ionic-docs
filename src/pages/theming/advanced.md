---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'Color Generator'
previousUrl: '/docs/theming/color-generator'
nextText: 'Publishing an app'
nextUrl: '/docs/publishing/app-store'
contributors:
  - brandyscarney
  - marcjulian
---

# Advanced Theming

CSS-based theming enables apps to customize the colors quickly by loading a CSS file or changing a few CSS property values.

## Colors

Ionic has nine default colors that can be used to change the color of many components. Each color is actually a collection of multiple properties, including a `shade` and `tint`, used throughout Ionic.

A color can be applied to an Ionic component in order to change the default colors using the `color` attribute. Notice in the buttons below that the text and background changes based on the `color` set. When there is no `color` set on the button it uses the `primary` color by default.

```html
<ion-button>Default</ion-button>
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>
```

### Layered Colors

Each color consists of the following properties: a `base`, `contrast`, `shade`, and `tint`. The `base` and `contrast` colors also require a `rgb` property which is the same color, just in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](#the-alpha-problem) for an explanation of why the `rgb` property is also needed. Select from the dropdown below to see all of the default colors Ionic provides and their variations.

<layered-colors-select mode="md" no-prerender></layered-colors-select>

### Modifying Colors

To change the default values of a color, all of the listed variations for that color should be set. For example, to change the secondary color to <code-color mode="md" value="#006600"></code-color>, set the following CSS properties:

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

When `secondary` is applied to a button, not only is the base color <code-color mode="md" value="#006600"></code-color> used, but the contrast color <code-color mode="md" value="#ffffff"></code-color> is used for the text, along with shade <code-color mode="md" value="#005a00"></code-color> and tint <code-color mode="md" value="#1a751a"></code-color> colors for the different states of the button.

> Not sure how to get the variation colors from the base color? Try out our [Color Generator](/docs/theming/color-generator) that calculates all of the variations and provides code to copy/paste into an app!

See the [CSS Variables documentation](/docs/theming/css-variables) for more information on CSS variables.

### Adding Colors

To add a new color, create a class that defines all of the variations using CSS variables for that color. The class should be written in the format `.ion-color-{COLOR}` where `{COLOR}` is the name of the color to add. For example, to add a color called `favorite`, the following class could be added:

```css
.ion-color-favorite {
  --ion-color-base: #69bb7b;
  --ion-color-base-rgb: 105,187,123;
  --ion-color-contrast: #ffffff;
  --ion-color-contrast-rgb: 255,255,255;
  --ion-color-shade: #5ca56c;
  --ion-color-tint: #78c288;
}
```

Once the class is added, the color can be used on any Ionic component that supports the `color` property. An example of using the `favorite` color on an Ionic button is below.

```html
<ion-button color="favorite">Favorite</ion-button>
```

It's important to note that adding the class above does not automatically create the Ionic CSS variables for use in an application's stylesheets. This means that the variations beginning with `--ion-color-favorite` **do not exist** by adding the `.ion-color-favorite` class. These should be declared separately for use in an application:

```css
:root {
  --ion-color-favorite: #69bb7b;
  --ion-color-favorite-rgb: 105,187,123;
  --ion-color-favorite-contrast: #ffffff;
  --ion-color-favorite-contrast-rgb: 255,255,255;
  --ion-color-favorite-shade: #5ca56c;
  --ion-color-favorite-tint: #78c288;
}
```

Now the `favorite` color can be used in CSS like below to set the `background` and `color` on a `div`.

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

See the [CSS Variables documentation](/docs/theming/css-variables) for more information on CSS variables.

## Themes

Ionic provides several global variables that are used throughout components to change the default theme of an entire application. The following sections separate the different theme variables by usage: [Application Colors](#application-colors), [Stepped Colors](#stepped-colors).

### Application Colors

The application colors are used in multiple places in Ionic. These are useful for easily creating dark themes or themes that match a brand.

It is important to note that the background and text color variables also require a rgb variable to be set in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](#the-alpha-problem) for an explanation of why the `rgb` property is also needed.


| Name                                     | Description                                         |
| ---------------------------------------- | --------------------------------------------------- |
| `--ion-background-color`                 | Background color of entire app                      |
| `--ion-background-color-rgb`             | Background color of entire app, rgb format          |
| `--ion-text-color`                       | Text color of entire app                            |
| `--ion-text-color-rgb`                   | Text color of entire app, rgb format                |
| `--ion-backdrop-color`                   | Color of the Backdrop component                     |
| `--ion-overlay-background-color`         | Background color of the overlays                    |
| `--ion-border-color`                     | Border color                                        |
| `--ion-box-shadow-color`                 | Box shadow color                                    |
| `--ion-tab-bar-background`               | Background of the Tab bar                           |
| `--ion-tab-bar-background-focused`       | Background of the focused Tab bar                   |
| `--ion-tab-bar-border-color`             | Border color of the Tab bar                         |
| `--ion-tab-bar-color`                    | Color of the Tab bar                                |
| `--ion-tab-bar-color-activated`          | Color of the activated Tab                          |
| `--ion-toolbar-background`               | Background of the Toolbar                           |
| `--ion-toolbar-border-color`             | Border color of the Toolbar                         |
| `--ion-toolbar-color`                    | Color of the components in the Toolbar              |
| `--ion-toolbar-color-activated`          | Color of the activated components in the Toolbar    |
| `--ion-toolbar-color-unchecked`          | Color of the unchecked components in the Toolbar    |
| `--ion-toolbar-color-checked`            | Color of the checked components in the Toolbar      |
| `--ion-item-background`                  | Background of the Item                              |
| `--ion-item-background-activated`        | Background of the activated Item                    |
| `--ion-item-border-color`                | Border color of the Item                            |
| `--ion-item-color`                       | Color of the components in the Item                 |
| `--ion-placeholder-color`                | Color of the placeholder in inputs                  |


### Stepped Colors

After exploring different ways to customize the Ionic theme, we found that we couldn't use just one background or text color. In order to imply importance and depth throughout the design, we need to use different shades of the background and text colors. To accommodate this pattern, we created stepped colors.

While updating the background (`--ion-background-color`) and text (`--ion-text-color`) variables will change the look of the app for most components, there are certain Ionic components where it may look off, or broken. This will be more apparent when applying a darker theme.

In some components we use a shade darker than the background or lighter than the text. For example, an item heading text may need to be <code-color mode="md" value="#404040"></code-color>, which is a few shades lighter than our default text color. Meanwhile, the loading component background is a shade darker than white, using <code-color mode="md" value="#f2f2f2"></code-color>. We use stepped colors in order to define these slight variations. It is important to update the stepped colors when updating the background or text color of an application.

By default, the Ionic stepped colors start at the default background color value <code-color mode="md" value="#ffffff"></code-color> and mix with the text color value <code-color mode="md" value="#000000"></code-color> using an increasing percentage. The full list of stepped colors is shown in the generator below.

### Generate Stepped Color Variables

Create a custom background and text color theme for your app. Update the background or text color’s hex values below, then copy and paste the generated code directly into your Ionic project.

<stepped-color-generator mode="md" no-prerender></stepped-color-generator>


## Globals

While the previously mentioned variables are useful for changing the colors of an application, often times there is a need for variables used in multiple components. The following variables are shared across components to change global padding settings and more.

### Application Variables

| Name                                     | Description                                                                                     |
| -----------------------------------------| ------------------------------------------------------------------------------------------------|
| `--ion-font-family`                      | Font family of the app                                                                          |
| `--ion-statusbar-padding`                | Statusbar padding top of the app                                                                |
| `--ion-safe-area-top`                    | Adjust the safe area inset top of the app                                                       |
| `--ion-safe-area-right`                  | Adjust the safe area inset right of the app                                                     |
| `--ion-safe-area-bottom`                 | Adjust the safe area inset bottom of the app                                                    |
| `--ion-safe-area-left`                   | Adjust the safe area inset left of the app                                                      |
| `--ion-margin`                           | Adjust the margin of the [Margin attributes](/docs/layout/css-utilities#element-margin)         |
| `--ion-padding`                          | Adjust the padding of the [Padding attributes](/docs/layout/css-utilities#element-padding)      |

### Grid Variables

| Name                                     | Description                                        |
| -----------------------------------------| ---------------------------------------------------|
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


## Known Limitations

### The Alpha Problem

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

> See the [CSS Variables](/docs/theming/css-variables) section for more information on how to get and set CSS variables.

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

Note that the RGB formatted colors are the exact same color as the hex properties, but can now be used with `rgba()`. For example, `--ion-text-color-rgb` can now be used in the following way

```css
body {
  color: rgba(var(--ion-text-color-rgb), 0.25);
}
```


### Variables in Media Queries

CSS variables in [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) are not currently supported, but there are open drafts to add [custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-mq) and [custom environment variables](https://drafts.csswg.org/css-env-1/) that would solve this problem! However, with the current state of support, the following will **not** work:

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* Doesn't work :( */
}
```


### Modifying CSS Color Variables

While it is possible to easily alter a color in Sass using its built-in functions, it is currently not as easy to modify colors set in CSS Variables. This can be accomplished in CSS by splitting the [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) or [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) channels and modifying each value, but it is complex and has missing functionality.

What exactly does this mean? Basically, using a CSS preprocessor, such as Sass, allows us to use functions to manipulate a single color. For example, we can create the following colors in Sass:

```scss
// Background color, shade, and tint
$background: #3880ff;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// Text color, darker and lighter
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

After running through the Sass compiler, the colors will have the following values:

| Variable            | Value                                                     |
| --------------------| ----------------------------------------------------------|
| `$background`       | <code-color mode="md" value="#3880ff"></code-color>       |
| `$background-shade` | <code-color mode="md" value="#3171e0"></code-color>       |
| `$background-tint`  | <code-color mode="md" value="#4c8dff"></code-color>       |
| `$text`             | <code-color mode="md" value="#444444"></code-color>       |
| `$text-darker`      | <code-color mode="md" value="#1e1e1e"></code-color>       |
| `$text-lighter`     | <code-color mode="md" value="#6a6a6a"></code-color>       |

However, because CSS variables can be set at runtime and are more dynamic, it is not currently possible to manipulate them using a simple function.

This is normally not a problem, but when an application needs to have dynamic theming it presents issues. In Ionic, this is the reason that there are [variations to each color](#layered-colors), and it is also why [stepped colors](#stepped-colors) are necessary for theming.

There are drafts and issues discussing [color modification proposals](https://github.com/w3c/csswg-drafts/issues/3187) that would make this possible.
