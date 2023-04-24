```html
<template>
  <ion-button @click="presentAlert">Click Me</ion-button>
  <p>{{ handlerMessage }}</p>
  <p>{{ roleMessage }}</p>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { IonButton, alertController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const handlerMessage = ref('');
      const roleMessage = ref('');

      const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'Alert!',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                handlerMessage.value = 'Alert canceled';
              },
            },
            {
              text: 'OK',
              role: 'confirm',
              handler: () => {
                handlerMessage.value = 'Alert confirmed';
              },
            },
          ],
        });

        await alert.present();

        const { role } = await alert.onDidDismiss();
        roleMessage.value = `Dismissed with role: ${role}`;
      };

      return {
        handlerMessage,
        roleMessage,
        presentAlert,
      };
    },
  };
</script>
```
