```html
<template>
  <ion-toggle :enable-on-off-labels="true" :checked-icon="moon" :unchecked-icon="sunny">Dark Mode</ion-toggle>
</template>

<script setup lang="ts">
  import { IonToggle } from '@ionic/vue';
  import { moon, sunny } from 'ionicons/icons';
</script>
```
