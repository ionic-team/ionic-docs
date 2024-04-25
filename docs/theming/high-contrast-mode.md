---
title: High Contrast Mode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>High Contrast Mode to Increase Color Contrast</title>
  <meta
    name="description"
    content="Developers are adding high contrast mode CSS on native applications to support their user preferences. Read to learn more about high contrast color schemes for Ionic apps."
  />
</head>

Ionic offers palettes with increased contrast for users with low vision. These palettes work by amplifying the contrast between foreground content, such as text, and background content, such as UI components. Ionic provides both light and dark variants for achieving high contrast.

## Overview

The default palette in Ionic provides [Ionic colors](./colors.md) that meet [Level AA color contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) as defined by Web Content Accessibility Guidelines (WCAG) when used with the appropriate contrast color. The [Ionic colors](./colors.md) in the high contrast palette have been updated to meet [Level AAA color contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html) when used with the appropriate contrast color. Notably, improvements have been made to the contrast of UI components, including border, text, and background colors. However, it's important to note that within the high contrast palette, priority is given to text legibility. This means that if adjusting the contrast of a UI component against the page background would significantly compromise the contrast between the component's text and its background, the contrast of the UI component background will remain unchanged.

## Enabling High Contrast Theme

There are three provided ways to enable the high contrast palette in an app: **always**, based on **system** settings, or by using a CSS **class**.

### Always

The high contrast palette can be enabled by importing the following stylesheet in the appropriate files. This approach will enable the high contrast palette regardless of the system settings for contrast preference.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```scss
@import '@ionic/angular/css/palettes/high-contrast.always.css'; // Light palette
// @import '@ionic/angular/css/palettes/high-contrast-dark.always.css'; // Dark palette
```

</TabItem>
<TabItem value="javascript">

```typescript
import '@ionic/core/css/palettes/high-contrast.always.css'; // Light palette
// import '@ionic/core/css/palettes/high-contrast-dark.always.css'; // Dark palette
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.always.css'; // Light palette
// import '@ionic/react/css/palettes/high-contrast-dark.always.css'; // Dark palette
```

</TabItem>
<TabItem value="vue">

```typescript
import '@ionic/vue/css/palettes/high-contrast.always.css'; // Light palette
// import '@ionic/vue/css/palettes/high-contrast-dark.always.css'; // Dark palette
```

</TabItem>

</Tabs>

The high contrast dark palette can be applied by importing `high-contrast-dark.always.css` instead of `high-contrast.always.css`.

The following example will always display the high contrast light palette, regardless of the user's preference for high contrast or dark mode.

import AlwaysHighContrastMode from '@site/static/usage/v8/theming/always-high-contrast-mode/index.md';

<AlwaysHighContrastMode />

### System

The system approach to enabling high contrast mode involves checking the system settings for the user's preferred contrast. This is the default when starting a new Ionic Framework app. Importing the following stylesheets in the appropriate file will automatically retrieve the user's preference from the system settings and apply the high contrast palette when high contrast is preferred.

