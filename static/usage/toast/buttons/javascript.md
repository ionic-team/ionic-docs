```html
<ion-button onclick="presentToast()">Click Me</ion-button>
<p id="handlerResult"></p>
<p id="roleResult"></p>

<script>
  const handlerOutput = document.querySelector('#handlerResult');
  const roleOutput = document.querySelector('#roleResult');

  async function presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Hello World!';
    toast.duration = 3000;
    toast.buttons = [
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
    ];

    document.body.appendChild(toast);
    await toast.present();

    const { role } = await toast.onDidDismiss();
    roleOutput.innerText = `Dismissed with role: ${role}`;
  }
</script>
```
