```html
<ion-button id="present-alert">Click Me</ion-button>
<ion-alert
  trigger="present-alert"
  header="Alert"
  sub-header="Important message"
  message="This is an alert!"
></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');
  alert.buttons = ['OK'];
</script>
```
