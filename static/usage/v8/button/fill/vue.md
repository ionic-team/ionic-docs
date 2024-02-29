```html
<template>
  <ion-button>Default</ion-button>
  <ion-button fill="clear">Clear</ion-button>
  <ion-button fill="outline">Outline</ion-button>
  <ion-button fill="solid">Solid</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```
