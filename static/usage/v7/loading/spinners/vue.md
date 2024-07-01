```html
<template>
  <ion-button id="open-loading">Show Loading</ion-button>
  <ion-loading trigger="open-loading" message="Loading..." duration="3000" spinner="circles"></ion-loading>
</template>

<script lang="ts" setup>
  import { IonButton, IonLoading } from '@ionic/vue';
</script>
```
