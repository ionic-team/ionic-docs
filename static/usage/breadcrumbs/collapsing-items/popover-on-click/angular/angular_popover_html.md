```html
<ion-content>
  <ion-list>
    <ion-item *ngFor="let breadcrumb of collapsedBreadcrumbs" [href]="breadcrumb.href">
      <ion-label>{{ breadcrumb.textContent }}</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
```