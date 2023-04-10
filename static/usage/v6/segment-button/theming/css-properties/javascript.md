```html
<style>
  ion-segment-button {
    --indicator-color: #08a391;
  }

  /* Material Design styles */
  ion-segment-button.md {
    --color: #000;
    --color-checked: #08a391;
    --indicator-height: 4px;
  }

  /* iOS styles */
  ion-segment-button.ios {
    --color: #08a391;
    --color-checked: #fff;
    --border-radius: 20px;
  }
</style>

<ion-segment value="custom">
  <ion-segment-button value="custom">
    <ion-label>Custom</ion-label>
  </ion-segment-button>
  <ion-segment-button value="segment">
    <ion-label>Segment</ion-label>
  </ion-segment-button>
  <ion-segment-button value="buttons">
    <ion-label>Buttons</ion-label>
  </ion-segment-button>
</ion-segment>
```
