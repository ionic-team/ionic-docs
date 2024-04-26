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

Ionic makes it easy to change the themes of your app, including supporting dark color schemes. Dark mode is a display setting that changes all of an app's views to a dark theme. It has system-wide support on iOS and Android, making it highly desirable for developers to add to their apps.

## Enabling Dark Theme

There are three provided ways to enable the dark theme in an app: **always**, based on **system** settings, or by using a CSS **class**.

### Always

The default theme provided with Ionic Framework is a light theme, consisting of a light background and dark text. However, the default theme can be changed to the dark theme by importing the following stylesheet in the appropriate files:

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/themes/dark.always.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/themes/dark.always.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/themes/dark.always.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/themes/dark.always.css';
```

</TabItem>

</Tabs>

This sets the [application colors](/docs/theming/themes#application-colors) and [stepped colors](/docs/theming/themes#stepped-colors) on the [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector.

The following example will always display the dark theme, regardless of the system settings for dark mode.

import AlwaysDarkMode from '@site/static/usage/v8/theming/always-dark-mode/index.md';

<AlwaysDarkMode />

:::caution Important
Avoid targeting the `.ios` or `.md` selectors to override the Ionic dark theme, as these classes are added to each component and will take priority over globally defined variables. Instead, we can target the mode-specific classes on the `:root` element.
:::

### System

The system approach to enable dark mode involves checking the system settings for the user's preferred color scheme. This is the default when starting a new Ionic Framework app. Importing the following stylesheet in the appropriate file will automatically retrieve the user's preference from the system settings and apply the dark theme when dark mode is preferred:

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/themes/dark.system.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/themes/dark.system.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/themes/dark.system.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/themes/dark.system.css';
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
Avoid targeting the `.ios` or `.md` selectors to override the Ionic dark theme, as these classes are added to each component and will take priority over globally defined variables. Instead, we can target the mode-specific classes on the `:root` element.
:::

### CSS Class

While the previous approaches are excellent for enabling the dark theme through file imports alone, there are scenarios where you may need more control over its application. In cases where you need to apply the dark theme conditionally, such as through a toggle, or if you want to extend the functionality based on system settings, we provide a dark theme class file. This file applies the dark theme when a specific class is added to an app. Importing the following stylesheet into the appropriate file will provide the necessary styles for using the dark theme with the class:

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/themes/dark.class.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/themes/dark.class.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/themes/dark.class.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/themes/dark.class.css';
```

</TabItem>

</Tabs>

