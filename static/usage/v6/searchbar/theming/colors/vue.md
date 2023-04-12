```html
<template>
  <ion-searchbar placeholder="Default"></ion-searchbar>
  <ion-searchbar color="primary" placeholder="Primary"></ion-searchbar>
  <ion-searchbar color="secondary" placeholder="Secondary"></ion-searchbar>
  <ion-searchbar color="tertiary" placeholder="Tertiary"></ion-searchbar>
  <ion-searchbar color="success" placeholder="Success"></ion-searchbar>
  <ion-searchbar color="warning" placeholder="Warning"></ion-searchbar>
  <ion-searchbar color="danger" placeholder="Danger"></ion-searchbar>
  <ion-searchbar color="light" placeholder="Light"></ion-searchbar>
  <ion-searchbar color="medium" placeholder="Medium"></ion-searchbar>
  <ion-searchbar color="dark" placeholder="Dark"></ion-searchbar>
</template>

<script lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSearchbar },
  });
</script>
```
