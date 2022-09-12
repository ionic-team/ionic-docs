```html
<template>
  <ion-searchbar show-cancel-button="always" placeholder="Always Show"></ion-searchbar>
  <ion-searchbar show-cancel-button="never" placeholder="Never Show"></ion-searchbar>
  <ion-searchbar show-cancel-button="focus" placeholder="Show on Focus"></ion-searchbar>
  <ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel" placeholder="Show on Focus"></ion-searchbar>
</template>

<script lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSearchbar },
  });
</script>
```
