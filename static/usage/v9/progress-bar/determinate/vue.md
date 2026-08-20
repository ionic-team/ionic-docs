```html
<template>
  <ion-progress-bar :value="progress"></ion-progress-bar>
</template>

<script setup lang="ts">
  import { IonProgressBar } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

  const progress = ref(0);

  onMounted(() => {
    setInterval(() => {
      progress.value += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (progress.value > 1) {
        setTimeout(() => {
          progress.value = 0;
        }, 1000);
      }
    }, 50);
  });
</script>
```
