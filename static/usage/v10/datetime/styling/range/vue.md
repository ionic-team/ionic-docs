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

ion-datetime::part(range-start) {
  border-radius: 32px 0 0 32px;
}

ion-datetime::part(range-end) {
  border-radius: 0 32px 32px 0;
}

ion-datetime::part(range-start range-end) {
  border-radius: 50%;
}

ion-datetime::part(range-track)::before {
  height: 24px;
}
</style>
```
