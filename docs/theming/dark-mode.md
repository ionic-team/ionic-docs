---
title: Dark Mode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Dark Mode to Change Color Schemes and CSS Properties</title>
  <meta
    name="description"
    content="Developers are adding dark mode CSS on native applications to support their user preferences. Read to learn more about dark color schemes for Ionic apps."
  />
</head>

Ionic makes it easy to change the palettes of your app, including supporting dark color schemes. Dark mode is a display setting that changes all of an app's views to a dark palette. It has system-wide support on iOS and Android, making it highly desirable for developers to add to their apps.

## Enabling Dark Palette

There are three provided ways to enable the dark palette in an app: **always**, based on **system** settings, or by using a CSS **class**.

### Always

The default palette provided with Ionic Framework is a light palette, consisting of a light background and dark text. However, the default palette can be changed to the dark palette by importing the following stylesheet in the appropriate files:

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.always.css';
```

</TabItem>

</Tabs>

This sets the [application colors](/docs/theming/themes#application-colors) and [stepped colors](/docs/theming/themes#stepped-colors) on the [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector.

The following example will always display the dark palette, regardless of the system settings for dark mode.

import AlwaysDarkMode from '@site/static/usage/v8/theming/always-dark-mode/index.md';

<AlwaysDarkMode />

:::caution Important
Avoid targeting the `.ios` or `.md` selectors to override the Ionic dark palette, as these classes are added to each component and will take priority over globally defined variables. Instead, we can target the mode-specific classes on the `:root` element.
:::

### System

The system approach to enable dark mode involves checking the system settings for the user's preferred color scheme. This is the default when starting a new Ionic Framework app. Importing the following stylesheet in the appropriate file will automatically retrieve the user's preference from the system settings and apply the dark palette when dark mode is preferred:

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.system.css';
```

</TabItem>

</Tabs>

