```html
<ion-button id="open-picker">Open</ion-button>
<ion-picker-legacy trigger="open-picker"></ion-picker-legacy>

<script>
  var picker = document.querySelector('ion-picker-legacy');

  picker.columns = [
    {
      name: 'languages',
      options: [
        {
          text: 'JavaScript',
          value: 'javascript',
        },
        {
          text: 'TypeScript',
          value: 'typescript',
        },
        {
          text: 'Rust',
          value: 'rust',
        },
        {
          text: 'C#',
          value: 'c#',
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
        console.log(`You selected: ${value.languages.value}`);
      },
    },
  ];
</script>
```
