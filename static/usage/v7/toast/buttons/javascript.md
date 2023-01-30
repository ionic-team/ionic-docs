```html
<ion-button id="open-toast">Open Toast</ion-button>
<ion-toast trigger="open-toast" duration="3000" message="Hello World!"></ion-toast>
<p id="handlerResult"></p>
<p id="roleResult"></p>

<script>
  const toast = document.querySelector('ion-toast');
  const handlerOutput = document.querySelector('#handlerResult');
  const roleOutput = document.querySelector('#roleResult');
  
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
  
  toast.addEventListener('ionToastDidDismiss', (ev) => {
    const { role } = ev.detail;
    roleOutput.innerText = `Dismissed with role: ${role}`;
  });
</script>
```
