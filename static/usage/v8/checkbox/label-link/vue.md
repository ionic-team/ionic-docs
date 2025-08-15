```html
<template>
  <ion-checkbox>I agree to the <a href="#" @click="$event.stopPropagation()">terms and conditions</a></ion-checkbox>
</template>

<script setup lang="ts">
  import { IonCheckbox } from '@ionic/vue';
</script>
```
