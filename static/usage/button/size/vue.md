```html
<template>
  <ion-button size="small">Small</ion-button>
  <ion-button size="default">Default</ion-button>
  <ion-button size="large">Large</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```
