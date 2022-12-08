```html
<template>
  <ion-content>
    <ion-button id="open-loading">Show Loading</ion-button>
    <ion-loading trigger="open-loading" :duration="3000" message="Dismissing after 3 seconds..."> </ion-loading>
  </ion-content>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonLoading } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: { IonButton, IonContent, IonLoading },
  });
</script>
```
