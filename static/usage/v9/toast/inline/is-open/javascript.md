```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Toast</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" onclick="toast.isOpen = true">Open</ion-button>
  <ion-toast duration="5000" message="This toast will close in 5 seconds"></ion-toast>
</ion-content>

<script>
  var toast = document.querySelector('ion-toast');
  toast.addEventListener('didDismiss', () => {
    toast.isOpen = false;
  });
</script>
```
