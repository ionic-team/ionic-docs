```html
<template>
  <ion-datetime locale="es-ES">
    <span slot="time-label">Tiempo</span>
  </ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
</script>
```
