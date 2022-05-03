```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>
    <p>{{ message }}</p>
    <ion-modal trigger="open-modal" (didDismiss)="onDidDismiss($event)">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-button slot="start" fill="clear" (click)="cancel()" color="medium">Cancel</ion-button>
            <ion-title>Welcome</ion-title>
            <ion-button slot="end" fill="clear" (click)="confirm()">Confirm</ion-button>
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
</ion-app>
```
