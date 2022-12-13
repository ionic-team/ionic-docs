```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Toast</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" onclick="toast.isOpen = true">Open</ion-button>
  <ion-toast message="Click the 'Close' button to dismiss"></ion-toast>
</ion-content>

<script>
  var toast = document.querySelector('ion-toast');
  toast.buttons = [
    {
      text: 'Close',
      handler: () => {
        toast.isOpen = false
      }
    }
  ];
</script>
```
