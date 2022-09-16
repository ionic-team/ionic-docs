```html
<ion-item button detail lines="full">
  <ion-label>Custom Item</ion-label>
</ion-item>

<ion-item button detail lines="full">
  <ion-label>Custom Item</ion-label>
</ion-item>

<ion-item button detail lines="full">
  <ion-label>Custom Item</ion-label>
</ion-item>

<style>
  ion-item::part(native) {
    background: #19422d;
    color: #fff;

    border-color: #fff;
    border-style: dashed;
    border-width: 2px;

    border-radius: 20px;
  }

  ion-item::part(detail-icon) {
    color: white;
    opacity: 1;
    font-size: 20px;
  }
</style>
```
