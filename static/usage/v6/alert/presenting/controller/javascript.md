```html
<ion-button onclick="presentAlert()">Click Me</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Important message';
    alert.message = 'This is an alert!';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```
