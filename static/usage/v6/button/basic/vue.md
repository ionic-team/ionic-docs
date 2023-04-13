```html
<template>
  <ion-button>Default</ion-button>
  <ion-button :disabled="true">Disabled</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```
