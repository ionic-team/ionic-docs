```html
<template>
  <ion-progress-bar :buffer="buffer" :value="progress"></ion-progress-bar>
</template>

<script lang="ts" setup>
  import { IonProgressBar } from '@ionic/vue';
  import { onMounted, ref } from 'vue';

  const buffer = ref(0.06);
  const progress = ref(0);

  onMounted(() => {
    setInterval(() => {
      buffer.value += 0.06;
      progress.value += 0.06;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (progress.value > 1) {
        setTimeout(() => {
          buffer.value = 0.06;
          progress.value = 0;
        }, 1000);
      }
    }, 1000);
  });
</script>
```
