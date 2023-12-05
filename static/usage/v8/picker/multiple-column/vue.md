```html
<template>
  <ion-button id="open-picker">Open</ion-button>
  <ion-picker trigger="open-picker" :columns="pickerColumns" :buttons="pickerButtons"></ion-picker>
</template>

<script>
  import { IonButton, IonPicker } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonPicker },
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
