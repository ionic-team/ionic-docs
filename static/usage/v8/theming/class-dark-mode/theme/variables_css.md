```css
/* Ionic Variables and Theming
 * ---------------------------------------------------------------
 * Any overrides to theme variables should be placed in this file.
 * For more information, please see:
 * http://ionicframework.com/docs/theming/
 */

/* This sets a different item border color for the default theme on ios and md */
:root {
  --ion-item-border-color: var(--ion-color-step-200);
}

/* This sets a different background and item background for the default theme on ios */
:root.ios {
  --ion-background-color: var(--ion-color-step-50, #f2f2f6);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* This sets a different background and item background for the default theme on md */
:root.md {
  --ion-background-color: var(--ion-color-step-100, #f9f9f9);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* This sets a different item background when dark mode is enabled on ios and md */
.ion-theme-dark.ios,
.ion-theme-dark.md {
  --ion-item-background: #1c1c1d;
}
```
