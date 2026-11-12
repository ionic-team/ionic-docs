```html
<template>
  <ion-content>
    <ion-fab slot="fixed" vertical="top" horizontal="start">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="bottom">
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

    <ion-fab slot="fixed" vertical="top" horizontal="end">
      <ion-fab-button :animated="false">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="bottom">
        <ion-fab-button :animated="false">
          <ion-icon :icon="document"></ion-icon>
        </ion-fab-button>
        <ion-fab-button :animated="false">
          <ion-icon :icon="colorPalette"></ion-icon>
        </ion-fab-button>
        <ion-fab-button :animated="false">
          <ion-icon :icon="globe"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/vue';
  import { add, colorPalette, document, globe } from 'ionicons/icons';
</script>
```
