```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Modal</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open</ion-button>
  <p>{{ message }}</p>
  <ion-modal trigger="open-modal" (willDismiss)="onWillDismiss($event)">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button (click)="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Welcome</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="confirm()" [strong]="true">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label position="stacked">Enter your name</ion-label>
          <ion-input type="text" placeholder="Your name" [(ngModel)]="name"></ion-input>
        </ion-item>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
