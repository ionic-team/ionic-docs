```html
<template>
  <ion-progress-bar value=".25" buffer=".5"></ion-progress-bar>
  <ion-progress-bar type="indeterminate"></ion-progress-bar>
</template>

<script lang="ts">
  import { IonProgressBar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonProgressBar }
  });
</script>

<style scoped>
  ion-progress-bar::part(track) {
    background: #f3e895;
  }

  ion-progress-bar::part(progress) {
    background: #09c567;
  }

  ion-progress-bar::part(stream) {
    background-image: radial-gradient(ellipse at center, #e475f3 0%, #e475f3 30%, transparent 30%);
  }
</style>
```
