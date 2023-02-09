```html
<template>
  <ion-button id="open-loading">Show Loading</ion-button>
  <ion-loading class="custom-loading" trigger="open-loading" message="Loading..." duration="3000"></ion-loading>
</template>

<script lang="ts">
  import { IonButton, IonLoading } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonLoading },
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
