```html
<template>
  <ion-button @click="setOpen(true)">Open</ion-button>
  <ion-picker-legacy
    :is-open="isOpen"
    :columns="pickerColumns"
    :buttons="pickerButtons"
    @didDismiss="setOpen(false)"
  ></ion-picker-legacy>
</template>

<script lang="ts">
  import { IonButton, IonPickerLegacy } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonPickerLegacy },
    setup() {
      const isOpen = ref(false);

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

      const setOpen = (state: boolean) => {
        isOpen.value = state;
      };

      return { pickerColumns, pickerButtons, isOpen, setOpen };
    },
  });
</script>
```
