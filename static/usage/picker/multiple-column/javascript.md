```html
<ion-app>
  <ion-content fullscreen>
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
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {},
        },
      ],
    });
    await picker.present();
  }
</script>
```
