```vue
<template>
  <ion-datetime presentation="date" selection-mode="range"></ion-datetime>
</template>

<script setup lang="ts">
  import { IonDatetime } from '@ionic/vue';
</script>

<style scoped>
  ion-datetime {
    --range-background: rgb(235, 68, 90, 0.1);
  }

  ion-datetime::part(range-start),
  ion-datetime::part(range-end) {
    background: rgb(235, 68, 90);
  }
</style>
```
