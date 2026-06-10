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
   * Custom Datetime Header Parts
   * -------------------------------------------
   */

  ion-datetime::part(datetime-header) {
    background-color: orange;
  }

  ion-datetime::part(datetime-title) {
    background-color: pink;
  }

  ion-datetime::part(datetime-selected-date) {
    background-color: violet;
  }
</style>
```
