```html
<ion-button onclick="presentToast()">Click Me</ion-button>
<p id="handlerResult"></p>
<p id="roleResult"></p>

<script>
  const handlerOutput = document.querySelector('#handlerResult');
  const roleOutput = document.querySelector('#roleResult');

  async function presentToast() {
    const toast = await toastController.create({
      message: 'Hello World!',
      duration: 3000,
      buttons: [
        {
          text: 'More Info',
          role: 'info',
          handler: () => { handlerOutput.innerText = 'More Info clicked'; }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { handlerOutput.innerText = 'Dismiss clicked'; }
        }
      ]
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    roleOutput.innerText = `Dismissed with role: ${role}`;
  }
</script>
```
