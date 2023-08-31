```html
<template>
  <ion-fab slot="fixed" vertical="top" horizontal="center">
    <ion-fab-button>
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
  import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { add } from 'ionicons/icons';

  export default defineComponent({
    components: {
      IonFab,
      IonFabButton,
      IonIcon,
    },
    setup() {
      return { add };
    },
  });
</script>

<style scoped>
  ion-fab {
    margin-top: var(--ion-safe-area-top, 0);
  }
</style>
```
