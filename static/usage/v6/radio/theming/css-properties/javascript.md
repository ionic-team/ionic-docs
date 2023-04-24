```html
<ion-radio-group value="custom-checked">
  <ion-radio value="custom"></ion-radio>
  <ion-radio value="custom-checked"></ion-radio>
</ion-radio-group>

<style>
  ion-radio {
    --border-radius: 4px;
    --inner-border-radius: 4px;

    --color: #ddd;
    --color-checked: #6815ec;
  }

  ion-radio.ios {
    width: 20px;
    height: 20px;

    border: 2px solid #ddd;
    border-radius: 4px;
  }

  .radio-checked.ios {
    border-color: #6815ec;
  }
</style>
```
