```html
<template>
  <ion-item>
    <ion-label>
      Default Item Lines
    </ion-label>
  </ion-item>

  <ion-item lines="inset">
    <ion-label>Item Lines Inset</ion-label>
  </ion-item>

  <ion-item lines="full">
    <ion-label>Item Lines Full</ion-label>
  </ion-item>

  <ion-item lines="none">
    <ion-label>Item Lines None</ion-label>
  </ion-item>

  <ion-item>
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>Default Item Lines</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="inset">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>Item Lines Inset</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="full">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>Item Lines Full</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item lines="none">
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>Item Lines None</ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>
</template>

<script lang="ts">
  import { IonIcon, IonItem, IonLabel } from '@ionic/vue';
  import { informationCircle, star } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonItem, IonLabel },
    setup() {
      return { informationCircle, star };
    }
  });
</script>
```
