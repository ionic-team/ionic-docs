```css
/* Ionic Variables and Theming
 * ---------------------------------------------------------------
 * Any overrides to theme variables should be placed in this file.
 * For more information, please see:
 * http://ionicframework.com/docs/theming/
 */

/* This sets the CSS variables for the rose color */
:root {
  --ion-color-rose: #831843;
  --ion-color-rose-rgb: 131, 24, 67;
  --ion-color-rose-contrast: #ffffff;
  --ion-color-rose-contrast-rgb: 255, 255, 255;
  --ion-color-rose-shade: #73153b;
  --ion-color-rose-tint: #8f2f56;
}

/* This overrides the global CSS variables for both modes */
:root.ios,
:root.md {
  --ion-background-color: #ffffff;
  --ion-background-color-rgb: 255, 255, 255;

  --ion-text-color: #881337;
  --ion-text-color-rgb: 136, 19, 55;

  --ion-text-color-step-50: #8e1e40;
  --ion-text-color-step-100: #94294a;
  --ion-text-color-step-150: #9a3453;
  --ion-text-color-step-200: #a03f5c;
  --ion-text-color-step-250: #a64b66;
  --ion-text-color-step-300: #ac566f;
  --ion-text-color-step-350: #b26178;
  --ion-text-color-step-400: #b86c82;
  --ion-text-color-step-450: #be778b;
  --ion-text-color-step-500: #c48295;
  --ion-text-color-step-550: #c98d9e;
  --ion-text-color-step-600: #cf98a7;
  --ion-text-color-step-650: #d5a3b1;
  --ion-text-color-step-700: #dbaeba;
  --ion-text-color-step-750: #e1bac3;
  --ion-text-color-step-800: #e7c5cd;
  --ion-text-color-step-850: #edd0d6;
  --ion-text-color-step-900: #f3dbdf;
  --ion-text-color-step-950: #f9e6e9;

  --ion-background-color-step-50: #f9e6e9;
  --ion-background-color-step-100: #f3dbdf;
  --ion-background-color-step-150: #edd0d6;
  --ion-background-color-step-200: #e7c5cd;
  --ion-background-color-step-250: #e1bac3;
  --ion-background-color-step-300: #dbaeba;
  --ion-background-color-step-350: #d5a3b1;
  --ion-background-color-step-400: #cf98a7;
  --ion-background-color-step-450: #c98d9e;
  --ion-background-color-step-500: #c48295;
  --ion-background-color-step-550: #be778b;
  --ion-background-color-step-600: #b86c82;
  --ion-background-color-step-650: #b26178;
  --ion-background-color-step-700: #ac566f;
  --ion-background-color-step-750: #a64b66;
  --ion-background-color-step-800: #a03f5c;
  --ion-background-color-step-850: #9a3453;
  --ion-background-color-step-900: #94294a;
  --ion-background-color-step-950: #8e1e40;
}

/* This adds the rose color */
.ion-color-rose {
  --ion-color-base: var(--ion-color-rose);
  --ion-color-base-rgb: var(--ion-color-rose-rgb);
  --ion-color-contrast: var(--ion-color-rose-contrast);
  --ion-color-contrast-rgb: var(--ion-color-rose-contrast-rgb);
  --ion-color-shade: var(--ion-color-rose-shade);
  --ion-color-tint: var(--ion-color-rose-tint);
}
```
