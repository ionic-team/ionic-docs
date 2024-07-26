```html
<ion-list>
  <ion-list-header>
    <ion-skeleton-text [animated]="true" style="width: 80px"></ion-skeleton-text>
  </ion-list-header>
  <ion-item>
    <ion-thumbnail slot="start">
      <ion-skeleton-text [animated]="true"></ion-skeleton-text>
    </ion-thumbnail>
    <ion-label>
      <h3>
        <ion-skeleton-text [animated]="true" style="width: 80%;"></ion-skeleton-text>
      </h3>
      <p>
        <ion-skeleton-text [animated]="true" style="width: 60%;"></ion-skeleton-text>
      </p>
      <p>
        <ion-skeleton-text [animated]="true" style="width: 30%;"></ion-skeleton-text>
      </p>
    </ion-label>
  </ion-item>
</ion-list>
```
