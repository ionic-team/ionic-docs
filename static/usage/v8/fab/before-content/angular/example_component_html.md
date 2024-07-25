```html
<ion-content fixed-slot-placement="before">
  <ion-fab horizontal="end" vertical="bottom" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
  <ion-list>
    <ion-item [button]="true" *ngFor="let item of items; let index">
      <ion-avatar slot="start">
        <img [src]="'https://picsum.photos/80/80?random=' + index" alt="avatar" />
      </ion-avatar>
      <ion-label>{{ item }}</ion-label>
    </ion-item>
  </ion-list>
  <ion-infinite-scroll (ionInfinite)="onIonInfinite($event)">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```
