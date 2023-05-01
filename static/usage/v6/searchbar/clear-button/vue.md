```html
<template>
  <ion-searchbar show-clear-button="focus" value="Show on Focus"></ion-searchbar>
  <ion-searchbar show-clear-button="always" value="Always Show"></ion-searchbar>
  <ion-searchbar show-clear-button="never" value="Never Show"></ion-searchbar>
  <ion-searchbar show-clear-button="always" :clear-icon="trashBin" value="Custom Clear Icon"></ion-searchbar>
</template>

<script lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { trashBin } from 'ionicons/icons';

  export default defineComponent({
    components: { IonSearchbar },
    setup() {
      return { trashBin };
    }
  });
</script>
```
