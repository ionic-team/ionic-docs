```html
<template>
  <ion-button @click="showLoading">Show Loading</ion-button>
</template>

<script lang="ts" setup>
  import { IonButton, loadingController } from '@ionic/vue';

  const showLoading = async () => {
    const loading = await loadingController.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  };
</script>
```
