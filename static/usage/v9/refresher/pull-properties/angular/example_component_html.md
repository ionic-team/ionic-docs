```html
<ion-header>
  <ion-toolbar>
    <ion-title>Pull to Refresh</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-refresher slot="fixed" [pullFactor]="0.5" [pullMin]="100" [pullMax]="200" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <p>Pull this content down to trigger the refresh.</p>
</ion-content>
```
