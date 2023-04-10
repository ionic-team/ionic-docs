```html
<template>
  <ion-list lines="full">
    <ion-item>
      <ion-label>Full Lines</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Full Lines</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Full Lines</ion-label>
    </ion-item>
  </ion-list>

  <ion-list lines="inset">
    <ion-item>
      <ion-label>Inset Lines</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Inset Lines</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Inset Lines</ion-label>
    </ion-item>
  </ion-list>

  <ion-list lines="none">
    <ion-item>
      <ion-label>No Lines</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>No Lines</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>No Lines</ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList },
  });
</script>
```
