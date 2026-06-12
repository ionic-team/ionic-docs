```html
<ion-gallery>
  <ion-gallery-item>1</ion-gallery-item>
  <ion-gallery-item>2</ion-gallery-item>
  <ion-gallery-item>3</ion-gallery-item>
  <ion-gallery-item>4</ion-gallery-item>
  <ion-gallery-item>5</ion-gallery-item>
  <ion-gallery-item>6</ion-gallery-item>
  <ion-gallery-item>7</ion-gallery-item>
  <ion-gallery-item>8</ion-gallery-item>
  <ion-gallery-item>9</ion-gallery-item>
  <ion-gallery-item>10</ion-gallery-item>
  <ion-gallery-item>11</ion-gallery-item>
  <ion-gallery-item>12</ion-gallery-item>
</ion-gallery>

<script>
  const gallery = document.querySelector('ion-gallery');
  gallery.columns = {
    xs: 3,
    sm: 6,
    md: 8,
    lg: 9,
    xl: 10,
    xxl: 12,
  };
</script>

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

  ion-gallery-item:nth-child(7) {
    background: #ff3f34;
  }

  ion-gallery-item:nth-child(8) {
    background: #2ecc71;
  }

  ion-gallery-item:nth-child(9) {
    background: #34495e;
  }

  ion-gallery-item:nth-child(10) {
    background: #1abc9c;
  }

  ion-gallery-item:nth-child(11) {
    background: #e67e22;
  }

  ion-gallery-item:nth-child(12) {
    background: #9b59b6;
  }
</style>
```
