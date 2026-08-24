```html
<ion-button id="present-alert">Click Me</ion-button>
<ion-alert trigger="present-alert" header="Select your favorite color"></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = ['OK'];
  alert.inputs = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];
</script>
```
