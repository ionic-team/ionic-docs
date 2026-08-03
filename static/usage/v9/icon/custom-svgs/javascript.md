```html
<h2>External SVG Files</h2>
<div class="row">
  <ion-icon src="https://ionicframework.com/docs/img/demos/home.svg" color="primary"></ion-icon>
  <ion-icon src="https://ionicframework.com/docs/img/demos/star.svg" color="tertiary"></ion-icon>
  <ion-icon src="https://ionicframework.com/docs/img/demos/trash.svg" color="danger"></ion-icon>
</div>

<h2>Inline SVG Content</h2>
<div class="row">
  <ion-icon color="primary">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  </ion-icon>
  <ion-icon color="tertiary">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  </ion-icon>
  <ion-icon color="danger">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z" />
    </svg>
  </ion-icon>
</div>

<style>
  .row {
    display: flex;
    gap: 12px;
  }

  .row > ion-icon {
    font-size: 32px;
  }
</style>
```
