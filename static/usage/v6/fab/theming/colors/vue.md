```html
<template>
  <ion-fab slot="fixed" horizontal="center" vertical="center">
    <ion-fab-button color="secondary">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button color="primary">
        <ion-icon :icon="chevronUp"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="end">
      <ion-fab-button color="tertiary">
        <ion-icon :icon="chevronForward"></ion-icon>
      </ion-fab-button>
      <ion-fab-button color="success">
        <ion-icon :icon="chevronForward"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="bottom">
      <ion-fab-button color="warning">
        <ion-icon :icon="chevronDown"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="start">
      <ion-fab-button color="danger">
        <ion-icon :icon="chevronBack"></ion-icon>
      </ion-fab-button>
      <ion-fab-button color="dark">
        <ion-icon :icon="chevronBack"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</template>

<script lang="ts">
  import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/vue';
  import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonFab, IonFabButton, IonFabList, IonIcon },
    setup() {
      return { add, chevronBack, chevronDown, chevronForward, chevronUp }
    }
  });
</script>
```
