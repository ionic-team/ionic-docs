```html
<ion-button onclick="presentAlert()">Click Me</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Select your favorite color';
    alert.buttons = ['OK'];
    alert.inputs = [
      {
        label: 'Red',
        type: 'radio',
        value: 'red'
      },
      {
        label: 'Blue',
        type: 'radio',
        value: 'blue'
      },
      {
        label: 'Green',
        type: 'radio',
        value: 'green'
      }
    ];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```
