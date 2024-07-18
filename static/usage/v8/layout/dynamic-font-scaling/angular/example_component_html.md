```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>
    <ion-title>Title</ion-title>
    <ion-buttons slot="end">
      <ion-button>
        <ion-icon name="create" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content color="light">
  <ion-list [inset]="true">
    <ion-item>
      <ion-input label="Name"></ion-input>
    </ion-item>
    <ion-item>
      <ion-checkbox>Check for a free puppy</ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-toggle>Enable Notifications</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list [inset]="true">
    <ion-item>
      <ion-label>Item 1</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Item 2</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Item 3</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
<ion-footer>
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
```
