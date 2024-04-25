```html
<ion-button id="present-alert">Click Me</ion-button>
<ion-alert trigger="present-alert" header="Alert!"></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  alert.addEventListener('ionAlertDidDismiss', (ev) => {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  });
</script>
```
