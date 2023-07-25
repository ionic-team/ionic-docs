```html
<ion-button id="present-alert">Click Me</ion-button>
<ion-alert trigger="present-alert" header="Alert!"></ion-alert>
<p id="handlerResult"></p>
<p id="roleResult"></p>

<script>
  const handlerOutput = document.querySelector('#handlerResult');
  const roleOutput = document.querySelector('#roleResult');
  const alert = document.querySelector('ion-alert');

  alert.buttons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        handlerOutput.innerText = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        handlerOutput.innerText = 'Alert confirmed';
      },
    },
  ];

  alert.addEventListener('ionAlertDidDismiss', (ev) => {
    roleOutput.innerText = `Dismissed with role: ${ev.detail.role}`;
  });
</script>
```
