---
previousText: 'Advanced'
previousUrl: '/docs/theming/advanced'
contributors:
  - mhartington
---

# Dark Mode

Dark Mode is a specific theme that developers can add to their app in two ways. There's the new `prefers-color-scheme` media query or the fallback method of targeting a class. To create a dark mode for an app, all that's needed are a few changes to different CSS variables.

## Using Media Queries

The first method available is the CSS media query for the user's preferred color scheme. This media query will hook into the system setting of the user's device and apply the changes if a dark mode is enabled.

The fist values that will need to change are the text color and background color. As the name "dark mode" implies, the background of an app should be dark, with lighter text.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ion-background-color: var(--ion-color-dark);
    --ion-background-color-rgb: var(--ion-color-dark-rgb);

    --ion-text-color: var(--ion-color-light);
    --ion-text-color-rgb: var(--ion-color-light-rgb);
  }
}
```

These will take the value from the default Ionic colors in an app. Depending on any other customizations that have been made to the default theme, some adjustments may be needed. The overall idea is that the dark mode that is applied uses the same colors in an app's theme and creates a cohesive UI.

In addition, the step variables can also be modified to further enhance the dark mode experience.

In this case, the color steps are generated based on the background color and text color. The [stepped color generator](/docs/theming/advanced#generate-stepped-color-variables) can take the hex value of the background color and text color and automatically generate the steps needed for an app.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ion-background-color: var(--ion-color-dark);
    --ion-background-color-rgb: var(--ion-color-dark-rgb);

    --ion-text-color: var(--ion-color-light);
    --ion-text-color-rgb: var(--ion-color-light-rgb);

    --ion-color-step-50: #2d2e32;
    --ion-color-step-100: #37393d;
    --ion-color-step-150: #424347;
    --ion-color-step-200: #4c4e52;
    --ion-color-step-250: #57585c;
    --ion-color-step-300: #616366;
    --ion-color-step-350: #6c6d71;
    --ion-color-step-400: #76787b;
    --ion-color-step-450: #818286;
    --ion-color-step-500: #8b8d90;
    --ion-color-step-550: #96979a;
    --ion-color-step-600: #a0a1a5;
    --ion-color-step-650: #abacaf;
    --ion-color-step-700: #b5b6ba;
    --ion-color-step-750: #c0c1c4;
    --ion-color-step-800: #cacbce;
    --ion-color-step-850: #d5d6d9;
    --ion-color-step-900: #dfe0e3;
    --ion-color-step-950: #e9ebee;
  }
}
```

## Class Fallback

Currently, the `prefers-color-scheme` media query is only supported in desktop Safari and mobile Firebox, so users will not able to benefit from having the dark mode applied automatically in other browsers. However, the dark mode can still be applied by styling a CSS selector and applying the class to our document body

```css
@media (prefers-color-scheme: dark) {...}

// Fallback for older browser or manual mode

body.dark {
  --ion-background-color: var(--ion-color-dark);
  --ion-background-color-rgb: var(--ion-color-dark-rgb);

  --ion-text-color: var(--ion-color-light);
  --ion-text-color-rgb: var(--ion-color-light-rgb);

  --ion-color-step-50: #2d2e32;
  --ion-color-step-100: #37393d;
  --ion-color-step-150: #424347;
  --ion-color-step-200: #4c4e52;
  --ion-color-step-250: #57585c;
  --ion-color-step-300: #616366;
  --ion-color-step-350: #6c6d71;
  --ion-color-step-400: #76787b;
  --ion-color-step-450: #818286;
  --ion-color-step-500: #8b8d90;
  --ion-color-step-550: #96979a;
  --ion-color-step-600: #a0a1a5;
  --ion-color-step-650: #abacaf;
  --ion-color-step-700: #b5b6ba;
  --ion-color-step-750: #c0c1c4;
  --ion-color-step-800: #cacbce;
  --ion-color-step-850: #d5d6d9;
  --ion-color-step-900: #dfe0e3;
  --ion-color-step-950: #e9ebee;
}
```

With the variables targeting the `body.dark` selector, all that is needed now is to toggle the class in the app. This can be done in a variety of ways depending on the framework your app is built with. For instance, here's a simple service that can be used in an Angular App.

```typescript
import { Injectable, Renderer2 } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
  constructor(private renderer: Renderer2) {}

  toggleDarkMode() {
    if (document) {
      document.body.classList.toggle('dark')
    }
  }
}
```
