```css
:root {
  --ion-color-rose: #fecdd3;
  --ion-color-rose-rgb: 254,205,211;
  --ion-color-rose-contrast: #000000;
  --ion-color-rose-contrast-rgb: 0,0,0;
  --ion-color-rose-shade: #e0b4ba;
  --ion-color-rose-tint: #fed2d7;
}

.ion-color-rose {
  --ion-color-base: var(--ion-color-rose);
  --ion-color-base-rgb: var(--ion-color-rose-rgb);
  --ion-color-contrast: var(--ion-color-rose-contrast);
  --ion-color-contrast-rgb: var(--ion-color-rose-contrast-rgb);
  --ion-color-shade: var(--ion-color-rose-shade);
  --ion-color-tint: var(--ion-color-rose-tint);
}

div[slot="content"] {
  background: rgba(var(--ion-color-rose-rgb), 0.25)
}
```