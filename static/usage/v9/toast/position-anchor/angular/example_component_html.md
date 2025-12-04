```html
<ion-header id="header">
  <ion-toolbar>
    <ion-title>Header</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button id="headerAnchor">Anchor to Header</ion-button>
  <ion-button id="footerAnchor">Anchor to Footer</ion-button>

  <ion-toast
    trigger="headerAnchor"
    position="top"
    positionAnchor="header"
    message="Hello World!"
    duration="2000"
  ></ion-toast>
  <ion-toast
    trigger="footerAnchor"
    position="bottom"
    positionAnchor="footer"
    message="Hello World!"
    duration="2000"
  ></ion-toast>
</ion-content>

<ion-footer id="footer">
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
```