This sets the [application colors](/docs/theming/themes#application-colors) and [stepped colors](/docs/theming/themes#stepped-colors) when the [CSS media query for `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is `dark`. The `prefers-color-scheme` media query is supported by [all modern browsers](https://caniuse.com/#feat=prefers-color-scheme). If support for older browser is required, we recommend using the [CSS class](#css-class) approach.

The following example uses the system settings to decide when to show dark mode.

:::info
Not sure how to change the system settings? Here's how to enable dark mode on [Windows 11](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe) and on [macOS](https://support.apple.com/en-us/HT208976).
:::

import SystemDarkMode from '@site/static/usage/v8/theming/system-dark-mode/index.md';

<SystemDarkMode />

:::caution Important
Avoid targeting the `.ios` or `.md` selectors to override the Ionic dark palette, as these classes are added to each component and will take priority over globally defined variables. Instead, we can target the mode-specific classes on the `:root` element.
:::

### CSS Class

While the previous approaches are excellent for enabling the dark palette through file imports alone, there are scenarios where you may need more control over its application. In cases where you need to apply the dark palette conditionally, such as through a toggle, or if you want to extend the functionality based on system settings, we provide a dark palette class file. This file applies the dark palette when a specific class is added to an app. Importing the following stylesheet into the appropriate file will provide the necessary styles for using the dark palette with the class:

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.class.css';
```

</TabItem>

</Tabs>

This sets the [application colors](/docs/theming/themes#application-colors) and [stepped colors](/docs/theming/themes#stepped-colors) on the `.ion-palette-dark` selector, which must be applied to the app by the developer.

The following example combines site settings, system settings, and the toggle to decide when to show dark mode. The site's palette takes precedence over system settings. If your system settings differ from the site's palette when the demo loads, it will use the site's palette.

:::info
Not sure how to change the system settings? Here's how to enable dark mode on [Windows 11](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe) and on [macOS](https://support.apple.com/en-us/HT208976).
:::

import ClassDarkMode from '@site/static/usage/v8/theming/class-dark-mode/index.md';

<ClassDarkMode />

:::caution Important
The `.ion-palette-dark` class **must** be added to the `html` element in order to work with the imported dark palette.
:::

## Adjusting System UI Components

When developing a dark palette, you may notice that certain system UI components are not adjusting to dark mode properly. To fix this you will need to specify the `color-scheme`. See the <a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">browser compatibility for color-scheme</a> for details on cross browser support.

While you may be mainly using Ionic components instead of only native components, `color-scheme` can also affect aspects of your application such as the scrollbar. In order to use `color-scheme` you will need to add the following HTML to the `head` of your application:

```html
<meta name="color-scheme" content="light dark" />
```

This allows the page to indicate which color scheme it is comfortable being rendered with. Alternatively, you can add the following CSS to do this on a per-element basis:

```css
color-scheme: light dark;
```

| Default scrollbar                                                        | Scrollbar with `color-scheme`                                        |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Application without color-scheme](/img/theming/color-scheme-light.png) | ![Application with color-scheme](/img/theming/color-scheme-dark.png) |

For more information regarding `color-scheme` please see https://web.dev/color-scheme/.

:::note
`color-scheme` does not apply to the keyboard. For details on how dark mode works with the keyboard, see [Keyboard Documentation](../developing/keyboard.md#dark-mode).
:::

:::note
For developers looking to customize the theme color under the status bar in Safari on iOS 15 or the toolbar in Safari on macOS, see [`theme-color` Meta](./advanced.md#theme-color-meta).
:::

## Ionic Dark Palette

Ionic has a recommended dark palette that can be enabled in three different ways: [always](#always), based on [system](#system) settings, or by using a [CSS class](#css-class). Each of these methods involves importing the dark palette file with the corresponding name.

The contents of each file are included below for reference. These variables are set by importing the relevant dark palette file and do not need to be copied into an app. For more information on the variables being changed, including additional variables for further customization, refer to the [Themes](themes.md) section.

<Tabs groupId="darkFiles" defaultValue="always" values={[{ value: 'always', label: 'Always (dark.always.css)' }, { value: 'system', label: 'System (dark.system.css)' }, { value: 'class', label: 'Class (dark.class.css)' }]}>

<TabItem value="always">

The **always** dark palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark palette in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the dark palette on `ios` devices using the `:root.ios` selector.
3. Setting variables for the dark palette on `md` devices using the `:root.md` selector.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark palette variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `:root` selector. A higher specificity selector, such as `:root.ios`, is required.
:::

:::info
The contents of Ionic's dark palette can be [viewed on GitHub](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.scss). The CSS used to apply the **always** dark palette can be found [here](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.always.scss).
:::

</TabItem>

<TabItem value="system">

The **system** dark palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark palette in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the dark palette on `ios` devices using the `:root.ios` selector.
3. Setting variables for the dark palette on `md` devices using the `:root.md` selector.
4. Only applies these variables when the [CSS media query for `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is `dark`.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark palette variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `:root` selector. A higher specificity selector, such as `:root.ios`, is required.
:::

:::info
The contents of Ionic's dark palette can be [viewed on GitHub](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.scss). The CSS used to apply the **system** dark palette can be found [here](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.system.scss).
:::

</TabItem>

<TabItem value="class">

The **class** dark palette behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark palette in the `.ion-palette-dark` selector. The `.ion-palette-dark` class must be added to the `html` element in an app.
2. Setting variables for the dark palette on `ios` devices using the `.ion-palette-dark.ios` selector.
3. Setting variables for the dark palette on `md` devices using the `.ion-palette-dark.md` selector.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark palette variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `.ion-palette-dark` selector. A higher specificity selector, such as `.ion-palette-dark.ios`, is required.
:::

:::info
The contents of Ionic's dark palette can be [viewed on GitHub](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.scss). The CSS used to apply the **class** dark palette can be found [here](https://github.com/ionic-team/ionic-framework/blob/feature-8.0/core/src/css/palettes/dark.class.scss).
:::

</TabItem>

</Tabs>
