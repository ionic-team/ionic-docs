```html
<ion-button id="present-alert">Click Me</ion-button>
<ion-alert trigger="present-alert" header="Please enter your info"></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = ['OK'];
  alert.inputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
</script>
```
