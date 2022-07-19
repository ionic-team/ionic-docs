```css
/* Core CSS required for Ionic components to work properly */
@import '~@ionic/angular/css/core.css';

/* Basic CSS for apps built with Ionic */
@import '~@ionic/angular/css/normalize.css';
@import '~@ionic/angular/css/structure.css';
@import '~@ionic/angular/css/typography.css';

/* Optional CSS utils that can be commented out */
@import '~@ionic/angular/css/padding.css';
@import '~@ionic/angular/css/float-elements.css';
@import '~@ionic/angular/css/text-alignment.css';
@import '~@ionic/angular/css/text-transformation.css';
@import '~@ionic/angular/css/flex-utils.css';

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