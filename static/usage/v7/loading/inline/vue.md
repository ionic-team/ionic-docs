```html
<template>
  <ion-button id="open-loading">Show Loading</ion-button>
  <ion-loading trigger="open-loading" :duration="3000" message="Dismissing after 3 seconds..."> </ion-loading>
</template>

<script lang="ts">
  import { IonButton, IonLoading } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: { IonButton, IonLoading },
  });
</script>
```
