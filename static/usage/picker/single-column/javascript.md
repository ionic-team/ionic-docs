```html
<ion-app>
  <ion-content class="ion-padding">
    <div class="container">
      <ion-button onclick="openPicker()">Open</ion-button>
    </div>
  </ion-content>
</ion-app>
<script>
  async function openPicker() {
    const picker = await pickerController.create({
      columns: [
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
      ],
      buttons: [
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
      ],
    });
    await picker.present();
  }
</script>
```
