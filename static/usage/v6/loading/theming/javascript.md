```html
<ion-button onclick="showLoading()">Show Loading</ion-button>

<script>
var showLoading = async () => {
  const loading = await loadingController.create({
    message: 'Loading...',
    duration: 3000,
    cssClass: 'custom-loading'
  });
  
  loading.present();
}
</script>

<style>
ion-loading.custom-loading {
  --background: #e3edff;
  --spinner-color: #1c6dff;

  color: #1c6dff;
}
</style>
```
