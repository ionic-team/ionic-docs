```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Toolbar</ion-title>
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
  import { IonHeader, IonProgressBar, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonHeader, IonProgressBar, IonTitle, IonToolbar },
  });
</script>
```
