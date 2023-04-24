```html
<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button>Button</ion-button>
    </ion-buttons>
    <ion-title>Default Buttons</ion-title>
  </ion-toolbar>
</template>

<script lang="ts">
  import { IonButton, IonButtons, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonButtons, IonTitle, IonToolbar },
  });
</script>
```
