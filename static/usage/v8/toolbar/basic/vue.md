```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header Toolbar</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer Toolbar</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
  import { IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonFooter, IonHeader, IonTitle, IonToolbar },
  });
</script>
```
