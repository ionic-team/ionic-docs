```html
<template>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col offset="3">2 (offset="3")</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col>2</ion-col>
      <ion-col>3</ion-col>
      <ion-col>4</ion-col>
      <ion-col offset="2">5 (offset="2")</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col size="2" offset="4">1 (offset="4")</ion-col>
      <ion-col size="2">2</ion-col>
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

<style scoped>
  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
