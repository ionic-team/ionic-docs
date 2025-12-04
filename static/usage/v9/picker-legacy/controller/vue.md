```html
<template>
  <ion-button @click="openPicker()">Open</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, pickerController } from '@ionic/vue';
  import { ref } from 'vue';

  const message = ref('');

  const openPicker = async () => {
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
            console.log(`You selected: ${value.languages.value}`);
          },
        },
      ],
    });
    await picker.present();
  };
</script>
```
