```html
<ion-button>Click Me</ion-button>
<p></p>

<script>
  const output = document.querySelector('p');

  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert!';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => { output.innerText = 'Alert canceled'; }
      },
      {
        text: 'OK',
        handler: () => { output.innerText = 'Alert confirmed'; }
      }
    ];

    document.body.appendChild(alert);
    await alert.present();
  }

  const button = document.querySelector('ion-button');
  button.addEventListener('click', presentAlert);
</script>
```
