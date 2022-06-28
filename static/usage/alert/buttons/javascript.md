```html
<ion-button>Click Me</ion-button>
<p id="handlerResult"></p>
<p id="roleResult"></p>

<script>
  const handlerOutput = document.querySelector('#handlerResult');
  const roleOutput = document.querySelector('#roleResult');

  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert!';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => { handlerOutput.innerText = 'Alert canceled'; }
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => { handlerOutput.innerText = 'Alert confirmed'; }
      }
    ];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    roleOutput.innerText = `Dismissed with role: ${role}`;
  }

  const button = document.querySelector('ion-button');
  button.addEventListener('click', presentAlert);
</script>
```
