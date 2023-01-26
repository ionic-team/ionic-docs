---
title: Base Components
---

Base Components allow developers to opt-out of the iOS and Material Design styles to build a theme that fully meets their needs.

:::note
Base Components is in Developer Preview and should not be used in production applications. Please file any feedback on [Ionic's GitHub Repo](https://github.com/ionic-team/ionic-framework/issues).
:::

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

## When to Use

Ionic ships with [Platform Styles](./platform-styles) that match the iOS and Material Design specifications. This allows developers to begin building with Ionic components that look good without worrying about the design. However, since these designs follow specifications provided by Apple and Google, they are very opinionated. Developers who want to have their application look consistent across iOS and Android may have difficulty extending the iOS and Material Design implementations to meet their requirements.

Developers should consider base components when they have a pre-existing design system or brand identity that they need to bring to Ionic in a consistent way across iOS and Android.

While base components allow for a significant level of customization, it does require a high level of investment from the developer. As Ionic adds more components, developers will need to update their theme to account for these new components.

If developers are just starting out with Ionic, we recommend starting with the [Platform Styles](./platform-styles) and using the [CSS Variables](./css-variables) and [CSS Shadow Parts](./css-shadow-parts) APIs to customize the look of their app.