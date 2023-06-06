```html
<template>
  <ion-button @click="setOpen(true)">Open</ion-button>
  <ion-picker
    :is-open="isOpen"
    :columns="pickerColumns"
    :buttons="pickerButtons"
    @didDismiss="setOpen(false)"
  ></ion-picker>
</template>

<script lang="ts">
  import { IonButton, IonPicker } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonPicker },
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
            window.alert(`You selected: ${value.languages.value}`);
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
