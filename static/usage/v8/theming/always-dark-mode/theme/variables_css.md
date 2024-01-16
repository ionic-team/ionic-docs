```css
/* Ionic Variables and Theming
 * ---------------------------------------------------------------
 * Any overrides to theme variables should be placed in this file.
 * For more information, please see:
 * http://ionicframework.com/docs/theming/
 */

/* This sets a different background and item background for the dark theme on ios */
:root.ios {
  --ion-background-color: var(--ion-color-step-50);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #1c1c1d;
}

/* This sets a different background and item background for the dark theme on md */
:root.md {
  --ion-background-color: var(--ion-color-step-100);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #1c1c1d;
}
```
