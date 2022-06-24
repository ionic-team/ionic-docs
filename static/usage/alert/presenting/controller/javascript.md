```html
<ion-button>Click Me</ion-button>
<p></p>

<script>
  const output = document.querySelector('p');

  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Important message';
    alert.message = 'This is an alert!';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    output.innerText = `Alert dismissed with role: ${role}`;
  }

  const button = document.querySelector('ion-button');
  button.addEventListener('click', presentAlert);
</script>
```
