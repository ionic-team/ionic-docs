---
title: Hide Contrast Mode
initialTab: 'preview'
inlineHtmlPreviews: true
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

Ionic ships with themes for increased contrast for users with low vision. These themes work by increasing the contrast between foreground content, such as text, and background content, such as UI components. Ionic provides light and dark variants for high contrast.

## Enabling High Contrast Theme

There are three provided ways to enable the high contrast theme in an app: **always**, based on **system** settings, or by using a **class**.

### Always

The default theme provided with Ionic Framework also uses the default color contrast levels. The high contrast theme can be enabled by importing the following stylesheet in the appropriate files. This approach will enable the high contrast theme regardless of a user's preference for high contrast.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/themes/high-contrast.always.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/themes/high-contrast.always.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/themes/high-contrast.always.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/themes/high-contrast.always.css';
```

</TabItem>

</Tabs>

The high contrast dark theme can be applied by importing `high-contrast-dark.always.css` instead of `high-contrast.always.css`.

The following example will always display the high contrast light theme, regardless of the user's preference for high contrast or dark mode.

import AlwaysHighContrastMode from '@site/static/usage/v8/theming/always-high-contrast-mode/index.md';

<AlwaysHighContrastMode />

### System

The system approach to enabling high contrast mode involves checking the system settings for the user's preferred contrast. This is the default when starting a new Ionic Framework app. Importing the following stylesheets in the appropriate file will automatically retrieve the user's preference from the system settings and apply the high contrast theme when high contrast is preferred.

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/themes/high-contrast.system.css';
@import '@ionic/angular/css/themes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/themes/high-contrast.system.css';
import '@ionic/core/css/themes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/themes/high-contrast.system.css';
import '@ionic/react/css/themes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/themes/high-contrast.system.css';
import '@ionic/vue/css/themes/high-contrast-dark.system.css';
```

</TabItem>

</Tabs>

This approach activates the high contrast theme when the [CSS media query for `prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) is `more`. The `prefers-contrast` media query is supported by [all modern browsers](https://caniuse.com/?search=prefers-contrast). If support for an older browser is required, we recommend using the [class](#class) approach.

The following example uses the system settings to decide when to show high contrast mode.

:::info
Not sure how to change the system settings? Here's how to enable high contrast mode on [Windows 11](hhttps://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) and on [macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac).
:::

import SystemHighContrastMode from '@site/static/usage/v8/theming/system-high-contrast-mode/index.md';

<SystemHighContrastMode />
  
:::caution
The high contrast light theme must be imported after [core.css](../layout/global-stylesheets#corecss), and the high contrast dark theme must be imported after `dark.system.css`. Otherwise, the standard contrast theme will take priority.
:::

### Class

While the previous approaches are excellent for enabling the high contrast theme through file imports alone, there are scenarios where you may need more control over its application. In cases where you need to apply the high contrast theme conditionally, such as through a toggle, or if you want to extend the functionality based on system settings, we provide a high contrast theme class file. This file applies the high contrast theme when a specific class is added to an app. Importing the following stylesheets into the appropriate file will provide the necessary styles for using the high contrast theme with the class:

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/themes/high-contrast.class.css';
@import '@ionic/angular/css/themes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/themes/high-contrast.class.css';
import '@ionic/core/css/themes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/themes/high-contrast.class.css';
import '@ionic/react/css/themes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/themes/high-contrast.class.css';
import '@ionic/vue/css/themes/high-contrast-dark.class.css';
```

</TabItem>

</Tabs>

This approach activates the high contrast theme when the `.ion-theme-high-contrast` class is set on the `html` element. This class must be applied by the developer. This can be combined with the [`.ion-theme-dark` class](./dark-mode#class) to conditionally apply the high contrast dark theme.

The following example combines site settings, system settings, and the toggle to decide when to show high contrast mode. The site's theme takes precedence over system settings. If your system settings differ from the site's theme when the demo loads, it will use the site's theme.

:::info
Not sure how to change the system settings? Here's how to enable high contrast mode on [Windows 11](hhttps://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) and on [macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac).
:::

import ClassHighContrastMode from '@site/static/usage/v8/theming/class-high-contrast-mode/index.md';

<ClassHighContrastMode />
  
:::caution Important
The high contrast light theme must be imported after [core.css](../layout/global-stylesheets#corecss), and the high contrast dark theme must be imported after `dark.class.css`. Otherwise, the standard contrast theme will take priority.
:::

:::caution Important
The `.ion-theme-high-contrast` class **must** be added to the `html` element in order to work with the imported high contrast theme.
:::

## Customizing Ionic High Contrast Theme

Ionic has a recommended high contrast theme that can be enabled in three different ways: [always](#always), based on [system](#system) settings, or by using a [class](#class). Each of these methods involves importing the high contrast theme file with the corresponding name.

The theme variables are set by importing the relevant high contrast theme file and do not need to be copied into an app. For more information on the variables being changed, including additional variables for further customization, refer to the [Themes](themes.md) section.

<Tabs groupId="darkFiles" defaultValue="always" values={[{ value: 'always', label: 'Always (high-contrast.always.css)' }, { value: 'system', label: 'System (high-contrast.system.css)' }, { value: 'class', label: 'Class (high-contrast.class.css)' }]}>

<TabItem value="always">

The **always** high contrast theme behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a high contrast theme in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the high contrast theme on `ios` devices using the `:root.ios` selector.
3. Setting variables for the high contrast theme on `md` devices using the `:root.md` selector.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic high contrast theme variables. For example, because the `--ion-item-background` variable is set for each mode in the high contrast dark theme, it cannot be overridden in the `:root` selector. A higher specificity selector, such as `:root.ios`, is required.
:::

</TabItem>

<TabItem value="system">

The **system** high contrast theme behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a high contrast theme in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the high contrast theme on `ios` devices using the `:root.ios` selector.
3. Setting variables for the high contrast theme on `md` devices using the `:root.md` selector.
4. Only applies these variables when the [CSS media query for `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is `dark`.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark theme variables. For example, because the `--ion-item-background` variable is set for each mode in the high contrast dark theme, it cannot be overridden in the `:root` selector. A higher specificity selector, such as `:root.ios`, is required.
:::

</TabItem>

<TabItem value="class">

The **class** high contrast theme behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a high contrast theme in the `.ion-theme-dark` selector. The `.ion-theme-dark` class must be added to the `html` element in an app.
2. Setting variables for the high contrast theme on `ios` devices using the `.ion-theme-dark.ios` selector.
3. Setting variables for the high contrast theme on `md` devices using the `.ion-theme-dark.md` selector.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark theme variables. For example, because the `--ion-item-background` variable is set for each mode in the high contrast dark theme, it cannot be overridden in the `.ion-theme-dark` selector. A higher specificity selector, such as `.ion-theme-dark.ios`, is required.
:::

</TabItem>

</Tabs>