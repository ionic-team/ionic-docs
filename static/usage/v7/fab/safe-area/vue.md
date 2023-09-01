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

<style>
  :root {
    /**
   * Setting the variables for DEMO purposes only.
   * Values will be set automatically when building an iOS or Android app.
   */
    --ion-safe-area-top: 20px;
    --ion-safe-area-bottom: 20px;
  }
</style>

<style scoped>
  ion-fab {
    margin-top: var(--ion-safe-area-top, 0);
    margin-bottom: var(--ion-safe-area-bottom, 0);
  }
</style>
```
