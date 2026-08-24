```css
/* Ionic Variables and Theming
 * ---------------------------------------------------------------
 * Any overrides to theme variables should be placed in this file.
 * For more information, please see:
 * http://ionicframework.com/docs/theming/
 */

/* This sets a different item border color for the default theme on ios and md */
:root {
  --ion-item-border-color: var(--ion-background-color-step-200);
}

/* This sets a different background and item background for the default theme on ios */
:root.ios {
  --ion-background-color: var(--ion-background-color-step-50);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #1c1c1d;
}

/* This sets a different background and item background for the default theme on md */
:root.md {
  --ion-background-color: var(--ion-background-color-step-100);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #1c1c1d;
}
```
