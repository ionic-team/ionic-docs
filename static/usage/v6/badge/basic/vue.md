```html
<template>
  <ion-list>
    <ion-item>
      <ion-badge slot="start">11</ion-badge>
      <ion-label>Badge in start slot</ion-label>
    </ion-item>
    <ion-item>
      <ion-badge slot="end">22</ion-badge>
      <ion-label>Badge in end slot</ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBadge, IonItem, IonLabel, IonList },
  });
</script>
```
