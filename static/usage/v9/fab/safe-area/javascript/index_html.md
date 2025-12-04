```html
<ion-fab slot="fixed" vertical="top" horizontal="center">
  <ion-fab-button>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
</ion-fab>

<style>
  :root {
    /**
   * Setting the variables for DEMO purposes only.
   * Values will be set automatically when building an iOS or Android app.
   */
    --ion-safe-area-top: 20px;
    --ion-safe-area-bottom: 20px;
  }

  ion-fab {
    margin-top: var(--ion-safe-area-top, 0);
    margin-bottom: var(--ion-safe-area-bottom, 0);
  }
</style>
```
