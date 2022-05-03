```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Modal</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <p class="ion-text-center">{{ message }}</p>
  <ion-modal #modal is-open="true">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" (click)="dismiss(modal, input)">Dismiss</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label>Enter your name</ion-label>
          <ion-input #input type="text" placeholder="Your name"></ion-input>
        </ion-item>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
