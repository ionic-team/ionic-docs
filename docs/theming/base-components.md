---
title: Base Components
---

:::note
Base Components is in Developer Preview and should not be used in production applications. Please file any feedback on [Ionic's GitHub Repo](https://github.com/ionic-team/ionic-framework/issues).
:::

## Overview

Ionic ships with [Platform Styles](./platform-styles) that match the iOS and Material Design specifications. This allows developers to begin building Ionic applications that look good without worrying about the design. However, since these designs follow specifications provided by Apple and Google, they are very opinionated. Developers who want to have their application look consistent across iOS and Android may have difficulty extending the iOS and Material Design implementations to meet their requirements.

Base Components allow developers to opt-out of the iOS and Material Design styles to build a theme that fully meets their needs.

## Usage

Developers can opt in to base components using the `baseComponents` option in the Ionic Config. Additionally, developers can continue to the [Colors Tokens](./colors) and the `color` property even with using base components to make theming easy.

The following example shows how to use base components to customize [Button](../api/button) in a consistent way.

import Basic from '@site/static/usage/v7/base-components/basic/index.md';

<Basic />


One thing you may notice is that the font families are different across iOS and Android. This behavior lets components use the default fonts for each platform. The font family can be customized using [Application Variables](./advanced#application-variables).

### Theming for Variants

The previous example showed a basic usage of base components on `ion-button`. However, this component has several variants including "fill", "size", "shape", and "strong" that your theme will need to account for.

import Variants from '@site/static/usage/v7/base-components/variants/index.md';

<Variants />


## Configuration

In the previous examples, we configured every Ionic component to use base components. However, base components allows for more granular configuration.

### `includeComponents` and `excludeComponents`

 Developers have access to the `includeComponents` and `excludeComponents`  options within the base component config.

`includeComponents` lets you define the components that will use base components. All other components will use [Platform Styles](./platform-styles). This is useful for when you are beginning to use base components as it lets you focus on certain components to theme while letting the remaining components fall back to using the platform styles:


```js
{
  ...,
  baseComponents: {
  /**
   * Only ion-button and ion-chip will
   * use base components. All other components
   * will use the platform styles.
   */
   includeComponents: ['ion-button', 'ion-chip']
  }
}
```

`excludeComponents` lets you define the components that should _not_ use base components. All other components will use base components. Developers will sometimes choose to keep the platform styles with controls such as `ion-toggle` or `ion-checkbox` as they are familiar components on iOS and Android.

```js
{
  ...,
  baseComponents: {
  /**
   * All other components will use
   * base components except for ion-datetime
   * and ion-toggle which will use the platform styles.
   */
   excludeComponents: ['ion-datetime', 'ion-toggle']
  }
}
```

:::note
Developers should use either `includeComponents` or `excludeComponents` in their app, not both.
:::

### `useBase` property

Developers also have the option to set the base components configuration on a per-component instance basis using the `useBase` property. Components using base components can be targeted using the `.base` CSS selector.

import UseBase from '@site/static/usage/v7/base-components/use-base/index.md';

<UseBase />
  


## Scaling your Theme

As you customize Ionic components, your CSS will become complex. It is important to structure your styles in a way that you can scale your styles. We recommend implementing two patterns to accomplish this.

### Separate Files for Each Component

We recommend separating component styles into separate files. For example, if you are customizing `ion-badge`, `ion-button`, and `ion-chip`, you could have a file structure like this:

```
├── src
│   ├── styles
│   │   ├── badge.css
│   │   ├── button.css
│   │   ├── chip.css
└── └── └── global.css
```

Each component stylesheet is placed into its own file, and then the `global.css` file imports each stylesheet. For components that have complex variants, you may even want to consider breaking styles out further:

```
├── src
│   ├── styles
│   │   ├── badge.css
│   │   ├── button
│   │   │   ├── button.css
│   │   │   ├── button.outline.css
│   │   │   ├── button.clear.css
│   │   ├── chip.css
└── └── └── global.css
```

In this scenario, we broke the button styles out into multiple files in its own directory. The `button.css` file would import `button.outline.css` and `button.clear.css`. The `global.css` file would continue to import `button/button.css`.

### Design Tokens

As your design system scales, you will likely have components that have similar styles. Consider the following CSS:


```css title="badge.css"
ion-badge {
  border-radius: 8px;
}
```

```css title="chip.css"
ion-chip {
  border-radius: 8px;
}
```

In this scenario, both `ion-badge` and `ion-chip` use the same `8px` `border-radius` value. If you were to change the `border-radius` value for `ion-badge`, you would then need to manually update the `border-radius` value for `ion-chip` too, otherwise your components would not have consistent values.

You _could_ work around this by having the button and badge share selectors:

```css title="badge-chip-please-do-not-do-this.css"
ion-badge,
ion-chip {
  border-radius: 8px;
}
```

While this avoids having to update the border radius value in multiple places, your badge and chip styles are now tightly coupled together.

Instead, a better approach would to implement design tokens. Design tokens provide a high-level way to customize your components in a consistent manner. These tokens can be implemented using [CSS Variables](./css-variables).

For this example, we could implement a token for border radius that defines a standardized value:

```css title="tokens.css"
:root {
  --ion-radius: 8px;
}
```

The component styles would then be updated to consume this token.

```css title="badge.css"
ion-badge {
  border-radius: var(--ion-radius);
}
```

```css title="chip.css"
ion-chip {
  border-radius: var(--ion-radius);
}
```

If we wanted to increase the border radius, all we would have to do is update the value of `--ion-radius`: 

```css title="tokens.css"
:root {
  --ion-radius: 10px;
}
```

If you have components with multiple border radius values, you could also define a set of design tokens for different sizes:

```css title="tokens.css"
:root {
  --ion-radius-sm: 4px;
  --ion-radius-md: 6px;
  --ion-radius-lg: 8px;
  --ion-radius-xl: 12px;
}
```

Design tokens in other libraries will sometimes use [em](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems) or [rem](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#rems) units. While you can certainly use those units in Ionic, be aware that these units will cause the computed value of your tokens to scale with your application's font size. This means that as the font size increases, the border radius on `ion-badge` and `ion-chip` would increase too.


## When to Use

Developers should consider base components when they have a pre-existing design system or brand identity that they need to bring to Ionic in a consistent way across iOS and Android.

While base components allow for a significant level of customization, it does require a high level of investment from the developer. As Ionic adds more components, developers will need to update their theme to account for these new components.

If developers are just starting out with Ionic, we recommend starting with the [Platform Styles](./platform-styles) and using the [CSS Variables](./css-variables) and [CSS Shadow Parts](./css-shadow-parts) APIs to customize the look of their app.