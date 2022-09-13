```html
<template>
  <ion-toolbar color="light" class="md-hide">
    <ion-title>
      Searchbar
    </ion-title>
  </ion-toolbar>
  <ion-toolbar color="light">
    <ion-searchbar></ion-searchbar>
  </ion-toolbar>
</template>

<script lang="ts">
  import { IonSearchbar, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSearchbar, IonTitle, IonToolbar },
  });
</script>

<style scoped>
  .md.md-hide {
    display: none;
  }
</style>
```
