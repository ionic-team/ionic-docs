```html
<ion-gallery>
  <ion-gallery-item>1</ion-gallery-item>
  <ion-gallery-item>2</ion-gallery-item>
  <ion-gallery-item>3</ion-gallery-item>
  <ion-gallery-item>4</ion-gallery-item>
  <ion-gallery-item>5</ion-gallery-item>
  <ion-gallery-item>6</ion-gallery-item>
</ion-gallery>

<style>
  /* These styles are for demonstration only. */
  /* They are not required for gallery to work. */
  ion-gallery-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 16px;
  }

  ion-gallery-item:nth-child(1) {
    background: #ff6b6b;
  }

  ion-gallery-item:nth-child(2) {
    background: #4ecdc4;
  }

  ion-gallery-item:nth-child(3) {
    background: #ffe66d;
    color: #333;
  }

  ion-gallery-item:nth-child(4) {
    background: #5f27cd;
  }

  ion-gallery-item:nth-child(5) {
    background: #7f8c8d;
  }

  ion-gallery-item:nth-child(6) {
    background: #ff9f43;
  }
</style>
```
