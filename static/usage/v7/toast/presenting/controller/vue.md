```html
<template>
  <ion-button expand="block" @click="presentToast('top')">Present Toast At the Top</ion-button>
  <ion-button expand="block" @click="presentToast('middle')">Present Toast At the Middle</ion-button>
  <ion-button expand="block" @click="presentToast('bottom')">Present Toast At the Bottom</ion-button>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';

  export default {
    components: { IonButton },
    methods: {
      async presentToast(position: 'top' | 'middle' | 'bottom') {
        const toast = await toastController.create({
          message: 'Hello World!',
          duration: 1500,
          position: position
        });

        await toast.present();
      },
    },
  };
</script>
```
