```html
<template>
  <ion-searchbar></ion-searchbar>
  <ion-searchbar placeholder="Custom Placeholder"></ion-searchbar>
  <ion-searchbar disabled="true" placeholder="Disabled"></ion-searchbar>
  <ion-searchbar value="Value"></ion-searchbar>
  <ion-searchbar animated="true" placeholder="Animated"></ion-searchbar>
</template>

<script lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSearchbar },
  });
</script>
```
