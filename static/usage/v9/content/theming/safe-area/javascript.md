```html
<ion-content>
  <span>Here's a small text description for the content. Nothing more, nothing less.</span>
</ion-content>

<style>
  :root {
    /**
     * Setting the variables for DEMO purposes only.
     * Values will be set automatically when building an iOS or Android app.
     */
    --ion-safe-area-top: 20px;
    --ion-safe-area-bottom: 20px;
    --ion-safe-area-left: 20px;
    --ion-safe-area-right: 20px;
  }

  ion-content::part(scroll) {
    padding-top: var(--ion-safe-area-top, 0);
    padding-bottom: var(--ion-safe-area-bottom, 0);
    padding-left: var(--ion-safe-area-left, 0);
    padding-right: var(--ion-safe-area-right, 0);
  }
</style>
```
