```html
<template>
  <b>Stacked for xs breakpoint, equal width for sm and up</b>
  <ion-grid>
    <ion-row>
      <ion-col size="12" size-sm="3">1 of 4</ion-col>
      <ion-col size="12" size-sm="3">2 of 4</ion-col>
      <ion-col size="12" size-sm="3">3 of 4</ion-col>
      <ion-col size="12" size-sm="3">4 of 4</ion-col>
    </ion-row>
  </ion-grid>

  <b>Equal width until md breakpoint, last column takes full width for md and up</b>
  <ion-grid>
    <ion-row>
      <ion-col size-md="6">1 of 3</ion-col>
      <ion-col size-md="6">2 of 3</ion-col>
      <ion-col size-md="12">3 of 3</ion-col>
    </ion-row>
  </ion-grid>

  <b>2 per row until md breakpoint, 3 per row for md, equal width for lg and up</b>
  <ion-grid>
    <ion-row>
      <ion-col size="6" size-md="4" size-lg="2">1 of 6</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">2 of 6</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">3 of 6</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">4 of 6</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">5 of 6</ion-col>
      <ion-col size="6" size-md="4" size-lg="2">6 of 6</ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
  });
</script>
```
