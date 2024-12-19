```html
<ion-menu side="end" contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu Content</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">This is the menu content.</ion-content>
</ion-menu>
<div class="ion-page" id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
      <ion-buttons slot="end">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding"> Tap the button in the toolbar to open the menu. </ion-content>
</div>
```
