# Theming Basics

<p class="intro" markdown="1">
We built Ionic to be a blank slate that can easily be customized and modified to fit a brand, while still following the standards of the different platforms. We’ve made theming Ionic apps easier than ever. Ionic is built with CSS, which allows us to set some default styles but makes it extremely easy to change our defaults.
</p>


## CSS Variables

All of the Ionic components are themed using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS properties (variables)</a>. CSS variables add dynamic values to an otherwise static language. This is something that has traditionally required a CSS preprocessor like Sass. The look of an application can easily be changed by changing the value of any of the [Ionic CSS Variables](./css-variables).

## Branding

Ionic provides application colors that can be used to theme an application to match a brand or color scheme. The default theme uses a light background, but everything from the background color to the text color is fully customizable. For more information on branding, see [Advanced Theming](./advanced).


## Colors

We provide 9 default colors that can be used to change the color of many Ionic components. Each color is actually a collection of multiple properties used throughout Ionic. When changing a color, it is important to set all of the related properties. We've made this easier by providing a [Color Generator](./color-generator) tool, but these can also be manually written if desired.

![Ionic Color Grid](../assets/img/theming/color-grid.png)
