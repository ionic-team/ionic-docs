```html
<template>
  <ion-button @click="presentToast">Click Me</ion-button>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';
  import { globe } from 'ionicons/icons';

  export default {
    components: { IonButton },
    methods: {
      async presentToast() {
        const toast = await toastController.create({
          message: 'Hello World!',
          duration: 1500,
          icon: globe
        });

        await toast.present();

        const { role } = await toast.onDidDismiss();
        this.roleMessage = `Dismissed with role: ${role}`;
      },
    },
  };
</script>
```
