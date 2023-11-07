```html
<ion-button onclick="presentAlert()">Click Me</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'A Short Title Is Best';
    alert.subHeader = 'A Sub Header Is Optional';
    alert.message = 'A message should be a short, complete sentence.';
    alert.buttons = ['Action'];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```
