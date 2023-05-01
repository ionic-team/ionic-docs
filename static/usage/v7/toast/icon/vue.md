```html
<template>
  <ion-button id="open-toast">Open Toast</ion-button>
  <ion-toast trigger="open-toast" message="Hello World!" :duration="3000" :icon="globe"></ion-toast>
</template>

<script lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';
  import { globe } from 'ionicons/icons';

  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonToast },
    setup() {
      return { globe };
    },
  });
</script>
```
