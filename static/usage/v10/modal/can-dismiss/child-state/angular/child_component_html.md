```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal</ion-title>
      <ion-buttons slot="end">
        <ion-button (click)="modal.dismiss()">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-checkbox (ionChange)="checkboxChanged($event)">
          Override Dismiss<br />
          <ion-note class="ion-text-wrap"
            >Toggle the checkbox to allow immediately dismissing the modal without a prompt.</ion-note
          >
        </ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
</div>
```
