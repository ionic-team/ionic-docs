```html
<template>
  <ion-toolbar>
    <ion-title>Custom Toolbar</ion-title>
  </ion-toolbar>
</template>

<script setup lang="ts">
  import { IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
  ion-toolbar {
    --background: #19422d;
    --color: white;

    --border-color: #f24aec;
    --border-width: 4px 0;
    --border-style: double;

    --min-height: 80px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }
</style>
```
