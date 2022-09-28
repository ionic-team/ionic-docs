```html
<template>
  <ion-button @click="presentAlert">Click Me</ion-button>
</template>

<script lang="ts">
  import { IonButton, alertController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'Please enter your info',
          buttons: ['OK'],
          inputs: [
            {
              placeholder: 'Name',
            },
            {
              placeholder: 'Nickname (max 8 characters)',
              attributes: {
                maxlength: 8,
              },
            },
            {
              type: 'number',
              placeholder: 'Age',
              min: 1,
              max: 100,
            },
            {
              type: 'textarea',
              placeholder: 'A little about yourself',
            },
          ],
        });

        await alert.present();
      };

      return { presentAlert };
    },
  };
</script>
```
