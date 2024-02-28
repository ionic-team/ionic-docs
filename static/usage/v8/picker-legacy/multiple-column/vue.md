```html
<template>
  <ion-button id="open-picker">Open</ion-button>
  <ion-picker-legacy trigger="open-picker" :columns="pickerColumns" :buttons="pickerButtons"></ion-picker-legacy>
</template>

<script>
  import { IonButton, IonPickerLegacy } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonPickerLegacy },
    setup() {
      const pickerColumns = [
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

      const pickerButtons = [
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

      return { pickerColumns, pickerButtons };
    },
  });
</script>
```
