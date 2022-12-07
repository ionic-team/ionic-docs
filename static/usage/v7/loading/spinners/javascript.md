```html
<ion-button onclick="showLoading()">Show Loading</ion-button>

<script>
var showLoading = async () => {
  const loading = await loadingController.create({
    message: 'Loading...',
    duration: 3000,
    spinner: 'circles'
  });
  
  loading.present();
}
</script>
```
