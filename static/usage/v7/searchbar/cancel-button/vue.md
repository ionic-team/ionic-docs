```html
<template>
  <ion-searchbar show-cancel-button="focus" placeholder="Show on Focus"></ion-searchbar>
  <ion-searchbar show-cancel-button="always" placeholder="Always Show"></ion-searchbar>
  <ion-searchbar show-cancel-button="never" placeholder="Never Show"></ion-searchbar>
  <ion-searchbar
    show-cancel-button="always"
    cancel-button-text="Custom Cancel"
    :cancel-button-icon="trash"
    placeholder="Custom Cancel Button"
  ></ion-searchbar>
</template>

<script lang="ts" setup>
  import { IonSearchbar } from '@ionic/vue';
  import { trash } from 'ionicons/icons';
</script>
```
