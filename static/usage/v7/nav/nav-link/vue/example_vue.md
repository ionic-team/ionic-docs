```html
<template>
  <ion-nav :root="component"></ion-nav>
</template>

<script setup lang="ts">
  import { markRaw } from 'vue';
  import { IonNav } from '@ionic/vue';
  import PageOne from './PageOne.vue';

  const component = markRaw(PageOne);
</script>
```
