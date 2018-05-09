---
previousText: 'Color Generator'
previousUrl: '/docs/layout/color-generator'
nextText: 'Publishing an app'
nextUrl: '/docs/publishing/app-store'
---

# Advanced Theming

<p class="intro" markdown="1">
CSS-based theming enables apps to customize the colors quickly by simply loading a CSS file or changing a few CSS property values.
</p>

## Color Language

Ionic breaks colors down into two groups: application colors and the color map. The color map is an abstract collection of colors that can be used throughout the application. These have names like `--ion-color-primary` and `--ion-color-secondary`.

### Layered Colors

- Contrast: visible against the base color
- Shade: a slightly darker version of the base color
- Tint: a lighter version of the base color
- RGB: A RGB List representation of the base color. This allows the color to have opacity applied.

For example, the secondary color uses the following CSS properties:

```css
--ion-color-secondary: #0cd1e8;
--ion-color-secondary-rgb: 12,209,232;
--ion-color-secondary-contrast: #000000;
--ion-color-secondary-contrast-rgb: 0,0,0;
--ion-color-secondary-shade: #0bb8cc;
--ion-color-secondary-tint: #0bb8cc;
```

When `secondary` is applied to a button, not only is the base color used, but the contrast color is used for the text, along with shade and tint colors for other states of the button.

### Application Colors

Application colors are named for their usage throughout components. The following is a list of all the top level application colors.

```css
--ion-backdrop-color
--ion-overlay-background-color
--ion-background-color
--ion-border-color
--ion-box-shadow-color
--ion-text-color
--ion-tabbar-background-color
--ion-tabbar-border-color
--ion-tabbar-text-color
--ion-tabbar-text-color-active
--ion-toolbar-background-color
--ion-toolbar-border-color
--ion-toolbar-color-active
--ion-toolbar-color-inactive
--ion-toolbar-text-color
--ion-item-background-color
--ion-item-background-color-active
--ion-item-border-color
--ion-item-text-color
--ion-placeholder-text-color
```

### Stepped Colors

After exploring many applications and themes, we found that most designs are never simply one background color. There are always subtle variations used to imply importance and depth throughout the design. In order to accommodate this pattern, we created stepped colors.

There are only two colors that are used throughout the Ionic component collection. These are `--ion-text-color` and `--ion-background-color`.

Stepped colors allow for some finer color control over the look of your application. A color step is a subtle variation of a color moving toward another color. For example, the color steps for `--ion-text-color` are moving toward `--ion-background-color`. Stepped colors also require a RGB List for alpha control. Please refer to “**The Alpha Problem**” below.

A simple example to illustrate the concept, with only four steps, would look like this:

```css
--ion-text-color: #000000;
--ion-background-color: #ffffff;
--ion-background-color-step-250: #bfbfbf;
--ion-background-color-step-500: #808080;
--ion-background-color-step-750: #404040;
--ion-background-color-step-1000: #000000;
--ion-text-color-step-250: #404040;
--ion-text-color-step-500: #808080;
--ion-text-color-step-750: #bfbfbf;
--ion-text-color-step-1000: #ffffff;
```

In this example, you can see that `--ion-background-color` steps move from white to black and `--ion-text-color` steps are moving from black toward white. Ionic uses step numbers as percentages to generate these colors. For example, `--ion-text-color-step-250` is `--ion-text-color` mixed with 25% of `--ion-background-color`.

Ionic generates 20 steps per color resulting in the following CSS properties being available

```css
--ion-background-color: #ffffff;
--ion-background-color-step-50: #f2f2f2;
--ion-background-color-step-100: #e6e6e6;
--ion-background-color-step-150: #d9d9d9;
--ion-background-color-step-200: #cccccc;
--ion-background-color-step-250: #bfbfbf;
--ion-background-color-step-300: #b3b3b3;
--ion-background-color-step-350: #a6a6a6;
--ion-background-color-step-400: #999999;
--ion-background-color-step-450: #8c8c8c;
--ion-background-color-step-500: #808080;
--ion-background-color-step-550: #737373;
--ion-background-color-step-600: #666666;
--ion-background-color-step-650: #595959;
--ion-background-color-step-700: #4d4d4d;
--ion-background-color-step-750: #404040;
--ion-background-color-step-800: #333333;
--ion-background-color-step-850: #262626;
--ion-background-color-step-900: #191919;
--ion-background-color-step-950: #0d0d0d;
--ion-background-color-step-1000: #000000;
--ion-text-color: #000000;
--ion-text-color-step-50: #0d0d0d;
--ion-text-color-step-100: #1a1a1a;
--ion-text-color-step-150: #262626;
--ion-text-color-step-200: #333333;
--ion-text-color-step-250: #404040;
--ion-text-color-step-300: #4d4d4d;
--ion-text-color-step-350: #595959;
--ion-text-color-step-400: #666666;
--ion-text-color-step-450: #737373;
--ion-text-color-step-500: #808080;
--ion-text-color-step-550: #8c8c8c;
--ion-text-color-step-600: #999999;
--ion-text-color-step-650: #a6a6a6;
--ion-text-color-step-700: #b3b3b3;
--ion-text-color-step-750: #bfbfbf;
--ion-text-color-step-800: #cccccc;
--ion-text-color-step-850: #d9d9d9;
--ion-text-color-step-900: #e6e6e6;
--ion-text-color-step-950: #f2f2f2;
--ion-text-color-step-1000: #ffffff;
```

