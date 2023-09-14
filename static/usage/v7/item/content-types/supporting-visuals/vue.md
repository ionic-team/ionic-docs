```html
<template>
  <ion-list>
    <ion-item>
      <ion-icon aria-hidden="true" :icon="airplane" slot="start"></ion-icon>
      <ion-label>Airplane Mode</ion-label>
    </ion-item>
    <ion-item>
      <ion-icon aria-hidden="true" :icon="wifi" slot="start"></ion-icon>
      <ion-label>Wi-Fi</ion-label>
    </ion-item>
    <ion-item>
      <ion-icon aria-hidden="true" :icon="bluetooth" slot="start"></ion-icon>
      <ion-label>Bluetooth</ion-label>
    </ion-item>
    <ion-item>
      <ion-icon aria-hidden="true" :icon="call" slot="start"></ion-icon>
      <ion-label>Cellular</ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

  export default defineComponent({
    components: {
      IonItem,
      IonLabel,
      IonList,
      IonIcon,
    },
    setup() {
      return { airplane, bluetooth, call, wifi }
    }
  });
</script>
```
