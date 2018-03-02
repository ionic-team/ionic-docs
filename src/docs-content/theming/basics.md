# Theming Basics
Ionic components can be themed at runtime using CSS properties. For more advanced theming check out the **Theming with SCSS** section of this guide and for a more in depth look at CSS theming head over to the **Theming with CSS** section. To change the look of your application you can simply set any CSS properties you would like to change. Currently Ionic's runtime theming is restricted to color changes and for layout changes you will need to dive into SCSS theming. To begin lets talk about the basic color concepts

#### The Color Map
```
primary
secondary
tertiary
success
warning
danger
light
medium
dark
```

These colors can then be used by setting the color attribute of a component

```html
<ion-button color="primary">Primary</ion-button>
```

#### Layered Colors
Colors from the Color Map are actually collections of colors. Each color consists of 5 separate values, for exmaple primary color will translate into the following CSS properties.

```css
--ion-color-primary: #488aff;
--ion-color-primary-rgb: 72,138,255;
--ion-color-primary-contrast: #ffffff;
--ion-color-primary-shade: #3f79e0;
--ion-color-primary-tint: #5a96ff;
```

When changing the primary color it is important to set all of corresponding layers. For example when you use `primary` as a button color not only is the base color (`#488aff`) that will be used but the contast colors for the text along with shade and tint colors for other states of the button. 

* Contrast: Should be visible against the base color
* Shade: Should be a slightly darker version of the base color
* Tint: Should be a slightly lighter version of the base color
* RGB: A RGB List representation of the base color. This allows the color to have alpha levels applied.

#### Application Colors
Ionic also provides application colors. These colors are named to match there usage. For example `--ion-text-color` will change the primary text color used throughout the app. It is worth noting that `--ion-text-color` and `--ion-backgeound-color` are both stepped colors and when updating one steps should be generated. you can read more about color steps in the "Theming with CSS" Section of thie guide.

Ionic provides the following application colors

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

#### Alpha properties
Alpha CSS Properties are used throughout components to make it easy to change the opacity of elements wihtout having to change, or even know, the color. Ionic provides both application and abstract alpha properties.

Application properties are named for there exact use for example `ion-alpha-disabled` whereas abstract properties are general groups that component can connect to like `ion-alpha-low`.

Ionic provides the collowing alpha variables
```css
--ion-alpha-activated: .1;
--ion-alpha-border-low: .1;
--ion-alpha-border-medium: .2;
--ion-alpha-border-high: .3;
--ion-alpha-disabled: .5;
--ion-alpha-focused: .25;
--ion-alpha-hover: .1;
--ion-alpha-lowest: .1;
--ion-alpha-low: .25;
--ion-alpha-medium: .5;
--ion-alpha-high: .8;
--ion-alpha-highest: .9;
```

## Setting CSS Properties
The easiest way to apply application wide properties is to load a CSS file that applies varibles to the root

```css
:root {
	--ion-color-primary: #00ff00;
}
```

CSS properties can also be applied to any selector to theme a specific component.
```css
.my-button {
	--ion-color-primary: #00ff00;
}
```

CSS Properties can also be changed via javascript using setProperty

```js
const el = document.querySelector('.my-fancy-button');
el.style.setProperty('--ion-primary-color', '#ff0000');
```