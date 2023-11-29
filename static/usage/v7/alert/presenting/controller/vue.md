```html
<template>
  <ion-button @click="presentAlert">Click Me</ion-button>
</template>

<script lang="ts" setup>
  import { IonButton, alertController } from '@ionic/vue';

  const presentAlert = async () => {
    const alert = await alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  };
</script>
```
