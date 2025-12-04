```html
<ion-button id="open-toast">Open Toast</ion-button>
<ion-toast trigger="open-toast" duration="3000" message="Hello World!"></ion-toast>

<script>
  const toast = document.querySelector('ion-toast');

  toast.buttons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  toast.addEventListener('ionToastDidDismiss', (event) => {
    const { role } = event.detail;
    console.log(`Dismissed with role: ${role}`);
  });
</script>
```