This sets the [application colors](/docs/theming/themes#application-colors) and [stepped colors](/docs/theming/themes#stepped-colors) on the `.ion-theme-dark` selector, which must be applied to the app by the developer.

The following example combines site settings, system settings, and the toggle to decide when to show dark mode. The site's theme takes precedence over system settings. If your system settings differ from the site's theme when the demo loads, it will use the site's theme.

:::info
Not sure how to change the system settings? Here's how to enable dark mode on [Windows 11](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe) and on [macOS](https://support.apple.com/en-us/HT208976).
:::

import ClassDarkMode from '@site/static/usage/v8/theming/class-dark-mode/index.md';

<ClassDarkMode />

:::caution Important
The `.ion-theme-dark` class **must** be added to the `html` element in order to work with the imported dark theme.
:::

## Adjusting System UI Components

When developing a dark theme, you may notice that certain system UI components are not adjusting to dark mode properly. To fix this you will need to specify the `color-scheme`. See the <a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">browser compatibility for color-scheme</a> for details on cross browser support.

While you may be mainly using Ionic components instead of only native components, `color-scheme` can also affect aspects of your application such as the scrollbar. In order to use `color-scheme` you will need to add the following HTML to the `head` of your application:

```html
<meta name="color-scheme" content="light dark" />
```

This allows the page to indicate which color scheme it is comfortable being rendered with. Alternatively, you can add the following CSS to do this on a per-element basis:

```css
color-scheme: light dark;
```

| Default scrollbar                                                                                                                                      | Scrollbar with `color-scheme`                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![A default light-themed scrollbar in an application interface.](/img/theming/color-scheme-light.png 'Default scrollbar appearance without dark mode') | ![A dark-themed scrollbar in an application interface, demonstrating the effect of the 'color-scheme' property.](/img/theming/color-scheme-dark.png "Scrollbar appearance with dark mode 'color-scheme' applied") |

For more information regarding `color-scheme` please see https://web.dev/color-scheme/.

:::note
`color-scheme` does not apply to the keyboard. For details on how dark mode works with the keyboard, see [Keyboard Documentation](../developing/keyboard.md#dark-mode).
:::

:::note
For developers looking to customize the theme color under the status bar in Safari on iOS 15 or the toolbar in Safari on macOS, see [`theme-color` Meta](./advanced.md#theme-color-meta).
:::

## Ionic Dark Theme

Ionic has a recommended dark theme that can be enabled in three different ways: [always](#always), based on [system](#system) settings, or by using a [CSS class](#css-class). Each of these methods involves importing the dark theme file with the corresponding name.

The contents of each file are included below for reference. These variables are set by importing the relevant dark theme file and do not need to be copied into an app. For more information on the variables being changed, including additional variables for further customization, refer to the [Themes](themes.md) section.

<Tabs groupId="darkFiles" defaultValue="always" values={[{ value: 'always', label: 'Always (dark.always.css)' }, { value: 'system', label: 'System (dark.system.css)' }, { value: 'class', label: 'Class (dark.class.css)' }]}>

<TabItem value="always">

The **always** dark theme behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark theme in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the dark theme on `ios` devices using the `:root.ios` selector.
3. Setting variables for the dark theme on `md` devices using the `:root.md` selector.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark theme variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `:root` selector. A higher specificity selector, such as `:root.ios`, is required.
:::

```css
:root {
  --ion-color-primary: #4d8dff;
  --ion-color-primary-rgb: 77, 141, 255;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #447ce0;
  --ion-color-primary-tint: #5f98ff;

  --ion-color-secondary: #62bdff;
  --ion-color-secondary-rgb: 98, 189, 255;
  --ion-color-secondary-contrast: #000000;
  --ion-color-secondary-contrast-rgb: 0, 0, 0;
  --ion-color-secondary-shade: #56a6e0;
  --ion-color-secondary-tint: #72c4ff;

  --ion-color-tertiary: #8482fb;
  --ion-color-tertiary-rgb: 132, 130, 251;
  --ion-color-tertiary-contrast: #000000;
  --ion-color-tertiary-contrast-rgb: 0, 0, 0;
  --ion-color-tertiary-shade: #7472dd;
  --ion-color-tertiary-tint: #908ffb;

  --ion-color-success: #2dd55b;
  --ion-color-success-rgb: 45, 213, 91;
  --ion-color-success-contrast: #000000;
  --ion-color-success-contrast-rgb: 0, 0, 0;
  --ion-color-success-shade: #28bb50;
  --ion-color-success-tint: #42d96b;

  --ion-color-warning: #ffce31;
  --ion-color-warning-rgb: 255, 206, 49;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0, 0, 0;
  --ion-color-warning-shade: #e0b52b;
  --ion-color-warning-tint: #ffd346;

  --ion-color-danger: #f56570;
  --ion-color-danger-rgb: 245, 101, 112;
  --ion-color-danger-contrast: #000000;
  --ion-color-danger-contrast-rgb: 0, 0, 0;
  --ion-color-danger-shade: #d85963;
  --ion-color-danger-tint: #f6747e;

  --ion-color-dark: #f3f3f3;
  --ion-color-dark-rgb: 243, 243, 243;
  --ion-color-dark-contrast: #000000;
  --ion-color-dark-contrast-rgb: 0, 0, 0;
  --ion-color-dark-shade: #d6d6d6;
  --ion-color-dark-tint: #f4f4f4;

  --ion-color-medium: #959595;
  --ion-color-medium-rgb: 149, 149, 149;
  --ion-color-medium-contrast: #000000;
  --ion-color-medium-contrast-rgb: 0, 0, 0;
  --ion-color-medium-shade: #838383;
  --ion-color-medium-tint: #a0a0a0;

  --ion-color-light: #2f2f2f;
  --ion-color-light-rgb: 47, 47, 47;
  --ion-color-light-contrast: #ffffff;
  --ion-color-light-contrast-rgb: 255, 255, 255;
  --ion-color-light-shade: #292929;
  --ion-color-light-tint: #444444;
}

:root.ios {
  --ion-background-color: #000000;
  --ion-background-color-rgb: 0, 0, 0;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255, 255, 255;

  --ion-color-step-50: #0d0d0d;
  --ion-color-step-100: #1a1a1a;
  --ion-color-step-150: #262626;
  --ion-color-step-200: #333333;
  --ion-color-step-250: #404040;
  --ion-color-step-300: #4d4d4d;
  --ion-color-step-350: #595959;
  --ion-color-step-400: #666666;
  --ion-color-step-450: #737373;
  --ion-color-step-500: #808080;
  --ion-color-step-550: #8c8c8c;
  --ion-color-step-600: #999999;
  --ion-color-step-650: #a6a6a6;
  --ion-color-step-700: #b3b3b3;
  --ion-color-step-750: #bfbfbf;
  --ion-color-step-800: #cccccc;
  --ion-color-step-850: #d9d9d9;
  --ion-color-step-900: #e6e6e6;
  --ion-color-step-950: #f2f2f2;

  --ion-item-background: #000000;
  --ion-card-background: #1c1c1d;
}

:root.ios ion-modal {
  --ion-background-color: var(--ion-color-step-100);
  --ion-toolbar-background: var(--ion-color-step-150);
  --ion-toolbar-border-color: var(--ion-color-step-250);
}

:root.md {
  --ion-background-color: #121212;
  --ion-background-color-rgb: 18, 18, 18;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255, 255, 255;

  --ion-border-color: #222222;

  --ion-color-step-50: #1e1e1e;
  --ion-color-step-100: #2a2a2a;
  --ion-color-step-150: #363636;
  --ion-color-step-200: #414141;
  --ion-color-step-250: #4d4d4d;
  --ion-color-step-300: #595959;
  --ion-color-step-350: #656565;
  --ion-color-step-400: #717171;
  --ion-color-step-450: #7d7d7d;
  --ion-color-step-500: #898989;
  --ion-color-step-550: #949494;
  --ion-color-step-600: #a0a0a0;
  --ion-color-step-650: #acacac;
  --ion-color-step-700: #b8b8b8;
  --ion-color-step-750: #c4c4c4;
  --ion-color-step-800: #d0d0d0;
  --ion-color-step-850: #dbdbdb;
  --ion-color-step-900: #e7e7e7;
  --ion-color-step-950: #f3f3f3;

  --ion-item-background: #1e1e1e;
  --ion-toolbar-background: #1f1f1f;
  --ion-tab-bar-background: #1f1f1f;
  --ion-card-background: #1e1e1e;
}
```

</TabItem>

<TabItem value="system">

The **system** dark theme behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark theme in the `:root` selector. The [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.
2. Setting variables for the dark theme on `ios` devices using the `:root.ios` selector.
3. Setting variables for the dark theme on `md` devices using the `:root.md` selector.
4. Only applies these variables when the [CSS media query for `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is `dark`.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark theme variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `:root` selector. A higher specificity selector, such as `:root.ios`, is required.
:::

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ion-color-primary: #4d8dff;
    --ion-color-primary-rgb: 77, 141, 255;
    --ion-color-primary-contrast: #000000;
    --ion-color-primary-contrast-rgb: 0, 0, 0;
    --ion-color-primary-shade: #447ce0;
    --ion-color-primary-tint: #5f98ff;

    --ion-color-secondary: #62bdff;
    --ion-color-secondary-rgb: 98, 189, 255;
    --ion-color-secondary-contrast: #000000;
    --ion-color-secondary-contrast-rgb: 0, 0, 0;
    --ion-color-secondary-shade: #56a6e0;
    --ion-color-secondary-tint: #72c4ff;

    --ion-color-tertiary: #8482fb;
    --ion-color-tertiary-rgb: 132, 130, 251;
    --ion-color-tertiary-contrast: #000000;
    --ion-color-tertiary-contrast-rgb: 0, 0, 0;
    --ion-color-tertiary-shade: #7472dd;
    --ion-color-tertiary-tint: #908ffb;

    --ion-color-success: #2dd55b;
    --ion-color-success-rgb: 45, 213, 91;
    --ion-color-success-contrast: #000000;
    --ion-color-success-contrast-rgb: 0, 0, 0;
    --ion-color-success-shade: #28bb50;
    --ion-color-success-tint: #42d96b;

    --ion-color-warning: #ffce31;
    --ion-color-warning-rgb: 255, 206, 49;
    --ion-color-warning-contrast: #000000;
    --ion-color-warning-contrast-rgb: 0, 0, 0;
    --ion-color-warning-shade: #e0b52b;
    --ion-color-warning-tint: #ffd346;

    --ion-color-danger: #f56570;
    --ion-color-danger-rgb: 245, 101, 112;
    --ion-color-danger-contrast: #000000;
    --ion-color-danger-contrast-rgb: 0, 0, 0;
    --ion-color-danger-shade: #d85963;
    --ion-color-danger-tint: #f6747e;

    --ion-color-dark: #f3f3f3;
    --ion-color-dark-rgb: 243, 243, 243;
    --ion-color-dark-contrast: #000000;
    --ion-color-dark-contrast-rgb: 0, 0, 0;
    --ion-color-dark-shade: #d6d6d6;
    --ion-color-dark-tint: #f4f4f4;

    --ion-color-medium: #959595;
    --ion-color-medium-rgb: 149, 149, 149;
    --ion-color-medium-contrast: #000000;
    --ion-color-medium-contrast-rgb: 0, 0, 0;
    --ion-color-medium-shade: #838383;
    --ion-color-medium-tint: #a0a0a0;

    --ion-color-light: #2f2f2f;
    --ion-color-light-rgb: 47, 47, 47;
    --ion-color-light-contrast: #ffffff;
    --ion-color-light-contrast-rgb: 255, 255, 255;
    --ion-color-light-shade: #292929;
    --ion-color-light-tint: #444444;
  }

  :root.ios {
    --ion-background-color: #000000;
    --ion-background-color-rgb: 0, 0, 0;

    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255, 255, 255;

    --ion-color-step-50: #0d0d0d;
    --ion-color-step-100: #1a1a1a;
    --ion-color-step-150: #262626;
    --ion-color-step-200: #333333;
    --ion-color-step-250: #404040;
    --ion-color-step-300: #4d4d4d;
    --ion-color-step-350: #595959;
    --ion-color-step-400: #666666;
    --ion-color-step-450: #737373;
    --ion-color-step-500: #808080;
    --ion-color-step-550: #8c8c8c;
    --ion-color-step-600: #999999;
    --ion-color-step-650: #a6a6a6;
    --ion-color-step-700: #b3b3b3;
    --ion-color-step-750: #bfbfbf;
    --ion-color-step-800: #cccccc;
    --ion-color-step-850: #d9d9d9;
    --ion-color-step-900: #e6e6e6;
    --ion-color-step-950: #f2f2f2;

    --ion-item-background: #000000;
    --ion-card-background: #1c1c1d;
  }

  :root.ios ion-modal {
    --ion-background-color: var(--ion-color-step-100);
    --ion-toolbar-background: var(--ion-color-step-150);
    --ion-toolbar-border-color: var(--ion-color-step-250);
  }

  :root.md {
    --ion-background-color: #121212;
    --ion-background-color-rgb: 18, 18, 18;

    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255, 255, 255;

    --ion-border-color: #222222;

    --ion-color-step-50: #1e1e1e;
    --ion-color-step-100: #2a2a2a;
    --ion-color-step-150: #363636;
    --ion-color-step-200: #414141;
    --ion-color-step-250: #4d4d4d;
    --ion-color-step-300: #595959;
    --ion-color-step-350: #656565;
    --ion-color-step-400: #717171;
    --ion-color-step-450: #7d7d7d;
    --ion-color-step-500: #898989;
    --ion-color-step-550: #949494;
    --ion-color-step-600: #a0a0a0;
    --ion-color-step-650: #acacac;
    --ion-color-step-700: #b8b8b8;
    --ion-color-step-750: #c4c4c4;
    --ion-color-step-800: #d0d0d0;
    --ion-color-step-850: #dbdbdb;
    --ion-color-step-900: #e7e7e7;
    --ion-color-step-950: #f3f3f3;

    --ion-item-background: #1e1e1e;
    --ion-toolbar-background: #1f1f1f;
    --ion-tab-bar-background: #1f1f1f;
    --ion-card-background: #1e1e1e;
  }
}
```

</TabItem>

<TabItem value="class">

The **class** dark theme behaves in the following ways:

1. Sets the [Ionic colors](colors.md) for all [modes](platform-styles.md#ionic-modes) to complement a dark theme in the `.ion-theme-dark` selector. The `.ion-theme-dark` class must be added to the `html` element in an app.
2. Setting variables for the dark theme on `ios` devices using the `.ion-theme-dark.ios` selector.
3. Setting variables for the dark theme on `md` devices using the `.ion-theme-dark.md` selector.

:::caution
It is important to pay attention to the specificity if you want to override any of the Ionic dark theme variables. For example, because the `--ion-item-background` variable is set for each mode, it cannot be overridden in the `.ion-theme-dark` selector. A higher specificity selector, such as `.ion-theme-dark.ios`, is required.
:::

```css
.ion-theme-dark {
  --ion-color-primary: #4d8dff;
  --ion-color-primary-rgb: 77, 141, 255;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #447ce0;
  --ion-color-primary-tint: #5f98ff;

  --ion-color-secondary: #62bdff;
  --ion-color-secondary-rgb: 98, 189, 255;
  --ion-color-secondary-contrast: #000000;
  --ion-color-secondary-contrast-rgb: 0, 0, 0;
  --ion-color-secondary-shade: #56a6e0;
  --ion-color-secondary-tint: #72c4ff;

  --ion-color-tertiary: #8482fb;
  --ion-color-tertiary-rgb: 132, 130, 251;
  --ion-color-tertiary-contrast: #000000;
  --ion-color-tertiary-contrast-rgb: 0, 0, 0;
  --ion-color-tertiary-shade: #7472dd;
  --ion-color-tertiary-tint: #908ffb;

  --ion-color-success: #2dd55b;
  --ion-color-success-rgb: 45, 213, 91;
  --ion-color-success-contrast: #000000;
  --ion-color-success-contrast-rgb: 0, 0, 0;
  --ion-color-success-shade: #28bb50;
  --ion-color-success-tint: #42d96b;

  --ion-color-warning: #ffce31;
  --ion-color-warning-rgb: 255, 206, 49;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0, 0, 0;
  --ion-color-warning-shade: #e0b52b;
  --ion-color-warning-tint: #ffd346;

  --ion-color-danger: #f56570;
  --ion-color-danger-rgb: 245, 101, 112;
  --ion-color-danger-contrast: #000000;
  --ion-color-danger-contrast-rgb: 0, 0, 0;
  --ion-color-danger-shade: #d85963;
  --ion-color-danger-tint: #f6747e;

  --ion-color-dark: #f3f3f3;
  --ion-color-dark-rgb: 243, 243, 243;
  --ion-color-dark-contrast: #000000;
  --ion-color-dark-contrast-rgb: 0, 0, 0;
  --ion-color-dark-shade: #d6d6d6;
  --ion-color-dark-tint: #f4f4f4;

  --ion-color-medium: #959595;
  --ion-color-medium-rgb: 149, 149, 149;
  --ion-color-medium-contrast: #000000;
  --ion-color-medium-contrast-rgb: 0, 0, 0;
  --ion-color-medium-shade: #838383;
  --ion-color-medium-tint: #a0a0a0;

  --ion-color-light: #2f2f2f;
  --ion-color-light-rgb: 47, 47, 47;
  --ion-color-light-contrast: #ffffff;
  --ion-color-light-contrast-rgb: 255, 255, 255;
  --ion-color-light-shade: #292929;
  --ion-color-light-tint: #444444;
}

.ion-theme-dark.ios {
  --ion-background-color: #000000;
  --ion-background-color-rgb: 0, 0, 0;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255, 255, 255;

  --ion-color-step-50: #0d0d0d;
  --ion-color-step-100: #1a1a1a;
  --ion-color-step-150: #262626;
  --ion-color-step-200: #333333;
  --ion-color-step-250: #404040;
  --ion-color-step-300: #4d4d4d;
  --ion-color-step-350: #595959;
  --ion-color-step-400: #666666;
  --ion-color-step-450: #737373;
  --ion-color-step-500: #808080;
  --ion-color-step-550: #8c8c8c;
  --ion-color-step-600: #999999;
  --ion-color-step-650: #a6a6a6;
  --ion-color-step-700: #b3b3b3;
  --ion-color-step-750: #bfbfbf;
  --ion-color-step-800: #cccccc;
  --ion-color-step-850: #d9d9d9;
  --ion-color-step-900: #e6e6e6;
  --ion-color-step-950: #f2f2f2;

  --ion-item-background: #000000;
  --ion-card-background: #1c1c1d;
}

.ion-theme-dark.ios ion-modal {
  --ion-background-color: var(--ion-color-step-100);
  --ion-toolbar-background: var(--ion-color-step-150);
  --ion-toolbar-border-color: var(--ion-color-step-250);
}

.ion-theme-dark.md {
  --ion-background-color: #121212;
  --ion-background-color-rgb: 18, 18, 18;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255, 255, 255;

  --ion-border-color: #222222;

  --ion-color-step-50: #1e1e1e;
  --ion-color-step-100: #2a2a2a;
  --ion-color-step-150: #363636;
  --ion-color-step-200: #414141;
  --ion-color-step-250: #4d4d4d;
  --ion-color-step-300: #595959;
  --ion-color-step-350: #656565;
  --ion-color-step-400: #717171;
  --ion-color-step-450: #7d7d7d;
  --ion-color-step-500: #898989;
  --ion-color-step-550: #949494;
  --ion-color-step-600: #a0a0a0;
  --ion-color-step-650: #acacac;
  --ion-color-step-700: #b8b8b8;
  --ion-color-step-750: #c4c4c4;
  --ion-color-step-800: #d0d0d0;
  --ion-color-step-850: #dbdbdb;
  --ion-color-step-900: #e7e7e7;
  --ion-color-step-950: #f3f3f3;

  --ion-item-background: #1e1e1e;
  --ion-toolbar-background: #1f1f1f;
  --ion-tab-bar-background: #1f1f1f;
  --ion-card-background: #1e1e1e;
}
```

</TabItem>

</Tabs>
