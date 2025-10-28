```html
<template>
  <ion-fab>
    <ion-fab-button size="small">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="end">
      <ion-fab-button>
        <ion-icon :icon="document"></ion-icon>
      </ion-fab-button>
      <ion-fab-button>
        <ion-icon :icon="colorPalette"></ion-icon>
      </ion-fab-button>
      <ion-fab-button>
        <ion-icon :icon="globe"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</template>

<script setup lang="ts">
  import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/vue';
  import { add, colorPalette, document, globe } from 'ionicons/icons';
</script>
```
