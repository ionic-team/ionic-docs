```html
<template>
  <ion-checkbox>Themed checkbox</ion-checkbox>
</template>

<script setup lang="ts">
  import { IonCheckbox } from '@ionic/vue';
</script>

<style>
  ion-checkbox {
    --size: 32px;
    --checkbox-background-checked: #6815ec;
  }

  ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #6815ec;
  }
</style>
```
