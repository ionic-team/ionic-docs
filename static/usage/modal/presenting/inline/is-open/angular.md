```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Modal</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-modal [isOpen]="true">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">This is an example of an inline full-height modal.</ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
