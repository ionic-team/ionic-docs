```html
<template>
  <ion-chip>Default</ion-chip>
  <ion-chip :disabled="true">Disabled</ion-chip>
  <ion-chip :outline="true">Outline</ion-chip>
</template>

<script lang="ts">
  import { IonChip } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonChip },
  });
</script>
```
