```html
<ion-button id="buttonToFocus" fill="outline">Button</ion-button>

<ion-radio-group value="a">
  <ion-radio id="radioToFocus" value="a">Radio</ion-radio>
</ion-radio-group>

<br />

<ion-button (click)="focusElement('#buttonToFocus')">Focus Button</ion-button>
<ion-button (click)="focusElement('#radioToFocus')">Focus Radio</ion-button>
```
