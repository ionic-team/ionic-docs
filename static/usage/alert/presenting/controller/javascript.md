```html
<ion-button>Click Me</ion-button>

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

  const button = document.querySelector('ion-button');
  button.addEventListener('click', presentAlert);
</script>
```
