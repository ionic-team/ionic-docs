```html
<template>
  <ion-datetime presentation="date"></ion-datetime>
</template>

<script setup lang="ts">
  import { IonDatetime } from '@ionic/vue';
</script>

<style scoped>
  /*
   * Custom Datetime Header Part
   * -------------------------------------------
   */
  ion-datetime::part(month-year-button) {
    background-color: lightblue;
  }
</style>
```
