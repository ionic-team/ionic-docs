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
    
.custom-alert .alert-wrapper {
  box-shadow: 5px 5px 5px 0 #0000ff;
}

.custom-alert .alert-button-group {
  background-color: #d3d3ff;
}

button.alert-button.custom-alert-button {
  color: #8600c9;
}
```