```html
<ion-button id="open-loading">Show Loading</ion-button>
<ion-loading class="custom-loading" trigger="open-loading" message="Loading..." duration="3000"></ion-loading>

<style>
  ion-loading.custom-loading {
    --background: #e3edff;
    --spinner-color: #1c6dff;

    color: #1c6dff;
  }
</style>
```