The following example shows how to include both the high contrast light palette as well as the high contrast dark palette. The system's dark mode preference will be checked to show either the light or dark variant of the high contrast palette.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/high-contrast.system.css';
@import '@ionic/angular/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/high-contrast.system.css';
import '@ionic/core/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.system.css';
import '@ionic/react/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/high-contrast.system.css';
import '@ionic/vue/css/palettes/high-contrast-dark.system.css';
```

</TabItem>

</Tabs>

This approach activates the high contrast palette when the [CSS media query for `prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) is `more`. The `prefers-contrast` media query is supported by [all modern browsers](https://caniuse.com/?search=prefers-contrast). If support for an older browser is required, we recommend using the [CSS class](#css-class) approach.

The following example uses the system settings to decide when to show high contrast mode.

:::info
Not sure how to change the system settings? Here's how to enable high contrast mode on [Windows 11](hhttps://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) and on [macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac).
:::

import SystemHighContrastMode from '@site/static/usage/v8/theming/system-high-contrast-mode/index.md';

<SystemHighContrastMode />

:::caution
The high contrast light palette must be imported after [core.css](../layout/global-stylesheets.md#corecss), and the
high contrast dark palette must be imported after `dark.system.css`. Otherwise, the standard contrast palette will take priority.
:::

### CSS Class

While the previous approaches are excellent for enabling the high contrast palette through file imports alone, there are scenarios where you may need more control over where it is applied. In cases where you need to apply the high contrast palette conditionally, such as through a toggle, or if you want to extend the functionality based on system settings, we provide a high contrast palette class file. This file applies the high contrast palette when a specific class is added to an app. Importing the following stylesheets into the appropriate file will provide the necessary styles for using the high contrast palette with the class:

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/high-contrast.class.css';
@import '@ionic/angular/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/high-contrast.class.css';
import '@ionic/core/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.class.css';
import '@ionic/react/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/high-contrast.class.css';
import '@ionic/vue/css/palettes/high-contrast-dark.class.css';
```

</TabItem>

</Tabs>

This approach activates the high contrast palette when the `.ion-palette-high-contrast` class is set on the `html` element. This class must be applied by the developer. This can be combined with the [`.ion-palette-dark` class](./dark-mode.md#css-class) to conditionally apply the high contrast dark palette.

The following example combines site settings, system settings, and the toggle to decide when to show high contrast mode. The site's palette takes precedence over system settings. If your system settings differ from the site's palette when the demo loads, it will use the site's palette.

:::info
Not sure how to change the system settings? Here's how to enable high contrast mode on [Windows 11](hhttps://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) and on [macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac).
:::

import ClassHighContrastMode from '@site/static/usage/v8/theming/class-high-contrast-mode/index.md';

<ClassHighContrastMode />

:::caution
The high contrast light palette must be imported after [core.css](../layout/global-stylesheets.md#corecss),
and the high contrast dark palette must be imported after `dark.class.css`. Otherwise, the standard contrast palette will take
priority.
:::

:::caution
The `.ion-palette-high-contrast` class **must** be added to the `html` element in order to work with the imported high contrast palette.
:::

## Customizing Ionic High Contrast Theme

Ionic has a recommended high contrast palette that can be enabled in three different ways: [always](#always), based on [system](#system) settings, or by using a [CSS class](#css-class). Each of these methods involves importing the high contrast palette file with the corresponding name.

The theme variables are set by importing the relevant high contrast palette file and do not need to be copied into an app. For more information on the variables being changed, including additional variables for further customization, refer to the [Themes](themes.md) section.

The following provides details on how to customize the high contrast palette depending on how it was applied in an application.

<Tabs groupId="highContrastFile" defaultValue="always" values={[{ value: 'always', label: 'Always' }, { value: 'system', label: 'System' }, { value: 'class', label: 'Class' }]}>

<TabItem value="always">

The **always** high contrast palette can be accessed by importing `high-contrast.always.css` for the light variant and `high-contrast-dark.always.css` for the dark variant.

The **always** high contrast palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a high contrast palette in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the high contrast palette on `ios` devices using the `:root.ios` selector.
3. Setting variables for the high contrast palette on `md` devices using the `:root.md` selector.

</TabItem>

<TabItem value="system">

The **system** high contrast palette can be accessed by importing `high-contrast.system.css` for the light variant and `high-contrast-dark.system.css` for the dark variant.

The **system** high contrast palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a high contrast palette in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the high contrast palette on `ios` devices using the `:root.ios` selector.
3. Setting variables for the high contrast palette on `md` devices using the `:root.md` selector.
4. Only applies these variables when the [CSS media query for `prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) is `more`.

</TabItem>

<TabItem value="class">

The **class** high contrast palette can be accessed by importing `high-contrast.class.css` for the light variant and `high-contrast-dark.class.css` for the dark variant.

The **class** high contrast palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a high contrast palette in the `.ion-palette-high-contrast` selector. The `.ion-palette-high-contrast` class must be added to the `html` element in an app.
2. Setting variables for the high contrast palette on `ios` devices using the `.ion-palette-high-contrast.ios` selector.
3. Setting variables for the high contrast palette on `md` devices using the `.ion-palette-high-contrast.md` selector.

</TabItem>

</Tabs>