Generally, color steps are a mirror image of each other. For example, `--ion-text-color-step-750` will equal `ion-background-color-step-250`. However, steps are provided for both background and text colors to allow designers to customize a specific step, if need be. For example, maybe a design calls for `ion-text-color-step-250` to be `pink` instead of the normal progression.

### The Color Map

The Color Map is a collection of abstract colors used throughout components. Colors in this collection are also given a CSS class to make them easy to apply to components.

For example, to apply the primary color to a component, one can simply set the component color property to primary.

```html
<ion-button color="primary">Primary</ion-button>
```

The following is a list of all the top level colors in the color map:

```css
--ion-color-primary
--ion-color-secondary
--ion-color-tertiary
--ion-color-success
--ion-color-warning
--ion-color-danger
--ion-color-light
--ion-color-medium
--ion-color-dark
```

### Layered Colors

Colors in the color map are considered layered, as they are not simply a single hex value. When you apply ‘primary’ to a button, not only does the button’s background color change, but its text, along with hover and active background colors, change as well. This is just one example of where a layered color is applied.

In order to update a layered color, one should set all the layers at the same time. A layered color is made up of a base, contrast, shade, and tint color. For example, `--ion-color-primary` would consist of the following CSS properties:

```css
--ion-color-primary: #488aff;
--ion-color-primary-contrast: #ffffff;
--ion-color-primary-shade: #3f79e0;
--ion-color-primary-tint: #5a96ff;
```

Ionic uses the following naming convention for color map properties:

`--ion-color-[name]-[variation]`

The reason for these layered colors comes down to CSS not supporting any color modification methods (mixing colors, tint, shading, etc.). Here is a general rule on how to create these:

* base: The main color
* contrast: A color that when applied over base would result in readable text
* shade: A slightly darker version of base. Ionic defaults to base mixed with 12% black.
* tint: A slightly lighter version of base. Ionic defaults to base mixed with 10% white.

Color maps colors also suffer from **The Alpha Problem**. Please read the section below and be sure to generate a RGB List version of your color so it can be used in alpha transformations.

### The Alpha Problem

CSS does not currently support granular alpha color of a color. Of course, we all know about `rgba()`, but the issue here is that `rgba()` only accepts a RGB List. For example, you would not be able to do the following: rgba(#ff0000, .5).

This means that adjusting only the alpha value of a color, separate from the color itself, requires a RGB List to do so. In order to solve this problem, Ionic generates a RGB List stepped and color map colors. It is recommended that when changing any of these colors a RGB List is also generated to allow that color to be used with transparency.

The following is a list of all the default generated RGB List values:

```css
--ion-color-primary-rgb: 72, 138, 255;
--ion-color-secondary-rgb: 50, 219, 100;
--ion-color-tertiary-rgb: 244, 169, 66;
--ion-color-success-rgb: 16, 220, 96;
--ion-color-warning-rgb: 255, 206, 0;
--ion-color-danger-rgb: 245, 61, 61;
--ion-color-light-rgb: 244, 244, 244;
--ion-color-medium-rgb: 152, 154, 162;
--ion-color-dark-rgb: 34, 34, 34;

--ion-background-color-rgb: 255, 255, 255;
--ion-text-color-rgb: 0, 0, 0;
```

As you can see, these are the exact same color value as the non-RGB version but can now be used with `rbga()`. For example, primary can now be used in the following way

```css
color: rgba(var(--ion-color-primary-rgb), 0.25);
```

## Applying Styles

Styling an application is as simple as loading a CSS file with a :root block or using javascript to change properties.

A full theme will provide all of the CSS properties used throughout the component collection. This simplified example just shows how primary color would be changed via CSS.

```css
:root {
  --ion-color-primary: #ff0000;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-shade: #ae0000;
  --ion-color-primary-tint: #ff3633;
  --ion-color-primary-rgb: 255, 0, 0;
}
```

Since CSS properties cascade, _that first C in CSS is oh so handy_, you can target a specific button by class if needed.

```css
.my-fancy-button {
  --ion-color-primary: #ff0000;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-shade: #ae0000;
  --ion-color-primary-tint: #ff3633;
  --ion-color-primary-rgb: 255, 0, 0;
}
```

This can also be done via javascript using setProperty.

```js
const el = document.querySelector('.my-fancy-button');
el.style.setProperty('--ion-color-primary', '#ff0000');
el.style.setProperty('--ion-color-primary-contrast', '#ffffff');
el.style.setProperty('--ion-color-primary-shade', '#ae0000');
el.style.setProperty('--ion-color-primary-tint', '#ff3633');
el.style.setProperty('--ion-color-primary-rgb', '255,0,0');
```
