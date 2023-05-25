```html
<ion-button id="open-picker">Open</ion-button>
<ion-picker trigger="open-picker"></ion-picker>

<script>
  var picker = document.querySelector('ion-picker');

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
        window.alert(`You selected: ${value.languages.value}`);
      },
    },
  ];
</script>
```
