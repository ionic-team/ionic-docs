```html
<ion-header>
  <ion-toolbar>
    <ion-title>Pull to Refresh</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [scrollY]="false">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <div class="ion-content-scroll-host ion-padding">
    <p>Pull this content down to trigger the refresh.</p>
  </div>
</ion-content>
```
