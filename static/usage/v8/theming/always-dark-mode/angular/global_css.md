```css
/*
 * Optional CSS
 * -----------------------------------
 */

/* This is added for the flashing that happens when toggling between themes */
ion-item {
  --transition: none;
}

/* This sets a different background and item background for the dark theme on ios */
.ios {
  --ion-background-color: var(--ion-color-step-50);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #1c1c1d;
}

/* This sets a different background and item background for the dark theme on md */
.md {
  --ion-background-color: var(--ion-color-step-100);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #1c1c1d;
}
```
