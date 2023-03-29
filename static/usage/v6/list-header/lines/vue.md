```html
<template>
  <ion-list>
    <ion-list-header>
      <ion-label>Default</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
  </ion-list>

  <ion-list>
    <ion-list-header lines="inset">
      <ion-label>Inset</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
  </ion-list>

  <ion-list>
    <ion-list-header lines="full">
      <ion-label>Full</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Item</ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonListHeader },
  });
</script>
```
