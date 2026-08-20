```html
<ion-button onclick="alert.isOpen = true">Click Me</ion-button>
<ion-alert
  header="A Short Title Is Best"
  sub-header="A Sub Header Is Optional"
  message="A message should be a short, complete sentence."
></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = ['Action'];
  alert.addEventListener('ionAlertDidDismiss', () => {
    alert.isOpen = false;
  });
</script>
```
