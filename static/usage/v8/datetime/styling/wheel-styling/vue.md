```html
<template>
  <ion-datetime presentation="date" :prefer-wheel="true"></ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
</script>

<style scoped>
  ion-datetime {
    --background: rgb(245, 235, 247);
    --background-rgb: 245, 235, 247;
    --wheel-highlight-background: rgb(218, 216, 255);
    --wheel-highlight-border-radius: 48px;
    --wheel-fade-background-rgb: 245, 235, 247;
  }

  ion-datetime::part(wheel-item) {
    color: rgb(255, 66, 97);
  }

  ion-datetime::part(wheel-item active) {
    color: rgb(128, 30, 171);
  }
</style>
```
