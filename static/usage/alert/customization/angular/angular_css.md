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

ion-alert.custom-alert {
  --backdrop-opacity: 0.7;
}

.custom-alert .alert-button-group {
  padding: 8px;
}

button.alert-button.alert-button-danger {
  background-color: var(--ion-color-danger);
  color: var(--ion-color-danger-contrast);
}

.md button.alert-button.alert-button-danger {
  border-radius: 5px;
}

.ios button.alert-button.alert-button-danger {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
```