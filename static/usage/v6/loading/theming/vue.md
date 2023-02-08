```html
<template>
  <ion-button @click="showLoading()">Show Loading</ion-button>
</template>

<script lang="ts">
  import { IonButton, loadingController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
    setup() {
      const showLoading = async () => {
        const loading = await loadingController.create({
          message: 'Loading...',
          duration: 3000,
          cssClass: 'custom-loading'
        });
        
        loading.present();
      }
      
      return { showLoading }
    }
  });
</script>
<style>
  ion-loading.custom-loading {
    --background: #e3edff;
    --spinner-color: #1c6dff;

    color: #1c6dff;
  }
</style>
```
