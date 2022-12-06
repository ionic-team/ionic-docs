```html
<template>
  <ion-button @click="openPicker()">Open</ion-button>
</template>

<script>
  import { IonButton, pickerController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      async openPicker() {
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
              handler: (value) => {
                window.alert(
                  `You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`
                );
              },
            },
          ],
        });
        await picker.present();
      },
    },
  });
</script>
```
