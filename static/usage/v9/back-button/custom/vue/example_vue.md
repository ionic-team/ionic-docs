```html
<template>
  <ion-nav :root="component"></ion-nav>
</template>

<script setup lang="ts">
  import { IonNav } from '@ionic/vue';
  import PageOne from './PageOne.vue';

  const component = PageOne;
</script>
```
