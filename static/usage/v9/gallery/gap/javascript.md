```html
<ion-gallery>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</ion-gallery>

<script>
  const gallery = document.querySelector('ion-gallery');
  gallery.gap = {
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '10px',
    xxl: '12px',
  };
</script>

<style>
  /* These styles are for demonstration only. */
  /* They are not required for gallery to work. */
  ion-gallery div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 16px;
  }

  ion-gallery div:nth-child(1) {
    background: #ff6b6b;
  }

  ion-gallery div:nth-child(2) {
    background: #4ecdc4;
  }

  ion-gallery div:nth-child(3) {
    background: #ffe66d;
    color: #333;
  }

  ion-gallery div:nth-child(4) {
    background: #5f27cd;
  }

  ion-gallery div:nth-child(5) {
    background: #7f8c8d;
  }

  ion-gallery div:nth-child(6) {
    background: #ff9f43;
  }
</style>
```
