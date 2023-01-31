```html
<template>
  <ion-range aria-label="Temperature">
    <ion-icon slot="start" :icon="snowOutline"></ion-icon>
    <ion-icon slot="end" :icon="sunnyOutline"></ion-icon>
  </ion-range>
</template>

<script lang="ts">
  import { IonRange, IonIcon } from '@ionic/vue';
  import { snowOutline, sunnyOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange, IonIcon },
    setup() {
      return {
        snowOutline,
        sunnyOutline,
      };
    },
  });
</script>
```
