```html
<ion-radio-group value="custom-checked">
  <ion-radio value="custom" aria-label="Custom checkbox"></ion-radio>
  <ion-radio value="custom-checked" aria-label="Custom checkbox that is checked"></ion-radio>
</ion-radio-group>

<style>
  ion-radio {
    --border-radius: 4px;
    --inner-border-radius: 4px;

    --color: #ddd;
    --color-checked: #6815ec;
  }

  ion-radio.ios::part(container) {
    width: 20px;
    height: 20px;

    border: 2px solid #ddd;
    border-radius: 4px;
  }

  .radio-checked.ios::part(container) {
    border-color: #6815ec;
  }
</style>
```
