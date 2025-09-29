```html
<ion-button onclick="picker.isOpen = true">Open</ion-button>
<ion-picker></ion-picker>

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
        console.log(`You selected: ${value.languages.value}`);
      },
    },
  ];

  picker.addEventListener('ionPickerDidDismiss', (event) => {
    picker.isOpen = false;
  });
</script>
```
