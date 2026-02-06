```html
<template>
  <ion-datetime presentation="date">
    <span slot="title">Select Date</span>
  </ion-datetime>
</template>

<script setup lang="ts">
  import { IonDatetime } from '@ionic/vue';
</script>

<style scoped>
  /*
   * Custom Datetime Header Part
   * -------------------------------------------
   */

  ion-datetime::part(datetime-header) {
    background-color: orange;
  }
</style>
```
