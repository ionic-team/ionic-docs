```css
/*
 * Optional CSS
 * -----------------------------------
 */

/* This sets a different background and item background in light mode on ios */
.ios body {
  --ion-background-color: #f2f2f6;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* This sets a different background and item background in light mode on md */
.md body {
  --ion-background-color: #f9f9f9;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* This is added for the flashing that happens when toggling between themes */
ion-item {
  --transition: none;
}
```
