```html
<ion-breadcrumbs max-items="4">
  <ion-breadcrumb href="#home">Home</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
  <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
  <ion-breadcrumb href="#film">Film</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
</ion-breadcrumbs>

<script>
  const breadcrumbs = document.querySelector('ion-breadcrumbs');

  breadcrumbs.addEventListener('ionCollapsedClick', () => {
    breadcrumbs.maxItems = undefined;
  });
</script>
```
