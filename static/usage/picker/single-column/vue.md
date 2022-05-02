```html
<template>
  <ion-content fullscreen>
    <ion-button @click="openPicker()">Open</ion-button>
  </ion-content>
</template>

<script>
  import { IonButton, IonContent, pickerController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonContent },
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
              name: 'programming-languages',
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
              handler: (value) => {},
            },
          ],
        });
        await picker.present();
      },
    },
  });
</script>
```
