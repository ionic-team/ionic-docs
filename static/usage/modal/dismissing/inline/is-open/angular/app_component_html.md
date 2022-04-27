```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Modal</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <p class="ion-text-center">This is the main content</p>

  <ion-modal [isOpen]="isOpen">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" (click)="dismiss()">Dismiss</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">This is an example of an inline full-height modal.</ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
