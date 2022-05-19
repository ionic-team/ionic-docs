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

ion-popover {
  --background: rgba(40, 173, 218, 0.6);
  --backdrop-opacity: 0.6;
  --box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
  --color: white;
  --width: 300px;
}

ion-popover::part(backdrop) {
  background-color: rgb(6, 14, 106);
}

ion-popover::part(content) {
  padding: 16px 25px;
}
```