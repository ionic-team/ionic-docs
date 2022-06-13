```html
<template>
  <ion-content>
    <ion-range :ticks="true" :snaps="true" :min="0" :max="10"></ion-range>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonRange },
  });
</script>
```
