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

      const pickerButtons = [
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

      return { pickerColumns, pickerButtons };
    },
  });
</script>
```
