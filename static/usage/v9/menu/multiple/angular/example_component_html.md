```html
<ion-menu menuId="first-menu" contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>First Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">This is the first menu content.</ion-content>
</ion-menu>

<ion-menu menuId="second-menu" contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Second Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">This is the second menu content.</ion-content>
</ion-menu>

<ion-menu side="end" contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>End Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">This is the end menu content.</ion-content>
</ion-menu>

<div class="ion-page" id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>Tap a button below to open a specific menu.</p>

    <ion-button expand="block" (click)="openFirstMenu()">Open First Menu</ion-button>
    <ion-button expand="block" (click)="openSecondMenu()">Open Second Menu</ion-button>
    <ion-button expand="block" (click)="openEndMenu()">Open End Menu</ion-button>
  </ion-content>
</div>
```
