```html
<template>
  <ion-searchbar></ion-searchbar>
  <ion-searchbar :search-icon="searchCircle" placeholder="Custom Search Icon"></ion-searchbar>
</template>

<script setup lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { searchCircle } from 'ionicons/icons';
</script>
```
