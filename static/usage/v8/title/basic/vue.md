```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Title</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
  import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonHeader, IonToolbar, IonTitle },
  });
</script>
```
