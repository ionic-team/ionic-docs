```html
<ion-button onclick="alert.isOpen = true">Click Me</ion-button>
<ion-alert
  header="Alert"
  sub-header="Important message"
  message="This is an alert!"
></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = ['OK'];
  alert.addEventListener('ionAlertDidDismiss', () => {
    alert.isOpen = false;
  });
</script>
```
