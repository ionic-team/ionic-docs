```html
<template>
  <ion-grid>
    <ion-row>
      <ion-col push="4">1 (push="4")</ion-col>
      <ion-col pull="4">2 (pull="4")</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col push="4">2 (push="4")</ion-col>
      <ion-col pull="2">3 (pull="2")</ion-col>
      <ion-col pull="2">4 (pull="2")</ion-col>
      <ion-col>5</ion-col>
      <ion-col>6</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col size="9" push="3">1</ion-col>
      <ion-col size="3" pull="9">2</ion-col>
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
