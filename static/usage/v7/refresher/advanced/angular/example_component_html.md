```html
<ion-header>
  <ion-toolbar>
    <ion-title>Pull to Refresh</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <ion-list>
    <ion-item [button]="true" *ngFor="let item of items">
      <ion-icon slot="start" color="primary" [name]="item.unread ? 'ellipse' : ''"></ion-icon>
      <ion-label>
        <h2>{{ item.name }}</h2>
        <p>New message from {{ item.name }}</p>
      </ion-label>
    </ion-item>
  </ion-list>
</ion-content>
```
