```html
<ion-content>
  <ion-list>
    @for (item of items; track item; let index = $index) {
    <ion-item>
      <ion-avatar slot="start">
        <img [src]="'https://picsum.photos/80/80?random=' + index" alt="avatar" />
      </ion-avatar>
      <ion-label>{{ item }}</ion-label>
    </ion-item>
    }
  </ion-list>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content loadingText="Please wait..." loadingSpinner="bubbles"></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```
