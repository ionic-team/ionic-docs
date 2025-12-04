```html
<ion-button id="open-picker">Open</ion-button>
<ion-picker-legacy trigger="open-picker"></ion-picker-legacy>

<script>
  var picker = document.querySelector('ion-picker-legacy');

  picker.columns = [
    {
      name: 'meat',
      options: [
        {
          text: 'Pepperoni',
          value: 'pepperoni',
        },
        {
          text: 'Smoked Ham',
          value: 'smoked-ham',
        },
        {
          text: 'Crispy Bacon',
          value: 'bacon',
        },
      ],
    },
    {
      name: 'veggies',
      options: [
        {
          text: 'Red onion',
          value: 'red-onion',
        },
        {
          text: 'Peppers',
          value: 'peppers',
        },
        {
          text: 'Black olives',
          value: 'black-olives',
        },
      ],
    },
    {
      name: 'crust',
      options: [
        {
          text: 'Pan style',
          value: 'pan',
        },
        {
          text: 'Hand tossed',
          value: 'hand-tossed',
        },
        {
          text: 'Stuffed crust',
          value: 'stuffed-crust',
        },
      ],
    },
  ];

  picker.buttons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Confirm',
      handler: (value) => {
        console.log(`You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`);
      },
    },
  ];
</script>
```
