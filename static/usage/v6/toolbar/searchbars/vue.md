```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Toolbar</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
  import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonHeader, IonSearchbar, IonTitle, IonToolbar },
  });
</script>
```
